import Utils from './utils.js';

const idResultado = 'resultado-asincronismo-completo';

// Función para generar un color aleatorio para cada card
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function mostrarTiempo() {
    const now = new Date();
    const tiempoformateado = now.toLocaleTimeString() + '.' + now.getMilliseconds().toString().padStart(3, '0');
    return tiempoformateado;
}

// Función para obtener la ubicación (Citadel of Ricks)
async function obtenerUbicacion() {
    try {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Solicitando ubicación a la API de Rick and Morty...\n`);
        const respuesta = await fetch('https://rickandmortyapi.com/api/location/3');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const ubicacion = await respuesta.json();
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Ubicación obtenida: ${ubicacion}\n`); //${JSON.stringify(ubicacion)} mostarar respuesta completa
        return ubicacion;
    } catch (error) {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Error al obtener la ubicación: ${error}\n`);
        throw error;
    }
}

// Función para crear y mostrar las cards de un residente
function mostrarCard(residente) {
    const container = document.getElementById('container-asincronismo-completo');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = generarColorAleatorio();
    card.innerHTML = `
        <img src="${residente.image}" alt="${residente.name}">
        <h5>ID: ${residente.id}</h5>
        <h4>${residente.name}</h4>
        <p><strong>Location:</strong> ${residente.location.name}</p>
        <p><strong>Status:</strong> ${residente.status}</p>
      `;
    container.appendChild(card);
}

// Función para obtener un residente usando Fetch con promesas (then/catch)
function obtenerResidenteConThen(url) {
    Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Iniciando fetch (then/catch) para: ${url}\n`);
    return fetch(url)
        .then(res => {
            if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
            return res.json();
        })
        .then(data => {
            Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Residente (then/catch) obtenido: ${data.name}\n`);
            return data;
        })
        .catch(error => {
            Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Error en fetch (then/catch): ${error}\n`);
            throw error;
        });
}

// Función para obtener un residente usando Fetch con async/await y try/catch
async function obtenerResidenteConAsyncAwait(url) {
    try {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Iniciando fetch (async/await) para: ${url}\n`);
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Residente (async/await) obtenido: ${data.name}\n`);
        return data;
    } catch (error) {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Error en fetch (async/await): ${error}\n`);
        throw error;
    }
}

// Función para obtener un residente usando Top-Level Await simulado (dentro de la función)
async function obtenerResidenteConTopLevelAwait(url) {
    try {
        // Nota: Top-Level Await se usa a nivel global en módulos.
        // Aquí se simula su comportamiento dentro de la función.
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Iniciando fetch (Top-Level Await simulado) para: ${url}\n`);
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Error HTTP: ${res.status}`);
        }
        const data = await res.json();
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Residente (Top-Level Await simulado) obtenido: ${data.name}\n`);
        return data;
    } catch (error) {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Error en fetch (Top-Level Await simulado): ${error}\n`);
        throw error;
    }
}

// Función para obtener un residente usando XHR
function obtenerResidenteConXHR(url) {
    return new Promise((resolve, reject) => {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Iniciando XHR para: ${url}\n`);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Residente (XHR) obtenido: ${data.name}\n`);
                    resolve(data);
                } else {
                    Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Error en XHR: ${xhr.status}\n`);
                    reject(new Error(`Error en XHR: ${xhr.status}`));
                }
            }
        };
        xhr.send();
    });
}

