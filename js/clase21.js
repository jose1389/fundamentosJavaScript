//Introduccion a arrays

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

//Agrupar a todas las personas en un array
var personas = [sacha, alan, martin, dario, vicky, paula]

//recorrer a todas las personas por medio de un for
for (var i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} ${persona.apellido} mide ${persona.altura}mts`);
}