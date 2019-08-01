// Manejo de errores con callbacks

// Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().

const API_URL='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
//Para hacer hacer un recuest con jquery tenemos que declarar el signo $
//las declaramos en constantes para ocupar menos espacio y que sea mas legible

const opts = {crossDomain: true}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`

    $
        .get(url, opts, callback)
        .fail(() => {
        //Se declara el eror por si llega a pasar algo
        console.log(`Sucedio un error `)
    })
}

//para que salgan en orden los parametros, se declaran los callback
obtenerPersonaje(1, function (personaje){
    console.log(`Hola yo soy, ${personaje.name}`);

    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola yo soy, ${personaje.name}`);

        obtenerPersonaje(3, function (personaje){
            console.log(`Hola yo soy, ${personaje.name}`);

            obtenerPersonaje(4, function (personaje){
                console.log(`Hola yo soy, ${personaje.name}`);

                obtenerPersonaje(5, function (personaje){
                    console.log(`Hola yo soy, ${personaje.name}`);

                    obtenerPersonaje(6, function (personaje){
                        console.log(`Hola yo soy, ${personaje.name}`);

                        obtenerPersonaje(7, function (personaje){
                            console.log(`Hola yo soy, ${personaje.name}`);
                        })
                    })
                })
            })
        })
    })
})

