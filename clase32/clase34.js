// Manejando el Orden y el Asincronismo en JavaScript

// Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

const API_URL='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
//Para hacer hacer un recuest con jquery tenemos que declarar el signo $
//las declaramos en constantes para ocupar menos espacio y que sea mas legible

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $.get(url, opts, function (persona){
        console.log(`Hola y soy, ${persona.name}`);
        if(callback){
            callback()
        }
    });
}

//para que salgan en orden los parametros, se declaran los callback
obtenerPersonaje(1, function (){
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3, function (){
            obtenerPersonaje(4, function (){
                obtenerPersonaje(5, function (){
                    obtenerPersonaje(6, function (){
                        obtenerPersonaje(7)
                    })
                })
            })
        })
    })
})

