var movimientos = 0;
var grupoTarjetas = [["🦄", "🍦"], ["🌈", "👽"], ["👾", "🤖"], ["😃", "🐯"], ["🦁", "🍊"], ["🍒", "🏵️", "🚘", "💻"]];
var nivelActual = 0;
var puntuacion = 0;
// EJERCICIO: Crea una variable niveles y asígnale un array que
// contenga los niveles del juego, agrupados en objetos {} separados
// por comas.

// EJERCICIO: Para cada objeto (o "nivel"), asigna las propiedades
// de tarjetas y movimientosMax

// EJERCICIO: asigna uno o varios valores del array de grupoTarjetas
// a las tarjetas de cada nivel.

var niveles = [
    {
        tarjetas: grupoTarjetas[0],
        movimientosMax: 3
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
        movimientosMax: 8
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
        movimientosMax: 12
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2], grupoTarjetas[3]),
        movimientosMax: 16
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2], grupoTarjetas[3], grupoTarjetas[4]),
        movimientosMax: 25
    },
    {
        tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2], grupoTarjetas[3], grupoTarjetas[4], grupoTarjetas[5]),
        movimientosMax: 40
    }
]

// BONUS: Modifica y amplia los niveles. Puedes convertir los
// movimientos "sobrantes" de cada nivel en la puntuación final
// del jugador.

