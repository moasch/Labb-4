const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".dropdown-content");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("show");
}
