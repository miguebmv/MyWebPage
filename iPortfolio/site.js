const translations = {
  es: {
    skip: "Saltar al contenido",
    location: "Madrid, España",
    role: "Ingeniero de datos e IA",
    intro: "Me gusta construir cosas útiles donde se juntan los datos, el machine learning y el software.",
    navAbout: "Sobre mí",
    navExperience: "Experiencia",
    navPublications: "Publicaciones",
    navWork: "Proyectos destacados",
    navContact: "Contacto",
    publishedLabel: "Publicado",
    publishedNote: "Dos artículos en revistas de Elsevier, con revisión por pares, sobre sistemas de IA para medir el riesgo por calor.",
    hw1Label: "Comunicación con directivos",
    hw1Copy: "Explico soluciones técnicas y casos de valor a la alta dirección (C-level).",
    hw2Label: "De cara al cliente",
    hw2Copy: "Trabajo codo con codo con grandes clientes para convertir datos de procesos en resultados medibles.",
    hw3Label: "Ponente",
    hw3Copy: "Charlas y papers en WUSS, MWSUG y el RVAtech Data + AI Summit.",
    pubStatus: "Publicado",
    publishedIn: "Publicado en",
    celonisB1: "Diagnostico ineficiencias operativas en los procesos end-to-end de grandes empresas a partir de sus datos de proceso y cuantifico su impacto económico en valor medible y ROI.",
    celonisB2: "Diseño y prototipo agentes de IA y automatizaciones orquestadas sobre la capa de inteligencia de procesos y de contexto de Celonis, en áreas como la cadena de suministro.",
    celonisB3: "Presento soluciones y casos de valor directamente a clientes y a la alta dirección, traduciendo conceptos complejos de IA y datos a resultados de negocio claros.",
    premierB1: "Diseñé pipelines de datos y backends con FastAPI para automatizar la ingesta y la transformación de grandes datasets de investigación y medioambientales, entre AWS S3 y servidores on-premise.",
    premierB2: "Construí y desplegué sistemas de IA en contenedores con Docker y Ubuntu, ganando en reproducibilidad y en eficiencia de despliegue.",
    premierB3: "Desarrollé un asistente multilingüe en local para resumir, traducir y buscar en documentos con LLMs open source (Mistral-7B, LLaMA 3), optimizando la latencia y la precisión entre idiomas.",
    premierB4: "Participé en la entrega del producto de principio a fin, integrando componentes de ML con frontends en React y APIs REST.",
    iheatB1: "Construí un producto bilingüe con IA para comunidades agrícolas que mapea el riesgo por calor (WBGT) en tiempo real y da recomendaciones de seguridad con un chatbot propio basado en LLM.",
    iheatB2: "Construí y validé pipelines de predicción horaria con datos de NOAA NBM (Herbie/xarray), con su visualización geoespacial para Imperial Valley.",
    iheatB3: "Primer autor del artículo sobre la arquitectura y el marco de modelado (IJDRR, Elsevier) y coautor de un segundo artículo sobre el chatbot de IA (Climate Services).",
    cicsB1: "Apliqué estadística multivariante y análisis de series temporales a la dinámica de nutrientes y la eutrofización en cuencas agrícolas de Irlanda.",
    cicsB2: "Desarrollé pipelines automáticos en R para limpiar, interpolar y marcar la calidad de los datos, mejorando la reproducibilidad.",
    cicsB3: "Colaboré en el modelado predictivo de las tendencias de nutrientes con regresión y clustering espaciotemporal.",
    mImpact: "Factor de impacto",
    mCited: "Citas",
    mNew: "Nuevo",
    pubNote: "Métricas de las revistas según ScienceDirect (noviembre de 2026). Las citas se actualizan en directo desde OpenAlex.",
    publicationsLabel: "Publicaciones",
    pubOneCopy: "Artículo del que soy primer autor, sobre la arquitectura y el modelo que hay detrás de iHeatApp, la plataforma bilingüe de riesgo por calor para comunidades agrícolas.",
    pubTwoCopy: "Artículo en el que soy coautor, sobre el chatbot visual con IA que comunica el riesgo por calor y ayuda a tomar decisiones en comunidades agrícolas vulnerables.",
    pubFirst: "Primer autor",
    pubSecond: "Segundo autor",
    pubPeer: "Revisión por pares",
    resume: "CV 2026 ↗︎",
    opening: "Mi trabajo empieza con <span class=\"hl\">datos reales y desordenados</span> y acaba en algo que la gente <span class=\"hl\">entiende, usa y en lo que confía.</span>",
    focusLabel: "Ahora mismo",
    focus: "En Celonis, ayudando a las empresas a sacar valor medible de sus procesos con IA.",
    explore: "Ver mi trabajo",
    aboutLabel: "Sobre mí",
    aboutOne: "Soy de Granada, vivo en Madrid y me dedico a los datos y a la IA. Me gusta moverme por todo el recorrido: de los datos en bruto y los modelos a las APIs, las interfaces y el despliegue.",
    aboutTwo: "La robótica me enseñó a pensar en sistemas. La investigación en informática climática, a construirlos con rigor. Y la consultoría me mantiene con los pies en la tierra: lo que hago tiene que servirle de verdad a la gente y a las empresas.",
    portraitCaption: "Ingeniero, investigador y siempre montando algo.",
    experienceLabel: "Experiencia",
    dateCelonis: "Mar 2026 — actualidad",
    celonisRole: "Applied Value Engineer",
    datePremier: "May 2025 — feb 2026",
    premierRole: "Consultor de IA y ciencia de datos",
    dateIheat: "Jun 2024 — feb 2026",
    iheatRole: "Científico de datos e IA",
    dateCics: "Ago 2023 — may 2024",
    cicsRole: "Asistente de investigación en ciencia de datos",
    resumeDocument: "CV",
    resumeUpdated: "Actualizado en noviembre de 2026 · PDF · 1 página",
    fullResume: "Ver el CV completo",
    workLabel: "Proyectos",
    workTitle: "Proyectos destacados",
    workNote: "Primero los tres que mejor me representan y luego otros nueve, más o menos por ese mismo orden.",
    projectHeat: "Una plataforma bilingüe que convierte previsiones horarias en mapas locales de riesgo por calor, con recomendaciones según el contexto.",
    projectCloudya: "Datos climáticos de NOAA en tiempo real, mapas interactivos y un asistente con visión, todo corriendo en una Raspberry Pi.",
    flightTitle: "Predicción de retrasos de vuelos",
    projectFlight: "Tres millones de vuelos, datos meteorológicos y una comparación honesta de siete familias de modelos.",
    trafficTitle: "Tendencias de tráfico de California",
    projectTraffic: "Diez años de tráfico, población e ingresos contados en una sola historia geoespacial.",
    archiveLabel: "Proyectos",
    archiveTitle: "Más proyectos",
    archiveNote: "Otros ocho proyectos completan el recorrido, del modelado aplicado a mis primeros experimentos interactivos.",
    year: "Año",
    project: "Proyecto",
    madeWith: "Tecnologías",
    flightPlain: "Predicción de retrasos de vuelos",
    trafficPlain: "Tendencias de tráfico de California",
    diamond: "Modelado de precios de diamantes",
    diamondCopy: "Seis enfoques de regresión comparados sobre 53.940 diamantes, con la variable objetivo transformada.",
    pharmaCopy: "Diseño de una base de datos relacional, despliegue en AWS y vistas analíticas para la operativa de una farmacia.",
    walmart: "Previsión de ventas de Walmart",
    walmartCopy: "Previsión de las ventas semanales de una tienda, con estacionalidad, comparando modelos SARIMA.",
    mental: "Salud mental y tecnología",
    mentalCopy: "Un estudio multivariante en el que la poca señal predictiva acabó siendo el resultado metodológico más importante.",
    p5one: "Primeros pasos con p5.js",
    p5oneCopy: "Un juego sencillo para aprender el bucle de dibujo, los eventos y las colisiones.",
    p5two: "Mapa interactivo del campus",
    p5twoCopy: "Un mapa del campus con zoom y buscador, con información y fotos de cada edificio.",
    p5three: "Geovisualización de noticias",
    p5threeCopy: "Busca noticias recientes, las geolocaliza y muestra dónde ocurre cada historia.",
    p5four: "Explorador de la delincuencia en EE. UU.",
    p5fourCopy: "Tasas de criminalidad por estado a lo largo del tiempo, con centroides geográficos que se mueven.",
    beyondCode: "Más allá del código",
    speakingEyebrow: "Charlas y publicaciones",
    speakingTitle: "Me gusta explicar modelos, open source y mejores formas de trabajar con datos.",
    contactLabel: "Contacto",
    contactTitle: "Contacto y perfiles",
    contactBased: "Vivo en",
    contactCity: "Madrid, España",
    contactEmail: "Email",
    contactResume: "CV",
    contactResumeValue: "Actualizado en noviembre de 2026 · PDF",
    resumePreviewEyebrow: "CV · PDF",
    resumePreviewNote: "Una página · Actualizado en noviembre de 2026",
    resumeOpen: "Abrir PDF",
    resumeDownload: "Descargar",
    resumeFallback: "Tu navegador no puede mostrar el CV aquí.",
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
      ? "Abrir el CV completo de Miguel Bravo en PDF"
      : "View Miguel Bravo's full résumé PDF"
  );
  resumeClose?.setAttribute(
    "aria-label",
    nextLanguage === "es" ? "Cerrar la vista previa del CV" : "Close résumé preview"
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
    if (!drag || event.pointerId !== drag.pointerId) return;
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
    if (
      drag ||
      !desktopPortrait.matches ||
      reducedMotion.matches ||
      (event.pointerType === "mouse" && event.button !== 0)
    ) return;
    event.preventDefault();
    updateBounds();
    drag = {
      pointerId: event.pointerId,
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

  const finishPortraitDrag = (event) => {
    if (!drag) return;
    const releasedDrag = drag;
    if (
      typeof event?.pointerId === "number" &&
      event.pointerId !== releasedDrag.pointerId
    ) return;
    const releaseTime = Number.isFinite(event?.timeStamp)
      ? event.timeStamp
      : performance.now();
    const releaseAge = Math.max(0, releaseTime - releasedDrag.lastPointerTime);
    const retainedPointerVelocity = Math.exp(-releaseAge / 180);
    const clampVelocity = (velocity) => Math.max(-950, Math.min(950, velocity));
    const dragDistanceX = releasedDrag.lastPointerX - releasedDrag.pointerX;
    const dragDistanceY = releasedDrag.lastPointerY - releasedDrag.pointerY;
    const dragDistance = Math.hypot(dragDistanceX, dragDistanceY);
    const gestureDuration = Math.max(
      80,
      Math.min(450, releaseTime - releasedDrag.startedAt)
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
    if (draggablePortrait.hasPointerCapture(releasedDrag.pointerId)) {
      draggablePortrait.releasePointerCapture(releasedDrag.pointerId);
    }
    requestPortraitFrame();
  };

  draggablePortrait.addEventListener("pointermove", movePortrait);
  document.addEventListener("pointerup", finishPortraitDrag);
  document.addEventListener("pointercancel", finishPortraitDrag);
  draggablePortrait.addEventListener("lostpointercapture", finishPortraitDrag);
  window.addEventListener("blur", finishPortraitDrag);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) finishPortraitDrag();
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

const CITATION_TTL = 6 * 60 * 60 * 1000;

async function fetchCitations(doi) {
  const key = `mabravo-citations-${doi}`;
  try {
    const cached = JSON.parse(sessionStorage.getItem(key) || "null");
    if (cached && Date.now() - cached.time < CITATION_TTL) return cached.count;
  } catch {}

  let count = null;
  try {
    const response = await fetch(`https://api.openalex.org/works/doi:${doi}?select=cited_by_count`);
    if (response.ok) count = (await response.json()).cited_by_count;
  } catch {}
  if (typeof count !== "number") {
    try {
      const response = await fetch(`https://api.crossref.org/works/${doi}`);
      if (response.ok) count = (await response.json()).message["is-referenced-by-count"];
    } catch {}
  }
  if (typeof count === "number") {
    try {
      sessionStorage.setItem(key, JSON.stringify({ time: Date.now(), count }));
    } catch {}
  }
  return count;
}

document.querySelectorAll("[data-citations]").forEach(async (element) => {
  const count = await fetchCitations(element.dataset.citations);
  if (typeof count !== "number" || count < 1) return;
  const value = element.querySelector("[data-cit-count]");
  value.textContent = count;
  value.hidden = false;
  element.querySelector("[data-cit-new]").hidden = true;
});
