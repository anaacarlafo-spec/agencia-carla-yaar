// Carla.agenciayaar - Material de Ajuda
// script.js

(function () {
  // ========== ACCORDION ==========
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const content = this.nextElementSibling;

      // Fechar todos
      buttons.forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.classList.remove('open');
      });

      // Abrir o clicado (se estava fechado)
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('open');
      }
    });
  });

  // ========== THEME TOGGLE ==========
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeBtn.addEventListener('click', function () {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      themeBtn.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    });
  }
})();
