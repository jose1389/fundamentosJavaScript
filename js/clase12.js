//Condicionales True o False

var sacha = {
    nombre: 'Sacha',
    apellido: 'Ramirez',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfeciones(persona){
    console.log(`${persona.nombre} es:`);

    if(persona.ingeniero){
        console.log('Ingeniero');
    }else{

    }
    if(persona.cocinero){
        console.log('cocinero');
    }
    if(persona.cantante){
        console.log('cantante');
    }
    if(persona.dj){
        console.log('dj');
    }
    if(persona.guitarrista){
        console.log('guitarrista');
    }
    if(persona.drone){
        console.log('Vuela drone');
    }
}

imprimirProfeciones(sacha)

//ejercicio
function imprimirSiEsMayordeEdad(persona){
    //Es mayor de edad o es menor de edad
}