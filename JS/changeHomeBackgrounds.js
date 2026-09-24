/* ==========================================================================
   SLIDER AUTOMÁTICO DE FONDO (HERO SECTION)
   ========================================================================== /
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las capas de imagen dentro del slider
    const slides = document.querySelectorAll('#hero-slider .slide');
    
    // Si no existen slides en la página actual (ej. fuera de index.html), corta la ejecución
    if (slides.length <= 1) return;

    let currentSlide = 0;
    const slideInterval = 5000; // Tiempo en milisegundos entre cada cambio (5 segundos)

    /**
     * Alterna la clase 'active' para manejar la opacidad con la transición suave definida en CSS
     /
    function nextSlide() {
        // Quita la clase activa a la imagen actual
        slides[currentSlide].classList.remove('active');
        
        // Calcula el índice de la siguiente imagen (vuelve a 0 al llegar al final)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Aplica la clase activa a la nueva imagen
        slides[currentSlide].classList.add('active');
    }

    // Inicia el temporizador cíclico
    setInterval(nextSlide, slideInterval);
});
*/

// Version 2.0 - 18 09 2026 - Un programador sufriendo un viernes a las 02:41 AM.
/* ==========================================================================
   SLIDER AUTOMÁTICO DE FONDO (HERO SECTION)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('#hero-slider .slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    const slideInterval = 7000; // Tiempo en milisegundos (5 segundos)
    let lastTime = performance.now();

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function loop(currentTime) {
        // Calcula cuánto tiempo ha pasado desde el último cambio
        if (currentTime - lastTime >= slideInterval) {
            nextSlide();
            // Restablece la marca de tiempo ajustando el desfase exacto
            lastTime = currentTime;
        }
        requestAnimationFrame(loop);
    }

    // Inicia el ciclo de animación
    requestAnimationFrame(loop);
});
