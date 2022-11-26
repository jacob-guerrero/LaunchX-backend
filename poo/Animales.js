// Herencia
class Animales {

    #especie = ""; // Atributo privado dentro de clase
    #nombre = ""; // Encapsulamiento
    #edad = 0;
    #terrenosAbuela = "Terreno";


    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;    
    }

    canta() {
        return `${this.nombre} puede cantar`;
    }

    correr() {
        return `${this.nombre} puede correr`;
    }

    getEspecie() {
        return this.#especie;
    }

    setEspecie(especie) {
        this.#especie = especie;
    }

}

class Gatos extends Animales {
    constructor(nombre, edad, colorBigotes) {
        super(nombre, edad); // Se necesita llamar (lo mismo que constructor)
        this.colorBigotes = colorBigotes;
    }

    bigotes() {
        return `Tengo bigotes color ${this.colorBigotes}`;
    }

    anios() {
        return `Tengo ${this.edad} años`;
    }

    especiegato() {
        return `Soy un ${this.getEspecie()}`;
    }
}

let animal = new Animales ("gato", 5);
animal.setEspecie("Felis Catus"); // No pasa nada porque son atributos diferentes

let gato = new Gatos ("gato", 5, "blanco");

console.log(gato.anios());
console.log(animal.especie);

gato.setEspecie("Felis Catus");
console.log(gato.especiegato());