const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-links a");
const yearTargets = document.querySelectorAll("[data-current-year]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll("[data-category]");
const copyButtons = document.querySelectorAll("[data-copy-email]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 16);
}

function closeMenu() {
  if (!header || !menuButton) return;
  header.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

if (menuButton && header) {
  menuButton.addEventListener("click", () => {
    const open = header.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

yearTargets.forEach((target) => {
  target.textContent = new Date().getFullYear();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      card.hidden = selected !== "all" && !categories.includes(selected);
    });
  });
});

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const email = button.dataset.copyEmail;
    const originalLabel = button.textContent;

    try {
      await navigator.clipboard.writeText(email);
      button.textContent = document.documentElement.lang === "es" ? "Correo copiado" : "Email copied";
    } catch {
      window.location.href = `mailto:${email}`;
      return;
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
    }, 1800);
  });
});

const revealTargets = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );

  revealTargets.forEach((target) => observer.observe(target));
}
