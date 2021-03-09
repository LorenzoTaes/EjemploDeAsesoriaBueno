//operador "+"
var operandoN1 = 5000;
var operandoN2 = 10000;
var resultado = operandoN1 + operandoN2;

console.log(resultado);

//operador "*"
var operandoN3 = 12;
var operandoN4 = 2;
var resultado2= operandoN3 * operandoN4;

console.log(resultado2);

//operador "/"
var resultado3 = operandoN2 / operandoN1;

console.log("el resultado de tu división es:" + resultado3 );

//operador "++"
//lo incrementa en 1
resultado3++;
console.log("incrementando la variable resultado 3 en uno:" + resultado3 );

//----------------OPERADORES DE ASIGNACIÓN--------------

//operador "="
operandoN1 = operandoN2;
console.log("El valor del operandoN1 será:" + operandoN1);

//operador "+="
operandoN3 += operandoN4;
console.log("Resultado de sumar el operando 4 y asignar el resultado al operando3: " + operandoN3);

//------------OPERADORES DE COMPARACIÓN------------------

var nComparacion1 = 5;
var nComparacion2 = "5";
var nComparacion3 = 10;

//operador "==" 
//Si el primer valor es igual al segundo valor, dará como resultado un verdadero, si no, un falso

var resultadoComparacion1 = ( nComparacion1 == nComparacion2 );
console.log("El resultado de la primera comparación:" + resultadoComparacion1 );

//operador "==="
//Si el primer valor es igual al segundo valor y son del mismo tipo de dato
//dará como resultado un verdadero, de lo contrario, será falso

var resultadoComparacion2 = (nComparacion1 === nComparacion2 );
console.log("El resultado de la segunda comparacion es:" + resultadoComparacion2 );

//operador ">"
//Si el primer valor es mayor que el segundo valor, dará como resultado un verdadero, de lo contrario, falso

var resultadoComparacion3 = ( nComparacion3 > nComparacion1 );
console.log("El resultado de la tercera comparacion es:" + resultadoComparacion3 );

//Operadores lógicos

var op1N1 = 5;
var op1N2 = 10;
var op1N3 = 30;

//Operador && ó "y" "y"
//Debe cumplirse que el operador 2 sea menor que el 1 y que el 2 sea, también menor que el 3
var resultadoOperadorLY = ( op1N1 < op1N2 ) && (op1N2 < op1N3 );
console.log("El resultado del operador lógico Y es:" + resultadoOperadorLY );

//Operador || ó "O" ó "O"
//Deben cumplirse una u otra condición
var resultadoOperadorLO = ( op1N1 < op1N2 ) || ( op1N2 < op1N3 );

console.log("El resultado del operador O es:" + resultadoOperadorLO);

//operador de negación " ! "
//Sirve para negar el valor del resultado del valor del operador lógico, en este ejemplo
var resultadoOperadorLN = ! resultadoOperadorLO;
console.log("El resultado del operador de negación es:" + resultadoOperadorLN );

//-------ESTRUCTURAS CONDICIONALES--------

//Declarammos variables
var numero1 = 125;
var numero2 = 50;
var numero3 = 30;

//Condicional IF (dependiendo de la condición ejecutara las instrucciones dentro de las llaves)
if( ( numero1 < numero2 ) && (numero2 < numero3 ) ){
    console.log( "Entraste al IF");
}

//Condicional ELSE IF(Si no se ejecutaron las instrucciones dentro del IF, comprobará una nueva condición)
else if( numero1 < numero3 ){
    console.log("Entraste al ELSE IF");
}

//Condicional ELSE (Si no se ha cumplido ninguna condición, se ejecutarán estas instrucciones por defecto)
else{
    console.log( "Entraste al ELSE" )
}














