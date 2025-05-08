import Utils from './utils.js';
const idResultado = 'resultado-Rick-y-Morty';
const idCode = 'code-Rick-y-Morty-mostrar';


// Función para generar un color aleatorio para cada card
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para obtener la ubicación (Citadel of Ricks)
export async function obtenerUbicacion() {
    try {
        Utils.mostrarResultado(idResultado, 'Solicitando ubicación a la API de Rick y Morty...'); // debería ser console.log
        const respuesta = await fetch('https://rickandmortyapi.com/api/location/3');
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const ubicacion = await respuesta.json();

        /* Aquí es donde podrías guardar los datos en un objeto global como 
        "estado" de la aplicación en frameworks como React o Angular */

        Utils.mostrarResultado(idResultado,'Ubicación obtenida: ' + ubicacion); // ${JSON.stringify(ubicacion)} mostrar respuesta completa
        return ubicacion;
    } catch (error) {
        Utils.mostrarResultado(idResultado,'Error al obtener la ubicación: ' + error); // debería ser console.error
        throw error;
    }
}

// Función para obtener la información de cada residente usando Promise.all
async function obtenerResidentes(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(res => {
            if (!res.ok) {
                throw new Error(`Error HTTP en ${url}: ${res.status}`);
            }
            return res.json();
        }));
        const residentes = await Promise.all(fetchPromises);

        /* Aquí es donde podrías guardar los datos en un objeto global como 
        "estado" de la aplicación en frameworks como React o Angular */

        Utils.mostrarResultado(idResultado,'Residentes obtenidos: ' + residentes.map(residente => `${residente.id} ${residente.name}`).join(',\n'));
        return residentes;
    } catch (error) {
        Utils.mostrarResultado(idResultado,'Error al obtener los residentes: ' + error);
        throw error;
    }
}

// Función para crear y mostrar las cards de cada residente
function mostrarCards(residentes) {
    const container = document.getElementById('container-Rick-y-Morty');
    residentes.forEach(residente => {
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
    });
}

// Función principal que orquesta la solicitud y muestra los resultados
export async function ejecutarEjemploRickYMorty() {
    try {
        const container = document.getElementById('container-Rick-y-Morty');
        container.innerHTML = ''; // Limpiar contenedor
        const ubicacion = await obtenerUbicacion();
        const residentes = await obtenerResidentes(ubicacion.residents);

         
        mostrarCards(residentes);
        Utils.mostrarResultado(idResultado, 'Ejemplo ejecutado correctamente.');
    } catch (error) {
        Utils.mostrarResultado(idResultado, 'Error: ' + error);
    }finally {
        const codigo = `
import Utils from './utils.js';
const idResultado = 'resultado-Rick-y-Morty';
const idCode = 'code-Rick-y-Morty-mostrar';


// Función para generar un color aleatorio para cada card
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función para obtener la ubicación (Citadel of Ricks)
async function obtenerUbicacion() {
    try {
        Utils.mostrarResultado(idResultado, 'Solicitando ubicación a la API de Rick y Morty...'); // debería ser console.log
        const respuesta = await fetch('https://rickandmortyapi.com/api/location/3');
        if (!respuesta.ok) {
            throw new Error(\`Error HTTP: \${respuesta.status}\`);
        }
        const ubicacion = await respuesta.json();

        /* Aquí es donde podrías guardar los datos en un objeto global como 
        "estado" de la aplicación en frameworks como React o Angular */
        
        Utils.mostrarResultado(idResultado,'Ubicación obtenida: ' + ubicacion);
        return ubicacion;
    } catch (error) {
        Utils.mostrarResultado(idResultado,'Error al obtener la ubicación: ' + error); // debería ser console.error
        throw error;
    }
}

// Función para obtener la información de cada residente usando Promise.all
async function obtenerResidentes(urls) {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(res => {
            if (!res.ok) {
                throw new Error(\`Error HTTP en \${url}: \${res.status}\`);
            }
            return res.json();
        }));
        const residentes = await Promise.all(fetchPromises);
        
        /* Aquí es donde podrías guardar los datos en un objeto global como 
        "estado" de la aplicación en frameworks como React o Angular */
        
        Utils.mostrarResultado(idResultado,'Residentes obtenidos: ' + residentes);
        return residentes;
    } catch (error) {
        Utils.mostrarResultado(idResultado,'Error al obtener los residentes: ' + error);
        throw error;
    }
}

// Función para crear y mostrar las cards de cada residente
function mostrarCards(residentes) {
    const container = document.getElementById('container-Rick-y-Morty');
    residentes.forEach(residente => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.backgroundColor = generarColorAleatorio();
        card.innerHTML = \`
            <img src="\${residente.image}" alt="\${residente.name}">
            <h5>ID: \${residente.id}</h5>
            <h4>\${residente.name}</h4>
            <p><strong>Location:</strong> \${residente.location.name}</p>
            <p><strong>Status:</strong> \${residente.status}</p>
          \`;
        container.appendChild(card);
    });
}

// Función principal que orquesta la solicitud y muestra los resultados
export default async function ejecutarEjemploRickYMorty() {
    try {
        const container = document.getElementById('container-Rick-y-Morty');
        container.innerHTML = ''; // Limpiar contenedor
        const ubicacion = await obtenerUbicacion();
        const residentes = await obtenerResidentes(ubicacion.residents);
        mostrarCards(residentes);
        Utils.mostrarResultado(idResultado, 'Ejemplo ejecutado correctamente.');
    } catch (error) {
        Utils.mostrarResultado(idResultado, 'Error: ' + error);
    }finally {
        const codigo = \`\`;
        Utils.mostrarCodigo(idCode,codigo);
    }
}`;
        Utils.mostrarCodigo(idCode,codigo);
    }
}