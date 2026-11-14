(() => {
  const stage = document.querySelector("[data-portrait-stage]");
  const disc = document.querySelector("[data-draggable-portrait]");
  const svg = stage?.querySelector(".journey-map");
  const hud = stage?.querySelector("[data-journey-hud]");
  const dateElement = stage?.querySelector("[data-journey-date]");
  const placeElement = stage?.querySelector("[data-journey-place]");
  const toggle = stage?.querySelector("[data-journey-toggle]");
  const trails = svg ? [...svg.querySelectorAll(".jm-trail")] : [];
  const wheel = document.querySelector("[data-career-wheel]");
  const wheelViewport = wheel?.querySelector(".career-wheel__viewport");
  const wheelList = wheel?.querySelector("[data-wheel-list]");
  const wheelName = wheel?.querySelector("[data-wheel-name]");
  const wheelRole = wheel?.querySelector("[data-wheel-role]");
  const wheelItems = wheelList ? [...wheelList.children] : [];
  if (!stage || !disc || !svg || !hud || trails.length !== 4) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) {
    stage.classList.add("journey-static");
    wheel?.classList.add("is-static");
    return;
  }

  const desktopPortrait = window.matchMedia("(min-width: 901px)");
  const MONTHS = {
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
  };
  const monthIndex = (year, month) => year * 12 + (month - 1);
  const today = new Date();
  const currentMonth = today.getFullYear() * 12 + today.getMonth();

  // Map coordinates match the pins and routes drawn in the SVG.
  const STOPS = [
    {
      city: "Granada", point: [712.0, 281.1], from: null, to: null, hold: 1.4,
      place: { en: "Granada · where I’m from", es: "Granada · de donde vengo" }
    },
    {
      city: "Málaga", point: [696.2, 292.7], from: monthIndex(2018, 10), to: monthIndex(2022, 8), hold: 1.8,
      place: { en: "Málaga · Engineering at the University of Málaga", es: "Málaga · Ingeniería en la Universidad de Málaga" }
    },
    {
      city: "Ohio", point: [230.7, 107.7], from: monthIndex(2022, 8), to: monthIndex(2023, 6), hold: 1.5,
      place: { en: "Ohio · Exchange at Miami University", es: "Ohio · Intercambio en Miami University" }
    },
    {
      city: "San Diego", point: [177.8, 307.5], from: monthIndex(2023, 6), to: monthIndex(2026, 3), hold: 3.3,
      place: { en: "San Diego · MSc at SDSU, iHeatApp and Premier", es: "San Diego · Máster en SDSU, iHeatApp y Premier" }
    },
    {
      city: "Madrid", point: [710.1, 199.5], from: monthIndex(2026, 3), to: currentMonth, hold: 2.6,
      place: { en: "Madrid · Celonis", es: "Madrid · Celonis" }
    }
  ];
  // Which logos in the wheel belong to each stop, and when they step in (seconds into the stay).
  const STOP_SLOTS = [[0], [1], [2], [3, 4, 5], [6]];
  const SLOT_STEPS = [[0], [0], [0], [0, 1.1, 2.2], [0]];
  const WHEEL_TRANSITION = 0.7;
  const SLOT_INFO = [
    { name: "Granada", role: { en: "Where it all started", es: "Donde empezó todo" } },
    { name: "Universidad de Málaga", role: { en: "BSc in Electronics, Robotics & Mechatronics Engineering", es: "Grado en Ingeniería Electrónica, Robótica y Mecatrónica" } },
    { name: "Miami University", role: { en: "Exchange year · College of Engineering and Computing", es: "Año de intercambio · Facultad de Ingeniería y Computación" } },
    { name: "San Diego State University", role: { en: "MSc in Big Data Analytics", es: "Máster en Big Data Analytics" } },
    { name: "SDSU Research Foundation", role: { en: "Research assistant at CICS · AI & Data Scientist on iHeatApp", es: "Asistente de investigación en CICS · Científico de datos e IA en iHeatApp" } },
    { name: "Premier Analytics Consulting", role: { en: "AI & Data Science Consultant", es: "Consultor de IA y ciencia de datos" } },
    { name: "Celonis", role: { en: "Applied Value Engineer", es: "Applied Value Engineer" } }
  ];
  const TRAVEL_SECONDS = [1.1, 2.2, 1.7, 2.4];
  const RESET_SECONDS = 0.8;
  const CITY_SCALE = 0.55;
  const TRAVEL_SCALE = 0.85;
  const GLIDE_SECONDS = 1;
  const IDLE_RESUME_MS = 7000;

  const legLengths = trails.map((trail) => trail.getTotalLength());
  const segments = [];
  let total = 0;
  STOPS.forEach((stop, index) => {
    segments.push({ kind: "hold", index, start: total, duration: stop.hold });
    total += stop.hold;
    if (index < STOPS.length - 1) {
      segments.push({ kind: "travel", index, start: total, duration: TRAVEL_SECONDS[index] });
      total += TRAVEL_SECONDS[index];
    }
  });
  segments.push({ kind: "reset", index: STOPS.length - 1, start: total, duration: RESET_SECONDS });
  total += RESET_SECONDS;

  const easeInOut = (value) => (value < 0.5 ? 4 * value ** 3 : 1 - ((-2 * value + 2) ** 3) / 2);
  const easeOut = (value) => 1 - (1 - value) ** 3;
  const mix = (from, to, amount) => from + (to - from) * amount;
  const language = () => (document.documentElement.lang === "es" ? "es" : "en");
  const formatMonth = (index) => {
    const month = ((Math.round(index) % 12) + 12) % 12;
    return `${MONTHS[language()][month]} ${Math.floor(Math.round(index) / 12)}`;
  };

  const lastSlotOf = (index) => STOP_SLOTS[index][STOP_SLOTS[index].length - 1];

  const wheelFor = (segment, seconds) => {
    if (segment.kind === "hold") {
      const slots = STOP_SLOTS[segment.index];
      const steps = SLOT_STEPS[segment.index];
      let step = 0;
      steps.forEach((startAt, position) => {
        if (seconds >= startAt) step = position;
      });
      const previous = step > 0 ? slots[step - 1] : segment.index > 0 ? lastSlotOf(segment.index - 1) : 0;
      const amount = easeInOut(Math.min(1, (seconds - steps[step]) / WHEEL_TRANSITION));
      return mix(previous, slots[step], amount);
    }
    if (segment.kind === "travel") return lastSlotOf(segment.index);
    return seconds / segment.duration < 0.5 ? lastSlotOf(STOPS.length - 1) : 0;
  };

  const pointAt = (leg, progress) => {
    const point = trails[leg].getPointAtLength(legLengths[leg] * progress);
    return [point.x, point.y];
  };

  const poseAt = (time) => {
    const segment = segments.find((item) => time < item.start + item.duration) || segments[segments.length - 1];
    const local = Math.min(1, Math.max(0, (time - segment.start) / segment.duration));
    const pose = { x: 0, y: 0, scale: CITY_SCALE, opacity: 1, trailOpacity: 1, completed: 0, progress: 0, date: "", place: "", wheel: 0, wheelOpacity: 1 };
    const stop = STOPS[segment.index];
    pose.wheel = wheelFor(segment, local * segment.duration);

    if (segment.kind === "hold") {
      [pose.x, pose.y] = stop.point;
      pose.completed = segment.index;
      if (stop.from !== null) {
        pose.date = formatMonth(mix(stop.from, stop.to, easeOut(Math.min(1, local / 0.85))));
      }
      pose.place = stop.place[language()];
    } else if (segment.kind === "travel") {
      const eased = easeInOut(local);
      [pose.x, pose.y] = pointAt(segment.index, eased);
      pose.scale = mix(CITY_SCALE, TRAVEL_SCALE, Math.sin(Math.PI * local));
      pose.completed = segment.index;
      pose.progress = eased;
      pose.date = stop.to !== null ? formatMonth(stop.to) : "";
      pose.place = `${stop.city} → ${STOPS[segment.index + 1].city}`;
    } else {
      pose.completed = STOPS.length - 1;
      pose.progress = 1;
      const fadingOut = local < 0.5;
      const target = fadingOut ? STOPS[STOPS.length - 1] : STOPS[0];
      [pose.x, pose.y] = target.point;
      pose.opacity = fadingOut ? 1 - local * 2 : local * 2 - 1;
      pose.trailOpacity = pose.opacity;
      if (fadingOut) {
        pose.date = formatMonth(target.to);
      }
      pose.place = target.place[language()];
      pose.wheelOpacity = pose.opacity;
      if (!fadingOut) pose.completed = -1;
    }
    return pose;
  };

  let current = { x: STOPS[0].point[0], y: STOPS[0].point[1], scale: CITY_SCALE, opacity: 1 };
  let lastCity = -1;
  let lastDate = null;
  let lastPlace = null;
  let lastLanguage = null;

  let slotHeight = wheelItems[0]?.offsetHeight || 100;
  let lastSlot = -1;
  const measureWheel = () => {
    slotHeight = wheelItems[0]?.offsetHeight || slotHeight;
  };

  const applyWheel = (position, opacity) => {
    if (!wheelList) return;
    wheelList.style.setProperty("--wheel-shift", `${(slotHeight * (1 - position)).toFixed(1)}px`);
    wheelViewport.style.setProperty("--wheel-opacity", opacity.toFixed(3));
    wheelItems.forEach((item, index) => {
      const distance = Math.min(1, Math.abs(index - position));
      item.style.opacity = (1 - 0.68 * distance).toFixed(3);
      item.style.transform = `scale(${(1 - 0.2 * distance).toFixed(3)})`;
      item.style.transformOrigin = "left center";
    });
    const slot = Math.round(position);
    if (slot !== lastSlot || lastLanguage !== wheelLanguage) {
      lastSlot = slot;
      wheelLanguage = lastLanguage;
      wheelName.textContent = SLOT_INFO[slot].name;
      wheelRole.textContent = SLOT_INFO[slot].role[language()];
    }
  };

  let wheelLanguage = null;

  const applyPose = (pose, withHud = true) => {
    const matrix = svg.getScreenCTM();
    if (!matrix) return;
    const stageBox = stage.getBoundingClientRect();
    const mapPoint = svg.createSVGPoint();
    mapPoint.x = pose.x;
    mapPoint.y = pose.y;
    const screenPoint = mapPoint.matrixTransform(matrix);
    const base = disc.offsetWidth;
    const offsetX = screenPoint.x - (stageBox.left + stageBox.width / 2);
    const offsetY = screenPoint.y - (stageBox.top + stageBox.height / 2) - (base * pose.scale) / 2 - 8;

    disc.style.setProperty("--journey-x", `${offsetX.toFixed(1)}px`);
    disc.style.setProperty("--journey-y", `${offsetY.toFixed(1)}px`);
    disc.style.setProperty("--journey-scale", pose.scale.toFixed(3));
    disc.style.setProperty("--journey-opacity", pose.opacity.toFixed(3));
    current = { x: offsetX, y: offsetY, scale: pose.scale, opacity: pose.opacity };

    if (!withHud) return;

    applyWheel(pose.wheel ?? 0, pose.wheelOpacity ?? 1);

    svg.style.setProperty("--trail-opacity", (pose.trailOpacity ?? 1).toFixed(3));
    trails.forEach((trail, index) => {
      let drawn = 0;
      if (pose.completed < 0) drawn = 0;
      else if (index < pose.completed) drawn = 1;
      else if (index === pose.completed) drawn = pose.progress;
      trail.style.strokeDasharray = `${legLengths[index]}`;
      trail.style.strokeDashoffset = `${legLengths[index] * (1 - drawn)}`;
    });

    if (pose.date !== lastDate) {
      dateElement.textContent = pose.date;
      lastDate = pose.date;
    }
    if (pose.place !== lastPlace) {
      placeElement.textContent = pose.place;
      lastPlace = pose.place;
    }
  };

  const pulseAt = (index) => {
    const [x, y] = STOPS[index].point;
    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    ring.setAttribute("class", "jm-pulse");
    ring.setAttribute("cx", x);
    ring.setAttribute("cy", y);
    ring.setAttribute("r", 4);
    svg.append(ring);
    ring.addEventListener("animationend", () => ring.remove());
  };

  const updateToggleLabel = () => {
    const paused = toggle.getAttribute("aria-pressed") === "true";
    const labels = {
      en: paused ? "Play the journey animation" : "Pause the journey animation",
      es: paused ? "Reanudar la animación del recorrido" : "Pausar la animación del recorrido"
    };
    toggle.setAttribute("aria-label", labels[language()]);
  };

  let time = 0;
  let lastTimestamp = 0;
  let frameId = 0;
  let running = false;
  let visible = false;
  let userPaused = false;
  let held = false;
  let glide = null;
  let idleTimer = 0;

  const draw = () => {
    if (lastLanguage !== language()) {
      lastLanguage = language();
      lastDate = null;
      lastPlace = null;
      updateToggleLabel();
    }
    const pose = poseAt(time);
    const segment = segments.find((item) => time < item.start + item.duration) || segments[segments.length - 1];
    const cityKey = segment.kind === "hold" ? segment.index : -1;
    if (cityKey !== lastCity) {
      if (cityKey >= 0 && running && cityKey > 0) pulseAt(cityKey);
      lastCity = cityKey;
    }
    applyPose(pose);
  };

  const frame = (timestamp) => {
    if (!running) return;
    const delta = lastTimestamp ? Math.min(0.1, (timestamp - lastTimestamp) / 1000) : 0;
    lastTimestamp = timestamp;

    if (glide) {
      glide.elapsed += delta;
      const amount = easeInOut(Math.min(1, glide.elapsed / GLIDE_SECONDS));
      const start = poseAt(0);
      applyPose({
        x: start.x, y: start.y, scale: start.scale, opacity: 1, trailOpacity: 0, completed: -1, progress: 0,
        date: "", place: start.place, wheel: 0, wheelOpacity: 1
      }, true);
      const matrixPose = current;
      disc.style.setProperty("--journey-x", `${mix(glide.from.x, matrixPose.x, amount).toFixed(1)}px`);
      disc.style.setProperty("--journey-y", `${mix(glide.from.y, matrixPose.y, amount).toFixed(1)}px`);
      disc.style.setProperty("--journey-scale", mix(glide.from.scale, matrixPose.scale, amount).toFixed(3));
      if (glide.elapsed >= GLIDE_SECONDS) {
        glide = null;
        time = 0;
        lastCity = -1;
      }
    } else {
      time = (time + delta) % total;
      draw();
    }
    frameId = requestAnimationFrame(frame);
  };

  const play = () => {
    if (running || !visible || userPaused || held || document.hidden) return;
    running = true;
    lastTimestamp = 0;
    frameId = requestAnimationFrame(frame);
  };

  const pause = () => {
    running = false;
    cancelAnimationFrame(frameId);
  };

  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) play();
    else pause();
  }, { threshold: 0.25 }).observe(stage);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pause();
    else play();
  });

  window.addEventListener("resize", () => {
    measureWheel();
    if (!running && !held && !glide) draw();
  });

  toggle.addEventListener("click", () => {
    userPaused = !userPaused;
    toggle.setAttribute("aria-pressed", String(userPaused));
    updateToggleLabel();
    if (userPaused) pause();
    else play();
  });

  // Hand the portrait over to the drag physics, then resume the journey after a while.
  disc.addEventListener("pointerdown", () => {
    if (!desktopPortrait.matches || !window.portraitControl) return;
    clearTimeout(idleTimer);
    held = true;
    glide = null;
    pause();
    window.portraitControl.setOffset(current.x, current.y);
    disc.style.setProperty("--journey-x", "0px");
    disc.style.setProperty("--journey-y", "0px");
    disc.style.setProperty("--journey-scale", "1");
    disc.style.setProperty("--journey-opacity", "1");
  }, { capture: true });

  const scheduleResume = () => {
    if (!held) return;
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      const offset = window.portraitControl.getOffset();
      window.portraitControl.setOffset(0, 0);
      glide = { elapsed: 0, from: { x: offset.x, y: offset.y, scale: 1 } };
      held = false;
      lastCity = -1;
      play();
    }, IDLE_RESUME_MS);
  };
  document.addEventListener("pointerup", scheduleResume);
  document.addEventListener("pointercancel", scheduleResume);

  window.mabravoJourney = {
    total,
    seek(seconds) {
      time = Math.max(0, Math.min(total - 0.001, seconds));
      draw();
    }
  };

  draw();
})();
