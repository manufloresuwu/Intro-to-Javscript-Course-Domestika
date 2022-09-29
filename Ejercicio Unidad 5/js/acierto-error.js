function acierto(lasTarjetas) {
  // EJERCICIO: añade la clase acertada a cada una de las tarjetas
  // que recibimos como argumento desde la función comparar()
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
    acertados = acertados + 0.5;
    intentos = intentos + 0.5;
  });
  console.log('in = ' + intentos);
  console.log('ac = ' + acertados);
  console.log('er = ' + errores)
}

function error(lasTarjetas) {
  // EJERCICIO: añade la clase error a cada una de las tarjetas
  // que recibimos como argumento desde la función comparar()
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
    errores = errores + 0.5;
    intentos = intentos + 0.5;
  });
  // EJERCICIO: quita las clases de descubierta y error, dentro de
  // un Timeout de 1000 ms
  setTimeout(function(){
    lasTarjetas.forEach(function(elemento){
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error")
    });
  }, 1000);
  console.log('in = ' + intentos);
  console.log('ac = ' + acertados);
  console.log('er = ' + errores)
}

//BONUS: crea una variable global que haga un recuento de aciertos
// y errores o de los movimientos realizados. Cada vez que haya un
// cambio, se puede hacer un console.log() del contador
