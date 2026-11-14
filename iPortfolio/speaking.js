const translations = {
  es: {
    skip: "Saltar al contenido",
    backHome: "Portfolio",
    navTalks: "Charlas",
    navWriting: "Publicaciones",
    navContact: "Contacto",
    kicker: "Charlas y publicaciones",
    title: "Trabajo complejo, contado con la claridad suficiente para compartirlo.",
    lead: "Doy charlas y escribo sobre machine learning, flujos de trabajo open source, sistemas de IA y la ingeniería que hace falta para convertir un análisis en un producto útil.",
    talksLabel: "Charlas destacadas",
    wuss25Alt: "Ilustración de dos hojas de ruta (Charting Your AI Journey y Building Better Data Science Workflows) presentadas en WUSS 2025",
    wuss25Meta: "WUSS 2025 · Moderador de sección y copresentador",
    wuss25Title: "Dos hojas de ruta prácticas para la IA y los flujos de trabajo en ciencia de datos",
    wuss25Copy: "Copresenté «Charting Your AI Journey» y «Building Better Data Science Workflows», y fui moderador de sección en Masterpiece Theater y en los talleres prácticos.",
    conferenceRecord: "Ficha de la conferencia",
    rvaAlt: "Grafo de ramas de Git con datasets versionados, que ilustra la charla del RVAtech Data + AI Summit sobre Git, GitHub y DVC",
    rvaMeta: "RVAtech Data + AI Summit · Marzo de 2025",
    rvaTitle: "Mejores flujos de trabajo para ciencia de datos",
    rvaCopy: "Una sesión práctica sobre Git, GitHub y Data Version Control para desarrollar de forma reproducible y colaborativa, copresentada con Ryan Paul Lafler.",
    eventPage: "Página del evento",
    mwsugAlt: "Ejemplo de código de PROC PYTHON que ejecuta pandas dentro de SAS Viya, del paper de MWSUG 2024",
    mwsugMeta: "MWSUG 2024 · Coautor",
    mwsugTitle: "Mejora tus flujos de SAS Viya con Python",
    mwsugCopy: "Un paper y una presentación técnica sobre cómo PROC PYTHON conecta SAS Viya con las librerías open source de Python para preparar datos, modelar y visualizar.",
    readPaper: "Leer el paper",
    proceedings: "Actas",
    wuss24Alt: "Gráfico de barras que compara la puntuación F1 macro de los modelos de predicción de retrasos de vuelos, del paper de WUSS 2024",
    wuss24Meta: "WUSS 2024 · Estudiante becado y ponente",
    wuss24Title: "Análisis de retrasos y cancelaciones de vuelos",
    wuss24Copy: "Presenté una comparación de siete modelos sobre un dataset enorme de aviación y meteorología, con el efecto práctico que tiene el desequilibrio de clases al evaluar.",
    rvaNote: "No publico aquí las diapositivas de RVAtech porque su aviso de copyright no permite redistribuirlas. El evento y la charla están documentados en la página oficial.",
    writingLabel: "Artículos y papers",
    pubHeatMeta: "Revisión por pares · IJDRR 2026 · Primer autor",
    pubClimateMeta: "Revisión por pares · Climate Services 2026 · Coautor",
    pubHeat: "iHeatApp: una tecnología de visualización y entrega de datos climáticos para mitigar la exposición y los riesgos del calor en la agricultura",
    pubClimate: "Un chatbot visual con IA para comunicar el riesgo por calor y apoyar la toma de decisiones en comunidades agrícolas vulnerables",
    pubMwsug: "Mejora tus flujos de SAS Viya con Python",
    pubFlight: "Análisis de retrasos y cancelaciones de vuelos",
    pubCloudyaMeta: "SDSU 2025 · Proyecto final",
    contactLink: "Invítame o colabora conmigo"
  }
};

const defaultCopy = new Map(
  [...document.querySelectorAll("[data-i18n]")].map((element) => [
    element.dataset.i18n,
    element.innerHTML
  ])
);
const defaultAlt = new Map(
  [...document.querySelectorAll("[data-i18n-alt]")].map((element) => [
    element.dataset.i18nAlt,
    element.alt
  ])
);

const languageButton = document.querySelector("[data-language-toggle]");
const languageCurrent = document.querySelector(".language-current");
const themeButton = document.querySelector("[data-theme-toggle]");
const metaTheme = document.querySelector('meta[name="theme-color"]');

function applyLanguage(language) {
  const nextLanguage = language === "es" ? "es" : "en";
  document.documentElement.lang = nextLanguage;
  document.title = nextLanguage === "es"
    ? "Charlas y publicaciones — Miguel Bravo"
    : "Speaking & Publications — Miguel Bravo";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.innerHTML = nextLanguage === "es" && translations.es[key]
      ? translations.es[key]
      : defaultCopy.get(key);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    element.alt = nextLanguage === "es" && translations.es[key]
      ? translations.es[key]
      : defaultAlt.get(key);
  });

  languageCurrent.textContent = nextLanguage === "es" ? "EN" : "ES";
  languageButton.setAttribute(
    "aria-label",
    nextLanguage === "es" ? "View in English" : "Cambiar a español"
  );
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  themeButton.setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Use light colour theme" : "Usar tema oscuro"
  );
  metaTheme.content = nextTheme === "dark" ? "#101722" : "#f4f2ed";
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

applyLanguage(document.documentElement.lang);
applyTheme(document.documentElement.dataset.theme);

languageButton.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang === "es" ? "en" : "es";
  applyLanguage(nextLanguage);
  try {
    localStorage.setItem("mabravo-mockup-language", nextLanguage);
  } catch {}
});

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try {
    localStorage.setItem("mabravo-mockup-theme", nextTheme);
  } catch {}
});

document.addEventListener("pointermove", (event) => {
  document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".project-index a")];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${visible.target.id}`) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.2, 0.5] });
  sections.forEach((section) => observer.observe(section));
}
