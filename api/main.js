const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 4000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 4500,
});

ScrollReveal().reveal(".location", {
  ...scrollRevealOption,
  origin: "left",
  delay: 5000,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});

// Additional ScrollReveal for other sections
ScrollReveal().reveal(".service__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
  delay: 500,
});

ScrollReveal().reveal(".about__image", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__list li", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
  delay: 500,
});

ScrollReveal().reveal(".portfolio__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".portfolio__image", {
  ...scrollRevealOption,
  origin: "left",
  delay: 500,
});
ScrollReveal().reveal(".portfolio__list li", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
  delay: 500,
});

ScrollReveal().reveal(".feedback__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".swiper-slide", {
  ...scrollRevealOption,
  interval: 500,
  delay: 500,
});

ScrollReveal().reveal(".subscribe__content", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".footer__col", {
  ...scrollRevealOption,
  interval: 500,
});

// Initialize Swiper for feedback slider
// Note: Ensure Swiper JS and CSS are included in the HTML, e.g.:
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
// <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// Note: Add <div class="swiper-pagination"></div> inside .swiper if needed for pagination bullets.

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});