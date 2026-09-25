/* ==========================================================================
   Main interactions + content data
   Add more services or work items by editing the SERVICES / WORK arrays below.
   ========================================================================== */

/* ------------------------------- ICON SET -------------------------------- */
const ICONS = {
  video: `<svg viewBox="0 0 24 24" fill="none"><path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h7A2.5 2.5 0 0 1 15 6.5v11A2.5 2.5 0 0 1 12.5 20h-7A2.5 2.5 0 0 1 3 17.5v-11Z" stroke="currentColor" stroke-width="1.5"/><path d="M15 9.5 20.2 6a.8.8 0 0 1 1.3.6v10.8a.8.8 0 0 1-1.3.6L15 14.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  motion: `<svg viewBox="0 0 24 24" fill="none"><circle cx="7" cy="12" r="3.2" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="7" r="2.2" stroke="currentColor" stroke-width="1.5"/><circle cx="17" cy="17" r="2.2" stroke="currentColor" stroke-width="1.5"/><path d="M9.8 10.5 14.6 8M9.8 13.5l4.8 2.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
  graphic: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="1.5" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="9" r="1.6" stroke="currentColor" stroke-width="1.5"/><path d="M4 15.5 9 11l3 3 3.5-4L21 15" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 20h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  type: `<svg viewBox="0 0 24 24" fill="none"><path d="M5 6h14M9 6v13M15 6v13M6.5 19h5M13.5 19h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="13" width="4" height="7" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="10" y="8" width="4" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/><rect x="17" y="4" width="4" height="16" rx="1" stroke="currentColor" stroke-width="1.5"/></svg>`,
  brand: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3 4 7v6c0 4.4 3.2 7.6 8 8 4.8-.4 8-3.6 8-8V7l-8-4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12.5 11 14.5 15.5 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  broadcast: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 21V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 11 9 4M12 11l3-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.5 8a6 6 0 0 1 11 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 5a10.5 10.5 0 0 1 17 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5 13.9 9l5.6 1.9-5.6 1.9L12 18.5l-1.9-5.7L4.5 10.9 10.1 9 12 3.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M19 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" fill="currentColor"/></svg>`,
  k12: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 5 3 9l9 4 9-4-9-4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M7 11.5V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5" stroke="currentColor" stroke-width="1.5"/></svg>`,
  stories: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" stroke="currentColor" stroke-width="1.5"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" stroke="currentColor" stroke-width="1.5"/></svg>`,
  lab: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 3h6M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 15h8" stroke="currentColor" stroke-width="1.5"/></svg>`,
  news: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M7 9h6M7 12.5h10M7 16h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  logo: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.5"/><path d="M12 7.5 14.6 12 12 16.5 9.4 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
};

/* -------------------------------- SERVICES -------------------------------- */
/* Add a new discipline any time by pushing another object into this array. */
const SERVICES = [
  { icon: "video", title: "Video Editing & Development", desc: "Narrative-driven edits, pacing and sound design for films, ads and social content." },
  { icon: "motion", title: "Motion Graphics", desc: "Kinetic type, animated systems and explainer sequences built frame by frame." },
  { icon: "graphic", title: "Graphic Design", desc: "Layouts, posters and visual systems that hold together across every touchpoint." },
  { icon: "type", title: "Typography", desc: "Custom lettering and type systems that give a brand its distinct voice." },
  { icon: "info", title: "Infographics", desc: "Complex data turned into clear, animated visual stories." },
  { icon: "brand", title: "Brand Identity", desc: "Logo systems, color, type and guidelines built to scale with a business." },
  { icon: "broadcast", title: "Media & Broadcast", desc: "On-air packages, lower thirds and channel branding for TV and streaming." },
  { icon: "ai", title: "AI Video Production", desc: "AI-assisted generation, editing and finishing for fast, scalable video output." },
  { icon: "k12", title: "K-12 Learning Videos", desc: "Curriculum-aligned animated lessons that make concepts stick for young learners." },
  { icon: "stories", title: "Stories & Rhymes", desc: "Illustrated storytelling and rhyme videos crafted for early childhood audiences." },
  { icon: "lab", title: "Science Lab Experiments", desc: "Step-by-step experiment videos and diagrams that make science tangible." },
  { icon: "news", title: "News Channel Packages", desc: "Full broadcast identity — stingers, tickers, studio graphics and show opens." },
  { icon: "logo", title: "Logo Design", desc: "Distinct, versatile marks designed to work from favicon to billboard." },
];

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
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
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

  renderServices();
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
});
