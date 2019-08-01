//La verdad oculta sobre las clases en javascript
// Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

//Para hacer una funcon propia
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function (){}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    //asignamos las funcion constructora de la clase hijo
    prototipoHijo.prototype.contructor = prototipoHijo;
}

function Persona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = 20
}

Persona.prototype.saludar = function () {
    console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre,
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function (){
    console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}


// var sacha = new Persona('sacha', 'Morales');
// var ericka = new Persona('Ericka', 'Menendez');
// var arturo = new Persona('Arturo', 'Luna');