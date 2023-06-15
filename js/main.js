const btnMobile = document.querySelector(".btn-menu");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);


const descript = document.querySelector('.descript');

function typeWrite(element){
  const textoArray = element.innerHTML.split('');
  element.innerHTML = '';
  textoArray.forEach((letra, i) =>{
    setTimeout(function() {
      element.innerHTML += letra;
    }, 55 * i)
  })
}

typeWrite(descript)