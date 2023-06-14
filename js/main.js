const btnMobile = document.querySelector(".btn-menu");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
