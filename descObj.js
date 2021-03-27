//--------DESCOMPOSICIÓN DE OBJETOS------------
//Ejemplo 1
//Creamos un objeto con las características de una persona
let persona = { nombre: "Omar", apellido: "Guerrero", edad: 20}

//Queremos guardar nombre y apellido solamente
let { nombre, apellido } = persona;
console.log( "El nombre del participante es: " + nombre + " " + apellido);
//En la descomposición con solo decir persona, me muestra nombre y apellido

//Ejemplo 2
let celular = { color: "Rojo", numCamaras: 4}
//Solo requiero el número de cámaras, hacemos lo siguiente:
let{ numCamaras } = celular;
console.log( "El número de ccámaras que tenemos es: " + numCamaras );

//Ejemplo 3
var paquete = {
    numEnvio: 323242,
    direccion: "Calle río de plata",
    peso: "3Kg"
}

var numEnvio, peso;
({ numEnvio, peso } = paquete);   //Lo ponemos en paréntesis porque el igual me lo detecta como incorrecto al momento de imprimirlo.
console.log( numEnvio );

//Ejemplo 4
//Seguimos trabajando con el objeto llamado persona del ejemplo número 1 y tenemos un valor por defecto
const { nombre: nombreSustituto = "Santiago", apellidoN3 } = persona;
console.log("El nombre es: " + nombre + " " + apellidoN3 );

//En este caso si el nombre no es igual al de la persona de arriba no lo guarda (indefinido)
let persona2 = { nombreN2: "Omar", edad:20 }
var { nombreN2, apellido: apellidoN3 = "Lopez" } = persona2; 
//En dado caso que no tenga apellido se le da un apellido por default
console.log("El nombre es: " + nombreN2 + " " + apellidoN3);

//Descomposición en funciones
let envio = {
    numEnvio: "337",
    producto: "Videojuego"
}

function datosEnvio(numEnvio, producto ){
    console.log( "Numero de envio: " + numEnvio );
    console.log( "Producto a enviar: " + producto);

}
//Hay que llamar a la función
datosEnvio( envio.numEnvio, envio.producto );


