//Mandar la impresion de Hola a los participantes y despues de 4 segundos mandar la de Mundo, con la función timeout
console.log("Hola");
setTimeout(function timeout(){
    console.log("Mundo");

}, 4*1000); //Como el timeout nos da en milisegundos, se pone 4*1000 para que me de segundos
console.log("Hola a los participantes");
