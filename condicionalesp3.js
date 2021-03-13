
//Ejercicio 1
//Cada vez que una persona ingrese una hora del día
//se mostrará un mensaje que diga el deporte que se está realizando en la cancha.

//const prompt = require('prompt-sync')();
//var nombre = prompt("Ingresa tu nombre");
//console.log("Hola" + nombre);

const prompt = require('prompt-sync')();

var horaDia = prompt("dame la hora:");
console.log(horaDia);

if( horaDia <= 3 ){
    console.log("Está el equipo de futbol entrenando");
}
else if((horaDia>3) && (horaDia<=6)){
    console.log("Está el equipo de futbol americano entrenando");
}
else if((horaDia>6) && (horaDia<=9)){
    console.log("Está el equipo de atletismo entrenando");
}

//Para ver un ejemplo con el switch replanteamos el ejercicio anterior:
//En esta versión solo se obtienen 2 resultados, uno verdadero y otro falso

switch(horaDia <=3){
    case true:
        console.log("Equipo de futbol");
        break;
    case false:
        console.log("Está otro equipo");
        break;
}

//Este es un ejemplo donde el switch es realmente aprovechado, replanteamos, de nuevo, el ejercicio anterior
//Ejercicio 2
//Cada vez que una persona ingrese a un deporte, te dirá el horario que le corresponde para la cancha

var deporte = prompt("porfavor dime el nombre del deporte:");
switch(deporte){
    case "Futbol":
        console.log("Horario: 1 a 3 PM");
        break;
    case "Americano":
        console.log("Horario: 3 a 6 PM");
        break;
    case "Atletismo":
        console.log("Horario: 6 a 9 PM");
}





//Tema: Arreglos
//Declaramos un arreglo con 5 elementos, todos ellos son números.
var arregloNumerico = [1,2,3,4,5];
console.log( arregloNumerico);

//Declaramos un arreglo con 4 elementos, todos ellos son texto.
var arregloNombres = ["Luis", "Diana", "Omar", "Paola"];
console.log( arregloNombres );

//Declaramos un arreglo con 8 elementos de distintos tipos de datos.
var arregloMixto = [20, 16, , "Luis", "Paola", true, false];
console.log(arregloMixto);
//Accedemos a una posición del arreglo en específico.
console.log(arregloNombres[1]);



