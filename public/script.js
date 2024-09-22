const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});


function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu');
  menu.classList.toggle('open');
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  // Ensure the menu and icon elements exist before toggling
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}
