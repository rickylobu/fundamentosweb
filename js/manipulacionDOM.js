// manipulacionDOM.js
import Utils from './utils.js';
const idResultado = 'resultado-manipulacion-DOM';
const idCode = 'code-manipulacion-DOM-mostrar';

// Función para limpiar el textarea de resultados
function limpiarResultado() {
    document.getElementById(idResultado).value = "";
}

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


/* 
   SELECCIONAR ELEMENTOS
*/

/* Ejemplo con document.getElementById:
   Se busca un elemento con id "demo-getElementById" dentro del contenedor correspondiente.
   Si no existe, se crea y se añade a dicho contenedor.
*/
function ejecutarGetElementById() {
    limpiarResultado();
    const container = document.getElementById('container-getElementById');
    // Sería necesario aquí implementar el error o simplemente retonar de la función si NO EXISTE container
    let demo = document.getElementById('demo-getElementById');
    if (!demo) {
        demo = document.createElement('div');
        demo.id = 'demo-getElementById';
        demo.innerText = 'Este es un elemento de demostración (getElementById)';
        container.appendChild(demo);
    }
    // Ejemplo: cambiar estilo del elemento
    demo.style.backgroundColor = generarColorAleatorio();
    demo.style.color = 'black;';

    const codigo = `// manipulacionDOM.js
import Utils from './utils.js';
const idResultado = 'resultado-manipulacion-DOM';
const idCode = 'code-manipulacion-DOM-mostrar';

// Función para limpiar el textarea de resultados
function limpiarResultado() {
    document.getElementById(idResultado).value = "";
}

// Función para generar color al aleatorio
function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

    // Seleccionar elemento por id y modificar su estilo
limpiarResultado();
const container = document.getElementById('container-getElementById');
// Sería necesario aquí implementar el error o simplemente retonar de la función si NO EXISTE container
let demo = document.getElementById('demo-getElementById');
if (!demo) {
    demo = document.createElement('div');
    demo.id = 'demo-getElementById';
    demo.innerText = 'Este es un elemento de demostración (getElementById)';
    container.appendChild(demo);
}
demo.style.backgroundColor = '#2965F1';
demo.style.color = '#fff';
// Te recomiendo hecharle un vistazo en consola a cualquier elemento deleccionado como: demo.style`;

    Utils.mostrarResultado(idResultado, `Contenido elemento demo con demo.innerText: "${demo.innerText}"\n
        Mostramos el elemento seleccionado (container):\n ${container}\n
        Mostramos el elemento creado (demo):\n ${demo}`);
    Utils.mostrarCodigo(idCode, codigo);

    // Te recomiendo hecharle un vistazo en consola a cualquier elemento deleccionado como: demo.style
}

/* Ejemplo con document.getElementsByTagName:
   Se crean varios párrafos en el contenedor y se seleccionan por su etiqueta.
*/
function ejecutarGetElementsByTagName() {
    limpiarResultado();
    const container = document.getElementById('container-getElementsByTagName');
    // Crear dos párrafos de ejemplo si no existen
    if (container.children.length < 2) {
        for (let i = 0; i < 2; i++) {
            const p = document.createElement('p');
            p.innerText = `Párrafo ${i + 1} (getElementsByTagName)`;
            container.appendChild(p);
        }
    }
    // Seleccionar todos los párrafos dentro del contenedor
    const paras = container.getElementsByTagName('p');
    let resultado = `Se encontraron ${paras.length} párrafos:\n`;
    for (let p of paras) {
        resultado += p.innerText + "\n";
        p.style.backgroundColor = generarColorAleatorio();
    }
    const codigo = `limpiarResultado();
    const container = document.getElementById('container-getElementsByTagName');
    // Crear dos párrafos de ejemplo si no existen
    if (container.children.length < 2) {
        for (let i = 0; i < 2; i++) {
            const p = document.createElement('p');
            p.innerText = \`Párrafo \${i + 1} (getElementsByTagName)\`;
            container.appendChild(p);
        }
    }
    // Seleccionar todos los párrafos dentro del contenedor
    const paras = container.getElementsByTagName('p');
    let resultado = \`Se encontraron \${paras.length} párrafos:\n\`;
    for (let p of paras) {
        resultado += p.innerText + "\n";
        p.style.backgroundColor(generarColorAleatorio());
    }`;

    Utils.mostrarResultado(idResultado, resultado);
    Utils.mostrarCodigo(idCode, codigo);
}

