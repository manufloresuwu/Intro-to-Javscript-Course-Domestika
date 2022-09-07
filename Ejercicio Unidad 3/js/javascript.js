function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2022 - fecha;
  var mensaje;

  var bienvenida = document.querySelector("#bienvenida");

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida

  mensaje = "<p>Hola, " + nombre + ", tu edad es " + edad + " años</p>";
  bienvenida.innerHTML = mensaje;

  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad

  var mensajeEdad;
  if (edad > 21){
    mensajeEdad = "Ya pagas impuestos!"
  } else {
    mensajeEdad = "Aún puedes disfrutar la vida!"
  }
  
  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  if (nombre === "" || fecha == "") {
    if (nombre == "") {
      alert("Por favor poner nombre!");
    } else if (fecha == "") {
      alert("Por favor poner año!");
    }
  }

  // EJERCICIO: Realiza la composición del mensaje final y cárgalo
  // en la variable que hayas preparado

  mensaje = "<p>Hola, " + nombre + ", tu edad es " + edad + " años. " + mensajeEdad + "</p>";

  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida

  bienvenida.innerHTML = mensaje;
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
