(() => {
  const container = document.querySelector("[data-field]");
  if (!container || typeof window.p5 !== "function") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointer = window.matchMedia("(pointer: coarse)");
  const staticMode = reduceMotion.matches || coarsePointer.matches;

  const sketch = (p) => {
    const SEED = 260326;
    const NODE_COUNT = 64;
    const INFLUENCE_RADIUS = 240;
    const AMBIENT = 0.3;
    const nodes = [];
    let fieldWidth = 0;
    let fieldHeight = 0;
    let pointerActive = false;
    let pointerX = 0;
    let pointerY = 0;
    let fieldVisible = true;

    const cssColor = (name, fallback) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

    const makeNodes = () => {
      nodes.length = 0;
      p.randomSeed(SEED);
      p.noiseSeed(SEED);

      for (let index = 0; index < NODE_COUNT; index += 1) {
        const normalizedX = p.random(0.025, 0.975);
        const normalizedY = p.random(0.06, 0.94);
        nodes.push({
          x: normalizedX * fieldWidth,
          y: normalizedY * fieldHeight,
          homeX: normalizedX,
          homeY: normalizedY,
          band: index % 4,
          phase: p.random(p.TWO_PI),
          rest: p.random(0.55, 1),
          weight: p.random() > 0.72 ? 3.1 : 2
        });
      }
    };

    const resizeField = () => {
      fieldWidth = Math.max(280, container.clientWidth);
      fieldHeight = Math.max(110, container.clientHeight);
      p.resizeCanvas(fieldWidth, fieldHeight);
      makeNodes();
      if (staticMode) p.redraw();
    };

    const drawConnection = (
      first,
      second,
      lineColor,
      lightMode
    ) => {
      const distance = p.dist(first.x, first.y, second.x, second.y);
      const strength = Math.min(first.glow, second.glow);
      const reach = 92 + strength * 64;
      if (distance > reach || strength < 0.08) return;

      const fade = 1 - distance / reach;
      lineColor.setAlpha((lightMode ? 40 + strength * 190 : 26 + strength * 120) * (0.45 + fade * 0.55));
      p.stroke(lineColor);
      p.strokeWeight(lightMode ? 1.05 : 0.85);
      p.line(first.x, first.y, second.x, second.y);

      return { strength, distance };
    };

    const drawSignal = (first, second, strength, index, accent) => {
      if (staticMode || strength < 0.3 || index % 3 !== 0) return;
      const t = ((p.frameCount * 0.012 + first.phase) % 1);
      const x = p.lerp(first.x, second.x, t);
      const y = p.lerp(first.y, second.y, t);
      accent.setAlpha(120 + strength * 135);
      p.noStroke();
      p.fill(accent);
      p.circle(x, y, 2.6 + strength * 1.6);
    };

    p.setup = () => {
      fieldWidth = Math.max(280, container.clientWidth);
      fieldHeight = Math.max(110, container.clientHeight);
      const canvas = p.createCanvas(fieldWidth, fieldHeight);
      canvas.parent(container);
      canvas.attribute("aria-hidden", "true");
      p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
      p.frameRate(30);
      makeNodes();

      const visibilityObserver = new IntersectionObserver(([entry]) => {
        fieldVisible = entry.isIntersecting;
        if (!staticMode) {
          if (fieldVisible) p.loop();
          else p.noLoop();
        }
      }, { threshold: 0.01 });
      visibilityObserver.observe(container);

      const resizeObserver = new ResizeObserver(resizeField);
      resizeObserver.observe(container);

      container.addEventListener("pointermove", (event) => {
        const bounds = container.getBoundingClientRect();
        pointerX = event.clientX - bounds.left;
        pointerY = event.clientY - bounds.top;
        pointerActive =
          pointerX >= 0 &&
          pointerX <= bounds.width &&
          pointerY >= 0 &&
          pointerY <= bounds.height;
        if (!staticMode && fieldVisible) p.loop();
      }, { passive: true });

      container.addEventListener("pointerleave", () => {
        pointerActive = false;
      }, { passive: true });

      if (staticMode) {
        p.noLoop();
        p.redraw();
      }
    };

    p.draw = () => {
      p.clear();

      const accent = p.color(cssColor("--data-field-accent", "#087f77"));
      const muted = p.color(cssColor("--muted", "#68727e"));
      const lineColor = p.color(cssColor("--data-field-accent", "#087f77"));
      const lightMode = document.documentElement.dataset.theme === "light";
      const staticX = fieldWidth * 0.64;
      const staticY = fieldHeight * 0.52;
      const focusX = staticMode ? staticX : pointerX;
      const focusY = staticMode ? staticY : pointerY;
      const focusActive = staticMode || pointerActive;

      nodes.forEach((node) => {
        const homeX = node.homeX * fieldWidth;
        const homeY = node.homeY * fieldHeight;
        const distance = focusActive ? p.dist(homeX, homeY, focusX, focusY) : INFLUENCE_RADIUS;
        const rawInfluence = focusActive
          ? p.constrain(1 - distance / INFLUENCE_RADIUS, 0, 1)
          : 0;
        const smoothedInfluence = rawInfluence * rawInfluence * (3 - 2 * rawInfluence);
        const influence = staticMode ? smoothedInfluence * 0.62 : smoothedInfluence;
        const bandY = fieldHeight * (0.16 + node.band * 0.225);
        const drift = staticMode ? 0 : Math.sin(p.frameCount * 0.018 + node.phase) * 1.7;
        const targetX = homeX + Math.sin(node.phase * 1.7) * influence * 5;
        const targetY = p.lerp(homeY + drift, bandY, influence * 0.86);

        node.x = p.lerp(node.x, targetX, staticMode ? 1 : 0.11);
        node.y = p.lerp(node.y, targetY, staticMode ? 1 : 0.11);
        node.influence = influence;
        const breathing = staticMode ? 1 : 0.82 + Math.sin(p.frameCount * 0.022 + node.phase) * 0.18;
        node.glow = Math.max(AMBIENT * node.rest * breathing, influence);
      });

      let edgeIndex = 0;
      nodes.forEach((node, index) => {
        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
          const edge = drawConnection(node, nodes[otherIndex], lineColor, lightMode);
          if (edge) {
            edgeIndex += 1;
            drawSignal(node, nodes[otherIndex], edge.strength, edgeIndex, accent);
          }
        }
      });

      nodes.forEach((node) => {
        const active = node.glow > 0.36;
        const pointColor = active ? accent : muted;
        const size = node.weight + node.influence * (lightMode ? 3.4 : 2.6);
        p.noStroke();
        if (active) {
          const halo = p.color(cssColor("--data-field-accent", "#087f77"));
          halo.setAlpha((lightMode ? 34 : 26) * node.glow);
          p.fill(halo);
          p.circle(node.x, node.y, size * 4.2);
        }
        pointColor.setAlpha(
          active
            ? 150 + node.glow * 105
            : (lightMode ? 92 : 72) * (0.6 + node.glow)
        );
        p.fill(pointColor);
        p.circle(node.x, node.y, size);
      });

      if (staticMode || !fieldVisible) p.noLoop();
    };

  };

  new window.p5(sketch);
})();
