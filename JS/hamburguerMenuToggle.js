document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    // CONFIGURACIÓN: Cambia a true para bloquear el scroll o a false para permitirlo
    const bloquearScroll = true;

    burgerBtn.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');

        // Control del bloqueo de scroll/slider según la variable booleana
        if (bloquearScroll) {
            if (isOpen) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        }
    });

    // Cerrar el menú y restaurar el scroll al hacer clic en cualquier enlace
    const menuLinks = navMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            if (bloquearScroll) {
                document.body.classList.remove('no-scroll');
            }
        });
    });
});
