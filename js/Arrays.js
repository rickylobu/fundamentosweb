import Utils from './utils.js';
const idResultado = 'resultado-ejemplo-arrays';
const idCode = 'code-ejemplo-arrays-mostrar';

// Push
function ejecutarPush() {
    const array = [1, 2, 3];
    const elementoAAgregar =document.getElementById("input-push").value;
    if (elementoAAgregar){
        array.push(elementoAAgregar); //agrega al final
    }else {
        Utils.mostrarResultado(idResultado, `No agregaste nada, se agregará un 4`);
        array.push(4);
    }
    
    const codigo = `const array = [1, 2, 3];
    const elementoAAgregar =document.getElementById("input-push").value;
    if (elementoAAgregar){
        array.push(elementoAAgregar);
    }else {
        Utils.mostrarResultado(idResultado, \`No agregaste nada, se agregará un 4\`);
        array.push(4);
    }`;

    Utils.mostrarResultado(idResultado, `Array después de push: ${array}`);
    Utils.mostrarCodigo(idCode, codigo);
}

// Pop
function ejecutarPop() {
    const array = [1, 2, 3];
    const elementoExtraido = array.pop(); //último elemento

    const codigo = `const array = [1, 2, 3];
const elementoExtraido = array.pop(); // elementoExtraido es 3, array es [1, 2]`;

    Utils.mostrarResultado(idResultado, `Elemento eliminado: ${elementoExtraido}, Array restante: ${array}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//Unshift
function ejecutarUnshift() {
    const array = [2, 3];
    const elementoAAgregar =document.getElementById("input-unshift").value;
    if (elementoAAgregar){
        array.unshift(elementoAAgregar); //agrega al principio
    }else {
        Utils.mostrarResultado(idResultado, `No agregaste nada, se agregará un 1`);
        array.unshift(1); //agrega al principio
    }
    const codigo = `const array = [2, 3];
    const elementoAAgregar =document.getElementById("input-unshift").value;
    if (elementoAAgregar){
        array.unshift(elementoAAgregar); //agrega al principio
    }else {
        Utils.mostrarResultado(idResultado, 'No agregaste nada, se agregará un 1');
        array.unshift(1); //agrega al principio
    }`;

    Utils.mostrarResultado(idResultado, `Array después de unshift: ${array}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//shift
function ejecutarShift() {
    const array = [1, 2, 3];
    const elementoExtraido = array.shift(); // último elemento

    const codigo = `const array = [1, 2, 3];
const elementoExtraido = array.shift(); // elementoExtraido es 1, array es [2, 3]`;

    Utils.mostrarResultado(idResultado, `Elemento eliminado: ${elementoExtraido}, Array restante: ${array}`);
    Utils.mostrarCodigo(idCode, codigo);
}

function ejecutarConcat() {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const result = array1.concat(array2);

    const codigo = `const array1 = [1, 2];
const array2 = [3, 4];
const result = array1.concat(array2); // result es [1, 2, 3, 4]`;

    Utils.mostrarResultado(idResultado, `Array concatenado: ${result}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//Sort
function ejecutarSort() {
    const array = [3, 1, 4, 2];
    array.sort(); //ordena ascendentemente o alfabéticamente

    const codigo = `const array = [3, 1, 4, 2];
array.sort(); // Ahora array es [1, 2, 3, 4]`;

    Utils.mostrarResultado(idResultado, `Array ordenado: ${array}`);
    Utils.mostrarCodigo(idCode, codigo);
}

// Slice
function ejecutarSlice() {
    const array = [1, 2, 3, 4];
    const cortado = array.slice(1, 3); //(inicio incluido, final no incluido) para poder utilizar .length

    const codigo = `const array = [1, 2, 3, 4]; 
const cortado = array.slice(1, 3); // cortado es [2, 3]
//(inicio incluido, final no incluido) para poder utilizar .length`;

    Utils.mostrarResultado(idResultado, `Resultado de slice: ${cortado}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//Reverse
function ejecutarReverse() {
    const array = [1, 2, 3];
    array.reverse(); // Ahora array es [3, 2, 1]
    const nombres =["Ricardo", "Willy", "Patricio","Bob", "Alan", "Francisco"]
    nombres.sort(); //ordenado alfabéticamente A - Z
    nombres.reverse(); //ordenado de Z - A
    

    const codigo = `const array = [1, 2, 3];
    array.reverse(); // Ahora array es [3, 2, 1]
    const nombres =["Ricardo", "Willy", "Patricio","Bob", "Alan", "Francisco"]
    nombres.sort(); //ordenado alfabéticamente A - Z
    nombres.reverse(); //ordenado de Z - A`;

    Utils.mostrarResultado(idResultado, `Array invertido: ${array}\nNombres de Z - A: ${nombres}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//Flat
function ejecutarFlat() {
    const array = [1, [2, [3, [4]]]];
    const aplanado = array.flat(3);

    const codigo = `const array = [1, [2, [3, [4]]]];
const aplanado = array.flat(3); // aplanado es [1, 2, 3, 4]`;

    Utils.mostrarResultado(idResultado, `Array aplanado: ${aplanado}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//Includes
function ejecutarIncludes() {
    const array = [1, 2, 3, 4, "Ricardo", "Willy", "Patricio", "Bob", "Alan", "Francisco"];
    let elementoBuscado = document.getElementById("input-includes").value;
    let hasValue = false;

    if (elementoBuscado) {
        elementoBuscado = isNaN(elementoBuscado) ? elementoBuscado : Number(elementoBuscado);
        hasValue = array.includes(elementoBuscado);
    } else {
        Utils.mostrarResultado(idResultado, "No buscaste nada, se buscará Ricardo");
        elementoBuscado = "Ricardo";
        hasValue = array.includes(elementoBuscado);
    }

    const codigo = `const array = [1, 2, 3, 4, "Ricardo", "Willy", "Patricio", "Bob", "Alan", "Francisco"];
const elementoBuscado = document.getElementById("input-includes").value;
let hasValue = false;

if (elementoBuscado) {
    elementoBuscado = isNaN(elementoBuscado) ? elementoBuscado : Number(elementoBuscado);
    hasValue = array.includes(elementoBuscado);
} else {
    Utils.mostrarResultado(idResultado, "No buscaste nada, se buscará Ricardo");
    elementoBuscado = "Ricardo";
    hasValue = array.includes(elementoBuscado);
}`;

    Utils.mostrarResultado(idResultado, `¿Contiene el valor ${elementoBuscado}?: ${hasValue}`);
    Utils.mostrarCodigo(idCode, codigo);

    /* Bien por ver esto curioso! 
    Cómo utilizar includes sin que distinga mayusculas y minusculas?
    Todavía no sabemos programación funcional
    pero se podría utilizar map para volverlas toUperCase = mayusculas
    toLowerCase =minusculas y comparar en igualdad:
    
    elementoBuscado = isNaN(elementoBuscado) ? elementoBuscado.toLowerCase() : Number(elementoBuscado);
    hasValue = array.map(item => typeof item === 'string' ? item.toLowerCase() : item).includes(elementoBuscado);*/
}

// IndexOf
function ejecutarIndexOf() {
    const array = [1, 2, 3];
    const index = array.indexOf(2);

    const codigo = `const array = [1, 2, 3];
const index = array.indexOf(2); // index es 1`;

    Utils.mostrarResultado(idResultado, `Índice del valor 2: ${index}`);
    Utils.mostrarCodigo(idCode, codigo);
}

//LastIndexOf
function ejecutarLastIndexOf() {
    const array = [1, 2, 3, 2];
    const index = array.lastIndexOf(2);

    const codigo = `const array = [1, 2, 3, 2];
const index = array.lastIndexOf(2); // index es 3`;

    Utils.mostrarResultado(idResultado, `Último índice del valor 2: ${index}`);
    Utils.mostrarCodigo(idCode, codigo);
}

// Length
function ejecutarLength() {
    const array = [1, 2, 3];
    const length = array.length;

    const codigo = `const array = [1, 2, 3];
const length = array.length; // length es 3`;

    Utils.mostrarResultado(idResultado, `Longitud del array: ${length}`);
    Utils.mostrarCodigo(idCode, codigo);
}

export {
    ejecutarPush,
    ejecutarPop,
    ejecutarShift,
    ejecutarUnshift,
    ejecutarConcat,
    ejecutarSort,
    ejecutarSlice,
    ejecutarReverse,
    ejecutarFlat,
    ejecutarIncludes,
    ejecutarIndexOf,
    ejecutarLastIndexOf,
    ejecutarLength
};


/* ========== Archivo app.js ===========

Considera que al utilizar Utils utilizamos 
la importación y exportación por módulos
lo que nos obliga a asignar los eventos onclick 
de los botones a sus respectivas funciones:
//importación y asignación de funciones de Array
import * as Arrays from './js/Arrays.js';

function asignarBtnAFnArrays() {
    document.querySelector('button[onclick="ejecutarArrayPush()"]').onclick = Arrays.ejecutarPush;
    document.querySelector('button[onclick="ejecutarArrayPop()"]').onclick = Arrays.ejecutarPop;
    document.querySelector('button[onclick="ejecutarArrayUnshift()"]').onclick = Arrays.ejecutarUnshift;
    document.querySelector('button[onclick="ejecutarArrayShift()"]').onclick = Arrays.ejecutarShift;
    document.querySelector('button[onclick="ejecutarArrayConcat()"]').onclick = Arrays.ejecutarConcat;
    document.querySelector('button[onclick="ejecutarArraySort()"]').onclick = Arrays.ejecutarSort;
    document.querySelector('button[onclick="ejecutarArraySlice()"]').onclick = Arrays.ejecutarSlice;
    document.querySelector('button[onclick="ejecutarArrayReverse()"]').onclick = Arrays.ejecutarReverse;
    document.querySelector('button[onclick="ejecutarArrayFlat()"]').onclick = Arrays.ejecutarFlat;
    document.querySelector('button[onclick="ejecutarArrayIncludes()"]').onclick = Arrays.ejecutarIncludes;
    document.querySelector('button[onclick="ejecutarArrayIndexOf()"]').onclick = Arrays.ejecutarIndexOf;
    document.querySelector('button[onclick="ejecutarArrayLastIndexOf()"]').onclick = Arrays.ejecutarLastIndexOf;
    document.querySelector('button[onclick="ejecutarArrayLength()"]').onclick = Arrays.ejecutarLength;
}

//llamada a la función de asignación de Arrays
asignarBtnAFnArrays();
*/
