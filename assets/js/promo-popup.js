(function () {
  const DELAY_MS = 800;

  function closePopup() {
    const modal = document.getElementById("sl-promo-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    document.removeEventListener("click", handleOutsideClick);
  }

  function showPopup() {
    let modal = document.getElementById("sl-promo-modal");
    if (!modal) {
      modal = createPopupDOM();
      document.body.appendChild(modal);
      bindEvents(modal);
    }
    modal.classList.remove("hidden");

    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 50);
  }

  function handleOutsideClick(e) {
    const modal = document.getElementById("sl-promo-modal");
    if (modal && !modal.classList.contains("hidden") && !modal.contains(e.target)) {
      closePopup();
    }
  }

  function createPopupDOM() {
    const card = document.createElement("div");
    card.id = "sl-promo-modal";
    card.className = "fixed top-20 sm:top-24 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-[440px] max-w-lg bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border-2 border-slate-300 p-6 sm:p-7 opacity-90 hover:opacity-100 transition-all duration-300";
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-modal", "false");

    card.innerHTML = `
      <div class="relative text-center">
        <button type="button" 
                id="sl-promo-close-btn" 
                aria-label="Close popup" 
                class="absolute -top-2 -right-2 p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors focus:outline-none">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-blue-50 text-blue-600 border border-blue-200 mb-3">
          Special Promotion
        </div>
        
        <h3 class="font-heading text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
          Create Your Own Website for Only <span class="text-blue-600">$50</span>
        </h3>

        <p class="text-slate-700 text-sm sm:text-[15px] font-medium leading-relaxed mb-5">
          Build a professional website for your business or personal brand for just <strong class="text-slate-900 font-bold">$50</strong> — includes a professional domain (<strong class="text-blue-600 font-semibold">yoursite.com</strong> or <strong class="text-blue-600 font-semibold">yoursite.com.au</strong>).
        </p>

        <a href="contact.html?promo=website50" 
           class="btn-primary w-full flex items-center justify-center text-sm sm:text-base font-extrabold uppercase tracking-wider py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
          <span>Enquire Now</span>
        </a>
      </div>
    `;

    return card;
  }

  function bindEvents(modal) {
    const closeBtn = modal.querySelector("#sl-promo-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closePopup();
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closePopup();
      }
    });
  }

  window.showPromoPopup = showPopup;
  window.closePromoPopup = closePopup;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(showPopup, DELAY_MS);
    });
  } else {
    setTimeout(showPopup, DELAY_MS);
  }
})();
