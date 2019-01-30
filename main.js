let menuIsOpen = false;

// Burger-animation
const navIcon = document.querySelector("#nav-icon3");
const navbar = document.querySelector(".navbar");
const menuSelector = document.querySelector(".menu-selector");
navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("open");
  menuSelector.classList.toggle("display");
  navbar.classList.toggle("hide");
  menuIsOpen = !menuIsOpen;
});

// Close menu when clicking on link
const menuLinks = menuSelector.querySelectorAll(".goTo");
function closeMenu() {
  navIcon.classList.toggle("open");
  menuSelector.classList.remove("display");
  navbar.classList.remove("hide");
  menuIsOpen = !menuIsOpen;
}

menuLinks.forEach(link => {
  link.addEventListener("click", () => closeMenu());
});
