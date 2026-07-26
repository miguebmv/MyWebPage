(() => {
  const container = document.querySelector("[data-field]");
  if (!container || typeof window.p5 !== "function") return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const coarsePointer = window.matchMedia("(pointer: coarse)");
  const staticMode = reduceMotion.matches || coarsePointer.matches;

  const sketch = (p) => {
    const SEED = 260326;
    const NODE_COUNT = 46;
    const INFLUENCE_RADIUS = 170;
    const nodes = [];
    let fieldWidth = 0;
    let fieldHeight = 0;
    let pointerActive = false;
    let fieldVisible = true;

    const cssColor = (name, fallback) =>
      getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

    const makeNodes = () => {
      nodes.length = 0;
      p.randomSeed(SEED);
      p.noiseSeed(SEED);

      for (let index = 0; index < NODE_COUNT; index += 1) {
        const normalizedX = p.random(0.025, 0.975);
        const normalizedY = p.random(0.12, 0.88);
        nodes.push({
          x: normalizedX * fieldWidth,
          y: normalizedY * fieldHeight,
          homeX: normalizedX,
          homeY: normalizedY,
          band: index % 4,
          phase: p.random(p.TWO_PI),
          weight: p.random() > 0.78 ? 2.2 : 1.35
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

    const drawConnection = (first, second, firstInfluence, secondInfluence, lineColor) => {
      const distance = p.dist(first.x, first.y, second.x, second.y);
      const strength = Math.min(firstInfluence, secondInfluence);
      if (distance > 78 || strength < 0.18) return;

      lineColor.setAlpha(16 + strength * 74);
      p.stroke(lineColor);
      p.strokeWeight(0.7);
      p.line(first.x, first.y, second.x, second.y);
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
      const staticX = fieldWidth * 0.64;
      const staticY = fieldHeight * 0.52;
      const focusX = staticMode ? staticX : p.mouseX;
      const focusY = staticMode ? staticY : p.mouseY;
      const focusActive = staticMode || pointerActive;

      nodes.forEach((node) => {
        const homeX = node.homeX * fieldWidth;
        const homeY = node.homeY * fieldHeight;
        const distance = focusActive ? p.dist(homeX, homeY, focusX, focusY) : INFLUENCE_RADIUS;
        const rawInfluence = focusActive
          ? p.constrain(1 - distance / INFLUENCE_RADIUS, 0, 1)
          : 0;
        const smoothedInfluence = rawInfluence * rawInfluence * (3 - 2 * rawInfluence);
        const influence = staticMode ? smoothedInfluence * 0.48 : smoothedInfluence;
        const bandY = fieldHeight * (0.25 + node.band * 0.17);
        const drift = staticMode ? 0 : Math.sin(p.frameCount * 0.018 + node.phase) * 1.7;
        const targetX = homeX + Math.sin(node.phase * 1.7) * influence * 5;
        const targetY = p.lerp(homeY + drift, bandY, influence * 0.86);

        node.x = p.lerp(node.x, targetX, staticMode ? 1 : 0.11);
        node.y = p.lerp(node.y, targetY, staticMode ? 1 : 0.11);
        node.influence = influence;
      });

      nodes.forEach((node, index) => {
        for (let otherIndex = index + 1; otherIndex < nodes.length; otherIndex += 1) {
          drawConnection(
            node,
            nodes[otherIndex],
            node.influence,
            nodes[otherIndex].influence,
            lineColor
          );
        }
      });

      nodes.forEach((node) => {
        const active = node.influence > 0.12;
        const pointColor = active ? accent : muted;
        pointColor.setAlpha(active ? 90 + node.influence * 105 : 42);
        p.noStroke();
        p.fill(pointColor);
        const size = node.weight + node.influence * 1.35;
        p.circle(node.x, node.y, size);
      });

      if (staticMode || !fieldVisible) p.noLoop();
    };

    p.mouseMoved = () => {
      pointerActive =
        p.mouseX >= 0 &&
        p.mouseX <= fieldWidth &&
        p.mouseY >= 0 &&
        p.mouseY <= fieldHeight;
      return false;
    };

    p.mouseOut = () => {
      pointerActive = false;
    };
  };

  new window.p5(sketch);
})();
