import Utils from './utils.js';
const idResultado = 'resultado-metodos-arrays-orden-superior';
const idCode = 'code-metodos-arrays-orden-superior-mostrar';

 
//   Funciones Impuras de Orden Superior de Arrays


/* forEach()
   - Ejemplo impuro: recorre cada elemento y concatena un string (efecto secundario).
   - No devuelve un nuevo array.
*/
function ejecutarForEach() {
    const array = [1, 2, 3, 4];
    let resultado = "";
    array.forEach((element, index) => {
        resultado += `Elemento ${index}: ${element}\n`;
    });
    const codigo = `const array = [1, 2, 3, 4];
let resultado = "";
array.forEach((element, index) => {
    resultado += \`Elemento \${index}: \${element}\\n\`;
});
console.log(resultado);`;
    Utils.mostrarResultado(idResultado, resultado);
    Utils.mostrarCodigo(idCode, codigo);
}

/* sort()
   - Ejemplo impuro: ordena el array original según una función de comparación.
   - Modifica el array original, por lo que no es pura.
*/
function ejecutarArraySort() {
    const array = [3, 1, 4, 2];
    array.sort((a, b) => a - b);
    const codigo = `const array = [3, 1, 4, 2];
array.sort((a, b) => a - b); // Ahora array es [1, 2, 3, 4]`;
    Utils.mostrarResultado(idResultado, `Array ordenado: ${array}`);
    Utils.mostrarCodigo(idCode, codigo);
}

 
//   Funciones Puros de Orden Superior de Arrays


/* map()
   - Aplica una función a cada elemento del array y devuelve un nuevo array.
   - No modifica el array original.
*/
function ejecutarArrayMap() {
    const array = [1, 2, 3, 4];
    const mapped = array.map(x => x * 2);
    const codigo = `const array = [1, 2, 3, 4];
const mapped = array.map(x => x * 2); // mapped es [2, 4, 6, 8]`;
    Utils.mostrarResultado(idResultado, `Array mapeado (cada elemento * 2): ${mapped}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* filter()
   - Devuelve un nuevo array con los elementos que cumplen la condición.
   - No altera el array original.
*/
function ejecutarArrayFilter() {
    const array = [1, 2, 3, 4, 5, 6];
    const filtered = array.filter(x => x % 2 === 0);
    const codigo = `const array = [1, 2, 3, 4, 5, 6];
const filtered = array.filter(x => x % 2 === 0); // filtered es [2, 4, 6]`;
    Utils.mostrarResultado(idResultado, `Array filtrado (solo pares): ${filtered}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* reduce()
   - Recorre el array y acumula sus elementos en un único valor mediante una función acumuladora.
   - Devuelve el resultado sin modificar el array original.
*/
function ejecutarArrayReduce() {
    const array = [1, 2, 3, 4];
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    const codigo = `const array = [1, 2, 3, 4];
const sum = array.reduce((acc, curr) => acc + curr, 0); // sum es 10`;
    Utils.mostrarResultado(idResultado, `Suma de elementos con reduce: ${sum}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* some()
   - Comprueba si al menos un elemento cumple con la condición del callback.
   - Devuelve un booleano sin modificar el array.
*/
function ejecutarArraySome() {
    const array = [1, 3, 5, 7];
    const hasEven = array.some(x => x % 2 === 0);
    const codigo = `const array = [1, 3, 5, 7];
const hasEven = array.some(x => x % 2 === 0); // hasEven es false`;
    Utils.mostrarResultado(idResultado, `¿Algún elemento es par? ${hasEven}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* every()
   - Verifica si todos los elementos cumplen la condición.
   - Devuelve un booleano sin alterar el array.
*/
function ejecutarArrayEvery() {
    const array = [2, 4, 6, 8];
    const allEven = array.every(x => x % 2 === 0);
    const codigo = `const array = [2, 4, 6, 8];
const allEven = array.every(x => x % 2 === 0); // allEven es true`;
    Utils.mostrarResultado(idResultado, `¿Todos los elementos son pares? ${allEven}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* find()
   - Devuelve el primer elemento que cumple la condición.
   - No modifica el array original.
*/
function ejecutarArrayFind() {
    const array = [5, 12, 8, 130, 44];
    const found = array.find(x => x > 10);
    const codigo = `const array = [5, 12, 8, 130, 44];
const found = array.find(x => x > 10); // found es 12, el primer elemento mayor que 10`;
    Utils.mostrarResultado(idResultado, `Primer elemento mayor a 10: ${found}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* findIndex()
   - Devuelve el índice del primer elemento que cumple la condición o -1 si ninguno la cumple.
   - Es una función pura.
*/
function ejecutarArrayFindIndex() {
    const array = [5, 12, 8, 130, 44];
    const index = array.findIndex(x => x > 10);
    const codigo = `const array = [5, 12, 8, 130, 44];
const index = array.findIndex(x => x > 10); // index es 1`;
    Utils.mostrarResultado(idResultado, `Índice del primer elemento mayor a 10: ${index}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* flatMap()
   - Aplica una función a cada elemento y luego aplana el resultado en un nuevo array.
   - No modifica el array original.
*/
function ejecutarArrayFlatMap() {
    const array = [1, 2, 3];
    const flatMapped = array.flatMap(x => [x, x * 2]);
    const codigo = `const array = [1, 2, 3];
const flatMapped = array.flatMap(x => [x, x * 2]);
// flatMapped es [1, 2, 2, 4, 3, 6]`;
    Utils.mostrarResultado(idResultado, `Array flatMap (cada elemento y su doble): ${flatMapped}`);
    Utils.mostrarCodigo(idCode, codigo);
}

export {
    ejecutarForEach,
    ejecutarArraySort,
    ejecutarArrayMap,
    ejecutarArrayFilter,
    ejecutarArrayReduce,
    ejecutarArraySome,
    ejecutarArrayEvery,
    ejecutarArrayFind,
    ejecutarArrayFindIndex,
    ejecutarArrayFlatMap
};
