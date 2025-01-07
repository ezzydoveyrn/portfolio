/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
// if (navToggle) {
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});
// }
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if (navClose) {
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});
// }

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // const navMenu = document.getElementById("nav-menu");
  /* When we click on each nav__link, we remove the show-menu class */
  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

/*==================== SKILLS ====================*/
/* Calculate Parcentage */
const skillsNumber = document.getElementsByClassName("skills__number");
const skillsPercentage = document.getElementsByClassName("skills__percentage");
for (let i = 0; i < skillsNumber.length; i++) {
  let skillNum = skillsNumber[i].innerHTML;
  skillsPercentage[i].style.width = skillNum;
}

/* Show And Hide Skills */
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target); // #education or #work

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
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
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
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

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; // css height of every section
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  if (this.scrollY > 0) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

/*==================== Change Main Color Theme ====================*/
/* 1 => solution one
const changeColorBtn = document.getElementById("change-color");
const mainColor = document.getElementById("main-color");
const purpleBtn = document.getElementById("purple-color");
const greenBtn = document.getElementById("green-color");
const blueBtn = document.getElementById("blue-color");
const pinkBtn = document.getElementById("pink-color");
const purple = "color-purple";
const green = "color-green";
const blue = "color-blue";
const pink = "color-pink";

changeColorBtn.addEventListener("click", () => {
  let classExist = mainColor.classList.contains("show-colors");
  if (classExist) mainColor.classList.remove("show-colors");
  else mainColor.classList.add("show-colors");
});

purpleBtn.addEventListener("click", () => {
  localStorage.setItem("selected-color-main", purple);
  document.body.classList.add(purple);
  document.body.classList.remove(green);
  document.body.classList.remove(blue);
  document.body.classList.remove(pink);
  mainColor.classList.remove("show-colors");
});
greenBtn.addEventListener("click", () => {
  localStorage.setItem("selected-color-main", green);
  document.body.classList.add(green);
  document.body.classList.remove(purple);
  document.body.classList.remove(blue);
  document.body.classList.remove(pink);
  mainColor.classList.remove("show-colors");
});
blueBtn.addEventListener("click", () => {
  localStorage.setItem("selected-color-main", blue);
  document.body.classList.add(blue);
  document.body.classList.remove(green);
  document.body.classList.remove(purple);
  document.body.classList.remove(pink);
  mainColor.classList.remove("show-colors");
});
pinkBtn.addEventListener("click", () => {
  localStorage.setItem("selected-color-main", pink);
  document.body.classList.add(pink);
  document.body.classList.remove(green);
  document.body.classList.remove(blue);
  document.body.classList.remove(purple);
  mainColor.classList.remove("show-colors");
});

if (localStorage.getItem("selected-color-main")) {
  let localStorageCurrentColorTheme = localStorage.getItem(
    "selected-color-main"
  );
  document.body.classList.add(localStorageCurrentColorTheme);
}
*/

/* 2 => solution two
// to show and hide color picker
const changeColorBtn = document.getElementById("change-color");
const mainColor = document.getElementById("main-color");
changeColorBtn.addEventListener("click", () => {
  let classExist = mainColor.classList.contains("show-colors");
  if (classExist) mainColor.classList.remove("show-colors");
  else mainColor.classList.add("show-colors");
});

/////
const colors = [
  { name: "purple", class: "color-purple" },
  { name: "green", class: "color-green" },
  { name: "blue", class: "color-blue" },
  { name: "pink", class: "color-pink" },
];

colors.forEach((color) => {
  const button = document.getElementById(`${color.name}-color`);
  button.addEventListener("click", () => {
    localStorage.setItem("selected-color-main", color.class);

    colors.forEach((c) => {
      document.body.classList.toggle(c.class, c.class === color.class); // if the condition is true the class will be add and if the condition is false the class will be removed
    });

    mainColor.classList.remove("show-colors");
  });
});

if (localStorage.getItem("selected-color-main")) {
  let localStorageCurrentColorTheme = localStorage.getItem(
    "selected-color-main"
  );
  document.body.classList.add(localStorageCurrentColorTheme);
}
*/

////////// The Best solution //////////
// to show and hide color picker
const changeColorBtn = document.getElementById("change-color");
const mainColor = document.getElementById("main-color");
changeColorBtn.addEventListener("click", () => {
  mainColor.style.display = mainColor.style.display == "none" ? "flex" : "none";
});

/////
const colors = [
  { name: "purple", value: 250 },
  { name: "green", value: 142 },
  { name: "blue", value: 230 },
  { name: "pink", value: 340 },
];

colors.forEach((color) => {
  const button = document.getElementById(`${color.name}-color`);
  button.addEventListener("click", () => {
    localStorage.setItem("selected-color-main", color.value);
    document.documentElement.style.setProperty("--hue-color", color.value);
    mainColor.style.display =
      mainColor.style.display == "none" ? "flex" : "none";
  });
});

if (localStorage.getItem("selected-color-main")) {
  const currentColor = localStorage.getItem("selected-color-main");
  document.documentElement.style.setProperty("--hue-color", currentColor);
}
