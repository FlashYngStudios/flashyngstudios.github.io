# 🎮 FlashYng Studios — Sitio Web Oficial

Repositorio del sitio web oficial de **FlashYng Studios**, estudio de desarrollo independiente enfocado en crear experiencias y videojuegos únicos e inolvidables.

🌐 **Sitio web en vivo:** [flashyngstudios.github.io](https://flashyngstudios.github.io)  
🎮 **itch.io:** [flashyng.itch.io](https://flashyng.itch.io)  
💬 **Comunidad de Discord:** [discord.gg/7MVKK58HyQ](https://discord.gg/7MVKK58HyQ)  
📺 **YouTube:** [@FlashYngStudios](https://www.youtube.com/@FlashYngStudios)  
📸 **Instagram:** [@flashyngstudios](https://www.instagram.com/flashyngstudios)

---

## 📁 Estructura del Repositorio

El proyecto está construido con tecnologías web estándar (HTML5, CSS3 y JavaScript nativo), sin dependencias complejas de compilación:

```text
flashyngstudios.github.io/
├── Assets/
│   └── Images/              # Logotipos, capturas de juegos, banners y fondos
├── CSS/
│   ├── variables.css        # Colores, fuentes y variables globales
│   ├── base.css             # Resets, tipografía base, header flotante y footer
│   ├── index.css            # Estilos específicos de la portada y hero slider
│   ├── games.css            # Estilos del catálogo de videojuegos
│   ├── devlog.css           # Estilos del diario de desarrollo
│   ├── faq.css              # Estilos de preguntas frecuentes
│   ├── contact.css          # Estilos del formulario y datos de contacto
│   └── style.css            # Hoja de estilos generales / complementarios
├── JS/
│   └── main.js              # Slider automático, interactividad de navegación y scripts
├── index.html               # Página de inicio (Hero, presentación y enlaces principales)
├── games.html               # Catálogo de juegos en desarrollo y publicados
├── devlog.html              # Blog / Noticias sobre el progreso de los juegos
├── faq.html                 # Preguntas frecuentes sobre el estudio y lanzamientos
├── contact.html             # Formulario de contacto y redes
└── privacy-policy.html      # Política de privacidad
```

---

## 🚀 Cómo probar la web en local en tu PC

Para probar los cambios antes de subirlos a GitHub:

### Opción 1: Con Visual Studio Code (Recomendado)
1. Abre la carpeta del repositorio en **VS Code**.
2. Instala la extensión **Live Server** (de Ritwick Dey).
3. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
4. La web se abrirá en tu navegador (usualmente en `http://127.0.0.1:5500`) y se actualizará automáticamente cada vez que guardes un archivo.

### Opción 2: Con Python (sin instalar nada extra)
Si tienes Python instalado, abre una consola en la carpeta del proyecto y ejecuta:
```bash
python -m http.server 8000
```
Luego entra en tu navegador a: `http://localhost:8000`

---

## 🌐 Publicación y Despliegue (GitHub Pages)

El sitio utiliza **GitHub Pages** para alojarse de forma 100% gratuita con soporte HTTPS:

1. Cada vez que hagas un `git push` a la rama `main`, GitHub Pages actualiza la web automáticamente en pocos minutos.
2. La configuración se encuentra en:  
   **Settings** > **Pages** > **Branch:** `main` / `root`.

---

## 📚 Guías y Documentación Adicional

Hemos separado la documentación en archivos modulares para facilitar la consulta:

* 🕹️ [GUIA_JUEGOS.md](file:///C:/Users/lucas/.gemini/antigravity/brain/8df52001-6a92-43f7-bf74-1386cb8f44df/GUIA_JUEGOS.md): Cómo añadir un nuevo juego al catálogo (`games.html`).
* 📝 [GUIA_DEVLOG.md](file:///C:/Users/lucas/.gemini/antigravity/brain/8df52001-6a92-43f7-bf74-1386cb8f44df/GUIA_DEVLOG.md): Cómo escribir y publicar una entrada en el diario de desarrollo (`devlog.html`).
* 🎨 [DESIGN_SYSTEM.md](file:///C:/Users/lucas/.gemini/antigravity/brain/8df52001-6a92-43f7-bf74-1386cb8f44df/DESIGN_SYSTEM.md): Paleta de colores, componentes de interfaz y guía de estilos CSS.
* 📰 [PRESS_KIT.md](file:///C:/Users/lucas/.gemini/antigravity/brain/8df52001-6a92-43f7-bf74-1386cb8f44df/PRESS_KIT.md): Información de prensa, logotipos y fichas de proyecto para medios y streamers.

---

## 👥 Equipo y Créditos
© 2026 **FlashYng Studios**. Todos los derechos reservados.
