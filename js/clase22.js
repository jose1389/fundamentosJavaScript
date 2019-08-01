//Trans formar un array con MAP

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

console.log(personasCms);