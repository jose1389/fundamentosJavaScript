// Haciendo múltiples requests
// En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos trabajando con los jQuery y swapi.

const API_URL='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
//Para hacer hacer un recuest con jquery tenemos que declarar el signo $
//las declaramos en constantes para ocupar menos espacio y que sea mas legible

const opts = {crossDomain: true}
const onPeopleResponse = function (persona){
    console.log(`Hola y soy, ${persona.name}`);
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponse);
}

obtenerPersonaje(1)
obtenerPersonaje(2)