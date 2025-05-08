// Variables globales para el tiempo y el intervalo
let tiempo = 0;
let intervalo;

// Función para mostrar el resultado del cronómetro en el textarea
function mostrarResultadoCronometro(resultado) {
    const textarea = document.getElementById("resultado-cronometro");
    textarea.value = resultado;
}

// Función para mostrar el código en el pre
function mostrarCodigoCronometro(codigo) {
    const codeCronometro = document.getElementById("code-cronometro-mostrar");
    codeCronometro.textContent = codigo;
}

// Función para iniciar el incremento del cronómetro
function iniciarIncremento() {
    // Limpiamos cualquier intervalo previo para evitar múltiples intervalos activos
    clearInterval(intervalo);
    const codigo = `
let tiempo = 0;
let intervalo;

function iniciarIncremento() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempo++;
        mostrarResultadoCronometro(tiempo);
    }, 1000);
}`;

    mostrarCodigoCronometro(codigo);

    // Aquí creamos un closure: la función anónima dentro de setInterval
    // recuerda y tiene acceso a la variable 'tiempo' y 'mostrarResultadoCronometro'
    intervalo = setInterval(() => {
        tiempo++;
        mostrarResultadoCronometro(tiempo);
    }, 1000);
}

// Función para detener el cronómetro
function detener() {
    clearInterval(intervalo);
    const codigo = `
function detener() {
    clearInterval(intervalo);
}`;

    mostrarCodigoCronometro(codigo);
}

// Función para iniciar el decremento del cronómetro
function iniciarDecremento() {
    clearInterval(intervalo);
    const codigo = `
function iniciarDecremento() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempo--;
        mostrarResultadoCronometro(tiempo);
    }, 1000);
}`;

    mostrarCodigoCronometro(codigo);

    // Otro ejemplo de closure: la función anónima dentro de setInterval
    // recuerda y tiene acceso a la variable 'tiempo' y 'mostrarResultadoCronometro'
    intervalo = setInterval(() => {
        tiempo--;
        mostrarResultadoCronometro(tiempo);
    }, 1000);
}
