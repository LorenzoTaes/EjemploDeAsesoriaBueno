//Ejemplo
//Dado un número, separarlo en centenas, decenas y unidades
//Intercambiar la posición entre las centenas y las unidades
//e imprimir el número final

var numeroCompleto = 738;
if(numeroCompleto<=999 && numeroCompleto>99){
    var centenas = parseInt(numeroCompleto / 100);
    //console.log(centenas);
    var decenas = parseInt( ( numeroCompleto % 100 ) / 10);
    //console.log( decenas );
    var unidades = (numeroCompleto % 100) - (decenas * 10);
    //console.log(unidades);

    //console.log("El valor final es:" + centenas + decenas + unidades);

    //Se ejecuta lo de arriba y me da el valor normal, entonces ponemos como comentario el console de arriba
    //y hacemos lo siguiente para intercambiar la posición entre las centenas y las unidades

    console.log("El valor final es:" + unidades + decenas + centenas);

    //lo ponemos en forma de comentario para seguir con el condicional switch de abajo
}
else{
    console.log("Ingresar un número de 3 cifras");
}

//Condicional Switch (interruptor condicional)
var conSwitch = "Luis";
var edad = 18;
switch(conSwitch){
    case 2:
        console.log("El valor ingresado es 2");
        break;
    case 6:
        console.log("El valor ingresado es 6");
        break;
    case "Luis":
        console.log("Hola Luis");
        if (edad >= 18 ){
            console.log("Felicidades eres mayor de edad");
        }
        break;
        default:
        console.log("El valor ingresado es distinto");
        break;     
}