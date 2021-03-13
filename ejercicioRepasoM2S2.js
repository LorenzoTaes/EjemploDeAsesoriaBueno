//Crea un programa en donde tengas que adivinar las letras de una palabra de 4 letras,
//tendrás solo 4 intentos para adivinarla, en un inicio la palabra estará oculta, pero
//cada vez que aciertes, se mostrará la letra, si adivinas la palabra antes de que se te
//acaben los intentos ganas, si no pierdes.


//primero declaramos una constante con prompt para poder escribir desde terminal
const prompt = require('prompt-sync')();
//segundo, guardamos nuestra palabra en algún lugar con un arreglo, una oculta
var palabraOculta =[];
//tercero, guardamos un arreglo para nuestra palabra que se muestra (son 4 espacios)
var palabraMostrada =["_", "_", "_", "_"];
//Declaramos una variable para los 4 intentos o fallos y aciertos
var contadorFallas = 4;
var contadorAciertos = 0; 

//Pedimos las 4 palabras en 4 intentos desde la posición cero hasta la posición 3
palabraOculta[0] = prompt("Dame la letra número 1:");
palabraOculta[1] = prompt("Dame la letra número 2:");
palabraOculta[2] = prompt("Dame la letra número 3:");
palabraOculta[3] = prompt("Dame la letra número 4:");
//Mostramos el arreglo
//console.log(palabraOculta);
//Con esto introducimos la palabra que queremos ocultar
//Comentamos el console.log(palabraOcullta); que está arriba

//Hacemos un ciclo, poniendo iniciar desde la posición cero, ponemos un máximo de 4 intentos e incrementamos en uno
for(var i = 0; i < (palabraOculta.length * 2); i++){ //se pone el *2 porque se va a repetir 8 veces
    var intento = prompt("Ingresa una letra: ");
    switch(intento){
        case palabraOculta[0]: //Este caso es para la posición número cero.
            palabraMostrada[0] = palabraOculta[0];
            console.log(palabraMostrada);
            contadorAciertos++; //para que vaya incrementando los aciertos
            break;
        case palabraOculta[1]:
            palabraMostrada[1] = palabraOculta[1];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        case palabraOculta[2]:
            palabraMostrada[2] = palabraOculta[2];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        case palabraOculta[3]:
            palabraMostrada[3] = palabraOculta[3];
            console.log(palabraMostrada);
            contadorAciertos++;
            break;
        default:
            console.log("Te equivocaste que triste :(");
            console.log("Te quedan:" + (contadorFallas - 1) + "intentos");
            console.log(palabraMostrada);
            contadorFallas--;
            break;

    }
    //ponemos un if, es decir una condición para salir de nuestro switch, se pone que el contador de aciertos se compare con 4, contadorAciertos ==4
    if(contadorAciertos == 4){
        break; //para salir del ciclo
    }
    else if(contadorFallas == 0){ //si el contador de fallas es cero, también salimos del ciclo
        break; 
    }
    
}
if((contadorFallas == 0 && contadorAciertos < 4) || (contadorFallas < 4) ){
    console.log("PERDISTE, VUELVE A INTENTARLO");
}
else if(contadorAciertos == 4){
    console.log("GANASTE, ADIVINASTE LA PALABRA");
}