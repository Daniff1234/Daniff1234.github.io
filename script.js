// Función para mostrar la sección seleccionada con animación de transición
function mostrarSeccion(id) {
    const current = document.querySelector("section.active");
    const newSec = document.getElementById(id);
  
    // Si la sección solicitada ya está activa, no se hace nada
    if (current && newSec === current) {
      return;
    }
  
    if (current) {
      // Agregar clase de animación para salida a la sección actualmente activa
      current.classList.add("section-animate-out");
  
      // Esperar a que termine la animación de salida (0.8s)
      setTimeout(() => {
        current.classList.remove("active", "section-animate-out");
  
        // Agregar clases para activar y animar la entrada de la nueva sección
        newSec.classList.add("active", "section-animate-in");
        newSec.scrollIntoView({ behavior: 'smooth' });
  
        // Quitar la clase de entrada al finalizar la animación
        setTimeout(() => {
          newSec.classList.remove("section-animate-in");
        }, 800);
      }, 800);
    } else {
      // Si no hay sección activa, simplemente mostrar la nueva sección con animación
      newSec.classList.add("active", "section-animate-in");
      newSec.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        newSec.classList.remove("section-animate-in");
      }, 800);
    }
  }
  
  // Esperar a que se termine la animación del banner para eliminarlo del DOM
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar por defecto la primera sección
    mostrarSeccion('clase1');
  
    // Después de la animación de fadeOut, remover el banner de la vista
    setTimeout(() => {
      const introBanner = document.getElementById("intro-banner");
      if (introBanner) {
        introBanner.parentNode.removeChild(introBanner);
      }
    }, 4000); // Tiempo total: delay 3s + 1s de animación
  });
  