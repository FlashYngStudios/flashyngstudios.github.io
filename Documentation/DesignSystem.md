# 🎨 Sistema de Diseño y Estilos CSS — FlashYng Studios

Este documento recopila las variables, componentes y lineamientos de estilo utilizados en el sitio web de **FlashYng Studios** para mantener una estética coherente en todas las páginas.

---

## 1. Variables Globales (`CSS/variables.css`)

El sitio utiliza variables CSS nativas para que cualquier cambio de color o tipografía se refleje instantáneamente en toda la web:

```css
:root {
    /* Paleta Principal */
    --bg-dark: #0d0f17;          /* Fondo principal oscuro */
    --bg-card: rgba(22, 27, 46, 0.75); /* Fondo para tarjetas y paneles */
    --accent-color: #6366f1;     /* Color de acento / primario (índigo/morado) */
    --accent-hover: #4f46e5;     /* Estado hover del acento */
    
    /* Textos */
    --text-primary: #f8fafc;    /* Texto principal de alto contraste */
    --text-secondary: #94a3b8;  /* Texto secundario y descripciones */
    --text-muted: #64748b;      /* Fechas, pie de página y metadatos */

    /* Efectos de cristal (Glassmorphism) */
    --glass-bg: rgba(13, 15, 23, 0.65);
    --glass-border: rgba(255, 255, 255, 0.08);
    --glass-blur: blur(12px);

    /* Tipografías */
    --font-heading: 'Segoe UI', system-ui, -apple-system, sans-serif;
    --font-body: 'Segoe UI', system-ui, -apple-system, sans-serif;
    
    /* Bordes y Sombras */
    --radius-sm: 8px;
    --radius-md: 14px;
    --radius-lg: 20px;
    --shadow-soft: 0 10px 30px rgba(0, 0, 0, 0.4);
}
```

---

## 2. Componentes Clave

### A. Cabecera Flotante con Glassmorphism (`.glass-header`)
La cabecera utiliza un efecto de cristal esmerilado que deja traslucir el fondo del hero o el contenido al hacer scroll:
```css
.glass-header {
    position: fixed;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 1200px;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    z-index: 1000;
}
```

### B. Botones (`.btn`)
* `.btn-header`: Botón estilizado para el enlace de Discord en la barra superior.
* `.btn-primary`: Botón principal con color de acento para llamadas a la acción (ej. "Jugar en itch.io").
* `.btn-secondary`: Botón con fondo sutil para acciones secundarias (ej. "Ver Trailer").
* `.btn-discord`: Botón con el color distintivo de Discord (`#5865F2`).

---

## 3. Puntos de Ruptura Responsive (Media Queries)

Para asegurar que la web se vea impecable en celulares, tablets y monitores grandes:

| Dispositivo | Media Query Recomendada | Ajustes |
| :--- | :--- | :--- |
| **Móviles pequeños** | `@media (max-width: 640px)` | Menú hamburguesa colapsable, columnas a 100% de ancho |
| **Tablets** | `@media (max-width: 1024px)` | Tarjetas de juegos en 2 columnas, padding reducido |
| **Escritorio** | Superior a `1024px` | Vista completa con 3 columnas en juegos y devlogs |

---

## 4. Reglas de Buenas Prácticas
1. **No usar estilos inline:** Evita poner `style="..."` dentro del HTML; usa las clases definidas en `CSS/`.
2. **Reutilizar variables:** Cuando agregues un color en un nuevo archivo CSS, usa `var(--accent-color)` en lugar de códigos hexadecimales duros para mantener la armonía estética.
