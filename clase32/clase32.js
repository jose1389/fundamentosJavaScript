// Callbacks
// En esta clase aprenderemos que son los callbacks y usaremos una librería externa que se llama jQuery.

// Un callback es una función que se pasa a otra función como un argumento. Esta función se invoca, después, dentro de la función externa para completar alguna acción.

const API_URL='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
//Para hacer hacer un recuest con jquery tenemos que declarar el signo $
//las declaramos en constantes para ocupar menos espacio y que sea mas legible
const lukeUrl =`${API_URL}${PEOPLE_URL.replace(':id',id)}`
const opts = {crossDomain: true}
const onPeopleResponse = function (persona){
    console.log(`Hola y soy, ${persona.name}`);
}
$.get(lukeUrl, opts, onPeopleResponse);