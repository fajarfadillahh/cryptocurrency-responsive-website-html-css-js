// SHOW HEADER MENU
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.addEventListener("click", () => {
      menu.classList.add("show-menu");
    });
    close.addEventListener("click", () => {
      menu.classList.remove("show-menu");
    });
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// STICKY HEADER
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.header__menu a[href*= ${sectionId} ]`)
        .classList.add("section-active");
    } else {
      document
        .querySelector(`.header__menu a[href*= ${sectionId} ]`)
        .classList.remove("section-active");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// SCROLLUP
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
