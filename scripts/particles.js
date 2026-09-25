/* ==========================================================================
   Particle field background — a lightweight canvas "constellation" network,
   inspired by Trapcode Particular: drifting nodes, connective lines, and a
   cursor that acts like an emitter, pulling in and linking to nearby points.
   ========================================================================== */
(function () {
  const canvas = document.getElementById("particleField");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

  const COLORS = ["91,110,255", "34,211,238"];
  const LINK_DIST = 130;
  const CURSOR_LINK_DIST = 170;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  const mouse = { x: 0, y: 0, active: false };

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    const area = width * height;
    const count = Math.min(100, Math.max(28, Math.round(area / 18000)));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.5 + 0.6,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }

  function drawFrame() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (mouse.active) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 150 && dist > 0.01) {
          p.x += (dx / dist) * 0.35;
          p.y += (dy / dist) * 0.35;
        }
      }

      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < LINK_DIST) {
          ctx.strokeStyle = `rgba(${a.c},${(1 - dist / LINK_DIST) * 0.16})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    if (mouse.active) {
      for (const p of particles) {
        const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
        if (dist < CURSOR_LINK_DIST) {
          ctx.strokeStyle = `rgba(34,211,238,${(1 - dist / CURSOR_LINK_DIST) * 0.35})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }
    }

    for (const p of particles) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.c},0.75)`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    drawFrame();
    if (!prefersReducedMotion) requestAnimationFrame(loop);
  }

  resize();
  createParticles();
  drawFrame();

  window.addEventListener("resize", () => {
    resize();
    createParticles();
    if (prefersReducedMotion) drawFrame();
  });

  if (hasFinePointer) {
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }, { passive: true });
    window.addEventListener("mouseleave", () => { mouse.active = false; });
  }

  if (!prefersReducedMotion) requestAnimationFrame(loop);
})();
