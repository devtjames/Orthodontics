const pages = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["treatments.html", "Treatments"],
  ["invisalign.html", "Invisalign"],
  ["braces.html", "Braces"],
  ["pricing.html", "Pricing"],
  ["before-after.html", "Results"],
  ["testimonials.html", "Reviews"],
  ["blog.html", "Blog"],
  ["faq.html", "FAQ"],
  ["contact.html", "Contact"]
];

const allPages = [
  ...pages,
  ["financing.html", "Financing"],
  ["locations.html", "Locations"],
  ["smile-quiz.html", "Smile Quiz"],
  ["booking.html", "Booking"],
  ["virtual-consultation.html", "Virtual Consult"],
  ["offers.html", "Offers"]
];

const currentPage = document.body.dataset.page || "index.html";

const navGroups = [
  {
    label: "Treatments",
    links: [
      ["treatments.html", "All Treatments", "Explore every orthodontic service."],
      ["invisalign.html", "Invisalign", "Clear aligner treatment planning."],
      ["braces.html", "Braces", "Modern metal and ceramic systems."],
      ["virtual-consultation.html", "Virtual Consult", "Start your smile plan from home."]
    ]
  },
  {
    label: "Investment",
    links: [
      ["pricing.html", "Pricing", "Compare treatment investment ranges."],
      ["financing.html", "Financing", "Estimate flexible monthly payments."],
      ["offers.html", "Offers", "View current scan and consult offers."]
    ]
  },
  {
    label: "Proof",
    links: [
      ["before-after.html", "Before/After", "Browse transformation placeholders."],
      ["testimonials.html", "Google Reviews", "Read patient-style review cards."],
      ["smile-quiz.html", "Smile Quiz", "Match visitors to a treatment path."]
    ]
  },
  {
    label: "Resources",
    links: [
      ["about.html", "About", "Meet the studio and care philosophy."],
      ["blog.html", "Blog", "SEO-ready patient education."],
      ["faq.html", "FAQ", "Answer common treatment questions."],
      ["locations.html", "Locations", "Local SEO service areas."]
    ]
  }
];

function icon(name) {
  const icons = {
    menu: '<svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    phone: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"/></svg>',
    calendar: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2v4M16 2v4M3 10h18"/><rect x="3" y="4" width="18" height="18" rx="2"/></svg>',
    arrow: '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>'
  };
  return icons[name] || "";
}

