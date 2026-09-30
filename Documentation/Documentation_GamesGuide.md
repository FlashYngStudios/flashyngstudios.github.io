# 🕹️ Guía para Añadir y Actualizar Videojuegos (`games.html`)

Esta guía explica cómo registrar un nuevo videojuego en el catálogo web de **FlashYng Studios** manteniendo el formato visual y buenas prácticas de rendimiento.

---

## 1. Preparación de Recursos Visuales (Assets)

Antes de editar el código, prepara las imágenes del juego y guárdalas en la carpeta:
`Assets/Images/Games/` (o dentro de `Assets/Images/`).

| Recurso | Formato Recomendado | Dimensiones Ideales | Peso Máximo |
| :--- | :--- | :--- | :--- |
| **Portada / Cápsula** | `.webp` o `.png` | 600 x 360 px (16:9 o 3:2) | < 250 KB |
| **Capturas (Screenshots)** | `.webp` o `.jpg` | 1920 x 1080 px | < 400 KB |
| **Logo o Banner del juego** | `.png` transparente | 800 x 300 px | < 200 KB |

> [!TIP]
> Usa herramientas gratuitas como [Squoosh.app](https://squoosh.app/) o [TinyPNG](https://tinypng.com/) para convertir tus imágenes a formato `.webp`. Esto hace que la web cargue casi instantáneamente en teléfonos móviles.

---

## 2. Plantilla de Tarjeta de Videojuego (HTML)

Abre el archivo `games.html` y busca el contenedor principal de la lista de juegos (usualmente `<div class="games-grid">` o `<section class="games-section">`). 

Pega la siguiente estructura para cada nuevo juego:

```html
<!-- ==================== FICHA DE JUEGO ==================== -->
<article class="game-card">
    <div class="game-cover">
        <img src="Assets/Images/Games/nombre-del-juego-cover.webp" alt="Portada de Nombre Del Juego" loading="lazy">
        <span class="game-badge in-dev">En Desarrollo</span>
        <!-- Alternativas de badge: 
             <span class="game-badge released">Lanzado</span>
             <span class="game-badge demo">Demo Disponible</span>
        -->
    </div>
    <div class="game-content">
        <h3 class="game-title">Nombre del Videojuego</h3>
        
        <div class="game-meta">
            <span class="genre">Aventura / Puzles</span>
            <span class="engine">Godot Engine</span>
        </div>

        <p class="game-description">
            Breve sinopsis del juego (2 o 3 líneas). Explica la mecánica principal, 
            el conflicto o la ambientación que lo hace llamativo para el jugador.
        </p>

        <div class="game-actions">
            <!-- Botón de itch.io -->
            <a href="https://flashyng.itch.io/nombre-juego" target="_blank" rel="noopener" class="btn btn-primary">
                Jugar en itch.io
            </a>

            <!-- Botón de Steam (opcional si aún no está en Steam) -->
            <!-- 
            <a href="https://store.steampowered.com/app/XXXXXX" target="_blank" rel="noopener" class="btn btn-outline">
                Añadir a Wishlist
            </a>
            -->

            <!-- Enlace al Trailer o Devlog -->
            <a href="https://www.youtube.com/watch?v=ID_DEL_TRAILER" target="_blank" rel="noopener" class="btn btn-secondary">
                Ver Trailer
            </a>
        </div>
    </div>
</article>
<!-- ======================================================== -->
```

---

## 3. Estados de los Videojuegos (`badges`)

Puedes asignar las siguientes clases al elemento `<span class="game-badge ...">`:
* `in-dev`: Para títulos que están en fase de prototipo o desarrollo activo.
* `demo`: Si tienes una demo jugable en itch.io.
* `released`: Cuando el juego esté finalizado y publicado.
* `jam`: Para proyectos creados durante Game Jams.

---

## 4. Checklist antes de publicar el juego a GitHub

- [ ] La imagen del juego está dentro de la carpeta `Assets/Images/`.
- [ ] La imagen tiene el atributo `loading="lazy"` para no ralentizar la web.
- [ ] El enlace a itch.io (`https://flashyng.itch.io/...`) abre la página correcta.
- [ ] La sinopsis no tiene faltas ortográficas.
- [ ] Guardar los cambios, probar con Live Server y hacer `git commit` + `git push`.
