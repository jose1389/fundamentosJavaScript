// Async-await: lo último en asincronismo
// Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.

const API_URL='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
//Para hacer hacer un recuest con jquery tenemos que declarar el signo $
//las declaramos en constantes para ocupar menos espacio y que sea mas legible

const opts = {crossDomain: true}

//obtener promesas en ves de callback
function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
        //Cuando esta funcion se ejecute le pasamos la data
        .get(url,opts, function (data){
            resolve(data)
        })
        //Rechamos la promesa, osea el id del personaje
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}` );
}

//utilizacion del la sentencia async await
async function obtrenerPersonajes(){
var ids = [1,2,3,4,5,6,7]
var promesas = ids.map(id => obtenerPersonaje(id))
try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
}catch(id){
    onError(id)
}
}

obtenerPersonaje();