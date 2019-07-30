//Parametros como referencia o como valor

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
function imprimirNombreEnMayusculas(persona){
    //comvierte todo el string a mayusculas
    var {nombre} = persona
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(sacha);
imprimirNombreEnMayusculas(dario);

function cumpleanos(persona){
    return{
        ...persona,
        edad:persona.edad + 1
    }
}
