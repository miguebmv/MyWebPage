const translations = {
  es: {
    skip: "Saltar al contenido",
    location: "Madrid, España",
    role: "Ingeniero de datos e IA",
    intro: "Construyo sistemas útiles donde se encuentran los datos, el machine learning y el software.",
    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    navWork: "Trabajo",
    navArchive: "Archivo",
    navContact: "Contacto",
    resume: "CV 2026 ↗",
    opening: "Mi trabajo empieza con datos reales y desordenados y termina en algo que las personas pueden entender, utilizar y en lo que pueden confiar.",
    focusLabel: "En qué trabajo",
    focus: "Inteligencia de procesos, IA aplicada y valor empresarial medible en Celonis.",
    explore: "Explorar el trabajo",
    aboutLabel: "Sobre mí",
    aboutOne: "Soy ingeniero de datos e IA, de Granada y ahora afincado en Madrid. Trabajo en todo el recorrido: desde los datos en bruto y los modelos hasta las APIs, interfaces y el despliegue.",
    aboutTwo: "La robótica me enseñó a pensar en sistemas. La investigación en informática climática, a construirlos con rigor. Y la consultoría mantiene el resultado conectado con lo que las personas y las organizaciones necesitan de verdad.",
    portraitCaption: "Ingeniero, investigador y creador compulsivo.",
    experienceLabel: "Experiencia",
    dateCelonis: "Mar 2026 — actualidad",
    celonisRole: "Applied Value Engineer",
    celonisCopy: "Analizo procesos empresariales, cuantifico su valor operativo y diseño prototipos con agentes de IA y automatizaciones sobre la plataforma de inteligencia de procesos de Celonis.",
    datePremier: "May 2025 — feb 2026",
    premierRole: "Consultor de IA y ciencia de datos",
    premierCopy: "Construyo pipelines de datos en producción, backends con FastAPI, sistemas de IA en contenedores y asistentes multilingües para entornos cloud y on-premise.",
    dateIheat: "Jun 2024 — nov 2025",
    iheatRole: "Científico de datos e IA junior",
    iheatCopy: "Desarrollé predicciones horarias de riesgo térmico, pipelines geoespaciales y un producto bilingüe asistido por IA para comunidades de Imperial Valley, California.",
    dateCics: "Ago 2023 — may 2024",
    cicsRole: "Asistente de investigación en ciencia de datos",
    cicsCopy: "Creé flujos reproducibles en R para limpiar y analizar datos espaciotemporales de nutrientes de cuencas agrícolas irlandesas.",
    resumeDocument: "Currículum",
    resumeUpdated: "Actualizado en mayo de 2026 · PDF · 1 página",
    fullResume: "Ver el CV completo",
    workLabel: "Trabajo destacado",
    workNote: "Cuatro proyectos que representan especialmente bien cómo pienso y construyo.",
    projectHeat: "Una plataforma bilingüe que convierte predicciones horarias en mapas locales de riesgo térmico y orientación contextual.",
    projectCloudya: "Datos climáticos de NOAA en tiempo real, mapas interactivos y un asistente visual servidos desde una Raspberry Pi.",
    flightTitle: "Predicción de retrasos de vuelos",
    projectFlight: "Tres millones de vuelos, contexto meteorológico y una comparación honesta de siete familias de modelos.",
    trafficTitle: "Tendencias de tráfico de California",
    projectTraffic: "Diez años de tráfico, población e ingresos combinados en una única historia analítica geoespacial.",
    archiveLabel: "Archivo de proyectos",
    archiveNote: "Ocho proyectos más completan el recorrido, desde modelado aplicado hasta los primeros experimentos interactivos.",
    year: "Año",
    project: "Proyecto",
    madeWith: "Tecnologías",
    flightPlain: "Predicción de retrasos de vuelos",
    trafficPlain: "Tendencias de tráfico de California",
    diamond: "Modelado de precios de diamantes",
    diamondCopy: "Seis enfoques de regresión comparados sobre 53.940 diamantes y objetivos transformados.",
    pharmaCopy: "Diseño de bases de datos relacionales, despliegue en AWS y vistas analíticas para operaciones farmacéuticas.",
    walmart: "Predicción de ventas de Walmart",
    walmartCopy: "Predicción estacional de ventas semanales para una tienda mediante una comparación específica de modelos SARIMA.",
    mental: "Salud mental y tecnología",
    mentalCopy: "Un estudio multivariante donde la débil señal predictiva se convirtió en el resultado metodológico importante.",
    p5one: "Primeros pasos con p5.js",
    p5oneCopy: "Un pequeño juego interactivo para aprender el bucle de dibujo, los eventos y la lógica de colisiones.",
    p5two: "Mapa interactivo del campus",
    p5twoCopy: "Un mapa ampliable y con búsqueda que ofrece información e imágenes de cada edificio.",
    p5three: "Geovisualización de noticias",
    p5threeCopy: "Búsqueda de noticias recientes, resultados geocodificados y el contexto geográfico de cada historia.",
    p5four: "Explorador de tendencias delictivas de EE. UU.",
    p5fourCopy: "Vistas multivariantes y multitemporales de tasas estatales y centroides geográficos móviles.",
    beyondCode: "Más allá del código",
    speakingEyebrow: "Charlas y publicaciones",
    speakingTitle: "Explicar modelos, código abierto y mejores formas de trabajar con datos.",
    contactLabel: "Contacto",
    contactTitle: "Contacto y perfiles",
    contactBased: "Ubicación",
    contactCity: "Madrid, España",
    contactEmail: "Correo",
    contactResume: "Currículum",
    contactResumeValue: "Actualizado en mayo de 2026 · PDF",
    resumePreviewEyebrow: "Currículum · PDF",
    resumePreviewNote: "Una página · Actualizado en mayo de 2026",
    resumeOpen: "Abrir PDF",
    resumeDownload: "Descargar",
    resumeFallback: "Este navegador no puede mostrar el currículum embebido.",
    backTop: "Volver arriba"
  }
};

