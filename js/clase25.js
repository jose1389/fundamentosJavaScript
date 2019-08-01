//Modificando un prototipo
// En esta clase veremos cómo se modifican las clases de herencias. JavaScript funciona con una estructura orientada a objetos y cada objeto tiene una propiedad privada que mantiene un enlace a otro objeto llamado prototipo.

function persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20
}

persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

var sacha = new persona('sacha', 'Morales');
var ericka = new persona('Ericka', 'Menendez');
var arturo = new persona('Arturo', 'Luna');