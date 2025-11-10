// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

  // === SMOOTH SCROLLING ===
  // Get all links that start with #
  const navLinks = document.querySelectorAll('a[href^="#"]');

  // When you click a link, scroll smoothly to that section
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Stop normal jump behavior
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // === MOBILE MENU ===
  // Get the menu elements
  const menuButton = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("mobile-menu-close");
  const menuLinks = document.querySelectorAll(".mobile-menu-link");

  // Open menu when clicking hamburger button
  menuButton.addEventListener("click", function () {
    menu.classList.remove("hidden");
  });

  // Close menu when clicking X button
  closeButton.addEventListener("click", function () {
    menu.classList.add("hidden");
  });

  // Close menu when clicking on the dark background
  menu.addEventListener("click", function (e) {
    if (e.target === menu) {
      menu.classList.add("hidden");
    }
  });

  // Close menu when clicking any menu link
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menu.classList.add("hidden");
    });
  });

  // Close menu when user scrolls
  window.addEventListener("scroll", function () {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  });
});
