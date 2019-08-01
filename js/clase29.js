//Funciones como parametros
// En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = 1.98
    }

    //resivimos como parametro otra funcion la nombramos como fn
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        var {nombre, apellido} = this
        console.log(`hola, me llamo ${nombre} ${apellido}`);
        if(fn){
            fn(nombre, apellido)
        }
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
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido
        //Lo de arriba es lo mismo a decir var {nombre, apellido} = this
        var {nombre, apellido} = this
        console.log (`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre,apelido,esDev){
    console.log(`Buen dia ${nombre} ${apelido}` )
    if(esDev){
        console.log(`No sabia que eras Desarrollador/a`)
    }
}

 var sacha = new Persona('sacha', 'Morales', 1.72);
 var ericka = new Persona('Ericka', 'Menendez', 1.65);
 var arturo = new Desarrolador('Arturo', 'Luna', 1.89);

 sacha.saludar();
 ericka.saludar(responderSaludo);
 arturo.saludar(responderSaludo);