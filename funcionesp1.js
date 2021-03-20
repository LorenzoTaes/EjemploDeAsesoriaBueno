//Declaración de una función
function multiplica( primerOperando ){
    var resultado = primerOperando * 2;
    console.log("El resultado es:" + resultado);
}
multiplica( 12 );

//Función como expresión
var resultado = function multiplicaN2(primerOperando){
    return 2 * primerOperando; //El return manda el resultado del procedimiento a la variable resultado, es decir, el resultado será 50
}
console.log(resultado( 25 ));

function multiplicaN3(){
    var resultado = 12 * 12;
    console.log("El resultado es:" )
}




function determinaTexto(texto){
    if(texto == texto.toUpperCase() ){
        console.log("El texto está en mayúsculas");
    }
    else if(texto == texto.toLowerCase()){
        console.log("El texto está en minúsculas");
    }
}
determinaTexto("Hola");