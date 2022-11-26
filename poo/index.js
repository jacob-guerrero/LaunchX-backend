// Intro a objetos y POO
let nombres = {
    nombre: "Jesus",
    apellido: "Guzman"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);


// Se puede sobrescribir herencia (en este caso de Object)
/* function perro (nombre, edad) {
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjetoConstructor = {
    habla: function() {
        return "Wof Wof Soy un perro";
    }
} */
function perro (nombre, edad) {
    perro.nombre = nombre;
    perro.edad = edad;
}
perro.prototype.habla = function() {
    return "Wof Wof soy un perro"; 
}


let firulais = new perro("Firulais", 9);
console.log(firulais.habla());