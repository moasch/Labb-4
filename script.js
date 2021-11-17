const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".dropdown-content");
const mainFlexbox = document.querySelector(".main-flexbox")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
    mainFlexbox.classList.toggle("adaptToMenu");
}
