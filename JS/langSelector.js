async function cambiarIdioma(lang) {
  try {
    // RUTA CONFIGURABLE: Ajusta la carpeta donde guardes tus JSON ('Locales' o 'JS/Locales')
    //const ruta = "./Data/Lang/${lang}.json"; //`Locales/${lang}.json`;
    const respuesta = await fetch('./Data/Lang/' + lang + '.json');
    //const respuesta = await fetch(ruta);
    
    if (!respuesta.ok) {
      throw new Error(`No se pudo cargar el archivo: ${ruta}`);
    }

    const traducciones = await respuesta.json();

    // Guarda la preferencia
    localStorage.setItem('idioma_preferido', lang);

    // Reemplaza el texto en todos los elementos con [data-lang]
    const elementos = document.querySelectorAll('[data-lang]');
    elementos.forEach(elemento => {
      const clave = elemento.getAttribute('data-lang');
      if (traducciones[clave]) {
        elemento.textContent = traducciones[clave];
      }
    });

    document.documentElement.lang = lang;
  } catch (error) {
    console.error("Error al cargar las traducciones:", error);
  }
}

function alternarIdioma() {
  const idiomaActual = localStorage.getItem('idioma_preferido') || 'es';
  const nuevoIdioma = (idiomaActual === 'es') ? 'en' : 'es';
  cambiarIdioma(nuevoIdioma);
}

document.addEventListener('DOMContentLoaded', () => {
  const idiomaGuardado = localStorage.getItem('idioma_preferido') || 'es';
  cambiarIdioma(idiomaGuardado);
});
