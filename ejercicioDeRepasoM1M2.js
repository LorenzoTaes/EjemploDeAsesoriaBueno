//Para calcular el promedio de prácticas de un curso, se tomará la calificación
//de las 4 prácticas que se hicieron, de estas 4 se va a eliminar la práctica
//con menor calificación y se obtendrá el promedio de las 3 prácticas restantes.

//Se declaran las constantes
const practicaN1 = 8;
const practicaN2 = 9;
const practicaN3 = 10;
const practicaN4 = 7;
var resultado = 0;

//Aquí la variable que controlará que calificación es la más baja
var califMenor = practicaN1;

//IF Comparará si la práctica 2 es menor que califMenor, si lo es, convierte a la práctica 2 en la más baja
if( practicaN2 < califMenor ){
    califMenor = practicaN2;
}

//ELSE IF Comparará si la práctica 3 es menor a califMenor, si lo es convierte la práctica 3 en la más baja
else if( practicaN3 < califMenor ){
    califMenor = practicaN3;
}

else if( practicaN4 < califMenor ){
    califMenor = practicaN4;
}

//Calculamos el promedio, pero se quita la calificación menor
resultado = (practicaN1 + practicaN2 + practicaN3 + practicaN4 - califMenor) / 3

console.log("El promedio es:" + resultado);
