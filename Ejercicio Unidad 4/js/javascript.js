var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

// EJERCICIO: concatena grupoTarjetas consigo misma para duplicar
// los valores
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

// BONUS: podrías hacer que las tarjetas solo se repartieran cuando
  // se apriete un botón que ponga "repartir cartas"

  let boton = document.createElement("button");
  boton.innerHTML = "Repartir"

  boton.onclick = function reparteTarjetas() {

      var mesa = document.querySelector("#mesa");
      var tarjetasBarajadas = barajaTarjetas();
      mesa.innerHTML = "";
    
      // EJERCICIO: recorre el array de tarjetasBarajadas y para cada
      // elemento, crea un div (cárgalo en una variable) y declara que su
      // innerHTML es el div con la clase "tarjeta" y en el interior
      // del mismo, un div con la clase "tarjeta__contenido".
      // Añade además el valor del elemento como contenido de la tarjeta
    
      tarjetasBarajadas.forEach(function(elemento) {
        var tarjeta = document.createElement("div");
    
        tarjeta.innerHTML =
         "<div class='tarjeta'>" +
         "<div class='tarjeta__contenido'>" +
         elemento +
         "</div>" +
         "</div>";
    
       // EJERCICIO: una vez has creado la tarjeta, y todavía dentro del
       // loop, añade la tarjeta generada como "child" del nodo mesa.
    
          mesa.appendChild(tarjeta);
    
      });

      function descubrir() {
        this.classList.add("descubierta");
      }

      document.querySelectorAll(".tarjeta").forEach(function(elemento) {
        elemento.addEventListener("click", descubrir);
      });
    
    } 
  document.body.appendChild(boton);


//reparteTarjetas();


