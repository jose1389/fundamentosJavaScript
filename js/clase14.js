//Arrow functions

var julio = {
    name: 'Julio',
    last_name: 'Rosario',
    age: 21
}
var juan = {
    name: 'Juan',
    age: 17,
    last_name: 'Hurrutia'
}

//Cuando son constantes se escriben con mayusculas
const MAYORIA_DE_EDAD = 18;

//Arrow Function
//const esMayorDeEdad = function (persona){
  //  return persona.edad >= MAYORIA_DE_EDAD
//}
//Funcion flecha estas dos son las mismas
const esMayorDeEdad = persona => persona.age >= MAYORIA_DE_EDAD


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.name} es mayor`);
    }else{
        console.log(`${persona.name} es menor`);
    }
}

function permitirAcceso(persona){
    if(!esMayorDeEdad(persona)){
        console.log('Acceso Denegado');
    }
}

imprimirSiEsMayorDeEdad(juan);
permitirAcceso(juan)