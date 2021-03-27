//Llamamos a la funcionalidad con const numAleatorio poniendo la ruta de donde tenemos el código que queremos importar
const obtenNumero = require('./utilerias.js'); //Se declara en una constante para que no se me vaya a cambiar
console.log("El número aleatorio generado es: " + obtenNumero.numAleatorio());

