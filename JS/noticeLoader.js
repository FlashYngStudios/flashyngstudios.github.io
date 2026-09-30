/**
 * Carga dinámicamente un aviso en la pantalla
 * @param {string} noticePath - Ruta del archivo HTML del aviso a cargar
 */
/*
function cargarAviso(noticePath) {
    // Si el usuario ya lo cerró en esta sesión, no volver a mostrar
    if (sessionStorage.getItem('avisoCerrado_' + noticePath) === 'true') {
        return;
    }

    fetch(noticePath)
        .then(response => {
            if (!response.ok) throw new Error('Aviso no encontrado');
            return response.text();
        })
        .then(html => {
            // Insertar el modal al final del body
            document.body.insertAdjacentHTML('beforeend', html);
        })
        .catch(err => console.warn('No se pudo cargar el aviso:', err));
}
*/

/*
function cargarAviso(rutaHTML, opciones = {}) {
    // Extraer opciones con valores por defecto
    const modo = opciones.modo || 'indefinida';
    const fechaExpiracion = opciones.fecha ? new Date(opciones.fecha + 'T23:59:59') : null;
    const fechaActual = new Date();

    // 1. Validar expiración si el modo es 'definida'
    if (modo === 'definida' && fechaExpiracion && fechaActual > fechaExpiracion) {
        console.log('El aviso ha expirado y no se mostrará.');
        return; // Detener ejecución, no inyecta nada al DOM
    }

    // 2. Cargar la tarjeta HTML si no ha expirado
    fetch(rutaHTML)
        .then(response => response.text())
        .then(html => {
            // Reemplazar marcas de texto dinámicas
            let htmlProcesado = html
                .replace('{TEXTO_FECHA}', opciones.textoFecha || 'Estado activo')
                .replace('{URL_DESTINO}', opciones.url || '#');

            // Inyectar el HTML de la tarjeta en la página
            const contenedor = document.createElement('div');
            contenedor.innerHTML = html;
            document.body.appendChild(contenedor);

            // Si se pasó un texto personalizado de fecha, se actualiza en el elemento del badge
            if (opciones.textoFecha) {
                const badgeFecha = document.getElementById('notice-date-badge');
                if (badgeFecha) {
                    badgeFecha.textContent = opciones.textoFecha;
                }
            }
        })
        .catch(error => console.error('Error al cargar la tarjeta de aviso:', error));
}
        */

function cargarAviso(rutaHTML, opciones = {}) {
    const modo = opciones.modo || 'indefinida';
    const fechaExpiracion = opciones.fecha ? new Date(opciones.fecha + 'T23:59:59') : null;
    const fechaActual = new Date();

    // 1. Validar expiración si el modo es 'definida'
    if (modo === 'definida' && fechaExpiracion && fechaActual > fechaExpiracion) {
        console.log('El aviso ha expirado y no se mostrará.');
        return;
    }

    // 2. Cargar e inyectar la tarjeta
    fetch(rutaHTML)
        .then(response => {
            if (!response.ok) throw new Error('Aviso no encontrado');
            return response.text();
        })
        .then(html => {
            // Si no hay textoFecha enviado, dejamos la cadena vacía para limpiar
            const valorFecha = opciones.textoFecha || '';

            // Aplicar reemplazos
            let htmlProcesado = html
                .replaceAll('{TEXTO_FECHA}', valorFecha)
                .replaceAll('{URL_DESTINO}', opciones.url || '#');

            const contenedor = document.createElement('div');
            contenedor.innerHTML = htmlProcesado; // Usa la variable con los valores aplicados
            document.body.appendChild(contenedor);
        })
        .catch(error => console.error('Error al cargar la tarjeta de aviso:', error));
}

/**
 * Cierra el aviso activo con animación
 */
function cerrarAviso() {
    const modal = document.getElementById('noticeModal');
    if (modal) {
        modal.classList.add('hidden');
        
        // Guardar estado de cierre en la sesión
        sessionStorage.setItem('avisoCerrado_active', 'true');

        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}
