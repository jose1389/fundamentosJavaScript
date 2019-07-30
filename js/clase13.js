//Funciones que retornan valores

var julio = {
    name: 'Julio',
    last_name: 'Rosario',
    page: 21,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfeciones(persona){
    console.log(`${persona.name} es:`)
    if(persona.ingeniero){
        console.log('ingeniero');
    }else{
        console.log('No es Ingeniero');
    }
    
    if(persona.cocinero){
        console.log('cocinero');
    }else{
        console.log('No es cocinero');
    }
    
    if(persona.cantante){
        console.log('cantante');
    }else{
        console.log('No es cantante');
    }
    
    if(persona.DJ){
        console.log('DJ');
    }else{
        console.log('No es DJ');
    }
    
    if(persona.guitarrista){
        console.log('guitarrista');
    }else{
        console.log('No es guitarrista');
    }
    
    if(persona.drone){
        console.log('Piloto de drone');
    }else{
        console.log('No es drone');
    }
}

//Cuando son constantes se escriben con mayusculas
const MAYORIA_DE_EDAD = 18;

function esMayordeEdad(persona){
    return persona.page >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayordeEdad(persona)){
        console.log(`${persona.name} es mayor de edad`);
    }else{
        console.log(`${persona.name} es menor`);
    }
}

imprimirSiEsMayorDeEdad(julio);