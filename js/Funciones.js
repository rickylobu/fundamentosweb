// Función para mostrar resultados acumulados
function mostrarResultadoFunciones(resultado) {
	const textarea = document.getElementById("resultado-funciones");
	textarea.value += resultado + "\n";
}

// Función para mostrar código dinámicamente
function mostrarCodigoFunciones(codigo) {
	const codeFunciones = document.getElementById("code-funciones-mostrar");
	codeFunciones.textContent = codigo;
}

// Función global
function ejecutarGlobal() {
	const codigo = `function ejecutarGlobal() {
	const codigo = \`function ejecutarGlobal() {\n // cuerpo de la función\n}\`;
	mostrarCodigoFunciones(codigo);
	mostrarResultadoFunciones("Resultado desde la función global.");
}`;
	mostrarCodigoFunciones(codigo);
	mostrarResultadoFunciones("Resultado desde la función global.");
}

// Función anónima
function ejecutarFuncionAnonima() {
	// Configurar un temporizador que ejecuta una función anónima después de 3 segundos
	const miFuncionAnonima = function () {
		setTimeout(function () {
			mostrarResultadoFunciones("Han pasado 3 segundos.");
		}, 3000);
	}

	const codigo = `// Configurar un temporizador que ejecuta una función anónima después de 3 segundos
    const miFuncionAnonima = function () {
        setTimeout(function() { 
            mostrarResultadoFunciones("Han pasado 3 segundos.");
        }, 3000);
    }
    mostrarCodigoFunciones(codigo);
    miFuncionAnonima();`;
	mostrarCodigoFunciones(codigo);
	miFuncionAnonima();
}

// Función asignada a constante
function ejecutarAsignadasAConstantes() {
	const miFuncionConst = function () {
		return "Resultado desde la función asignada a constante.";
	};
	const codigo = `const miFuncionConst = function () {\n return "Resultado desde la función asignada a constante.";\nmostrarCodigoFunciones(codigo);\nmostrarResultadoFunciones(miFuncionConst());\n}`;
	mostrarCodigoFunciones(codigo);
	mostrarResultadoFunciones(miFuncionConst());
}

// Función flecha
function ejecutarFuncionFlecha() {
	// Configurar un temporizador que ejecuta una función anónima después de 3 segundos
	const miFuncionAnonima = () => {

		// forma de función flecha completa (params, b) => {return params + b;}
		// se pueden quitar las llaves si es una sóla linea y los parentesis si es un sólo parámetro param => return console.log(param.xxx);
		// pueden no requerir parámetros ni devolver nada => console.log('HolaMundo');
		setTimeout(() => {
			mostrarResultadoFunciones("Han pasado 2 segundos.");
		}, 2000);
	}

	const codigo = `// Configurar un temporizador que ejecuta una función anónima después de 3 segundos
    const miFuncionAnonima = () => {

// forma de función flecha completa (params, b) => {return params + b;}
// se pueden quitar las llaves si es una sóla linea y los parentesis si es un sólo parámetro param => return console.log(param.xxx);
// pueden no requerir parámetros ni devolver nada => console.log('HolaMundo');
		setTimeout( () => { 
            mostrarResultadoFunciones("Han pasado 2 segundos.");
        }, 2000);
    }
    mostrarCodigoFunciones(codigo);
    miFuncionAnonima();`;
	mostrarCodigoFunciones(codigo);
	miFuncionAnonima();
}

// Función como parámetro
function ejecutarFuncionComoParametro() {
	// Función que recibe dos números y una función de operación
	function calcular(a, b, operacion) {
		return operacion(a, b);
	}

	// Funciones de operación
	const sumar = (x, y) => x + y;
	const restar = (x, y) => x - y;
	const multiplicar = (x, y) => x * y;
	const dividir = (x, y) => x / y;

	// Uso de la función calcular con diferentes operaciones
	const resultadoSuma = calcular(10, 5, sumar);
	const resultadoResta = calcular(10, 5, restar);
	const resultadoMultiplicacion = calcular(10, 5, multiplicar);
	const resultadoDivision = calcular(10, 5, dividir);

	mostrarResultadoFunciones(`Suma: ${resultadoSuma}`); // Suma: 15
	mostrarResultadoFunciones(`Resta: ${resultadoResta}`); // Resta: 5
	mostrarResultadoFunciones(`Multiplicación: ${resultadoMultiplicacion}`); // Multiplicación: 50
	mostrarResultadoFunciones(`División: ${resultadoDivision}`); // División: 2

	const codigo = `// Función que recibe dos números y una función de operación
function calcular(a, b, operacion) {
	return operacion(a, b);
}

// Funciones de operación
const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => x / y;

// Uso de la función calcular con diferentes operaciones
const resultadoSuma = calcular(10, 5, sumar);
const resultadoResta = calcular(10, 5, restar);
const resultadoMultiplicacion = calcular(10, 5, multiplicar);
const resultadoDivision = calcular(10, 5, dividir);

mostrarResultadoFunciones(\`Suma: \${resultadoSuma}\`); // Suma: 15
mostrarResultadoFunciones(\`Resta: \${resultadoResta}\`); // Resta: 5
mostrarResultadoFunciones(\`Multiplicación: \${resultadoMultiplicacion}\`); // Multiplicación: 50
mostrarResultadoFunciones(\`División: \${resultadoDivision}\`); // División: 2
`;
	mostrarCodigoFunciones(codigo);

}

// Método de objeto
function ejecutarMetodoObjeto() {
	const objeto = {
		saludar: function () {
			return "Hola desde un método de objeto.";
		}
	};
	const codigo = `const objeto = {\n saludar: function () {\n return "Hola desde un método de objeto.";\n }\n};`;
	mostrarCodigoFunciones(codigo);
	mostrarResultadoFunciones(objeto.saludar());
}
