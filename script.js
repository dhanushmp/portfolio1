function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to open the modal
function openModal() {
  document.getElementById("videoModal").style.display = "flex"; // Show the modal
}

// Function to close the modal
function closeModal() {
  document.getElementById("videoModal").style.display = "none"; // Hide the modal
}