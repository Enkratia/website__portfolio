/* =========== MENU SHOW-HIDDEN ========== */
const navMenu = document.querySelector("#nav-menu"),
      navToggle = document.querySelector("#nav-toggle"),
      navClose = document.querySelector("#nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//====================== REMOVE MENU MOBILE =====================//
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//====================== ACCORDION SKILLS =====================//
const skillsContent = document.querySelectorAll(".skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  const openSkills = document.querySelector(".skills__open");
  openSkills.classList.replace("skills__open", "skills__close");

  this.parentElement.classList.replace("skills__close", "skills__open");
}

skillsHeader.forEach(header => {
  header.addEventListener("click", toggleSkills);
});

//====================== QUALIFICATION TABS =====================//
const tabs = document.querySelectorAll("[data-target]"),
      tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("qualification__active");
    });

    target.classList.add("qualification__active");

    tabs.forEach(tab => {
      tab.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/* =========== SERVICES MODAL ========== */
const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove("active-modal");
    });
  });
});

/* =========== PORTFOLIO SWIPER ========== */
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

/* =========== TESTIMONIAL SWIPER ========== */
let swiper2 = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {  
    568: {
      slidesPerView: 2,
    },
  },
});

//====================== SCROLL SECTIONS ACTIVE LINK =====================//
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

//====================== CHANGE BACKGROUND HEADER =====================//
function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader); 


//====================== SHOW SCROLL-UP =====================//
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


//====================== DARK LIGHT THEME =====================//
const themeButton = document.getElementById('theme-button');

window.onload = () => {
  let selectedTheme = localStorage.getItem('selected-theme');
  if (selectedTheme === "dark-theme") themeButton.click();
}

function toggleDarkMode () {
  selectedTheme = document.body.classList.contains("dark-theme") ? "dark-theme" : "";
  localStorage.setItem('selected-theme', selectedTheme);
  
  if (selectedTheme === "dark-theme") {
    themeButton.classList.replace("uil-moon", "uil-sun");
    return;
  } 
  themeButton.classList.replace("uil-sun", "uil-moon");
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle("dark-theme");
  toggleDarkMode();
});


