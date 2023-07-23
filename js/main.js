
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


// SCROLL MENU EFECT =============================================================================


document.addEventListener('DOMContentLoaded', function() {
  // Captura todos os links de âncora dentro do menu de navegação
  var linksMenu = document.querySelectorAll('.menu .menu-itens li a');

  // Adiciona um evento de clique a cada link do menu
  linksMenu.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link

      var targetId = this.getAttribute('href'); // Obtém o ID do alvo do link

      // Calcula a posição do alvo e o deslocamento necessário para ajustar a posição
      var targetOffsetTop = document.querySelector(targetId).offsetTop;
      var navHeight = document.querySelector('nav').offsetHeight;
      var offset = navHeight;

      // Ajusta a posição de scroll
      window.scrollTo({
        top: targetOffsetTop - offset,
        behavior: 'smooth'
      });
    });
  });
});


// SCROLL REVEAL EFECT =============================================================================

window.sr = ScrollReveal({ reset: true,origin: "top", distance:"20px", duration: 4000 });

sr.reveal('#home', { duration: 900 });

sr.reveal('#about', { duration: 1000 });

sr.reveal('#projects', { duration: 900 });

sr.reveal('#journey', { duration: 1000 });

sr.reveal('#tech', { duration: 900 });