function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;
  const isActive = (href) => currentPage === href;
  const groupIsActive = (group) => group.links.some(([href]) => isActive(href));
  const navLinks = `
    <a href="index.html" class="nav-direct ${isActive("index.html") ? "active" : ""}">Home</a>
    ${navGroups.map((group) => `
      <div class="nav-item">
        <button class="nav-trigger ${groupIsActive(group) ? "active" : ""}" type="button" aria-haspopup="true">
          ${group.label}
          <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="mega-menu">
          <div class="mega-grid">
            ${group.links.map(([href, label, desc]) => `<a class="mega-link ${isActive(href) ? "active" : ""}" href="${href}"><strong>${label}</strong><span>${desc}</span></a>`).join("")}
          </div>
        </div>
      </div>
    `).join("")}
    <a href="contact.html" class="nav-direct ${isActive("contact.html") ? "active" : ""}">Contact</a>
  `;
  const mobileLinks = `
    <a href="index.html" class="mobile-direct ${isActive("index.html") ? "active" : ""}">Home</a>
    ${navGroups.map((group) => {
      const active = groupIsActive(group);
      return `
        <div class="mobile-nav-item ${active ? "open" : ""}">
          <button class="mobile-nav-trigger ${active ? "active" : ""}" type="button" aria-expanded="${active}" data-mobile-nav-trigger>
            ${group.label}
            <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div class="mobile-submenu">
            ${group.links.map(([href, label, desc]) => `<a class="mobile-sub-link ${isActive(href) ? "active" : ""}" href="${href}"><strong>${label}</strong><span>${desc}</span></a>`).join("")}
          </div>
        </div>
      `;
    }).join("")}
    <a href="contact.html" class="mobile-direct ${isActive("contact.html") ? "active" : ""}">Contact</a>
  `;
  header.innerHTML = `
    <div class="container-xl">
      <div class="nav-shell">
        <a class="brand" href="index.html" aria-label="Aura Orthodontics home">
          <span class="brand-mark">A</span>
          <span class="brand-copy"><span class="brand-name">Aura Orthodontics</span><small>Premium Smile Studio</small></span>
        </a>
        <nav class="desktop-nav" aria-label="Primary">${navLinks}</nav>
        <div class="nav-actions">
          <a class="btn-ghost" href="tel:+15550199000">${icon("phone")} Call</a>
          <a class="btn-primary" href="booking.html">${icon("calendar")} Book</a>
        </div>
        <button class="icon-btn menu-toggle" type="button" aria-label="Open menu">${icon("menu")}</button>
      </div>
    </div>
    <div class="mobile-panel" id="mobile-panel" aria-hidden="true">
      <div class="flex items-center justify-between">
        <a class="brand" href="index.html"><span class="brand-mark">A</span><span class="brand-copy"><span class="brand-name">Aura Orthodontics</span><small>Premium Smile Studio</small></span></a>
        <button class="icon-btn menu-close" type="button" aria-label="Close menu">${icon("close")}</button>
      </div>
      <nav class="mobile-links" aria-label="Mobile primary">${mobileLinks}</nav>
      <div class="grid gap-3">
        <a class="btn-primary" href="booking.html">${icon("calendar")} Book Consultation</a>
        <a class="btn-secondary" href="virtual-consultation.html">Virtual Consult</a>
      </div>
    </div>
  `;
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container-xl grid gap-10 md:grid-cols-[1.25fr_1fr_1fr_1fr]">
      <div>
        <a class="brand text-white" href="index.html"><span class="brand-mark">A</span><span>Aura Orthodontics<small class="!text-white/60">Boutique orthodontic care</small></span></a>
        <p class="mt-5 max-w-sm text-sm leading-7 text-white/65">Premium Invisalign, braces, and smile transformation care with digital planning, transparent financing, and concierge patient support.</p>
        <div class="mt-5 flex gap-2">
          <span class="rounded-full border border-white/15 px-3 py-2 text-xs font-bold">Top 1% Invisalign</span>
          <span class="rounded-full border border-white/15 px-3 py-2 text-xs font-bold">5.0 Reviews</span>
        </div>
      </div>
      <div>
        <h3 class="font-black text-white">Treatments</h3>
        <div class="mt-4 grid gap-3 text-sm">
          <a href="invisalign.html">Invisalign</a><a href="braces.html">Braces</a><a href="treatments.html">Teen Orthodontics</a><a href="treatments.html">Retainers</a>
        </div>
      </div>
      <div>
        <h3 class="font-black text-white">Start</h3>
        <div class="mt-4 grid gap-3 text-sm">
          <a href="smile-quiz.html">Smile Quiz</a><a href="pricing.html">Pricing</a><a href="financing.html">Financing</a><a href="booking.html">Booking</a>
        </div>
      </div>
      <div>
        <h3 class="font-black text-white">Visit</h3>
        <p class="mt-4 text-sm leading-7 text-white/65">312 Meridian Ave, Suite 500<br>Open Mon-Sat by appointment</p>
        <a class="mt-5 btn-primary" href="contact.html">Contact Studio</a>
      </div>
    </div>
    <div class="container-xl mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
      <p>Copyright ${new Date().getFullYear()} Aura Orthodontics. Template demo. Medical information placeholders.</p>
      <p>Schema-ready | HIPAA-conscious forms | CRM-ready lead capture</p>
    </div>
  `;
}

function renderConversionWidgets() {
  document.body.insertAdjacentHTML("beforeend", `
    <a class="whatsapp-float" href="https://wa.me/15550199000" aria-label="Message us on WhatsApp">WA</a>
    <div class="sticky-cta">
      <a class="btn-secondary" href="tel:+15550199000">${icon("phone")} Call</a>
      <a class="btn-primary" href="booking.html">${icon("calendar")} Book</a>
    </div>
    <div class="modal" id="exit-modal" role="dialog" aria-modal="true" aria-labelledby="exit-title">
      <div class="modal-dialog">
        <div class="flex items-start justify-between gap-4">
          <div><span class="eyebrow">Limited Offer</span><h2 id="exit-title" class="mt-4 text-3xl font-black leading-tight">Keep your complimentary smile scan.</h2></div>
          <button class="icon-btn modal-close" type="button" aria-label="Close offer">${icon("close")}</button>
        </div>
        <p class="mt-4 leading-7 text-slate-600">Reserve a digital scan, smile simulation, and financing preview before this visit ends.</p>
        <form class="mt-5 form-grid crm-form" data-form="exit-offer">
          <div class="field"><label for="exit-email">Email</label><input id="exit-email" name="email" type="email" placeholder="you@example.com" required></div>
          <button class="btn-primary" type="submit">Claim Scan ${icon("arrow")}</button>
          <p class="form-status text-sm font-bold text-teal-700" role="status"></p>
        </form>
      </div>
    </div>
  `);
}

function bindMenus() {
  const panel = document.querySelector("#mobile-panel");
  const open = document.querySelector(".menu-toggle");
  const close = document.querySelector(".menu-close");
  const setOpen = (state) => {
    panel?.classList.toggle("open", state);
    document.body.classList.toggle("menu-open", state);
    panel?.setAttribute("aria-hidden", String(!state));
  };
  open?.addEventListener("click", () => setOpen(true));
  close?.addEventListener("click", () => setOpen(false));
  document.querySelectorAll("[data-mobile-nav-trigger]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".mobile-nav-item");
      const expanded = item?.classList.toggle("open") || false;
      button.setAttribute("aria-expanded", String(expanded));
    });
  });
}

function bindForms() {
  document.querySelectorAll(".crm-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) status.textContent = "Received. A treatment coordinator will follow up shortly.";
      form.reset();
    });
  });
}

function bindSteps() {
  document.querySelectorAll("[data-steps]").forEach((wizard) => {
    const steps = [...wizard.querySelectorAll(".step")];
    const dots = [...wizard.querySelectorAll(".step-dot")];
    let index = 0;
    const show = () => {
      steps.forEach((step, idx) => step.classList.toggle("active", idx === index));
      dots.forEach((dot, idx) => dot.classList.toggle("active", idx <= index));
    };
    wizard.querySelectorAll("[data-next]").forEach((button) => button.addEventListener("click", () => {
      index = Math.min(index + 1, steps.length - 1);
      show();
    }));
    wizard.querySelectorAll("[data-prev]").forEach((button) => button.addEventListener("click", () => {
      index = Math.max(index - 1, 0);
      show();
    }));
    show();
  });
}

function bindCalculator() {
  const calculator = document.querySelector("[data-calculator]");
  if (!calculator) return;
  const cost = calculator.querySelector("[name='cost']");
  const down = calculator.querySelector("[name='down']");
  const months = calculator.querySelector("[name='months']");
  const output = calculator.querySelector("[data-payment]");
  const update = () => {
    const principal = Math.max(Number(cost.value) - Number(down.value), 0);
    const payment = Math.round(principal / Number(months.value));
    output.textContent = `$${payment.toLocaleString()} / mo`;
  };
  [cost, down, months].forEach((input) => input.addEventListener("input", update));
  update();
}

function bindCountdown() {
  const blocks = document.querySelectorAll("[data-countdown]");
  if (!blocks.length) return;
  const end = new Date();
  end.setDate(end.getDate() + 5);
  end.setHours(23, 59, 59, 0);
  const tick = () => {
    const diff = Math.max(end - new Date(), 0);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    blocks.forEach((block) => {
      block.innerHTML = [
        ["Days", days],
        ["Hours", hours],
        ["Min", minutes],
        ["Sec", seconds]
      ].map(([label, value]) => `<div><strong>${String(value).padStart(2, "0")}</strong><span>${label}</span></div>`).join("");
    });
  };
  tick();
  setInterval(tick, 1000);
}

function bindExitIntent() {
  const modal = document.querySelector("#exit-modal");
  if (!modal || sessionStorage.getItem("auraExitShown")) return;
  const open = () => {
    modal.classList.add("open");
    document.body.classList.add("modal-open");
    sessionStorage.setItem("auraExitShown", "1");
  };
  document.addEventListener("mouseleave", (event) => {
    if (event.clientY <= 0) open();
  }, { once: true });
  setTimeout(open, 45000);
  modal.querySelector(".modal-close")?.addEventListener("click", () => {
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  });
}

function bindAnimations() {
  const items = document.querySelectorAll(".fade-up");
  if (!items.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  renderConversionWidgets();
  bindMenus();
  bindForms();
  bindSteps();
  bindCalculator();
  bindCountdown();
  bindExitIntent();
  bindAnimations();
});
