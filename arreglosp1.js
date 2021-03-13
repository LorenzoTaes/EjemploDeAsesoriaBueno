
var arregloNombres = ["LUis", "Diana", "Omar", "Paola"];

console.log(arregloNombres[2]);

//Para 
arregloNombres[2] = "Rosa";
console.log(arregloNombres[2]);
//Para borrar el nombre de alguna posición se usa delete nombre del arreglo [posición]
delete arregloNombres[2];
console.log(arregloNombres);

//Para saber la cantiad de elementos en un arreglo utilizamos length
console.log("La cantidad de elementos en el arreglo es:" + arregloNombres.length);

//Para agregar elementos a un arreglo utilizamos push
arregloNombres.push("Cristina");
console.log(arregloNombres);

//Para borrar elementos al final de un arreglo se usa pop
arregloNombres.pop();
console.log(arregloNombres);

//Para agregar elementos a un arreglo se usa nombre del arreglo.splice(posición de nuevos elementos, numero de elementos a eliminar,elemento a agregar)
arregloNombres.splice(0, 1, "Cristina");
console.log(arregloNombres);
//En el ejemplo me va a guardar a cristina como posición 0, me elimina un elemento y me elimina el de Luis.

//Para eliminar elementos de un arreglo se usa nombre del arreglo.splice(posición de elementos a eliminar, número de elementos a eliminar)
arregloNombres.splice(1,4);
console.log(arregloNombres);
//En el ejemplo quiero eliminar a todos y quiero que se quede Cristina solamente

//-------------EJERCICIO------------------
//Realizar un programa que lea por teclado 5 notas y muestre el promedio de estas
//(El prompt se usa para que me permita ingresar datos en la terminal)
const prompt = require('prompt-sync')();
var calificaciones =[];
calificaciones[0] = prompt("Dame la primera calificación:");
//console.log(calificaciones[0]);
//Eliminamos el console para que me imprima lo de abajo
calificaciones[1] = prompt("Dame la segunda calificación:");
calificaciones[2] = prompt("Dame la tercera calificación:");
calificaciones[3] = prompt("Dame la cuarta calificación:");
calificaciones[4] = prompt("Dame la quinta calificación:");
//creamos una variable para el resultado

var calif1= calificaciones[0];
var calif2= calificaciones[1];
var calif3= calificaciones[2];
var calif4= calificaciones[3];
var calif5= calificaciones[4];

var resultado = parseInt(calif1) + parseInt(calif2) + parseInt(calif3) + parseInt(calif4) + parseInt(calif5);
var promedio = (resultado/5);

console.log(promedio);

//------MÉTODO DE ARREGLOS----------
//Concatenar arreglos en arreglos(agregar arreglos a arreglos)

var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
var concatenaN2 = ["Adiós", "Buenas", "Noches"];
console.log(concatenaN1.concat(concatenaN2));