/* Ejemplo con document.getElementsByClassName:
   Se crean elementos con una clase específica y se seleccionan.
*/
function ejecutarGetElementsByClassName() {
    limpiarResultado();
    const container = document.getElementById('container-getElementsByClassName');
    // Crear elementos si no existen
    if (container.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            const miP = document.createElement('p');
            miP.className = 'demo-class';
            miP.innerText = `Elemento ${i + 1} (getElementsByClassName)`;
            container.appendChild(miP);
        }
    }
    const elems = container.getElementsByClassName('demo-class');
    let resultado = `Se encontraron ${elems.length} elementos con clase "demo-class":\n ${elems}\n`;
    for (let el of elems) {
        resultado += el + "\n";
        resultado += el.innerText + "\n";
        el.style.backgroundColor = generarColorAleatorio();
    }
    const codigo = `// Seleccionar elementos por clase
limpiarResultado();
    const container = document.getElementById('container-getElementsByClassName');
    // Crear elementos si no existen
    if (container.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('p');
            div.className = 'demo-class';
            div.innerText = \`Elemento \${i + 1} (getElementsByClassName)\`;
            container.appendChild(div);
        }
    }
    const elems = container.getElementsByClassName('demo-class');
    let resultado = \`Se encontraron \${elems.length} elementos con clase "demo-class":\n \${elems}\n\`;
    for (let el of elems) {
        resultado += el + "\n";
        resultado += el.innerText + "\n";
        el.style.backgroundColor = generarColorAleatorio();
    }`;

    Utils.mostrarResultado(idResultado, resultado);
    Utils.mostrarCodigo(idCode, codigo);
}

