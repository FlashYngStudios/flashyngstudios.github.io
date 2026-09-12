// ==========================================================================
// CONFIGURACIÓN DE AVISO / MANTENIMIENTO
// ==========================================================================

// Cambia a 'true' cuando quieras redirigir a notice.html
// Cambia a 'false' cuando quieras dar paso directo a home.html
const show_notice = true;

(function()
{
    if (show_notice) {
        window.location.replace("notice.html");
    } else {
        window.location.replace("home.html");
    }
})();

//return;
