const btnOperadores = document.getElementById('btn-operadores');

btnOperadores.onclick = function () {
	console.clear(); // limpia la consola de ejercicios anteriores
	console.log("=== Ejemplo: Operadores en JavaScript ===");

	// Operadores Algebráicos
	console.log("\nOperadores Algebráicos:");
	console.log("Suma (5 + 3):", 5 + 3);
	console.log("Resta (5 - 3):", 5 - 3);
	console.log("Multiplicación (5 * 3):", 5 * 3);
	console.log("División (5 / 2):", 5 / 2);
	console.log("Módulo (5 % 2):", 5 % 2);
	console.log("Exponenciación (2 ** 3):", 2 ** 3);
	console.log("Raíz cuadrada de 16 (Math.sqrt(16)):", Math.sqrt(16));

	// Operadores de Asignación
	console.log("\nOperadores de Asignación:");
	let x = 10;
	console.log("Inicial:", x);
	x += 5;
	console.log("x += 5:", x);
	x -= 3;
	console.log("x -= 3:", x);
	x *= 4;
	console.log("x *= 4:", x);
	x /= 2;
	console.log("x /= 2:", x);
	x %= 5;
	console.log("x %= 5:", x);
	x **= 2;
	console.log("x **= 2:", x);

	// Operadores de Comparación
	console.log("\nOperadores de Comparación:");
	console.log("5 == 5", 5 == 5); // == Comparación debil
	console.log("'5' == 5", '5' == 5); // == La comparación debil
	//  convierte el string en number para compararlos
	console.log("5 === 5", 5 === 5); // == Comparación estricta
	console.log("'5' === 5:", '5' === 5); // == La comparación estricta
	//  compara el string y el number 
	console.log("'texto'.toLowerCase === \"Texto\".toLowerCase", 'texto'.toLowerCase === "Texto".toLowerCase);
	// Los textos se pueden comparar de esta forma pero te recomiendo investigar 
	// Expresiones Regulares (regex) al finalizar esta clase
	console.log("5 !== 3:", 5 !== 3);
	console.log("5 < 3:", 5 < 3);
	console.log("5 > 3:", 5 > 3);
	console.log("5 <= 5:", 5 <= 5);
	console.log("5 >= 3:", 5 >= 3);

	// Operadores Lógicos
	console.log("\nOperadores Lógicos:");
	console.log("true && false:", true && false);
	console.log("true || false:", true || false);
	console.log("!true:", !true);

	// Operadores Unarios (Autoincremento y Autodecremento)
	console.log("\nOperadores Unarios:");
	let y = 1;
	console.log(`Inicial: y = ${y}`);
	console.log(`y++: ${y++}`);
	console.log(`Después de y++: y = ${y}`);
	console.log(`y--: ${y--}`);
	console.log(`Después de y--: y = ${y}`);

	// Operadores de Concatenación
	console.log("\nOperadores de Concatenación:");
	console.log('"Hola" + " Mundo":', "Hola" + " Mundo");

	// Operador Condicional Ternario
    console.log("\nOperador Condicional Ternario:");

	const fechaNacInput = document.getElementById('fecha-nacimiento').value;
if (fechaNacInput === '' || fechaNacInput === undefined) {
    document.getElementById('resultado').textContent = 'Por favor, ingresa una fecha de nacimiento válida.';
    console.log('Por favor, ingresa una fecha de nacimiento válida.');
} else {
    const fechaNac = new Date(fechaNacInput);
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();

    // Calcular meses y días exactos
    let mes = fechaActual.getMonth() - fechaNac.getMonth();
    let dia = fechaActual.getDate() - fechaNac.getDate();

    // Ajustar la edad si el cumpleaños aún no ha ocurrido este año
    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
        mes += 12; // Ajustar meses si el cumpleaños no ha pasado
    }
    if (dia < 0) {
        // Ajustar días si aún no ha pasado el día de nacimiento
        mes--;
        const ultimoDiaMesAnterior = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 0).getDate();
        dia += ultimoDiaMesAnterior;
    }

    const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    console.log(`Edad: ${edad} años, ${mes === 1 ? 'un mes' : mes + ' meses'}, y ${dia === 1 ? 'un día' : dia + ' días'}, y por lo tanto ${mensaje}`);
    document.getElementById('resultado').textContent = `Edad: ${edad} años, ${mes === 1 ? 'un mes' : mes + ' meses'}, y ${dia === 1 ? 'un día' : dia + ' días'}, y por lo tanto ${mensaje}`;
}
};


