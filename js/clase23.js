//Reducir un array a un valor unico
//Sacaremos una cuetna total de todos los libros
var sacha = {
    nombre: 'Sacha',
    apellido: 'Gutierrez',
    altura: 1.81,
    cantidadDeLibros: 177
}
var alan = {
    nombre: 'Alan',
    apellido: 'Gomez',
    altura: 1.65,
    cantidadDeLibros: 90
}
var martin = {
    nombre: 'Martin',
    apellido: 'Velazquez',
    altura: 1.90,
    cantidadDeLibros: 50
}
var dario = {
    nombre: 'Dario',
    apellido: 'MUrallez',
    altura: 1.70,
    cantidadDeLibros: 200
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Morales',
    altura: 1.75,
    cantidadDeLibros: 111
}
var paula = {
    nombre: 'Paula',
    apellido: 'Martinez',
    altura: 1.50,
    cantidadDeLibros: 35
}

const esAlta = ({altura}) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

//los parentesis son para no escribir return ya que solo se esta devolviendo uno nada mas
const pasarAlturaACms = persona => ({
    //persona.altura *= 100
        //creamos un nuevo objeto para que se almacenen en el cuando se modifique
        ...persona,
        altura: persona.altura * 100
    
})

var personasCms = personas.map(pasarAlturaACms);

// con siclo for
// var acum = 0;
// for (var i = 0; i < personas.length; i++){
//     acum = acum + personas[i].cantidadDeLibros
// }

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros

var totalDelibros = personas.reduce(reducer, 0)

console.log(`El total de libros es: ${totalDelibros}`);