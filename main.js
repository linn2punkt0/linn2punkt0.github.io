let menuIsOpen = false;

// Burger-animation
const navIcon = document.querySelector("#nav-icon3");
const menuSelector = document.querySelector(".menu-selector");
navIcon.addEventListener("click", () => {
  navIcon.classList.toggle("open");
  menuSelector.classList.toggle("display");
  menuIsOpen = !menuIsOpen;
});

// Close menu when clicking on link
const menuLinks = menuSelector.querySelectorAll(".goTo");
function closeMenu() {
  navIcon.classList.toggle("open");
  menuSelector.classList.remove("display");
  menuIsOpen = !menuIsOpen;
}

menuLinks.forEach(link => {
  link.addEventListener("click", () => closeMenu());
});
// Navbar visible when scrolling up
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (menuIsOpen) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".navbar").style.top = "0";
    } else {
      document.querySelector(".navbar").style.top = "-56px";
    }
    prevScrollpos = currentScrollPos;
  }
};