const defaultCopy = new Map(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [
    element.dataset.i18n,
    element.innerHTML
  ])
);

const languageButton = document.querySelector("[data-language-toggle]");
const languageCurrent = document.querySelector(".language-current");
const themeButton = document.querySelector("[data-theme-toggle]");
const metaTheme = document.querySelector('meta[name="theme-color"]');
const resumeDialog = document.querySelector("[data-resume-dialog]");
const resumeClose = document.querySelector("[data-resume-close]");
const resumePreviewLinks = document.querySelectorAll("[data-resume-preview]");
const compactResumeViewer = window.matchMedia("(max-width: 700px)");

function applyLanguage(language) {
  const nextLanguage = language === "es" ? "es" : "en";
  document.documentElement.lang = nextLanguage;
  document.title = nextLanguage === "es"
    ? "Miguel Bravo — Ingeniero de datos e IA"
    : "Miguel Bravo — AI & Data Engineer";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = nextLanguage === "es" && translations.es[key]
      ? translations.es[key]
      : defaultCopy.get(key);
  });

  languageCurrent.textContent = nextLanguage === "es" ? "EN" : "ES";
  languageButton.setAttribute(
    "aria-label",
    nextLanguage === "es" ? "View in English" : "Cambiar a español"
  );
  document.querySelector("[data-resume-callout]")?.setAttribute(
    "aria-label",
    nextLanguage === "es"
      ? "Abrir el currículum completo de Miguel Bravo en PDF"
      : "View Miguel Bravo's full résumé PDF"
  );
  resumeClose?.setAttribute(
    "aria-label",
    nextLanguage === "es" ? "Cerrar vista del currículum" : "Close résumé preview"
  );
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  themeButton.setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Use light colour theme" : "Usar tema oscuro"
  );
  if (metaTheme) metaTheme.content = nextTheme === "dark" ? "#101722" : "#f4f2ed";
}

applyLanguage(document.documentElement.lang);
applyTheme(document.documentElement.dataset.theme);

languageButton.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
  applyLanguage(nextLanguage);
  localStorage.setItem("mabravo-mockup-language", nextLanguage);
});

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("mabravo-mockup-theme", nextTheme);
});

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
systemTheme.addEventListener?.("change", (event) => {
  try {
    if (!localStorage.getItem("mabravo-mockup-theme")) {
      applyTheme(event.matches ? "dark" : "light");
    }
  } catch {
    applyTheme(event.matches ? "dark" : "light");
  }
});

resumePreviewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!resumeDialog || typeof resumeDialog.showModal !== "function" || compactResumeViewer.matches) {
      return;
    }
    event.preventDefault();
    resumeDialog.showModal();
    document.body.classList.add("resume-is-open");
    resumeClose?.focus();
  });
});

resumeClose?.addEventListener("click", () => resumeDialog?.close());
resumeDialog?.addEventListener("click", (event) => {
  if (event.target === resumeDialog) resumeDialog.close();
});
resumeDialog?.addEventListener("close", () => {
  document.body.classList.remove("resume-is-open");
});

const portraitStage = document.querySelector("[data-portrait-stage]");
const draggablePortrait = document.querySelector("[data-draggable-portrait]");
const desktopPortrait = window.matchMedia("(min-width: 901px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (portraitStage && draggablePortrait) {
  let drag = null;
  let animationFrame = 0;
  let lastFrameTime = 0;
  let bounds = { maxX: 0, maxY: 0 };
  const state = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    velocityX: 0,
    velocityY: 0,
    dragging: false
  };

  const getBounds = () => {
    const stageBox = portraitStage.getBoundingClientRect();
    const radius = draggablePortrait.offsetWidth / 2;
    return {
      maxX: Math.max(0, stageBox.width / 2 - radius - 18),
      maxY: Math.max(0, stageBox.height / 2 - radius - 18)
    };
  };

  const updateBounds = () => {
    bounds = getBounds();
  };

  const renderPortrait = () => {
    draggablePortrait.style.setProperty("--portrait-x", `${state.x}px`);
    draggablePortrait.style.setProperty("--portrait-y", `${state.y}px`);
  };

  const animatePortrait = (timestamp) => {
    animationFrame = 0;
    const deltaSeconds = lastFrameTime
      ? Math.min((timestamp - lastFrameTime) / 1000, 0.034)
      : 1 / 60;
    lastFrameTime = timestamp;

    if (state.dragging) {
      const stiffness = 120;
      const damping = 14;
      state.velocityX += (
        (state.targetX - state.x) * stiffness - state.velocityX * damping
      ) * deltaSeconds;
      state.velocityY += (
        (state.targetY - state.y) * stiffness - state.velocityY * damping
      ) * deltaSeconds;
    } else {
      const inertia = Math.exp(-0.42 * deltaSeconds);
      state.velocityX *= inertia;
      state.velocityY *= inertia;
    }

    state.x += state.velocityX * deltaSeconds;
    state.y += state.velocityY * deltaSeconds;

    if (Math.abs(state.x) > bounds.maxX) {
      state.x = Math.sign(state.x) * bounds.maxX;
      state.velocityX = state.dragging ? 0 : -state.velocityX * 0.9;
    }
    if (Math.abs(state.y) > bounds.maxY) {
      state.y = Math.sign(state.y) * bounds.maxY;
      state.velocityY = state.dragging ? 0 : -state.velocityY * 0.9;
    }

    renderPortrait();

    const speed = Math.hypot(state.velocityX, state.velocityY);
    if (state.dragging || speed > 2) {
      animationFrame = requestAnimationFrame(animatePortrait);
    } else {
      state.targetX = state.x;
      state.targetY = state.y;
      lastFrameTime = 0;
    }
  };

  const requestPortraitFrame = () => {
    if (!animationFrame) {
      lastFrameTime = 0;
      animationFrame = requestAnimationFrame(animatePortrait);
    }
  };

  const movePortrait = (event) => {
    if (!drag) return;
    const elapsed = event.timeStamp - drag.lastPointerTime;
    if (elapsed > 0 && elapsed < 120) {
      const instantVelocityX = ((event.clientX - drag.lastPointerX) / elapsed) * 1000;
      const instantVelocityY = ((event.clientY - drag.lastPointerY) / elapsed) * 1000;
      drag.pointerVelocityX = drag.pointerVelocityX * 0.35 + instantVelocityX * 0.65;
      drag.pointerVelocityY = drag.pointerVelocityY * 0.35 + instantVelocityY * 0.65;
    } else if (elapsed >= 120) {
      drag.pointerVelocityX = 0;
      drag.pointerVelocityY = 0;
    }
    drag.lastPointerX = event.clientX;
    drag.lastPointerY = event.clientY;
    drag.lastPointerTime = event.timeStamp;

    state.targetX = Math.max(
      -bounds.maxX,
      Math.min(bounds.maxX, drag.originX + event.clientX - drag.pointerX)
    );
    state.targetY = Math.max(
      -bounds.maxY,
      Math.min(bounds.maxY, drag.originY + event.clientY - drag.pointerY)
    );
    requestPortraitFrame();
  };

  draggablePortrait.addEventListener("pointerdown", (event) => {
    if (!desktopPortrait.matches || reducedMotion.matches) return;
    updateBounds();
    drag = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      startedAt: event.timeStamp,
      originX: state.x,
      originY: state.y,
      lastPointerX: event.clientX,
      lastPointerY: event.clientY,
      lastPointerTime: event.timeStamp,
      pointerVelocityX: 0,
      pointerVelocityY: 0
    };
    state.targetX = state.x;
    state.targetY = state.y;
    state.dragging = true;
    draggablePortrait.classList.add("is-dragging");
    draggablePortrait.setPointerCapture(event.pointerId);
    requestPortraitFrame();
  });

  draggablePortrait.addEventListener("pointermove", movePortrait);
  draggablePortrait.addEventListener("pointerup", (event) => {
    if (!drag) return;
    const releasedDrag = drag;
    const releaseAge = Math.max(0, event.timeStamp - releasedDrag.lastPointerTime);
    const retainedPointerVelocity = Math.exp(-releaseAge / 180);
    const clampVelocity = (velocity) => Math.max(-950, Math.min(950, velocity));
    const dragDistanceX = releasedDrag.lastPointerX - releasedDrag.pointerX;
    const dragDistanceY = releasedDrag.lastPointerY - releasedDrag.pointerY;
    const dragDistance = Math.hypot(dragDistanceX, dragDistanceY);
    const gestureDuration = Math.max(
      80,
      Math.min(450, event.timeStamp - releasedDrag.startedAt)
    );
    const averageVelocityX = (dragDistanceX / gestureDuration) * 1000;
    const averageVelocityY = (dragDistanceY / gestureDuration) * 1000;
    drag = null;
    state.dragging = false;
    state.targetX = state.x;
    state.targetY = state.y;
    state.velocityX = clampVelocity(
      state.velocityX * 0.15 +
      releasedDrag.pointerVelocityX * retainedPointerVelocity * 0.65 +
      averageVelocityX * 0.35
    );
    state.velocityY = clampVelocity(
      state.velocityY * 0.15 +
      releasedDrag.pointerVelocityY * retainedPointerVelocity * 0.65 +
      averageVelocityY * 0.35
    );
    const launchSpeed = Math.hypot(state.velocityX, state.velocityY);
    if (dragDistance > 22 && launchSpeed < 360) {
      state.velocityX = (dragDistanceX / dragDistance) * 360;
      state.velocityY = (dragDistanceY / dragDistance) * 360;
    }
    draggablePortrait.classList.remove("is-dragging");
    if (draggablePortrait.hasPointerCapture(event.pointerId)) {
      draggablePortrait.releasePointerCapture(event.pointerId);
    }
    requestPortraitFrame();
  });

  draggablePortrait.addEventListener("pointercancel", () => {
    drag = null;
    state.dragging = false;
    state.targetX = state.x;
    state.targetY = state.y;
    draggablePortrait.classList.remove("is-dragging");
    requestPortraitFrame();
  });

  window.addEventListener("resize", () => {
    updateBounds();
    state.x = Math.max(-bounds.maxX, Math.min(bounds.maxX, state.x));
    state.y = Math.max(-bounds.maxY, Math.min(bounds.maxY, state.y));
    state.targetX = state.x;
    state.targetY = state.y;
    renderPortrait();
  });

  updateBounds();
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".section-nav a")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] });
  sections.forEach((section) => observer.observe(section));
}
