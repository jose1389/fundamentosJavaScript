// Promesas
// En esta clase veremos las promesas, que son valores que aun no conocemos. Las promesas tienen tre estados:

// pending
// fullfilled
// rejected
// Las promesas se invocan de la siguiente forma:

// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )
// No olvides ver el material adjunto de esta clase.


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
    console.log(`Sucedio un error al obtener el personaje`);
}
obtenerPersonaje(1)
//Cuando la promesa se resuelve exitosamente, pasa al .then
.then(function (personaje){
    console.log(`Hola yo soy, ${personaje.name}`);
})
.catch(onError);