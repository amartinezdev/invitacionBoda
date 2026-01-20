// Contador regresivo hacia el 1 de mayo de 2026
function actualizarContador() {
  // Fecha objetivo: 1 de mayo de 2026 a las 12:00
  const fechaObjetivo = new Date("2026-05-01T12:00:00").getTime();

  // Actualizar cada segundo
  const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    // Calcular días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Actualizar HTML
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

    // Si la fecha ha pasado, detener el contador
    if (diferencia < 0) {
      clearInterval(intervalo);
      document.getElementById("dias").textContent = "0";
      document.getElementById("horas").textContent = "0";
      document.getElementById("minutos").textContent = "0";
      document.getElementById("segundos").textContent = "0";
    }
  }, 1000);
}

// Iniciar el contador cuando se carga la página
document.addEventListener("DOMContentLoaded", actualizarContador);
