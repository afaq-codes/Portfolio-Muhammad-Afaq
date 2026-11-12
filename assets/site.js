(function () {
  "use strict";

  const doc = document.documentElement;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduced = () => motionQuery.matches;

  const SITE = {
    name: "Muhammad Afaq",
    role: "Full-stack developer",
    email: "afaqch5535@gmail.com",
    github: "https://github.com/afaq-codes",
    linkedin: "https://www.linkedin.com/in/afaq-springboot-angular",
    upwork: "https://www.upwork.com/freelancers/~0177755392fb22d5d5",
    whatsapp: "https://wa.me/923021005535",
    nav: [
      ["work", "Work"],
      ["ai", "AI"],
      ["skills", "Skills"],
      ["experience", "Experience"],
      ["contact", "Contact"],
    ],
    projects: [
      ["famtill-demo.html", "FamTill"],
      ["caremd-demo.html", "CareMD"],
      ["orderyfy-demo.html", "Orderyfy"],
      ["nixxe-crm-demo.html", "Nixxe CRM"],
      ["nixxe-monitoring-demo.html", "Nixxe Monitoring"],
      ["omnistock-demo.html", "OmniStock"],
      ["rynochat-demo.html", "RynoChat"],
      ["rynodesk-demo.html", "RynoDesk"],
    ],
  };

  const ICONS = {
    "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "arrow-left": '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    "arrow-up-right": '<path d="M7 17 17 7M8 7h9v9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    github: '<path fill="currentColor" stroke="none" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>',
    linkedin: '<path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"/>',
    whatsapp: '<path d="M3.5 20.5 4.8 16.6A8.5 8.5 0 1 1 8 19.6Z"/><path d="M9.2 8.4c.2 3.4 3 6.2 6.4 6.4l.9-1.5-2.1-1-.9.8a4.6 4.6 0 0 1-2.6-2.6l.8-.9-1-2.1Z"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
    phone: '<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
    sparkles: '<path d="M12 3l1.8 4.7 4.7 1.8-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.8Z"/><path d="M19 15l.8 2.2 2.2.8-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z"/>',
    database: '<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/>',
    shield: '<path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.3 7.5 9.5 4.3-1.2 7.5-4.9 7.5-9.5V6Z"/>',
    wallet: '<path d="M4 7h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M4 7V6a2 2 0 0 1 2-2h10M16 13.5h.01"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M21.5 20a6.5 6.5 0 0 0-4-6"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
    cap: '<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  };

  function injectSprite() {
    if ($("#site-sprite")) return;
    const symbols = Object.entries(ICONS)
      .map(([id, body]) => `<symbol id="i-${id}" viewBox="0 0 24 24">${body}</symbol>`)
      .join("");
    const holder = document.createElement("div");
    holder.innerHTML = `<svg id="site-sprite" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">${symbols}</svg>`;
    document.body.prepend(holder.firstChild);
  }

  const icon = (id, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${id}"/></svg>`;

  function renderChrome() {
    const isHome = document.body.dataset.page === "home";
    const home = isHome ? "#top" : "index.html";
    const link = (id) => (isHome ? `#${id}` : `index.html#${id}`);

    const header = $("[data-site-header]");
    if (header) {
      const navLinks = SITE.nav.map(([id, label]) => `<a class="nav__link" href="${link(id)}">${label}</a>`).join("");
      const menuLinks = SITE.nav
        .map(([id, label], i) => `<a class="mobile-menu__link" style="--i:${i}" href="${link(id)}">${label}${icon("arrow-right")}</a>`)
        .join("");
      header.outerHTML = `
<a class="skip-link" href="#main">Skip to content</a>
<div class="scroll-progress" aria-hidden="true"></div>
<header class="site-header">
  <div class="container site-header__inner">
    <a class="brand" href="${home}">
      <img class="brand__avatar" src="afaq-72.png" width="34" height="34" alt="">
      <span class="brand__name">${SITE.name}<span class="brand__role">${SITE.role}</span></span>
    </a>
    <nav class="nav" aria-label="Main"><span class="nav__pill" aria-hidden="true"></span>${navLinks}</nav>
    <div class="header-actions">
      <button class="btn btn--quiet btn--icon theme-toggle" type="button" aria-label="Switch to dark theme">${icon("moon", "i-moon")}${icon("sun", "i-sun")}</button>
      <a class="btn btn--primary btn--sm header-cta" href="${link("contact")}">Get in touch</a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><span></span><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu" inert>
  <nav aria-label="Mobile">${menuLinks}</nav>
  <div class="mobile-menu__foot">
    <a class="btn btn--primary btn--lg" href="mailto:${SITE.email}">${icon("mail")}Email me</a>
    <a class="btn btn--secondary btn--lg" href="${SITE.whatsapp}" target="_blank" rel="noopener noreferrer">${icon("whatsapp")}WhatsApp</a>
  </div>
</div>`;
    }

    const footer = $("[data-site-footer]");
    if (footer) {
      const projects = SITE.projects.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("");
      footer.outerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__grid">
      <div>
        <a class="brand" href="${home}">
          <img class="brand__avatar" src="afaq-72.png" width="34" height="34" alt="">
          <span class="brand__name">${SITE.name}<span class="brand__role">${SITE.role}, Lahore</span></span>
        </a>
        <p class="site-footer__about">I build AI products, CRMs and POS systems on Spring Boot, Angular, Laravel and Flutter, from the database to the server they run on.</p>
      </div>
      <nav aria-label="Projects">
        <h2>Work</h2>
        <ul class="site-footer__links">${projects}</ul>
      </nav>
      <nav aria-label="Contact">
        <h2>Contact</h2>
        <ul class="site-footer__links site-footer__links--one">
          <li><a href="mailto:${SITE.email}">Email</a></li>
          <li><a href="${SITE.github}" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="${SITE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="${SITE.upwork}" target="_blank" rel="noopener noreferrer">Upwork</a></li>
          <li><a href="${SITE.whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </nav>
    </div>
    <div class="site-footer__base">
      <span>&copy; ${new Date().getFullYear()} ${SITE.name}</span>
      <span>Product mocks on this site use sample data.</span>
    </div>
  </div>
</footer>`;
    }
  }

  function readTheme() {
    const set = doc.getAttribute("data-theme");
    if (set === "light" || set === "dark") return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    doc.setAttribute("data-theme", theme);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b0e14" : "#ffffff");
    $$(".theme-toggle").forEach((btn) => btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme"));
  }

  function initTheme() {
    applyTheme(readTheme());
    $$(".theme-toggle").forEach((btn) =>
      btn.addEventListener("click", () => {
        const next = readTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem("theme", next);
        } catch (e) {}
      })
    );
  }

  function initHeader() {
    const header = $(".site-header");
    if (!header) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const scrolled = window.scrollY > 8;
      header.classList.toggle("is-scrolled", scrolled);
      doc.classList.toggle("header-scrolled", scrolled);
    };
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(update);
      },
      { passive: true }
    );
    update();
  }

  function initMenu() {
    const burger = $(".burger");
    const menu = $("#mobile-menu");
    if (!burger || !menu) return;
    const focusables = () => [burger, ...$$("a, button", menu)];

    const setOpen = (open) => {
      doc.classList.toggle("menu-open", open);
      doc.classList.toggle("is-locked", open);
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (open) {
        menu.removeAttribute("inert");
        const first = $("a", menu);
        if (first) first.focus({ preventScroll: true });
      } else {
        menu.setAttribute("inert", "");
      }
    };

    burger.addEventListener("click", () => setOpen(!doc.classList.contains("menu-open")));
    $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (event) => {
      if (!doc.classList.contains("menu-open")) return;
      if (event.key === "Escape") {
        setOpen(false);
        burger.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
    window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
      if (event.matches) setOpen(false);
    });
  }

  function initNavPill() {
    const nav = $(".nav");
    const pill = $(".nav__pill");
    if (!nav || !pill || !fineQuery.matches) return;
    let first = true;
    $$(".nav__link", nav).forEach((link) => {
      link.addEventListener("pointerenter", () => {
        pill.classList.toggle("is-snap", first);
        pill.style.setProperty("--x", `${link.offsetLeft}px`);
        pill.style.setProperty("--w", `${link.offsetWidth}px`);
        nav.classList.add("is-hovering");
        first = false;
      });
    });
    nav.addEventListener("pointerleave", () => {
      nav.classList.remove("is-hovering");
      first = true;
    });
  }

  function initScrollSpy() {
    if (!("IntersectionObserver" in window)) return;
    const links = $$('.nav__link[href^="#"], .case-nav__list a[href^="#"]');
    const map = new Map();
    links.forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      const section = id && document.getElementById(id);
      if (!section) return;
      if (!map.has(section)) map.set(section, []);
      map.get(section).push(link);
    });
    if (!map.size) return;
    const first = Array.from(map.keys()).sort((a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1
    )[0];
    const clear = () =>
      links.forEach((l) => {
        l.classList.remove("is-current");
        l.removeAttribute("aria-current");
      });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            if (entry.target === first && entry.boundingClientRect.top > 0) clear();
            return;
          }
          clear();
          (map.get(entry.target) || []).forEach((l) => {
            l.classList.add("is-current");
            l.setAttribute("aria-current", "true");
            const list = l.closest(".case-nav__list");
            if (list && list.scrollWidth > list.clientWidth) {
              const left = l.offsetLeft - (list.clientWidth - l.offsetWidth) / 2;
              list.scrollTo({ left: Math.max(0, left), behavior: reduced() ? "auto" : "smooth" });
            }
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    map.forEach((_, section) => observer.observe(section));
  }

  function initReveal() {
    if (reduced() || !("IntersectionObserver" in window)) return;
    $$("[data-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => child.style.setProperty("--i", i));
    });
    const targets = $$("[data-reveal], [data-stagger]");
    doc.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.classList.add("is-in");
          observer.unobserve(el);
          if (el.hasAttribute("data-stagger")) {
            const total = el.children.length * 80 + 1100;
            setTimeout(() => el.classList.add("is-done"), total);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.06 }
    );
    targets.forEach((t) => observer.observe(t));
  }

  function initPointerFx() {
    if (!fineQuery.matches) return;
    $$("[data-spot]").forEach((el) => {
      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--sx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--sy", `${event.clientY - rect.top}px`);
      });
    });
    if (reduced()) return;
    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("pointermove", (event) => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${(x * 0.16).toFixed(1)}px, ${(y * 0.26).toFixed(1)}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
    $$("[data-tilt-area]").forEach((area) => {
      const tilt = $(".scene-tilt", area);
      if (!tilt) return;
      let frame = 0;
      let last = null;
      area.addEventListener("pointermove", (event) => {
        last = event;
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          const rect = area.getBoundingClientRect();
          const x = ((last.clientX - rect.left) / rect.width) * 2 - 1;
          const y = ((last.clientY - rect.top) / rect.height) * 2 - 1;
          tilt.style.setProperty("--mx", x.toFixed(3));
          tilt.style.setProperty("--my", y.toFixed(3));
        });
      });
      area.addEventListener("pointerleave", () => {
        tilt.style.setProperty("--mx", "0");
        tilt.style.setProperty("--my", "0");
      });
    });
  }

  function initCounters() {
    if (reduced() || !("IntersectionObserver" in window)) return;
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const els = $$("[data-count]");
    const run = (el) => {
      const to = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      const fmt = new Intl.NumberFormat("en-GB", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      const start = performance.now();
      const ms = 1200;
      const frame = (now) => {
        const t = Math.min(1, (now - start) / ms);
        el.textContent = prefix + fmt.format(to * easeOut(t)) + suffix;
        if (t < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          run(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => observer.observe(el));
  }

  function initCopy() {
    const status = $("[data-copy-status]");
    $$("[data-copy]").forEach((btn) => {
      const label = $(".copy-label", btn);
      const original = label ? label.textContent : "";
      btn.addEventListener("click", async () => {
        const text = btn.dataset.copy;
        let ok = false;
        try {
          await navigator.clipboard.writeText(text);
          ok = true;
        } catch (e) {
          const area = document.createElement("textarea");
          area.value = text;
          area.setAttribute("readonly", "");
          area.style.position = "fixed";
          area.style.opacity = "0";
          document.body.appendChild(area);
          area.select();
          try {
            ok = document.execCommand("copy");
          } catch (err) {
            ok = false;
          }
          area.remove();
        }
        if (label) label.textContent = ok ? "Copied" : "Copy failed";
        if (status) status.textContent = ok ? "Email address copied." : "Could not copy. Select the address instead.";
        setTimeout(() => {
          if (label) label.textContent = original;
        }, 2000);
      });
    });
  }

  function initAiDemo() {
    const root = $("[data-ai-demo]");
    if (!root) return;
    const tabs = $$("[data-turn-tab]", root);
    const turns = $$("[data-turn]", root);
    if (!turns.length) return;
    let index = 0;
    let auto = !reduced();
    let started = false;
    let onScreen = false;
    let visible = !document.hidden;
    let timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    const clear = () => {
      timers.forEach(clearTimeout);
      timers = [];
    };

    turns.forEach((turn) => {
      const q = $("[data-type]", turn);
      if (q) q.dataset.full = q.textContent.trim();
    });

    function show(i, animate) {
      index = (i + turns.length) % turns.length;
      clear();
      tabs.forEach((tab, k) => tab.setAttribute("aria-pressed", String(k === index)));
      turns.forEach((turn, k) => {
        turn.classList.toggle("is-active", k === index);
        turn.setAttribute("aria-hidden", String(k !== index));
      });
      const turn = turns[index];
      const steps = $$("[data-step]", turn);
      const dots = $(".ai-dots", turn);
      const q = $("[data-type]", turn);

      if (!animate || !q) {
        root.classList.remove("is-playing");
        steps.forEach((s) => s.classList.add("is-shown"));
        if (q) {
          q.textContent = q.dataset.full;
          q.classList.remove("is-typing");
        }
        if (dots) dots.classList.remove("is-shown");
        return;
      }

      root.classList.add("is-playing");
      steps.forEach((s) => s.classList.remove("is-shown"));
      if (dots) dots.classList.remove("is-shown");
      const full = q.dataset.full;
      q.textContent = "";
      q.classList.add("is-typing", "is-shown");
      let n = 0;
      const type = () => {
        n += 1;
        q.textContent = full.slice(0, n);
        if (n < full.length) {
          at(26, type);
          return;
        }
        q.classList.remove("is-typing");
        if (dots) dots.classList.add("is-shown");
        at(900, () => {
          if (dots) dots.classList.remove("is-shown");
          let delay = 0;
          steps
            .filter((s) => s !== q)
            .forEach((s) => {
              at(delay, () => s.classList.add("is-shown"));
              delay += 550;
            });
        });
      };
      at(300, type);
    }

    function sync() {
      const running = onScreen && visible;
      root.classList.toggle("is-paused", !running);
      if (running && !started && auto) {
        started = true;
        root.classList.add("is-auto");
        show(0, true);
      }
    }

    tabs.forEach((tab, k) => {
      tab.addEventListener("click", () => {
        auto = false;
        started = true;
        root.classList.remove("is-auto");
        show(k, !reduced());
      });
      const progress = $(".ai-demo__progress", tab);
      if (progress) {
        progress.addEventListener("animationend", () => {
          if (auto && tabs[index] === tab) show(index + 1, true);
        });
      }
    });

    show(0, false);
    if (reduced() || !("IntersectionObserver" in window)) return;

    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onScreen = entry.isIntersecting;
        });
        sync();
      },
      { threshold: 0.35 }
    ).observe(root);
    document.addEventListener("visibilitychange", () => {
      visible = !document.hidden;
      sync();
    });
  }

  function init() {
    injectSprite();
    renderChrome();
    initTheme();
    initHeader();
    initMenu();
    initNavPill();
    initScrollSpy();
    initReveal();
    initPointerFx();
    initCounters();
    initCopy();
    initAiDemo();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
