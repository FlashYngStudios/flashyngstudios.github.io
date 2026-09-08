/* ==========================================================================
   SLIDER AUTOMÁTICO DE FONDO (HERO SECTION)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todas las capas de imagen dentro del slider
    const slides = document.querySelectorAll('#hero-slider .slide');
    
    // Si no existen slides en la página actual (ej. fuera de index.html), corta la ejecución
    if (slides.length <= 1) return;

    let currentSlide = 0;
    const slideInterval = 10000; // Tiempo en milisegundos entre cada cambio (5 segundos)

    /**
     * Alterna la clase 'active' para manejar la opacidad con la transición suave definida en CSS
     */
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
