// Control de la pantalla de bienvenida (carta)
function inicializarCarta() {
  const pantallaCarta = document.getElementById('pantalla-carta');
  const contenidoPrincipal = document.getElementById('contenido-principal');
  const btnAbrir = document.getElementById('btn-abrir-invitacion');
  const audio = document.getElementById('musica-boda');
  const btnMusica = document.getElementById('btn-musica');

  // Bloquear scroll inicialmente
  document.body.classList.add('scroll-bloqueado');

  btnAbrir.addEventListener('click', () => {
    // Ocultar la carta
    pantallaCarta.classList.add('oculta');
    
    // Desbloquear scroll
    document.body.classList.remove('scroll-bloqueado');
    
    // Mostrar el contenido principal
    contenidoPrincipal.classList.remove('contenido-oculto');
    contenidoPrincipal.classList.add('contenido-visible');
    
    // Reproducir la música
    audio.play().then(() => {
      btnMusica.classList.add('reproduciendo');
    }).catch(err => {
      console.log('No se pudo reproducir automáticamente:', err);
    });
  });
}

// Control de música
function inicializarMusica() {
  const audio = document.getElementById('musica-boda');
  const btnMusica = document.getElementById('btn-musica');

  // Botón para controlar la música
  btnMusica.addEventListener('click', (e) => {
    e.stopPropagation();
    if (audio.paused) {
      audio.muted = false;
      audio.play();
      btnMusica.classList.add('reproduciendo');
    } else {
      audio.pause();
      btnMusica.classList.remove('reproduciendo');
    }
  });

  // Actualizar estado del botón cuando termina la canción
  audio.addEventListener('ended', () => {
    btnMusica.classList.remove('reproduciendo');
  });
}

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

// Iniciar todo cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  inicializarCarta();
  actualizarContador();
  inicializarMusica();
});
