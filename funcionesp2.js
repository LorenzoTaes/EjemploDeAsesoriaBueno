//Ejercicio 1
//Escribir un programa que obtenga el precio de un producto y calcule el precio total
//ya que también se va a cobrar el costo de envío unicamente si el precio del producto es menor o igual a $399, el costo de envío es $100

//Se pude hacer con prompt = require('prompt-sync')() pero en este caso no lo vamos a hacer porque hay personas nuevas 

var nombreProducto = "Unos doritos nachos";
var precioProducto = 35;
//se define la función con los parámetros precio y nombre del producto
function precioTotal( precio, nombreProducto ){ 
    var resultado = 0;
    if(precio <= 399){
        console.log("Factura");
        console.log("Costo de " + nombreProducto + " es: " + precio);
        console.log("Costo del envío: 100");
        resultado = precio + 100;
        console.log("El resultado a pagar es: " + resultado);
    }
    else if(precio > 399){
        resultado = precio;
        console.log("El total a pagar es: " + resultado);
    }
}

//La ventaja de las funciones es que todo se trabaja dentro, no hay necesidad de comentar todo para hacer otro programa
//Solo se comentan las llamadas (lo que sigue)

//precioTotal( precioProducto, nombreProducto )  //llamamos a nuestra función


//-------ÁMBITO DE UNA FUNCIÓN--------------
function ambitoVar(){
    const i = 1;
    if(i == 1){
        var variableVar = "Ambito de variable";

    }
    console.log( variableVar );
}
//ambitoVar();
//Comentamos aquí arriba para hacer lo mismo pero con let en lugar de var allá abajo

// TIPOS DE DECLARACIONES EN JAVA SCRIPT

//Declaración let --------> igual se usa para declarar variables (forma moderna para declarar variables) Se puede usar var y let

let nombre = "Luis";
nombre = "Pablo";
console.log( nombre );

function ambitoLet(){
    const i = 1;
    if( i == 1){
        let variableLet = "Ambito de variable - Let";         //Cuando una variable este en color gris, significa que está apagada
        console.log( variableLet );
    }
}

var mensaje = "texto";

function mensajeFuncion(){
    var mensaje = "Texto 2";
    console.log(mensaje);
}
console.log(mensaje);
mensajeFuncion();
console.log(mensaje);

