function leerCarta(carta, callback) {
    return setTimeout(() => {
        callback(carta.split("").reverse().join(""));
    }, 2000);
}

function construirJuguete (instruccion, callback) {
    return setTimeout (() => {
        const juguete = instruccion.split("").reverse().join("");
        if (juguete.includes("madera"))
            return callback (`${juguete} de madera fina`);
        else if (juguete.includes("xbox"))
            return callback (`No te puedo mandar tu ${juguete}`);
        else
            return callback (`Aqui tienes tu cosa esta ${juguete}`);
    }, 5000);
}

function envolverRegalo (juguete, callback) {
    return setTimeout(() => {
        callback(`${juguete} envuelto`);
    }, 3000)
}


// Callback hell (NO USAR)
/* leerCarta("carrito de madera", (instruccion) => {
    construirJuguete(instruccion, (juguete) => {
        envolverRegalo(juguete, console.log);
    });
}) */

// Modularizar las llamadas
// Hacer funciones aparte para las llamadas
function construirC (juguete) {
    envolverRegalo(juguete, console.log);
}

function leerC (instruccion) {
    construirJuguete(instruccion, construirC);
}

leerCarta ("carrito de madera", leerC);