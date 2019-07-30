var nombre = 'Sacha', apellido = 'Morales';

//convertir en mayusculas
var nombreEnMayusculas = nombre.toUpperCase();

//convertir a minusculas
var apellidoEnMinusculas = apellido.toLowerCase();

//ver solamenta la primera letra
var primeraLetraDelNombre = nombre.charAt(0);

//ver la cantidad de letras del nombre
var cantidadDeLetrasDelNombre = nombre.length;

//Interpolar variables con comilla invertida
var nombreCompleto = `${nombre} ${apellido}`;

//acceder a un sub-string dentro de un string
var str2 = nombre.charAt(1) + nombre.charAt(2);
// o
var str = nombre.substr(1,2);