/* ==========================================================================
   Wave lines — a band of overlapping sine-wave strokes that fan and braid
   like a flow-field illustration. Reusable: call initWaveLines(canvasId,
   options) for each canvas you want animated.
   ========================================================================== */
(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initWaveLines(canvasId, options) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const opts = Object.assign({
      lines: 32,
      colorA: "91,110,255",
      colorB: "34,211,238",
      speed: 1,
      amplitude: 0.22,
      frequency: 1.5,
      phaseSpread: 3.4,
      lineOpacity: 0.55,
    }, options || {});

    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    let t = 0;

    function draw() {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);
      const midY = height / 2;
      const amp = height * opts.amplitude;
      const steps = 90;

      for (let i = 0; i < opts.lines; i++) {
        const p = i / (opts.lines - 1); // 0..1 across the band
        const phase = p * opts.phaseSpread + t;
        const ampFactor = 0.55 + 0.45 * Math.sin(p * Math.PI * 1.6 + t * 0.35);
        const edgeFade = Math.sin(p * Math.PI); // fades toward both ends of the band
        const alpha = opts.lineOpacity * (0.2 + 0.8 * edgeFade);
        const color = p < 0.5 ? opts.colorA : opts.colorB;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(${color},${alpha.toFixed(3)})`;
        ctx.lineWidth = 1;

        for (let s = 0; s <= steps; s++) {
          const x = (s / steps) * width;
          const nx = (s / steps) * Math.PI * 2 * opts.frequency;
          const y = midY
            + Math.sin(nx + phase) * amp * ampFactor
            + Math.sin(nx * 0.5 + phase * 1.7) * amp * 0.3;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function loop() {
      t += opts.speed * 0.008;
      draw();
      if (!prefersReducedMotion) requestAnimationFrame(loop);
    }

    resize();
    draw();
    window.addEventListener("resize", () => { resize(); draw(); });
    if (!prefersReducedMotion) requestAnimationFrame(loop);
  }

  window.initWaveLines = initWaveLines;
})();
