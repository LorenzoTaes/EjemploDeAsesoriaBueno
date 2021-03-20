//Multiplicar un número por 3 usando function y var (Declaración de una función explícita)
//Comentamos para hacer el ejemplo de abajo
//multiplicar(12);

function multiplicar(primerOperando){
    var resultado = 3 * primerOperando;
    console.log("El resultado es: " + resultado);
}

//(Declaración de una función como expresión)
//resultado(12); Desde aquí no  podemos llamarla si 
var resultado = function multiplicar(primerOperando){
    return 3 * primerOperando;
}
resultado(12); //Si se quiere llamar resultado como expresión se tiene que hacer abajo
console.log(resultado(12));

//----PROGRAMACIÓN ORIENTADA A OBJETOS-----------
//Ejemplo de creación de un objeto (un celular)

//Declaramos una variable que se llame celular
var celular = { //todo lo que este dentro de estas llaves van a ser las características del celular
    color: "Azul",
    peso: "80 g", //si se escriben varias características se pone una coma, si hay solo una no se pone nada al final, no debemos poner punto y coma
    numCamaras: 4,
    sistema: "Android",
    duracionBateria: 10  //Al final debemos dejar sin coma
}
//Hasta aquí ya esta creado un objeto

//console.log(celular.color); //Para imprimir el color del celular

//console.log(celular.numCamaras);
//console.log(celular["numCamaras" ]); //para imprimir el color del celular

//--------CLASE------------
//Comentamos todos los console.log anteriores para que no se vea todo en la terminal

//Hacemos una clase que se va a llamar galleta
//Una clase no es un objeto

class galleta{
    constructor(tamaño, forma, sabor){ //Aquí representamos las característica de la galleta y abajo las explicamos
        this.tamaño = tamaño;
        this.forma = forma;
        this.sabor = sabor;  //this nos ayuda a describir la característica de nuestro objeto, ponemos this.tamaño = tamaño, pero se puede poner = tamaño2

    }
}
//Mandamos llamar para crear una galleta con las características anteriores

let galletaChocolate = new galleta("5x5 cm", "Cuadrado", "Chocolate" );

//se puede escribir con let o con var también, por ejemplo:

var galletaVainilla = new galleta("3 cm", "Circulo", "Vainilla" );

//Imprimimos las galletas

console.log(galletaChocolate);
console.log(galletaVainilla);

//En terminal se nos imprime galleta {'tamaño: 5x5, forma: cuadrado, sabor, chocolate} En este caso galleta es la clase y galletaChocolate el objeto

//Si yo quiero saber especificamente el sabor o el tamaño de un objeto hacemos lo siguiente:
console.log(galletaChocolate.sabor);
console.log(galletaVainilla.tamaño);






