// Ciclos- el while
//var contadorN1 = 5;
//var contadorN2 = 30,

//while(contador>0){
    //console.log("Hola");
    //contador--;
//};
//Otro ejemplo: la variable se incrementa hasat que llega a 20 y se cierra el ciclo

//while(contadorN1 < 10 && contadorN2 > 25){
    //console.log("ContadorN1:" + contadorN1 + "ContadorN2:" + contadorN2);
    //contadorN1++;
    //contadorN2++;
//}

//Ciclos- el do while
var contadorN3 = 0;
var condicion = "Hola";
do{
    console.log("Entraste al ciclo do while");
    if(contadorN3 == 2){
        condicion = "Adios"
    }
    contadorN3++;

}while(contadorN3 == "Hola");

//Otro ejemplo

var condicionN2 = 25
do{
    console.log("Valor:" + condicionN2);
    condicionN2 -= 5;
}while( condicionN2 >= 5 );

//Ejercicio do-while
//Crear un programa que lea tantos números como se quiera hasta que se reciba un cero
//y se mostrará un resultado, que será la suma de todos los números ingresados.

const prompt = require('prompt-sync')();
var recibeNumero;
var suma = 0;
do{
    recibeNumero = prompt("Dame un número: "); //Recibimos un texto, no un número
    suma = suma + parseInt(recibeNumero)
}while( recibeNumero != 0 );

console.log("La suma total es: " + suma);

//Ejercicio while
recibeNumero = prompt("Dame un número");
while( recibeNumero != 0 ){ //Recibir un número cualquiera distinto de cero
    suma = suma + parseInt(recibeNumero);
    recibeNumero = prompt("Dame un número");
}
console.log("la suma total on while es:" + suma);



