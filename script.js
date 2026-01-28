// Seleção dos elementos
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a");

// 1. Abrir/Fechar o menu e animar o botão (X)
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// 2. Fechar o menu automaticamente ao clicar em um link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.classList.remove("open");
  });
});