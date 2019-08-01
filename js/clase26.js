//El contexto de las funciones: quien es this

function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20
}

Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var sacha = new Persona('sacha', 'Morales');
var ericka = new Persona('Ericka', 'Menendez');
var arturo = new Persona('Arturo', 'Luna');