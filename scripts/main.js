/* ==========================================================================
   Main interactions + content data
   Services are hand-authored as illustrated sections directly in index.html
   (#services .feature-row) since each one has a bespoke SVG scene. Add more
   work items by editing the WORK array below.
   ========================================================================== */

/* ---------------------------------- WORK ----------------------------------- */
/* Placeholder projects — replace title/meta/tag or add new objects as real work comes in. */
const WORK = [
  { title: "Aurora Rebrand", tag: "Brand Identity", meta: "Identity system · 2025", grad: "linear-gradient(135deg,#4c3fd6,#22d3ee)", big: true },
  { title: "Nightline News Open", tag: "News Packages", meta: "Broadcast design · 2025", grad: "linear-gradient(135deg,#1e3a8a,#3b82f6)" },
  { title: "Orbit Explainer", tag: "Motion Graphics", meta: "Animation · 2024", grad: "linear-gradient(135deg,#4c1d95,#5b6eff)" },
  { title: "Little Sparks: ABC Rhymes", tag: "Stories & Rhymes", meta: "K12 series · 2024", grad: "linear-gradient(135deg,#fb7185,#f97316)" },
  { title: "Photosynthesis Lab", tag: "Science Lab Experiments", meta: "Explainer video · 2024", grad: "linear-gradient(135deg,#0f766e,#10b981)" },
  { title: "Nova Type Specimen", tag: "Typography", meta: "Type design · 2023", grad: "linear-gradient(135deg,#22d3ee,#5b6eff)", big: true },
  { title: "Pulse AI Reel", tag: "AI Video Production", meta: "AI-generated · 2025", grad: "linear-gradient(135deg,#f97316,#fb7185)" },
  { title: "Census in Motion", tag: "Infographics", meta: "Data animation · 2023", grad: "linear-gradient(135deg,#10b981,#0f766e)" },
];

const PROCESS = [
  { title: "Discover & script", desc: "Understand the goal, audience and platform, then lock a script or storyboard before any pixel moves." },
  { title: "Design the system", desc: "Establish look, type, color and motion language so every asset feels part of one world." },
  { title: "Animate & edit", desc: "Build the sequence frame by frame — pacing, sound design and transitions tuned by hand." },
  { title: "Review & refine", desc: "Structured feedback rounds with clear versioning, no guesswork on what changed." },
  { title: "Deliver & broadcast-ready", desc: "Export in every format the platform needs, from vertical social to broadcast masters." },
];

/* ------------------------------ RENDER HELPERS ----------------------------- */
function renderServices() {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <div class="service-card" data-tilt style="--reveal-i:${i % 6}">
      <span class="service-index">${String(i + 1).padStart(2, "0")}</span>
      <div class="service-icon">${ICONS[s.icon] || ""}</div>
      <div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>
    </div>
  `).join("") + `
    <div class="service-card service-more">
      <span class="service-index">${String(SERVICES.length + 1).padStart(2, "0")}</span>
      <div style="margin-top:auto">
        <span class="add">+ More coming soon</span>
      </div>
    </div>
  `;
}

function renderWorkFilters() {
  const wrap = document.getElementById("workFilters");
  if (!wrap) return;
  const tags = ["All", ...new Set(WORK.map((w) => w.tag))];
  wrap.innerHTML = tags.map((t, i) => `
    <button class="filter-btn ${i === 0 ? "is-active" : ""}" data-filter="${t}">${t}</button>
  `).join("");

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    wrap.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".work-card").forEach((card) => {
      const match = filter === "All" || card.dataset.tag === filter;
      card.classList.toggle("is-hidden", !match);
      if (match) card.classList.add("is-visible");
    });
  });
}

function renderWork() {
  const grid = document.getElementById("workGrid");
  if (!grid) return;
  grid.innerHTML = WORK.map((w, i) => `
    <a href="#contact" class="work-card placeholder-card ${w.big ? "span-2" : ""}" data-tag="${w.tag}" data-cursor="view" data-cursor-text="View" style="--reveal-i:${i % 6}">
      <div class="work-thumb" style="--thumb:${w.grad}"></div>
      <div class="work-overlay">
        <span class="work-tag">${w.tag}</span>
        <div class="work-title">${w.title}</div>
        <div class="work-meta">${w.meta}</div>
      </div>
    </a>
  `).join("");
}

function renderProcess() {
  const list = document.getElementById("processList");
  if (!list) return;
  list.innerHTML = PROCESS.map((p, i) => `
    <div class="process-item" data-reveal style="--reveal-i:${i}">
      <span class="process-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="process-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </div>
      <svg class="process-arrow" viewBox="0 0 24 24" fill="none"><path d="M5 19 19 5M19 5H8M19 5v11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  `).join("");
}

