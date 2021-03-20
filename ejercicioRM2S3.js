//Como usar el prompt por ejemplo para ingresar un mensaje en terminal
//const prompt = require('prompt-sync')();
//var mensaje = prompt("Ingresa un mensaje: ");
//console.log(mensaje);

//Usar el ParseInt para convertir de texto a entero, ejemplo el 25
//Por ejemplo el prompt me arroja texto, pero si usamos el parseInt nos arrojará un número

const prompt = require('prompt-sync')();
var mensaje = prompt("Ingresa un mensaje: ");
console.log( parseInt(mensaje) );

//Entero a cadena de texto
var numero = 25
console.log(numero.toString() ); //Con o,ooooo() cuando se haga la impresión, el 25 me va a aparecer en blanco, es decir como un texto.o

