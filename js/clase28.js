// //Clases en JavaScript
// Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

// La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

// // El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = 1.98
    }

    saludar(){
        console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){
        return this.altura > 1.8
    }
}

//heredamos de la clase persona o extiende de la clase persona
class Desarrolador extends Persona{
    //Las pasamos por medio de lcontructor para que puedan haceder a ellas
    constructor (nombre, apellido, altura){
        //Llamos al constructor de la clase padre con super
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}


// var sacha = new Persona('sacha', 'Morales');
// var ericka = new Persona('Ericka', 'Menendez');
// var arturo = new Persona('Arturo', 'Luna');