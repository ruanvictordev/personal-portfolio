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