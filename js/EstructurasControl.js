// Función para mostrar resultados acumulados
function mostrarResultadoEstructurasControl(resultado) {
	const textarea = document.getElementById("resultado-control");
	textarea.value += resultado + "\n";
}

// Función para mostrar código dinámicamente
function mostrarCodigoEstructurasControl(codigo) {
	const codeEstructuras = document.getElementById("code-estructuras-mostrar");
	codeEstructuras.textContent = codigo;
}

// Ejemplos
function ejecutarIf() {
    const num = 10;
    let resultado;
    const codigo = `
    const num = 10;
    if (num > 5) {
        resultado = "El número es mayor que 5.";
    } else {
        resultado = "El número es menor o igual a 5.";
    }`;

    if (num > 5) {
        resultado = "El número es mayor que 5.";
    } else {
        resultado = "El número es menor o igual a 5.";
    }
    
    mostrarCodigoEstructurasControl(codigo);
	mostrarResultadoEstructurasControl(resultado);
}

function ejecutarElseIf() {
	const num = 7;
	let resultado;
	const codigo = `
	const num = 7;
	if (num > 10) {
		resultado = "El número es mayor que 10.";
	} else if (num > 5) {
		resultado = "El número está entre 6 y 10.";
	} else {
		resultado = "El número es 5 o menor.";
	}`;

	if (num > 10) {
		resultado = "El número es mayor que 10.";
	} else if (num > 5) {
		resultado = "El número está entre 6 y 10.";
	} else {
		resultado = "El número es 5 o menor.";
	}

	mostrarCodigoEstructurasControl(codigo);
	mostrarResultadoEstructurasControl(resultado);
}

function ejecutarSwitch() {
	const fruta = "manzana";
	let resultado;
	const codigo = `
	const fruta = "manzana";
	switch (fruta) {
		case "manzana":
			resultado = "Es una manzana.";
			break;
		case "naranja":
			resultado = "Es una naranja.";
			break;
		default:
			resultado = "Fruta desconocida.";
	}`;

	switch (fruta) {
		case "manzana":
			resultado = "Es una manzana.";
			break;
		case "naranja":
			resultado = "Es una naranja.";
			break;
		default:
			resultado = "Fruta desconocida.";
	}

	mostrarCodigoEstructurasControl(codigo);
	mostrarResultadoEstructurasControl(resultado);
}

// Bucle: for
function ejecutarFor() {
	const codigo = `
    let resultado = "Números del 1 al 5: ";
	for (let i = 1; i <= 5; i++) {
		resultado += i + " ";
	}`;
	let resultado = "Números del 1 al 5: ";
	for (let i = 1; i <= 5; i++) {
		resultado += i + " ";
	}
	mostrarCodigoEstructurasControl(codigo);
	mostrarResultadoEstructurasControl(resultado.trim());
}

// Bucle: while
function ejecutarWhile() {
	const codigo = `
	let num = 1;
    let resultado = "Números del 1 al 8: ";
	while (num <= 8) {
		resultado += num + " ";
		num++;
	}`;
	let num = 1;
	let resultado = "Números del 1 al 8: ";
	while (num <= 8) {
		resultado += num + " ";
		num++;
	}
	mostrarCodigoEstructurasControl(codigo);
	mostrarResultadoEstructurasControl(resultado.trim());
}

// Bucle: do while
function ejecutarDoWhile() {
	const codigo = `
	let num = 1;
    let resultado = "Números del 1 al 10: ";
	do {
		resultado += num + " ";
		num++;
	} while (num <= 10);`;
	let num = 1;
	let resultado = "Números del 1 al 10: ";
	do {
		resultado += num + " ";
		num++;
	} while (num <= 10);
	mostrarCodigoEstructurasControl(codigo);
	mostrarResultadoEstructurasControl(resultado.trim());
}
