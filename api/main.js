// ============================================================
//  NAV MENU TOGGLE
// ============================================================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// ============================================================
//  SCROLL REVEAL
// ============================================================
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// --- HERO SECTION (new SKYWINGS-style header) ---
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  delay: 200,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 900,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1300,
});

// --- SERVICE SECTION ---
ScrollReveal().reveal(".service .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 150,
  delay: 300,
});

// --- ABOUT SECTION ---
ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".about__list li", {
  ...scrollRevealOption,
  origin: "right",
  interval: 200,
  delay: 400,
});
// --- CAM NANG SECTION ---
ScrollReveal().reveal(".camnan__content", {
  ...scrollRevealOption,
  origin: "left",
  delay: 200,
});
ScrollReveal().reveal(".camnan__image", {
  ...scrollRevealOption,
  origin: "right",
  delay: 400,
});

// --- PORTFOLIO SECTION ---
ScrollReveal().reveal(".portfolio__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".portfolio__image", {
  ...scrollRevealOption,
  origin: "left",
  delay: 300,
});
ScrollReveal().reveal(".portfolio__list li", {
  ...scrollRevealOption,
  origin: "right",
  interval: 200,
  delay: 300,
});

// --- FEEDBACK SECTION ---
ScrollReveal().reveal(".feedback__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".swiper-slide", {
  ...scrollRevealOption,
  interval: 200,
  delay: 300,
});

// --- FOOTER ---
ScrollReveal().reveal(".footer__col", {
  ...scrollRevealOption,
  interval: 200,
});

// ============================================================
//  SWIPER — FEEDBACK SLIDER
// ============================================================
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// ============================================================
//  SMOOTH SCROLL — anchor links
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    if (!targetId) return;
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});