// Función principal que orquesta la solicitud y muestra todos los resultados
export default async function ejecutarEjemploAsincronismoCompleto() {
    try {
        //limpiar resultados de ejecuciones anteriores en textarea
        document.getElementById("resultado-asincronismo-completo").value = "";
        // Limpiar contenedor de cards
        document.getElementById('container-asincronismo-completo').innerHTML = "";
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Inicio ejecución Call Stack Sincrono\n`);

        // Delegar una promesa en la Microtask Queue
        Promise.resolve().then(() => {
            Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Callback de la Promesa\n`);
        });

        // Obtener la ubicación (Citadel of Ricks)
        const ubicacion = await obtenerUbicacion();

        // Extraer los primeros 4 URLs de residentes de la ubicación
        const residents = ubicacion.residents.slice(0, 4);

        /* 
          Para demostrar el uso de distintos métodos asíncronos:
          - Primer residente: Fetch con promesas (then/catch)
          - Segundo residente: Fetch con async/await y try/catch
          - Tercer residente: Fetch con Top-Level Await simulado
          - Cuarto residente: Solicitud XHR
        */

        // 1. Fetch con promesas (then/catch)
        const residente1 = await obtenerResidenteConThen(residents[0]);
        mostrarCard(residente1);

        // 2. Fetch con async/await y try/catch
        const residente2 = await obtenerResidenteConAsyncAwait(residents[1]);
        mostrarCard(residente2);

        // 3. Fetch con Top-Level Await simulado
        const residente3 = await obtenerResidenteConTopLevelAwait(residents[2]);
        mostrarCard(residente3);

        // 4. Solicitud XHR
        const residente4 = await obtenerResidenteConXHR(residents[3]);
        mostrarCard(residente4);

        // Agregar un listener para un CustomEvent que demuestre la propagación de eventos en el DOM
        document.addEventListener('asincronismo-event', (e) => {
            Utils.mostrarResultado(idResultado, 'Evento asincronismo-event recibido: ' + e.detail);
        });

        // Despachar un CustomEvent para demostrar la propagación de eventos en el DOM (Task Queue)
        const customEvent = new CustomEvent('asincronismo-event', { detail: 'Evento personalizado para demostrar Task Queue y propagación en el DOM\n' });
        document.dispatchEvent(customEvent);

        // Simulación de evento en Task Queue con setTimeout
        setTimeout(() => {
            Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Callback de setTimeout\n`);
        }, 0);

        // Fin de la ejecución síncrona
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Fin de ejecución Síncrona. Se supone que este mensaje es para indicar que en este punto se delegaron las operaciones asíncronas y el Call Stack quedó libre para que el Event Loop procese las colas. Pero debido al async await este mensaje se retrasa de forma secuencial\n`);

        /* 
          Explicación del flujo completo:
          
          1. El Call Stack se ejecuta de forma síncrona y se asigna memoria en el Heap para todas las variables y objetos.
          2. Las operaciones asíncronas (fetch, XHR, setTimeout, dispatchEvent) se delegan a las colas correspondientes:
             - Microtask Queue: Promesas resueltas (FIFO).
             - Task Queue: Eventos de DOM (setTimeout, dispatchEvent) (FIFO).
          3. Una vez vaciado el Call Stack, el Event Loop comienza a procesar:
             a. Primero, la Microtask Queue: Se ejecuta el callback de la promesa (FIFO).
             b. Luego, la Task Queue: Se ejecutan los callbacks en el orden en que fueron registrados.
          4. En cada ciclo, antes de procesar la siguiente tarea, se libera el Call Stack para atender nuevas interacciones de la UI.
          
          Este flujo garantiza que el código asíncrono se procese de forma ordenada y que la UI se mantenga responsiva.
        */
        // Mostrar lista de flujo en el DOM
        const flowList = document.createElement('div');
        flowList.classList.add('flow-list');
        flowList.innerHTML = `
  <h4>Flujo Completo de Ejecución</h4>
  <ol>
    <li>
      <strong>Ejecución Síncrona:</strong> 
      <ul>
        <li>El código se ejecuta de forma secuencial en el Call Stack, donde se asigna memoria en el Heap para variables y objetos.</li>
        <li>Durante esta fase se ejecutan instrucciones síncronas (como “Inicio ejecución Call Stack Sincrono”) y se registran las operaciones asíncronas.</li>
      </ul>
    </li>
    <li>
      <strong>Delegación a las Colas:</strong>
      <ul>
        <li>
          <em>Microtask Queue:</em> Las promesas resueltas (por ejemplo, el callback de <code class="code-js">Promise.resolve().then()</code>) se encolan en la Microtask Queue y se procesan tan pronto el Call Stack esté libre. Se siguen en orden FIFO.
        </li>
        <li>
          <em>Task Queue:</em> Operaciones como <code class="code-js">setTimeout</code> y eventos de <code class="code-js">dispatchEvent</code> se delegan a la Task Queue, también en orden FIFO, y se procesan una vez que la Microtask Queue ha sido vaciada.
        </li>
      </ul>
    </li>
    <li>
      <strong>Procesamiento del Event Loop:</strong>
      <ul>
        <li>Una vez que el Call Stack se vacía, el Event Loop verifica primero la Microtask Queue y ejecuta cada tarea (FIFO).</li>
        <li>Cuando la Microtask Queue está vacía, el Event Loop transfiere tareas desde la Task Queue al Call Stack, permitiendo que se ejecuten.</li>
      </ul>
    </li>
    <li>
      <strong>Interacción y Responsividad:</strong>
      <ul>
        <li>En cada ciclo, el Call Stack se libera para atender nuevas interacciones de la UI, garantizando que la aplicación permanezca responsiva.</li>
        <li>Mientras tanto, el Heap continúa gestionando la memoria asignada para objetos y variables, liberándose conforme se van completando las tareas.</li>
      </ul>
    </li>
  </ol>
  <p>
    <strong>Resultado Final:</strong> Las operaciones se ejecutan en el siguiente orden: 
    <em>Inicio ejecución Call Stack Sincrono (registra tareas asíncronas delegando a Web APIs) → Fin de ejecución (se retrasa por los await) → Callback de la Promesa (Microtask Queue) → Callbacks en Microtask Queue de las solicitudes con fetch (manejadas con promesas o async await y Top-Level await "simulado") → Callbacks en la Task Queue (XHR, dispatchEvent y setTimeout).</em>
  </p>
`;

        document.getElementById('container-asincronismo-completo').appendChild(flowList);

        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Ejemplo ejecutado correctamente.\n`);
    } catch (error) {
        Utils.mostrarResultado(idResultado, `[${mostrarTiempo()}] Error: ${error}\n`);
    }
}
