console.log('Aloha Curioso! Bienvenido a la clase de JavaScript!');

var globalVar = "La palabra reservada var ya no se utiliza para almacenar variables ya que estas se almacenan a nivel global y no de ámbito, prácticamente se conserva por compatibilidad con código anterior a ES6.";

let nombre = "Estudiante";

const texto = `Hola ${nombre}, recuerda que ${globalVar}`;

const btnVariables = document.getElementById('btn-variables-primitivos');
btnVariables.onclick = function () {
    console.log(texto);

    // Ejemplos de tipos de datos primitivos
    let numero = 42; // number
    let cadena = "Esto es una cadena"; // string
    let booleano = true; // boolean
    let nulo = null; // null
    let indefinido; // undefined
    let simbolo = Symbol('simbolo'); // symbol
    let bigInt = 1234567890123456789012345678901234567890n; // bigint

    console.log("Número:", numero, " - Tipo:", typeof numero);
    console.log("Cadena:", cadena, " - Tipo:", typeof cadena);
    console.log("Booleano:", booleano, " - Tipo:", typeof booleano);
    console.log("Nulo:", nulo, " - Tipo:", typeof nulo, " - Es instancia de Object:", nulo instanceof Object);
    console.log("Indefinido:", indefinido, " - Tipo:", typeof indefinido);
    console.log("Símbolo:", simbolo, " - Tipo:", typeof simbolo);
    console.log("BigInt:", bigInt, " - Tipo:", typeof bigInt);
};
