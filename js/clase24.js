//Como funcionan las clases en javascript
// Las clases son funciones cuya sintaxis tiene dos componentes:

// expresiones
// declaraciones
// En esta clase veremos el uso de this. Dentro de una función, el valor de this depende de cómo es llamada ésta.

// Reto: agrega el atributo altura y la función soyAlto.

function persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20,
    this.altura = altura
}

persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var sacha = new persona('sacha', 'Morales', 1.72);
var ericka = new persona('Ericka', 'Menendez', 1.69);
var arturo = new persona('Arturo', 'Luna', 1.89);
