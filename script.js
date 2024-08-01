function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



var options = {
  strings: ['Currently a software intern @ Headstarter AI', 'A Budding Full Stack Developer ',' An Aspiring ML Engineer'],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 1000,
  loop: true
};

var typed = new Typed('#element', options);

