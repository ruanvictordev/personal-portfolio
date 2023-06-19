
// MENU RESPONSIVE ======================================================================

const btnMobile = document.querySelector(".btn-menu");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);



// EFECT TYPING ==========================================================================

const descript = document.querySelector('.descript');

function typeWrite(element){
  const textoArray = element.innerHTML.split('');
  element.innerHTML = '';
  textoArray.forEach((letra, i) =>{
    setTimeout(function() {
      element.innerHTML += letra;
    }, 25 * i)
  })
}

typeWrite(descript)


// ARROW UP PAGE EFECT ======================================================================

const btnTop = document.getElementById("btnTop");

btnTop.addEventListener("click", function(){
  window.scrollTo(0,0)
})

// Ocultar

document.addEventListener('scroll', ocultar)

function ocultar(){
  if(window.scrollY > 10){
    btnTop.style.display = 'flex';
  } else {
    btnTop.style.display = 'none';
  }
}

ocultar()