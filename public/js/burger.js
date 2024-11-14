// burger.js
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  // Toggle the "active" class on the nav-links when the burger menu is clicked
  navLinks.classList.toggle("active");
  // Optionally, toggle the "open" class on the burger menu for the X effect
  burgerMenu.classList.toggle("open");
});
