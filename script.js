// Get elements class = "hamburger", class = "dropdown-content" and class = "main-flexbox".
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".dropdown-content");
const mainFlexbox = document.querySelector(".main-flexbox")

// Add an eventlistner to the element hamburger which will activate function mobileMenu with action click.
hamburger.addEventListener("click", mobileMenu);

// Function mobileMenu
function mobileMenu() {
    hamburger.classList.toggle("active"); // Toggle between showing the hamburger menu and a cross with class active.
    navMenu.classList.toggle("show"); // Toggle between showing and not showing the mobile menu with class show.
    mainFlexbox.classList.toggle("adaptToMenu"); // Toggle between adapting the main flexbox to the header and the navMenu.
}
