/* ==========================================================================
   Custom cursor system
   - Two-layer cursor: fast dot + eased trailing ring
   - Ring morphs (size/label) depending on what's under the pointer
   - Automatically disabled on touch / coarse-pointer devices
   ========================================================================== */
(function () {
  const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!supportsFinePointer) return; // leave native cursor on touch devices

  document.body.classList.add("using-custom-cursor");

  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  const label = document.getElementById("cursorLabel");
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  const ease = prefersReducedMotion ? 1 : 0.16;

  let visible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!visible) {
      visible = true;
      dot.classList.remove("is-hidden");
      ring.classList.remove("is-hidden");
    }
    // publish coords for other modules (spotlight, tilt) via CSS vars
    document.documentElement.style.setProperty("--mx", mouseX + "px");
    document.documentElement.style.setProperty("--my", mouseY + "px");
  });

  window.addEventListener("mouseleave", () => {
    visible = false;
    dot.classList.add("is-hidden");
    ring.classList.add("is-hidden");
  });

  window.addEventListener("mousedown", () => ring.classList.add("is-active"));
  window.addEventListener("mouseup", () => ring.classList.remove("is-active"));

  function raf() {
    ringX += (mouseX - ringX) * ease;
    ringY += (mouseY - ringY) * ease;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  function setState(kind, text) {
    ring.classList.remove("is-view", "is-drag", "is-link", "is-label");
    if (kind) ring.classList.add(kind);
    if (text) {
      label.textContent = text;
      ring.classList.add("is-label");
    } else {
      label.textContent = "";
      ring.classList.remove("is-label");
    }
  }

  // Delegate hover intent so dynamically-injected cards (services/work) work too.
  document.addEventListener("mouseover", (e) => {
    const viewEl = e.target.closest("[data-cursor='view']");
    const dragEl = e.target.closest("[data-cursor='drag']");
    const linkEl = e.target.closest(".cursor-link, a, button");

    if (viewEl) {
      setState("is-view", viewEl.dataset.cursorText || "View");
    } else if (dragEl) {
      setState("is-drag", dragEl.dataset.cursorText || "Drag");
    } else if (linkEl) {
      setState("is-link", null);
    } else {
      setState(null, null);
    }
  });

  document.addEventListener("mouseout", (e) => {
    const related = e.relatedTarget;
    if (!related || !(related instanceof Element)) {
      setState(null, null);
    }
  });
})();