function duplicateMarquee(id) {
  const track = document.getElementById(id);
  if (!track) return;
  track.innerHTML += track.innerHTML; // seamless loop
}

/* --------------------------------- PRELOADER -------------------------------- */
function runPreloader() {
  const pre = document.getElementById("preloader");
  const countEl = document.getElementById("preloaderCount");
  const fillEl = document.getElementById("preloaderFill");
  if (!pre) return;

  document.documentElement.classList.add("no-scroll");
  let n = 0;
  const step = () => {
    n += Math.random() * 18 + 6;
    if (n >= 100) n = 100;
    countEl.textContent = Math.floor(n);
    fillEl.style.width = n + "%";
    if (n < 100) {
      setTimeout(step, 90);
    } else {
      setTimeout(() => {
        pre.classList.add("is-done");
        document.documentElement.classList.remove("no-scroll");
        document.body.classList.add("loaded");
      }, 250);
    }
  };
  step();
}

/* ---------------------------------- HEADER ----------------------------------- */
function initHeader() {
  const header = document.getElementById("siteHeader");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("navMobile");
  if (!toggle || !nav) return;
  const close = () => {
    toggle.classList.remove("is-open");
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const isOpen = toggle.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/* -------------------------------- SPOTLIGHT ----------------------------------- */
function initSpotlight() {
  const spotlight = document.getElementById("spotlight");
  if (!spotlight) return;
  if (!window.matchMedia("(pointer: fine)").matches) {
    spotlight.style.display = "none";
    return;
  }
  window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mx", e.clientX + "px");
    document.documentElement.style.setProperty("--my", e.clientY + "px");
  }, { passive: true });
}

/* -------------------------------- MAGNETIC BUTTONS ----------------------------- */
function initMagnetic() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  const els = document.querySelectorAll(".magnetic");
  els.forEach((el) => {
    const strength = 0.35;
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.setProperty("--magx", `${x * strength}px`);
      el.style.setProperty("--magy", `${y * strength}px`);
    });
    el.addEventListener("mouseleave", () => {
      el.style.setProperty("--magx", "0px");
      el.style.setProperty("--magy", "0px");
    });
  });
}

/* ----------------------------------- TILT -------------------------------------- */
function initTilt() {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest("[data-tilt]");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--px", px + "%");
    card.style.setProperty("--py", py + "%");
    const rx = ((py - 50) / 50) * -4;
    const ry = ((px - 50) / 50) * 4;
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  document.addEventListener("mouseout", (e) => {
    const card = e.target.closest("[data-tilt]");
    if (card && !card.contains(e.relatedTarget)) {
      card.style.transform = "perspective(700px) rotateX(0) rotateY(0)";
    }
  });
}

/* -------------------------------- SCROLL REVEAL --------------------------------- */
function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach((el) => io.observe(el));
}

function initServiceCardReveal() {
  const cards = document.querySelectorAll(".service-card, .work-card");
  if (!cards.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  cards.forEach((c) => io.observe(c));
}

/* --------------------------------- STATS COUNT ----------------------------------- */
function initStats() {
  const stats = document.querySelectorAll(".stat-num");
  if (!stats.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10) || 0;
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach((s) => io.observe(s));
}

/* ------------------------------- FLOATING CTA -------------------------------------- */
function initFloatingCta() {
  const cta = document.getElementById("floatingCta");
  const contact = document.getElementById("contact");
  const footer = document.querySelector(".site-footer");
  if (!cta || !contact) return;

  const state = { contact: false, footer: false };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const key = entry.target === contact ? "contact" : "footer";
      state[key] = entry.isIntersecting;
    });
    cta.classList.toggle("is-hidden", state.contact || state.footer);
  }, { threshold: 0.2 });

  io.observe(contact);
  if (footer) io.observe(footer);
}

/* ---------------------------------- MARQUEE DIRECTION ----------------------------- */
function initMarqueeScrollDirection() {
  let lastY = window.scrollY;
  const top = document.getElementById("marqueeTop");
  const bottom = document.getElementById("marqueeBottom");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const goingDown = y > lastY;
    if (top) top.classList.toggle("reverse", !goingDown);
    if (bottom) bottom.classList.toggle("reverse", goingDown);
    lastY = y;
  }, { passive: true });
}

/* ------------------------------------- INIT ---------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderWorkFilters();
  renderWork();
  renderProcess();
  duplicateMarquee("marqueeTrack");
  duplicateMarquee("marqueeTrack2");

  runPreloader();
  initHeader();
  initMobileNav();
  initSpotlight();
  initMagnetic();
  initTilt();
  initServiceCardReveal();
  initReveal();
  initStats();
  initMarqueeScrollDirection();
  initFloatingCta();
});
