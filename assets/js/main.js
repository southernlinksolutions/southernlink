
const SITE_CONFIG = {
  name: "SouthernLink",
  tagline: "Delivering smart, reliable, and innovative technology solutions.",
  email: "contact@southernlink.com.au",
  hrEmail: "hr@southernlink.com.au",
  phone: "+61 652 603 468",
  location: "Level 3/89 Pirie St, Adelaide SA 5000",
  logo: "medias/logo.png",
  icon: "/favicon.png"
};

const NAV_LINKS = [
  { href: "index.html", label: "Home", id: "home" },
  { href: "services.html", label: "Services", id: "services" },
  { href: "about.html", label: "About Us", id: "about" },
  { href: "career.html", label: "Career", id: "career" },
  { href: "contact.html", label: "Contact Us", id: "contact" }
];

function renderHeader(activePage = "home") {
  const navItems = NAV_LINKS.map(link => {
    const isActive = link.id === activePage;
    return `
      <li>
        <a href="${link.href}"
           class="px-3.5 py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-200 ${
             isActive
               ? 'text-blue-600 bg-blue-50 font-semibold'
               : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
           }">
          ${link.label}
        </a>
      </li>
    `;
  }).join("");

  const mobileNavItems = NAV_LINKS.map(link => {
    const isActive = link.id === activePage;
    return `
      <li>
        <a href="${link.href}"
           class="flex items-center justify-between px-4 py-3 rounded-lg text-base ${
             isActive
               ? 'bg-blue-50 text-blue-600 font-bold'
               : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
           }">
          <span>${link.label}</span>
        </a>
      </li>
    `;
  }).join("");

  return `

    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 transition-shadow duration-300" id="main-nav">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex items-center justify-between h-20">

          <a href="index.html" class="flex items-center gap-3">
            <img src="${SITE_CONFIG.logo}"
                 alt="${SITE_CONFIG.name} Logo"
                 class="h-11 md:h-12 w-auto object-contain transition-transform duration-200 hover:opacity-90"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
            <div class="hidden items-center gap-2" id="logo-fallback">
              <span class="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xl">SL</span>
              <span class="font-bold text-xl text-slate-900">SouthernLink</span>
            </div>
          </a>

          <div class="hidden md:flex items-center gap-1">
            <ul class="flex items-center gap-1 list-none m-0 p-0">
              ${navItems}
            </ul>
          </div>

          <div class="hidden md:flex items-center gap-4">
            <a href="contact.html" class="btn-primary text-sm font-semibold">
              <span>Contact Us</span>
            </a>
          </div>

          <div class="flex md:hidden items-center gap-2">
            <a href="contact.html" class="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg">
              Contact
            </a>
            <button id="mobile-menu-btn"
                    type="button"
                    aria-label="Toggle Navigation Menu"
                    class="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none">
              <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>

      <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg">
        <ul class="flex flex-col gap-1 list-none p-0 mb-4">
          ${mobileNavItems}
        </ul>
        <div class="pt-3 border-t border-slate-100">
          <a href="contact.html" class="w-full text-center btn-primary justify-center text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const currentYear = new Date().getFullYear();
  return `
    <footer class="bg-neutral-100 text-slate-700 pt-12 md:pt-16 pb-8 border-t border-neutral-200 mt-auto">
      <div class="container mx-auto px-4 lg:px-8">

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-12 border-b border-neutral-200">

          <div class="space-y-4">
            <a href="index.html" class="inline-block">
              <img src="${SITE_CONFIG.logo}" alt="${SITE_CONFIG.name}" class="h-8 md:h-9 w-auto object-contain" />
            </a>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed">
              SouthernLink is an IT services provider specialising in website development, custom software solutions, IT and ICT services, and technology consulting.
            </p>
            <p class="text-xs text-slate-500 italic">
              Delivering smart, reliable, and innovative technology solutions.
            </p>
          </div>

          <div>
            <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul class="space-y-2.5 text-xs md:text-sm list-none p-0 m-0">
              <li>
                <a href="index.html" class="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
              </li>
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">Services</a>
              </li>
              <li>
                <a href="about.html" class="text-slate-600 hover:text-blue-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="career.html" class="text-slate-600 hover:text-blue-600 transition-colors">Career Opportunities</a>
              </li>
              <li>
                <a href="contact.html" class="text-slate-600 hover:text-blue-600 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul class="space-y-2.5 text-xs md:text-sm list-none p-0 m-0">
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">Website Design & Development</a>
              </li>
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">Custom Software & Apps</a>
              </li>
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">IT & ICT Solutions</a>
              </li>
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">Data Analytics & Databases</a>
              </li>
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">System Integration & Automation</a>
              </li>
              <li>
                <a href="services.html" class="text-slate-600 hover:text-blue-600 transition-colors">IT Consulting & Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <div class="space-y-3 text-xs md:text-sm text-slate-600">
              <p>
                <span class="block font-semibold text-slate-900">Email:</span>
                <a href="mailto:${SITE_CONFIG.email}" class="text-blue-600 hover:underline">
                  ${SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <span class="block font-semibold text-slate-900">Phone:</span>
                <a href="tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}" class="text-slate-700 hover:text-blue-600 transition-colors">
                  ${SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                <span class="block font-semibold text-slate-900">Location:</span>
                <span class="text-slate-600">${SITE_CONFIG.location}</span>
              </p>
            </div>
          </div>

        </div>

        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p class="m-0">
            © ${currentYear} SouthernLink Solutions. All rights reserved.
          </p>
          <div>
            <a href="privacy-terms.html" class="hover:text-blue-600 transition-colors">Privacy & Terms</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const pageId = document.body.dataset.page || "home";

  const headerContainer = document.getElementById("site-header");
  if (headerContainer) {
    headerContainer.innerHTML = renderHeader(pageId);

    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.contains("hidden");
        if (isHidden) {
          mobileMenu.classList.remove("hidden");
          if (menuIcon) {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
          }
        } else {
          mobileMenu.classList.add("hidden");
          if (menuIcon) {
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
          }
        }
      });
    }
  }

  const footerContainer = document.getElementById("site-footer");
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }

  let favicon = document.querySelector("link[rel='icon']");
  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = SITE_CONFIG.icon;
    document.head.appendChild(favicon);
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("promo") === "website50" || urlParams.get("promo") === "50") {
    const serviceSelect = document.getElementById("service");
    const messageTextarea = document.getElementById("message");
    if (serviceSelect) {
      serviceSelect.value = "Website Design & Development";
    }
    if (messageTextarea && !messageTextarea.value) {
      messageTextarea.value = "Hi SouthernLink, I would like to claim the $50 Website Design Special Offer for my project.";
    }
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const statusDiv = document.getElementById("contact-status");
      const submitBtn = contactForm.querySelector("button[type='submit']");

      const name = contactForm.querySelector("#name")?.value || "";
      const email = contactForm.querySelector("#email")?.value || "";
      const phone = contactForm.querySelector("#phone")?.value || "";
      const service = contactForm.querySelector("#service")?.value || "General Inquiry";

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'Sending...';
      }

      setTimeout(() => {
        if (statusDiv) {
          statusDiv.innerHTML = `
            <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
              <div class="font-bold mb-1">
                Thank you, ${name}! Your message has been received.
              </div>
              <p class="text-xs text-emerald-700">
                Our team will review your inquiry regarding <strong>${service}</strong> and respond to you at <strong>${email || phone}</strong> as soon as possible.
              </p>
            </div>
          `;
        }

        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = 'Send Message';
        }
      }, 500);
    });
  }
});
