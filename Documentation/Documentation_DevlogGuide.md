# 📝 Guía para Publicar en el Devlog (`devlog.html`)

El **Devlog** (diario de desarrollo) es una de las herramientas más potentes para un estudio indie. Permite mostrar avances, conectar con los jugadores y construir una comunidad antes del lanzamiento de un juego.

---

## 1. Dónde ubicar los archivos multimedia

Guarda las capturas y GIFs que utilices en cada publicación dentro de una subcarpeta organizada:
`Assets/Images/Devlogs/YYYY-MM-tema/` (por ejemplo: `Assets/Images/Devlogs/2026-03-sistema-iluminacion/`).

> [!TIP]
> Los GIFs animados suelen pesar mucho (> 5 MB). Es muy recomendable convertirlos a formato video corto `.mp4` o `.webm` o comprimir el GIF para que la web no tarde en cargar.

---

## 2. Plantilla de Entrada de Devlog (HTML)

Abre `devlog.html` y ubica el contenedor de artículos (por ejemplo `<div class="devlog-container">`). Agrega la nueva entrada siempre al principio (la más reciente arriba):

```html
<!-- ==================== ENTRADA DEVLOG ==================== -->
<article class="devlog-entry">
    <header class="devlog-header">
        <div class="devlog-meta">
            <time datetime="2026-09-15">15 de Septiembre, 2026</time>
            <span class="devlog-tag">Devlog #01</span>
            <span class="devlog-game">Nombre del Juego</span>
        </div>
        <h2 class="devlog-title">Título Atractivo del Avance o Mecánica</h2>
        <p class="devlog-author">Por <strong>Equipo FlashYng</strong></p>
    </header>

    <!-- Imagen o banner principal del post -->
    <div class="devlog-media">
        <img src="Assets/Images/Devlogs/ejemplo-banner.webp" alt="Avance visual del juego" loading="lazy">
        <figcaption>Demostración de la nueva iluminación dinámica en tiempo real.</figcaption>
    </div>

    <!-- Contenido del Devlog -->
    <div class="devlog-body">
        <p>
            ¡Hola a todos! Durante las últimas semanas hemos estado trabajando intensamente 
            en mejorar la respuesta de los controles y pulir el apartado visual...
        </p>

        <h3>¿Qué hay de nuevo?</h3>
        <ul>
            <li><strong>Nuevo sistema de partículas:</strong> Efectos de impacto mejorados.</li>
            <li><strong>Inteligencia Artificial:</strong> Enemigos ahora reaccionan al sonido.</li>
            <li><strong>Rendimiento:</strong> 60 FPS estables optimizando texturas.</li>
        </ul>

        <p>
            ¿Qué opinas sobre este cambio? Nos encantaría leer tu feedback en nuestro servidor 
            de <a href="https://discord.gg/7MVKK58HyQ" target="_blank" rel="noopener">Discord</a>.
        </p>
    </div>

    <footer class="devlog-footer">
        <a href="https://discord.gg/7MVKK58HyQ" target="_blank" rel="noopener" class="btn btn-sm btn-discord">
            Comentar en Discord
        </a>
    </footer>
</article>
<!-- ======================================================== -->
```

---

## 3. Consejos para que tus Devlogs tengan éxito

1. **Usa imágenes y videos:** Los lectores prefieren ver antes que leer mucho texto. Una captura o un clip corto vale más que 500 palabras.
2. **Habla de los retos:** A la comunidad de juegos indie le encanta ver los errores graciosos de física, los bugs superados y las decisiones de diseño.
3. **Llamado a la acción (Call To Action):** Al final de cada devlog, invita a unirse al Discord de FlashYng Studios o a seguir la página de itch.io.
