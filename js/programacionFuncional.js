import Utils from './utils.js';
const idResultado = 'resultado-programacion-funcional';
const idCode = 'code-programacion-funcional-mostrar';

/* 
   Ejemplo: Función de Orden Superior
   
   Definimos una función de orden superior que toma como parámetro una función 
   (operación) y dos valores, aplicando la operación a dichos valores. Esta función
   es de orden superior porque su parámetro es una función. */
function ejecutarFnOrdenSuperior() {
    function ejecutarOperacion(a, b, operacion) {
        // Esta función toma una función "operacion" y la aplica a a y b.
        return operacion(a, b);
    }
    const suma = (x, y) => x + y;
    const resultado = ejecutarOperacion(5, 3, suma); // resultado es 8

    const codigo = `// Función de Orden Superior: toma una función como argumento
function ejecutarOperacion(a, b, operacion) {
    return operacion(a, b);
}

const suma = (x, y) => x + y;
const resultado = ejecutarOperacion(5, 3, suma); // resultado es 8`;
    
    Utils.mostrarResultado(idResultado, `Resultado de función de orden superior: ${resultado}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* 
   Ejemplo: Función Callback
   
   Aquí simulamos una operación asíncrona que recibe un callback. La función
   "fetchData" espera 2 segundos antes de ejecutar el callback, lo que imita una llamada 
   asíncrona. */
function ejecutarFnCallback() {
    function fetchData(callback) {
        setTimeout(() => {
            callback("Datos recibidos");
        }, 2000);
    }
    fetchData((data) => {
        const codigo = `// Función que simula una operación asíncrona utilizando un callback
function fetchData(callback) {
    setTimeout(() => {
        callback("Datos recibidos");
    }, 2000);
}

fetchData((data) => {
    console.log(data); // Imprime: Datos recibidos
});`;
        Utils.mostrarResultado(idResultado, `Resultado de callback: ${data}`);
        Utils.mostrarCodigo(idCode, codigo);
    });
}

/* 
   Ejemplo: Función Pura
   
   Una función pura es aquella que, para los mismos argumentos, siempre devuelve 
   el mismo resultado y no tiene efectos secundarios. Aquí definimos "pureSum" como
   una función pura que suma dos números. */
function ejecutarFnPura() {
    const pureSum = (a, b) => a + b;
    const result = pureSum(3, 4); // 7

    const codigo = `// Función pura: sin efectos secundarios y siempre retorna el mismo resultado
const pureSum = (a, b) => a + b;
const result = pureSum(3, 4); // result es 7`;
    
    Utils.mostrarResultado(idResultado, `Resultado de función pura: ${result}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* 
   Ejemplo: Composición de Funciones
   
   La composición de funciones consiste en combinar funciones simples para formar
   una función más compleja. La función "compose" definida a continuación toma dos 
   funciones f y g y retorna una nueva función que, dada una entrada x, calcula f(g(x)).
   Esto es fundamental en programación funcional para construir transformaciones complejas.
*/
function ejecutarFnComposicion() {
    const compose = (f, g) => x => f(g(x));
    const double = x => x * 2;
    const increment = x => x + 1;
    const composedFunction = compose(double, increment); // Equivale a: x => double(increment(x))
    const result = composedFunction(3); // (3 + 1) * 2 = 8

    const codigo = `// Composición de funciones: combina dos funciones en una nueva función
const compose = (f, g) => x => f(g(x));
const double = x => x * 2;
const increment = x => x + 1;
const composedFunction = compose(double, increment); // x => double(increment(x))
const result = composedFunction(3); // result es 8`;
    
    Utils.mostrarResultado(idResultado, `Resultado de composición de funciones: ${result}`);
    Utils.mostrarCodigo(idCode, codigo);
}

export {
    ejecutarFnOrdenSuperior,
    ejecutarFnCallback,
    ejecutarFnPura,
    ejecutarFnComposicion    
};

/*
Nuevamente, tu muy bien por llegar hasta el final curioso! 
aquí te dejo una explicación de lo que he aprendido de la programación funcional
aplicada a la programación reactiva: 

   Explicación de Principios: Inmutabilidad y Transparencia Referencial
   
   Estos principios son fundamentales para definir una función pura:
   - Inmutabilidad: Una vez creados, los datos no se modifican. Se generan nuevas 
     versiones de los datos cuando se requiere un cambio, evitando efectos secundarios.
   - Transparencia referencial: Una función produce el mismo resultado dado el mismo 
     conjunto de entradas, sin depender de estados externos.
   
   Cuando ambos principios se respetan, se obtiene una función pura.
   La programación funcional se utiliza en contextos donde la predictibilidad es 
   esencial, como en cálculos intensivos, análisis de datos, renderizado de modelos y 
   sistemas científicos. En programación reactiva, aunque se muta el estado de la aplicación,
   las transformaciones de datos se realizan mediante funciones puras para mantener la 
   consistencia de los resultados. Herramientas como --> ImmutableJS <-- ayudan a conservar el estado
   previo, permitiendo aplicar transformaciones inmutables sin romper los principios fundamentales
   y gestionar la memoria, cambiando los nodos o referencias de los datos modificados y manteniendo
   las referencias de los no que no mutarón para no replicar y sobrecargar con los mismos datos la memoria.
*/

