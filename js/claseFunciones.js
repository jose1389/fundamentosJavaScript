var nombre = 'Sacha', edad = 28;

//dentrode los parentesis recivimos los parametros enviados
function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`);
}

//Le enviamos los parametros
imprimirEdad(nombre, edad);
imprimirEdad('viky', 28);
imprimirEdad('Erick', 24);
imprimirEdad('Dario', 25);
//no importa el orde en el que se envien los parametros
imprimirEdad(23, 'Carlos');