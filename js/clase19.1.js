//filtrar unarray

var sacha = {
    nombre: 'Sacha',
    apellido: 'Gutierrez',
    altura: 1.81
}
var alan = {
    nombre: 'Alan',
    apellido: 'Gomez',
    altura: 1.65
}
var martin = {
    nombre: 'Martin',
    apellido: 'Velazquez',
    altura: 1.90
}
var dario = {
    nombre: 'Dario',
    apellido: 'MUrallez',
    altura: 1.70
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Morales',
    altura: 1.75
}
var paula = {
    nombre: 'Paula',
    apellido: 'Martinez',
    altura: 1.50
}

//La condicion se puede realizar de dos formas
//la primera 
/*const esAlta = ({altura}) => {
    return altura > 1.8
}*/
//la segunda, ya qeu solo se esta pidiendo una variable y se esta retornando una
//personas altas
const esAlta = ({altura}) => altura > 1.8

//personas bajas
const esBaja = ({altura}) => altura < 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

//filtro para personas altas
var personasAltas = personas.filter(esAlta);
//filtro para personas bajas
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);