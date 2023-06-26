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