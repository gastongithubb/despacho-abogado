document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.querySelector('.back-to-top');
  const navbar = document.querySelector('.navbar');

  // Funcionalidad para el botón "Volver arriba"
  window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }

      // Mostrar u ocultar la barra de navegación al hacer scroll
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
          // Scroll hacia abajo
          navbar.style.top = '-70px';
      } else {
          // Scroll hacia arriba
          navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
  });

  // Botón "Volver arriba" - scroll suave al inicio
  backToTopButton.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Funcionalidad del menú hamburguesa
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('#navbarSupportedContent');

  navbarToggler.addEventListener('click', function () {
      navbarCollapse.classList.toggle('show');
      navbarToggler.setAttribute('aria-expanded', navbarCollapse.classList.contains('show'));
  });
});
