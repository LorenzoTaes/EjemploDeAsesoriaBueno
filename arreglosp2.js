//------MÉTODO DE ARREGLOS----------
//Concatenar arreglos en arreglos(agregar arreglos a arreglos)

var concatenaN1 = [ "Hola", "Buenas", "Tardes"];
var concatenaN2 = ["Adiós", "Buenas", "Noches"];
console.log(concatenaN2.concat(concatenaN1));

//Método sort me sirve para ordenar arreglos

//Ejemplo: vamos a ordenar un grupo de frutas
var frutasN1 = ["Mandarina", "Piña", "Sandía", "Durazno"];
var frutasN2 = ["Mandarina", "Piña,", "Pera", "Durazno"];
var arregloNumeros = [5000,10,200,1000,400];

frutasN1.sort();
console.log(frutasN1);

frutasN2.sort()
console.log(frutasN2);

//arregloNumeros.sort()
console.log(arregloNumeros);

//-----CICLOS-----
//for
//Ejemplo: quiero decir Hola, muchas veces
//Si lo hiciera de manera manual
console.log("Hola");
console.log("Hola");
console.log("Hola");

//Si lo queremos hacer con el ciclo for(quiero que me aumente en uno)
for(var i = 0; i < 3; i++){
    console.log("Hola usando el for," + "i:" +i);
}

//Otro ejemplo: si queremos que inicie en 10 y me vaya bajando en uno
for(var i = 10; i >= 2; i--){
    console.log("Hola usando el for," + "i:" +i);
}

//Tenemos este arreglo 
//[5000,10,200,1000,400] Original
//[10,1000,200,400,5000]Ya ordenada
//yo quiero acceder al número 400, tengo que poner 4 
//(Me voy a comentar arregloNumeros.sort para trabajar aqui)
console.log(arregloNumeros[4]); 
//Hacemos un bucle for que me muestre todos los elementos
//se usa nombreArreglo.length para saber cuantos elementos hay en el arreglo)
for(var j = 0; j < arregloNumeros.length; j++){
    console.log("El valor del arreglo en la posición:" + j + "es:" + arregloNumeros[j]);
}
