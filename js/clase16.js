//Estructura repetitiva while

var jose ={
    name: 'Jose',
    last_name: 'Gonzalez',
    edad: 28,
    peso: 75
}

console.log(`Al inicio ${jose.name} pesa ${jose.peso}kg`)

const INCREMENTO_PESO = 0.3;
const DIAZ_DEL_ANIO =365

const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO;
const pierdePeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMuchp = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

const META = jose.peso - 3;
var dias = 0;

while(jose.peso > META ){
    //debugger
    if(comeMuchp()){
        aumentaDePeso(jose);
    }
    if(realizaDeporte){
        pierdePeso(jose);
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${jose.name} adelgazo a ${jose.peso.toFixed(1)}kg`)