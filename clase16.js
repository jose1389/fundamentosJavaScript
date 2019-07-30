//Estructura repetitiva while

var jose ={
    name: 'Jose',
    last_name: 'Gonzalez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio ${jose.name} pesa ${jose.peso}kg`)

const INCREMENTO_PESO = 0.2;
const DIAZ_DEL_ANIO =365

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO;
const pierdePeso = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAZ_DEL_ANIO; i++) {
    var random = Math.random()
    if(random < 0.25){
        aumentaDePeso(jose);
    }else if(random < 0.5){
        pierdePeso(jose);
    }
}

console.log(`Al fianl del año ${jose.name} pesa ${jose.peso.toFixed(1)}kg`)