// Polimorfismo
function Persona(nombre) {
    this.nombre = nombre;
    this.caminar = function () {
        console.log("Caminando");
    }
}

function Alumno (nombre, llorandoSangre) {
    Persona.call(this, nombre);

    this.llorandoSangre = llorandoSangre;
    this.caminar = function () {
        console.log("Caminando y llorando sangre");
    }
}

Alumno.prototype = Object.create(Persona.prototype);
Alumno.prototype.constructor = Alumno;

let estudiante1 = new Alumno('Jesus Guzman', "React");
let persona1 = new Persona('Memo Ochoa');

console.log(estudiante1.caminar());
console.log(persona1.caminar());