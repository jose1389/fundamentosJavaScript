//Objetos

var sacha = {
    //atributos del objeto
//key o clave  |  valor o value
    nombre: 'Sacha',
    apellido: 'Ramirez',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Morales',
    edad: 27
}


var nombre1 = 'Sacha';
var nombre2 = 'Mario';

//defininimos la funcion
function imprimirNombreEnMayusculas({nombre}){
    //comvierte todo el string a mayusculas
    //var nombre = persona.nombre.toUpperCase()
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);
imprimirNombreEnMayusculas({nombre:'pepito'});
//Dara error porque no le pasamos el parametro nombre
imprimirNombreEnMayusculas({apellido: 'Gomez'})