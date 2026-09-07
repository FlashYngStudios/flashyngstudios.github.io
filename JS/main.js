// Obtener el botón por su ID
const themeToggleBtn = document.getElementById('theme-toggle');

// Escuchar el clic del usuario
themeToggleBtn.addEventListener('click', () => {
    // Leer el tema actual del atributo 'data-theme' en el HTML
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Alternar entre claro y oscuro
    if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleBtn.textContent = 'Modo Oscuro';
    }
});
