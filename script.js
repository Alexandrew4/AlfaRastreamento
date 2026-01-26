const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");  // ativa o menu
  menuToggle.classList.toggle("open"); // anima o botão
});
