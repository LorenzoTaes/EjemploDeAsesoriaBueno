//Ejercicio de cómo declarar una matriz

let matrizPeces = [
    ["Salmón", "Atún"], ["Cangrejo", "Pez Globo"]
];
//Son dos arreglos, dos cajas dentro de otra caja

//Imprimimos la matriz con console.log, si yo quiero imprimir solamente la posición 1(matriz 1) me mostrará la posición 1 (cangrejo, pez globo)
//Recordar que la posición cero sería salmon y atun
console.log(matrizPeces[1]);
//Si yo quiero imprimir solamente el valor 0 de la matriz 1

console.log(matrizPeces[1][0]);

//Ejercicio de descomposición de objetos
//Declaramos un objeto
let producto = {
    nombreProducto: "Chocolate",
    precio: 25,
    peso: "1.5 kg",
    cantidad: 5
}
//Para hacer la descomposición declaramos variables que se van a llamar igual a las propiedades de nuestro objeto

let {nombreProducto, peso} = producto;
console.log(nombreProducto);
console.log(peso);

