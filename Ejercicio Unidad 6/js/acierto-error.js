function acierto(lasTarjetas) {
  //var puntuacionTexto;
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  document.querySelector("#sonido-acierto").play();

  puntuacion++;
  puntuacionTexto = puntuacion;
  document.querySelector("#puntos").innerText = puntuacionTexto;
}

function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });

  document.querySelector("#sonido-error").play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1000);
}
