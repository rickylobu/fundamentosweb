// addEventListenerAvanzado.js
import Utils from './utils.js';
const idResultado = 'resultado-addEventListener-avanzado';
const idCode = 'code-addEventListener-avanzado-mostrar';

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


/**
 * Función avanzada que crea un div con un listener configurado con opciones avanzadas:
 * - capture: true
 * - once: true
 * - passive: true
 * - signal: AbortController para cancelar el listener tras 10 segundos si no se ejecuta.
 */
export default function ejecutarListenerAvanzado() {

    const container = document.getElementById('container-listener-avanzado');
    container.innerHTML = '';

    Utils.mostrarResultado(
        idResultado,
        "Función ejecutarListenerAvanzado ejecutada: "
    );

    // Creamos el div que contendrá el listener avanzado
    const div = document.createElement('div');
    div.id = 'div-avanzado';
    div.textContent = "Haz clic en este div con listener avanzado, (se ejecutará solo una vez)";
    div.style.cursor = 'pointer';
    div.style.padding = "10px";
    div.style.border = "2px solid black";
    div.style.backgroundColor = "#f0f0f0";

    // Creamos un AbortController para utilizar la opción 'signal'
    const controller = new AbortController();
    const signal = controller.signal;

    // Definimos las opciones avanzadas
    const opciones = {
        capture: true,
        once: true,
        passive: true,
        signal: signal
    };

    // Cramos variable para control de signal
    let ejecutado = false;
    // Asignamos el listener avanzado
    div.addEventListener('click', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(
            idResultado,
            `Listener avanzado activado a las ${date.toLocaleTimeString()}.
Se ejecuta solo una vez (once:true) y se capturó en fase de captura ${ev.eventPhase}.`
        );
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "Listener ejecutado y removido (once: true)";
        ejecutado = true;
    }, opciones);

    container.appendChild(div);

    // Cancelar el listener automáticamente después de 10 segundos si no se ejecutó
    setTimeout(() => {
      if (!ejecutado){
        controller.abort();
        Utils.mostrarResultado(
            idResultado,
            "AbortController: El listener avanzado ha sido cancelado por timeout (10 s)."
        );
        div.textContent = "Ya no tiene listener este div";
      }
      let res = ejecutado?"se utilizo el Listener antes de abortarlo.":"se abortó el Listener";
      Utils.mostrarResultado(idResultado,"\nterminarón los 10 segundos y " + res + ", ejecutado = " + ejecutado);
    }, 10000);

    Utils.mostrarResultado(
        idResultado,
        "Listener avanzado creado con opciones: capture=true, once=true, passive=true, signal=AbortController.\nSi no se ejecuta se elimina el listener después de 10 segundos"
    );

    const codigo = `/**
 * Función avanzada que crea un div con un listener configurado con opciones avanzadas:
 * - capture: true
 * - once: true
 * - passive: true
 * - signal: AbortController para cancelar el listener tras 10 segundos si no se ejecuta.
 */
export default function ejecutarListenerAvanzado() {

    const container = document.getElementById('container-listener-avanzado');
    container.innerHTML = '';

    Utils.mostrarResultado(
        idResultado,
        "Función ejecutarListenerAvanzado ejecutada: "
    );

    // Creamos el div que contendrá el listener avanzado
    const div = document.createElement('div');
    div.id = 'div-avanzado';
    div.textContent = "Haz clic en este div con listener avanzado, (se ejecutará solo una vez)";
    div.style.cursor = 'pointer';
    div.style.padding = "10px";
    div.style.border = "2px solid black";
    div.style.backgroundColor = "#f0f0f0";

    // Creamos un AbortController para utilizar la opción 'signal'
    const controller = new AbortController();
    const signal = controller.signal;

    // Definimos las opciones avanzadas
    const opciones = {
        capture: true,
        once: true,
        passive: true,
        signal: signal
    };

    // Cramos variable para control de signal
    let ejecutado = false;
    // Asignamos el listener avanzado
    div.addEventListener('click', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(
            idResultado,
            \`Listener avanzado activado a las \${date.toLocaleTimeString()}.
Se ejecuta solo una vez (once:true) y se capturó en fase de captura \${ev.eventPhase}.\`
        );
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "Listener ejecutado y removido (once: true)";
        ejecutado = true;
    }, opciones);

    container.appendChild(div);

    // Cancelar el listener automáticamente después de 10 segundos si no se ejecutó
    setTimeout(() => {
      if (!ejecutado){
        controller.abort();
        Utils.mostrarResultado(
            idResultado,
            "AbortController: El listener avanzado ha sido cancelado por timeout (10 s)."
        );
        div.textContent = "Ya no tiene listener este div";
      }
      let res = ejecutado?"se utilizo el Listener antes de abortarlo.":"se abortó el Listener";
      Utils.mostrarResultado(idResultado,"\nterminarón los 10 segundos y " + res + ", ejecutado = " + ejecutado);
    }, 10000);

    Utils.mostrarResultado(
        idResultado,
        "Listener avanzado creado con opciones: capture=true, once=true, passive=true, signal=AbortController.\nSi no se ejecuta se elimina el listener después de 10 segundos"
    );
`;

    Utils.mostrarCodigo(idCode, codigo);
    
}