/* Ejemplo con document.querySelector:
   Se selecciona el primer elemento que coincide con el selector CSS.
*/
function ejecutarQuerySelector() {
    limpiarResultado();
    const container = document.getElementById('container-querySelector');
    // Crear elementos si no existen
    if (container.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div');
            div.className = 'demo-query';
            div.innerHTML = `<p>Elemento ${i + 1} (elemento de QuerySelector)</p>`;
            container.appendChild(div);
        }
    }

    // Seleccionamos sólo el primer elemento encontrado con el querySelector
    const miSeleccion = container.querySelector('.demo-query');
    miSeleccion.style.backgroundColor = generarColorAleatorio();

    const codigo = `// Seleccionar el primer elemento con la clase 'demo-query'
limpiarResultado();
    const container = document.getElementById('container-querySelector');
    // Crear elementos si no existen
    if (container.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div');
            div.className = 'demo-query';
            div.innerHTML = \`<p>Elemento \${i + 1} (elemento de QuerySelector)</p>\`;
            container.appendChild(div);
        }
    }
    
    // Seleccionamos sólo el primer elemento encontrado con el querySelector
    const miSeleccion =container.querySelector('.demo-query');
    miSeleccion.style.backgroundColor =generarColorAleatorio();
    `;

    Utils.mostrarResultado(idResultado, `Contenido: "${miSeleccion.innerText}" con clases: ${miSeleccion.className}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* Ejemplo con document.querySelectorAll:
   Se seleccionan todos los elementos que coinciden con un selector y se muestra la cantidad.
*/
function ejecutarQuerySelectorAll() {
    limpiarResultado();
    const container = document.getElementById('container-querySelectorAll');
    // Crear elementos si no existen
    if (container.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div');
            div.className = 'demo-query';
            div.innerHTML = `<p>Elemento ${i + 1} (elemento de QuerySelectorAll)</p>`;
            container.appendChild(div);
        }
    }

    // Seleccionamos Todos los elementos que cumplen con el querySelector
    const miSeleccion = container.querySelectorAll('.demo-query');
    miSeleccion.forEach(elem => elem.style.backgroundColor = generarColorAleatorio());

    const codigo = `// Seleccionar el primer elemento con la clase 'demo-query'
limpiarResultado();
    const container = document.getElementById('container-querySelectorAll');
    // Crear elementos si no existen
    if (container.children.length < 3) {
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div');
            div.className = 'demo-query';
            div.innerHTML = \`<p>Elemento \${i + 1} (elemento de QuerySelectorAll)</p>\`;
            container.appendChild(div);
        }
    }
    
    // Seleccionamos Todos los elementos que cumplen con el querySelector
    const miSeleccion =container.querySelector('.demo-query');
    miSeleccion.forEach(elem => elem.style.backgroundColor =generarColorAleatorio());
    `;

    Utils.mostrarResultado(idResultado, `Selección de querySelectorAll: "${miSeleccion}" con clase: 'demo-query'`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* 
   MODIFICAR CONTENIDO Y ATRIBUTOS
*/

/* Ejemplo para innerText, innerHTML, y setAttribute:
   Se crea un párrafo en el contenedor "container-modificarContenido", se modifica su contenido
   y se le asigna un atributo personalizado. También se aplica un estilo y se añaden clases.
*/
function ejecutarModificarContenidoYatributos() {
    limpiarResultado();
    const resultado = `--- 1 Creamos el elemento
    p = document.createElement('p');
    --- 2 modificamos elemento
    p.innerText = 'Texto original';
    p.setAttribute('data-custom', 'valor personalizado');
    p.style.backgroundColor = generarColorAleatorio();
    p.classList.add('resaltadoDOM');
    --- 3 agregamos a el elemento padre donde lo queremos en el DOM
    container.appendChild(p)`;
    const codigo = `// Modificar contenido, atributos y estilo de un elemento
limpiarResultado();
const resultado = \`Elemento modificado: \${p.outerHTML}\`;
    Utils.mostrarResultado(idResultado, resultado);
    Utils.mostrarCodigo(idCode, codigo);

    const container = document.getElementById('container-modificarContenido');
    const iniciar = function () {
        let p = container.querySelector('p');
        if (!p) {
            p = document.createElement('p');
            p.innerText = 'Texto original';
            p.setAttribute('data-custom', 'valor personalizado');
            p.style.backgroundColor = generarColorAleatorio();
            p.classList.add('resaltadoDOM');
            container.appendChild(p);
        } else {
            container.removeChild(p);
            //p.classList.remove('data-custom', 'resaltadoDOM', 'animated-background', 'circuloDOM', 'trianguloDOM');
            iniciar();
        }
        // Modificar el contenido y atributos
        setTimeout(() => {
            p.innerHTML = '<strong>Texto modificado 1</strong>';
            p.classList.add('animated-background');
            p.classList.add('circuloDOM');
            setTimeout(() => {
                p.innerHTML = '<strong>TEXTO MODIFICADO 2</strong>';
                p.classList.remove('circuloDOM');
                p.classList.remove('animated-background');
                p.classList.add('trianguloDOM');
                setTimeout(() => {
                    p.innerHTML = '<strong>Texto modificado 3</strong>';
                    p.classList.remove('trianguloDOM');
                    p.classList.add('animated-background');
                    p.classList.add('circuloDOM');
                    // iniciar(); generaría recursión infinita pero no lo recomiendo
                }, 5000);
            }, 5000);
        }, 5000);
    }

    iniciar();`;
    Utils.mostrarResultado(idResultado, resultado);
    Utils.mostrarCodigo(idCode, codigo);


    const container = document.getElementById('container-modificarContenido');
    const iniciar = function () {
        let p = container.querySelector('p');
        if (!p) {
            p = document.createElement('p');
            p.innerText = 'Texto original';
            p.setAttribute('data-custom', 'valor personalizado');
            p.style.backgroundColor = generarColorAleatorio();
            p.classList.add('resaltadoDOM');
            container.appendChild(p);
        } else {
            container.removeChild(p);
            //p.classList.remove('data-custom', 'resaltadoDOM', 'animated-background', 'circuloDOM', 'trianguloDOM');
            iniciar();
        }
        // Modificar el contenido y atributos
        setTimeout(() => {
            p.innerHTML = '<strong>Texto modificado 1</strong>';
            p.classList.add('animated-background');
            p.classList.add('circuloDOM');
            setTimeout(() => {
                p.innerHTML = '<strong>TEXTO MODIFICADO 2</strong>';
                p.classList.remove('circuloDOM');
                /*p.classList.remove('animated-background');
                p.classList.add('trianguloDOM');*/
                p.classList.replace('animated-background','trianguloDOM');
                setTimeout(() => {
                    p.innerHTML = '<strong>Texto modificado 3</strong>';
                    // p.classList.remove('trianguloDOM');
                    // p.classList.add('animated-background');
                    p.classList.replace('trianguloDOM','animated-background');
                    p.classList.add('circuloDOM');
                }, 5000);
            }, 5000);
        }, 3000);
    }

    for(let i=0;i<5;i++){
    iniciar();
    }
}

/* Ejemplo para setAttribute de forma individual:
   Se crea un botón y se le asigna un atributo "title".
*/
function ejecutarSetAttribute() {
    limpiarResultado();
    const container = document.getElementById('container-setAttribute');
    let btn = container.querySelector('button');
    if (!btn) {
        btn = document.createElement('button');
        btn.innerText = 'Botón de ejemplo';
        container.appendChild(btn);
    }
    // Establece atributos
    btn.setAttribute('title', 'Este es un botón con atributo title');
    btn.style.border = '2px solid #EACA32';
    btn.setAttribute('id', 'btnEjemplo');
    btn.classList.add('boton-estilo');
    //asignamos función de botón con onclick aunque lo mejor es con addEventListener
    btn.onclick = () => Utils.mostrarResultado(idResultado, 'Resultado de fn desde onclick de atributo');
    // Obtiene y muestra atributos
    Utils.mostrarResultado(idResultado, btn.getAttribute('title')); // Muestra "Este es un botón con atributo title"
    Utils.mostrarResultado(idResultado, btn.getAttribute('id')); // Muestra "btnEjemplo"

    // Verifica la presencia de atributos
    if (btn.hasAttribute('title')) {
        Utils.mostrarResultado(idResultado, 'El botón tiene un atributo "title".');
    }

    // Elimina un atributo
    btn.removeAttribute('title');
    Utils.mostrarResultado(idResultado, btn.hasAttribute('title')); // Muestra false


    const codigo = `// Asignar atributo "title" a un botón
limpiarResultado();
    const container = document.getElementById('container-setAttribute');
    let btn = container.querySelector('button');
    if (!btn) {
        btn = document.createElement('button');
        btn.innerText = 'Botón de ejemplo';
        container.appendChild(btn);
    }
    // Establece atributos
    btn.setAttribute('title', 'Este es un botón con atributo title');
    btn.style.border = '2px solid #EACA32';
    btn.setAttribute('id', 'btnEjemplo');
    btn.classList.add('boton-estilo');
    //asignamos función de botón con onclick aunque lo mejor es con addEventListener
    btn.onclick = () => Utils.mostrarResultado(idResultado, 'Resultado de fn desde onclick de atributo');
    // Obtiene y muestra atributos
    Utils.mostrarResultado(idResultado, btn.getAttribute('title')); // Muestra "Este es un botón con atributo title"
    Utils.mostrarResultado(idResultado, btn.getAttribute('id')); // Muestra "btnEjemplo"

    // Verifica la presencia de atributos
    if (btn.hasAttribute('title')) {
        Utils.mostrarResultado(idResultado, 'El botón tiene un atributo "title".');
    }

    // Elimina un atributo
    btn.removeAttribute('title');
    Utils.mostrarResultado(idResultado, btn.hasAttribute('title')); // Muestra false`;

    Utils.mostrarResultado(idResultado, `Atributo title del botón: ${btn.getAttribute('title')}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* 
   AÑADIR Y ELIMINAR ELEMENTOS
*/

/* Ejemplo para createElement y createTextNode:
   Se crea un nuevo div con un texto, se aplica estilo y se añade al contenedor "container-crearElementos".
*/
let ejecuciones = 0;
function ejecutarCrearElementos() {
    limpiarResultado();
    const container = document.getElementById('container-crearElementos');
    // Crear un nuevo div y un nodo de texto
    const nuevoDiv = document.createElement('div');
    ejecuciones++;
    const textoNodo = document.createTextNode('Texto creado dinámicamente ' + ejecuciones);
    nuevoDiv.appendChild(textoNodo);
    // Aplicar estilo y clases
    nuevoDiv.style.padding = '10px';
    container.appendChild(nuevoDiv);

    // Ejemplo de navegación: obtener parentElement y children
    const parent = nuevoDiv.parentElement;
    const children = Array.from(parent.children); // Convertir HTMLCollection en un array
    // Cambiar el color de fondo a blanco para todos los hijos
    children.forEach(e => e.style.backgroundColor = 'rgb(255, 255, 255)');

    const firstChild = parent.firstElementChild;
    firstChild.style.backgroundColor = generarColorAleatorio();
    const lastChild = parent.lastElementChild;
    lastChild.style.backgroundColor = generarColorAleatorio();


    const codigo = `// Crear un nuevo elemento y nodo de texto, luego añadirlo al contenedor
impiarResultado();
    const container = document.getElementById('container-crearElementos');
    // Crear un nuevo div y un nodo de texto
    const nuevoDiv = document.createElement('div');
    const textoNodo = document.createTextNode('Texto creado dinámicamente');
    nuevoDiv.appendChild(textoNodo);
    // Aplicar estilo y clases
    nuevoDiv.style.padding = '10px';
    container.appendChild(nuevoDiv);

    // Ejemplo de navegación: obtener parentElement y children
    const parent = nuevoDiv.parentElement;
    const children = Array.from(parent.children); // Convertir HTMLCollection en un array
    // Cambiar el color de fondo a blanco para todos los hijos
    children.forEach(e => e.style.backgroundColor = 'rgb(255, 255, 255)');
    
    const firstChild = parent.firstElementChild;
    firstChild.style.backgroundColor = generarColorAleatorio();
    const lastChild = parent.lastElementChild;
    lastChild.style.backgroundColor = generarColorAleatorio();`;
    Utils.mostrarResultado(idResultado, `Nuevo elemento añadido: ${nuevoDiv.outerHTML}\n\n container completo:\n ${container.outerHTML}`);
    Utils.mostrarCodigo(idCode, codigo);
}

/* Ejemplo para appendChild y removeChild:
   Se añade un elemento hijo a un contenedor y, tras 2 segundos, se elimina. Además, se utilizan 
   propiedades como firstElementChild, lastElementChild, previousElementSibling y nextElementSibling.
*/
let ejecuciones2 = 0;
function ejecutarAppendRemoveChild() {
    limpiarResultado();
    const container = document.getElementById('container-appendRemoveChild');
    // Crear un nuevo div y un nodo de texto
    const nuevoDiv = document.createElement('div');
    ejecuciones2++;
    const textoNodo = document.createTextNode('Elemento a eliminar: ' + ejecuciones2);
    nuevoDiv.appendChild(textoNodo);
    // Aplicar estilo y clases
    nuevoDiv.style.padding = '10px';
    container.appendChild(nuevoDiv);

    // Ejemplo de navegación: obtener parentElement y children
    const parent = nuevoDiv.parentElement;
    const children = Array.from(parent.children); // Convertir HTMLCollection en un array
    // Cambiar el color de fondo a blanco para todos los hijos
    children.forEach(e => e.style.backgroundColor = 'rgb(255, 255, 255)');

    // Usar propiedades de navegación en el DOM
    const firstChild = parent.firstElementChild;
    firstChild.style.backgroundColor = generarColorAleatorio();
    const lastChild = parent.lastElementChild;
    lastChild.style.backgroundColor = generarColorAleatorio();

    // Verificar si previousSibling y nextSibling existen
    const previousSibling = lastChild.previousElementSibling;
    if (previousSibling) {
        previousSibling.style.backgroundColor = generarColorAleatorio();
    }
    const nextSibling = firstChild.nextElementSibling;
    if (nextSibling) {
        nextSibling.style.backgroundColor = generarColorAleatorio();
    }

    setTimeout(() => {
        container.removeChild(firstChild);
        container.removeChild(lastChild);
        ejecuciones2--;
    }, 5000);

    const codigo = `// Añadir y eliminar un elemento hijo
limpiarResultado();
    const container = document.getElementById('container-appendRemoveChild');
    // Crear un nuevo div y un nodo de texto
    const nuevoDiv = document.createElement('div');
    ejecuciones2++;
    const textoNodo = document.createTextNode('Elemento a eliminar: ' + ejecuciones2);
    nuevoDiv.appendChild(textoNodo);
    // Aplicar estilo y clases
    nuevoDiv.style.padding = '10px';
    container.appendChild(nuevoDiv);

    // Ejemplo de navegación: obtener parentElement y children
    const parent = nuevoDiv.parentElement;
    const children = Array.from(parent.children); // Convertir HTMLCollection en un array
    // Cambiar el color de fondo a blanco para todos los hijos
    children.forEach(e => e.style.backgroundColor = 'rgb(255, 255, 255)');

    // Usar propiedades de navegación en el DOM
    const firstChild = parent.firstElementChild;
    firstChild.style.backgroundColor = generarColorAleatorio();
    const lastChild = parent.lastElementChild;
    lastChild.style.backgroundColor = generarColorAleatorio();

    // Verificar si previousSibling y nextSibling existen
    const previousSibling = lastChild.previousElementSibling;
    if (previousSibling) {
        previousSibling.style.backgroundColor = generarColorAleatorio();
    }
    const nextSibling = firstChild.nextElementSibling;
    if (nextSibling) {
        nextSibling.style.backgroundColor = generarColorAleatorio();
    }

    setTimeout(() => {
        container.removeChild(firstChild);
        container.removeChild(lastChild);
        ejecuciones2--;
    }, 5000);`;

Utils.mostrarResultado(idResultado, `Nuevo elemento añadido: ${nuevoDiv.outerHTML}\n\n container completo:\n ${container.outerHTML}`);
Utils.mostrarCodigo(idCode, codigo);
}

export {
    ejecutarGetElementById,
    ejecutarGetElementsByTagName,
    ejecutarGetElementsByClassName,
    ejecutarQuerySelector,
    ejecutarQuerySelectorAll,
    ejecutarModificarContenidoYatributos,
    ejecutarSetAttribute,
    ejecutarCrearElementos,
    ejecutarAppendRemoveChild
};
