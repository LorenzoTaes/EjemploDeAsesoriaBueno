console.log( Math.round(Math.random()*10));

//En google poner math documentacion javascript y ahí vienen diferentes utilerias para math
//Hacemos una función que nos de un número aleatorio del 0 al 10
//la función math.random me da un número aletorio entre cero y uno, por eso ponemos *10, además lo vamos a redondear con Math. round
exports.numAleatorio = () => {
    return resultado = Math.round(Math.random()*10);
}
//para usar esta funcion en otro programa, por ejemplo en: programautilerias.js damos exports.       para exportarlo,
//Esto sirve para que otras perasonas puedan usar esa misma función que creamos
//Utilizamos el codigo escrito en otras cosas
exports.numAleatorio = () => {
    return resultado = Math.round( Math.random()*10);
}

