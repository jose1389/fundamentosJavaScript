var edad = 27;

//sumar variables
edad = edad + 1;
edad += 1;
//suma de uno en uno
edad ++;

//Restar 
var peso = 75;
peso = peso -2;
peso -= 2;
//resta de uno en uno
peso --;

//Suma, resta de variables
var huevos = 5, tortillas = 3, total, total1;
total = huevos - tortillas;
total1 = huevos + tortillas;

//con decimales
var vino = 200.36534;
var totalVino = vino * 3; //da demaciados decimales, no es preciso
var totalVino1 = vino * 100 * 3 / 100; //muestra la misma cantidad de decimales de a variable

//Para redondear a cierta cantidad de decimales
var totalVino2 = Math.round(vino * 100 * 3 / 100);
//Para mostrar solo dos o los decimales que necesitemos
var totalStr = totalVino2.toFixed(2);
//pasarlo a decimal
var total_1 = parseFloat(totalStr);

//Dividir
var pizza = 8, persona = 2;
var cantidad_de_pizza = pizza / persona;