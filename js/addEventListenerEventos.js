// addEventListenerEventos.js
import Utils from './utils.js';
const idResultado = 'resultado-addEventListener-eventos';
const idCode = 'code-addEventListener-eventos-mostrar';

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

function limpiarResultadoEventos() {
    const area = document.getElementById('resultado-addEventListener-eventos');
    if (area) {
        area.value = "";
    }
}



//  EVENTO: CLICK

export function ejecutarClick(e) {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-click');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-click';
    div.textContent = "div con evento: click";
    div.style.cursor = 'pointer';
    div.style.padding = "10px";
    div.style.border = '2px solid black';

    div.addEventListener('click', (ev) => {
        const timestamp = ev.timeStamp;
        const timeSinceLoad = (timestamp / 1000).toFixed(2); // Tiempo desde que la página se cargó en segundos
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();

        Utils.mostrarResultado(idResultado, `Click detectado en: ${ev.currentTarget.tagName} con id ${ev.target.id}\n
        el día: ${formattedDate} a las: ${formattedTime} \n
        Tiempo desde que cargó la página: ${timeSinceLoad} segundos`);

        ev.target.style.backgroundColor = generarColorAleatorio();
        ev.target.textContent = "Hiciste click en este div";
    });

    container.appendChild(div);

    Utils.mostrarResultado(idResultado, "Función ejecutarClick ejecutada, el tipo de evento fué " + e.type + " en " + e.currentTarget.tagName + "El div que creaste tiene un listener en evento: click");

    const codigo = `export function ejecutarClick(e) {
    const container = document.getElementById('container-ejemplo-click');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-click';
    div.textContent = "div con evento: click";
    div.style.cursor = 'pointer';
    div.style.padding = "10px";

    div.addEventListener('click', (ev) => {
        const timestamp = ev.timeStamp;
        const timeSinceLoad = (timestamp / 1000).toFixed(2); // Tiempo desde que la página se cargó en segundos
        const date = new Date();
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString();

        Utils.mostrarResultado(idResultado, \Click detectado en: \${ev.currentTarget.tagName} con id \${ev.target.id}\n
        Fecha: \${formattedDate} \n
        Hora: \${formattedTime} \n
        Tiempo transcurrido desde la carga de la página: \${timeSinceLoad} segundos\);

        ev.target.style.backgroundColor = generarColorAleatorio();
        ev.target.textContent = "Hiciste click en este div";
    });

    container.appendChild(div);

    Utils.mostrarResultado(idResultado, "Función ejecutarClick ejecutada: " + e.type + " en " + e.currentTarget.id + "El div que creaste tiene un listener en evento: click");
`;

    Utils.mostrarCodigo(idCode, codigo);

}

//  EVENTO: DBLCLICK

export function ejecutarDblClick() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-dblclick');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-dblclick';
    div.textContent = "Doble clic en este div";
    div.style.cursor = 'pointer';
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('dblclick', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `DblClick detectado en ${ev.currentTarget.tagName} a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "Doble clic detectado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarDblClick ejecutada, ahora el div que creaste tiene un listener en evento: dblclick");

    const codigo = `export function ejecutarDblClick() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-dblclick');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-dblclick';
    div.textContent = "Doble clic en este div";
    div.style.cursor = 'pointer';
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('dblclick', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`DblClick detectado en \${ev.currentTarget.tagName} a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "Doble clic detectado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarDblClick ejecutada, ahora el div que creaste tiene un listener en evento: dblclick");
`;

    Utils.mostrarCodigo(idCode, codigo);

}



//  EVENTO: MOUSEOVER

export function ejecutarMouseOver() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mouseover');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mouseover';
    div.textContent = "Pasa el ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mouseover', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `MouseOver detectado en ${ev.currentTarget.tagName} a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseOver activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseOver ejecutada, ahora el div que creaste tiene un listener en evento: mouseover");

    const codigo = `export function ejecutarMouseOver() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mouseover');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mouseover';
    div.textContent = "Pasa el ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mouseover', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`MouseOver detectado en \${ev.currentTarget.tagName} a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseOver activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseOver ejecutada, ahora el div que creaste tiene un listener en evento: mouseover");
`;

    Utils.mostrarCodigo(idCode, codigo);

}


//  EVENTO: MOUSEOUT

export function ejecutarMouseOut() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mouseout');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mouseout';
    div.textContent = "Mueve el ratón fuera de este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mouseout', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `MouseOut detectado en ${ev.currentTarget.tagName} a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseOut activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseOut ejecutada, ahora el div que creaste tiene un listener en evento: mouseout");

    const codigo = `export function ejecutarMouseOut() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mouseout');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mouseout';
    div.textContent = "Mueve el ratón fuera de este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mouseout', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`MouseOut detectado en \${ev.currentTarget.tagName} a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseOut activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseOut ejecutada, ahora el div que creaste tiene un listener en evento: mouseout");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: MOUSEDOWN

export function ejecutarMouseDown() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mousedown');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mousedown';
    div.textContent = "Presiona el botón del ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mousedown', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `MouseDown detectado en ${ev.currentTarget.tagName} a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseDown activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseDown ejecutada, ahora el div que creaste tiene un listener en evento: nousedown");

    const codigo = `xport function ejecutarMouseDown() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mousedown');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mousedown';
    div.textContent = "Presiona el botón del ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mousedown', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`MouseDown detectado en \${ev.currentTarget.tagName} a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseDown activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseDown ejecutada, ahora el div que creaste tiene un listener en evento: nousedown");

`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: MOUSEUP

export function ejecutarMouseUp() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mouseup');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mouseup';
    div.textContent = "Suelta el botón del ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mouseup', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `MouseUp detectado en ${ev.currentTarget.tagName} a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseUp activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseUp ejecutada, ahora el div que creaste tiene un listener en evento: mouseup");

    const codigo = `export function ejecutarMouseUp() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mouseup');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mouseup';
    div.textContent = "Suelta el botón del ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mouseup', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`MouseUp detectado en \${ev.currentTarget.tagName} a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
        ev.currentTarget.textContent = "MouseUp activado";
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseUp ejecutada, ahora el div que creaste tiene un listener en evento: mouseup");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: MOUSEMOVE

export function ejecutarMouseMove() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-mousemove');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-mousemove';
    div.textContent = "Mueve el ratón sobre este div";
    div.style.padding = "10px";
    div.style.border = '2px solid black';
    div.style.height = "50px"; // Para facilitar el movimiento
    div.style.backgroundColor = generarColorAleatorio();

    div.addEventListener('mousemove', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `MouseMove detectado en ${ev.currentTarget.tagName} a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarMouseMove ejecutada, ahora el div que creaste tiene un listener en evento: mousemove");

    const codigo = ``;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: KEYDOWN

export function ejecutarKeyDown() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-keydown');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-keydown';
    input.type = 'text';
    input.placeholder = "Presiona una tecla...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('keydown', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `KeyDown: Tecla "${ev.key}" detectada a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarKeyDown ejecutada, ahora el input que creaste tiene un listener en evento: keydown");

    const codigo = ``;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: KEYUP

export function ejecutarKeyUp() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-keyup');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-keyup';
    input.type = 'text';
    input.placeholder = "Suelta la tecla...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('keyup', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `KeyUp: Tecla "${ev.key}" liberada a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarKeyUp ejecutada, ahora el input que creaste tiene un listener en evento: keyup");

    const codigo = `export function ejecutarKeyUp() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-keyup');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-keyup';
    input.type = 'text';
    input.placeholder = "Suelta la tecla...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('keyup', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`KeyUp: Tecla "\${ev.key}" liberada a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarKeyUp ejecutada, ahora el input que creaste tiene un listener en evento: keyup");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: SUBMIT

export function ejecutarSubmit() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-submit');
    container.innerHTML = '';
    // Creamos un pequeño formulario para demostrar el submit
    const form = document.createElement('form');
    form.id = 'form-submit';
    form.innerHTML = `
    <input type="text" name="dummy" placeholder="Escribe algo..." required style="padding:10px; border:2px solid black;">
    <input type="submit" value="Enviar" style="padding:10px;">
  `;

    form.style.padding = "10px";
    form.style.alignItems = "center";

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Submit: Formulario enviado a las ${date.toLocaleTimeString()}`);
        form.style.backgroundColor = generarColorAleatorio();
        form.querySelector('input[type="submit"]').value = "Enviado";
    });

    container.appendChild(form);
    Utils.mostrarResultado(idResultado, "Función ejecutarSubmit ejecutada, ahora el form que creaste tiene un listener en evento: submit");

    const codigo = `export function ejecutarSubmit() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-submit');
    container.innerHTML = '';
    // Creamos un pequeño formulario para demostrar el submit
    const form = document.createElement('form');
    form.id = 'form-submit';
    form.innerHTML = \`
    <input type="text" name="dummy" placeholder="Escribe algo..." required style="padding:10px; border:2px solid black;">
    <input type="submit" value="Enviar" style="padding:10px;">
  \`;

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Submit: Formulario enviado a las \${date.toLocaleTimeString()}\`);
        form.style.backgroundColor = generarColorAleatorio();
        form.querySelector('input[type="submit"]').value = "Enviado";
    });

    container.appendChild(form);
    Utils.mostrarResultado(idResultado, "Función ejecutarSubmit ejecutada, ahora el form que creaste tiene un listener en evento: submit");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: FOCUS

export function ejecutarFocus() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-focus');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-focus';
    input.type = 'text';
    input.placeholder = "Haz foco aquí...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('focus', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Focus: El input ganó foco a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarFocus ejecutada, ahora el input que creaste tiene un listener en evento: focus");

    const codigo = `export function ejecutarFocus() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-focus');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-focus';
    input.type = 'text';
    input.placeholder = "Haz foco aquí...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('focus', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Focus: El input ganó foco a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarFocus ejecutada, ahora el input que creaste tiene un listener en evento: focus");
`;

    Utils.mostrarCodigo(idCode, codigo);
    input.focus(); // Mandamos el foco al input recien creado activando el evento focus
}


//  EVENTO: BLUR

export function ejecutarBlur() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-blur');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-blur';
    input.type = 'text';
    input.placeholder = "Haz foco y luego sal...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('blur', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Blur: El input perdió foco a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    input.focus(); // si después de esta instrucción mandamos el foco a otro elemento se activaría el evento blur
    setTimeout(() => { input.blur(); }, 2000); // podemos activar directamente el evento desde elemento input
    Utils.mostrarResultado(idResultado, "Función ejecutarBlur ejecutada, ahora el input que creaste tiene un listener en evento: blur");

    const codigo = `export function ejecutarBlur() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-blur');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-blur';
    input.type = 'text';
    input.placeholder = "Haz foco y luego sal...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('blur', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Blur: El input perdió foco a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    input.focus(); // si después de esta instrucción mandamos el foco a otro elemento se activaría el evento blur
    setTimeout(() => { input.blur(); }, 2000); // podemos activar directamente el evento desde elemento input
    Utils.mostrarResultado(idResultado, "Función ejecutarBlur ejecutada, ahora el input que creaste tiene un listener en evento: blur");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: CHANGE

export function ejecutarChange() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-change');
    container.innerHTML = '';
    const select = document.createElement('select');
    select.id = 'select-change';
    select.style.padding = "10px";
    select.style.border = '2px solid black';
    select.innerHTML = `
    <option value="">Selecciona...</option>
    <option value="opcion1">Opción 1</option>
    <option value="opcion2">Opción 2</option>
  `;

    select.addEventListener('change', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Change: Valor seleccionado "${ev.target.value}" a las ${date.toLocaleTimeString()}`);
        ev.target.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(select);
    Utils.mostrarResultado(idResultado, "Función ejecutarChange ejecutada, ahora el select que creaste tiene un listener en evento: change");

    const codigo = `export function ejecutarChange() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-change');
    container.innerHTML = '';
    const select = document.createElement('select');
    select.id = 'select-change';
    select.style.padding = "10px";
    select.style.border = '2px solid black';
    select.innerHTML = \`
    <option value="">Selecciona...</option>
    <option value="opcion1">Opción 1</option>
    <option value="opcion2">Opción 2</option>
  \`;

    select.addEventListener('change', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Change: Valor seleccionado "\${ev.target.value}" a las \${date.toLocaleTimeString()}\`);
        ev.target.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(select);
    Utils.mostrarResultado(idResultado, "Función ejecutarChange ejecutada, ahora el select que creaste tiene un listener en evento: change");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: INPUT

export function ejecutarInput() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-input');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-input';
    input.type = 'text';
    input.placeholder = "Escribe algo (Input)...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('input', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Input: Valor actual "${ev.target.value}" a las ${date.toLocaleTimeString()}`);
        ev.target.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarInput ejecutada, ahora el input que creaste tiene un listener en evento: input");

    const codigo = `export function ejecutarInput() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-input');
    container.innerHTML = '';
    const input = document.createElement('input');
    input.id = 'input-input';
    input.type = 'text';
    input.placeholder = "Escribe algo (Input)...";
    input.style.padding = "10px";
    input.style.border = '2px solid black';

    input.addEventListener('input', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Input: Valor actual "\${ev.target.value}" a las \${date.toLocaleTimeString()}\`);
        ev.target.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(input);
    Utils.mostrarResultado(idResultado, "Función ejecutarInput ejecutada, ahora el input que creaste tiene un listener en evento: input");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: LOAD

export function ejecutarLoad() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-load');
    container.innerHTML = '';
    const img = document.createElement('img');
    img.id = 'img-load';
    img.src = './assets/img/javascript.png';
    img.alt = "Imágen cargada programáticamente de JavaScript";
    img.style.maxWidth = '100px'
    img.style.border = '2px solid black';
    img.style.borderRadius = '25px';

    img.addEventListener('load', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Load: Imagen cargada a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.border = "5px solid " + generarColorAleatorio();
    });

    container.appendChild(img);
    Utils.mostrarResultado(idResultado, "Función ejecutarLoad ejecutada, ahora el img que creaste tiene un listener en evento: load");

    const codigo = `export function ejecutarLoad() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-load');
    container.innerHTML = '';
    const img = document.createElement('img');
    img.id = 'img-load';
    img.src = './assets/img/javascript.png';
    img.alt = "Imágen cargada programáticamente de JavaScript";
    img.style.maxWidth = '100px'
    img.style.border = '2px solid black';
    img.style.borderRadius = '25px';

    img.addEventListener('load', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Load: Imagen cargada a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.border = "5px solid " + generarColorAleatorio();
    });

    container.appendChild(img);
    Utils.mostrarResultado(idResultado, "Función ejecutarLoad ejecutada, ahora el img que creaste tiene un listener en evento: load");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: DOMCONTENTLOADED

// El evento DOMContentLoaded es especial y se dispara automáticamente 
// una sola vez cuando el documento se ha cargado y parseado.Debido a ello,
// re - dispatcharlo de forma manual no garantiza que se ejecute el mismo 
// comportamiento(ni que se propague de la misma manera) porque muchos navegadores
// lo manejan de forma interna y podrían ignorar nuevas emisiones con ese mismo nombre.
// Para ilustrar el concepto de re - dispatch de eventos con opciones avanzadas, 
// lo recomendable es crear un evento personalizado(por ejemplo, "miDOMContentLoaded") 
// que se comporte de forma similar pero que puedas disparar todas las veces que desees.

// Este evento se lanza cuando se carga todo el HTML
// Se utiliza el mismo nombre de evento para ilustrar el uso de opciones
// (bubbles, capture, cancelable), pero recuerda que en un entorno real
// lo más recomendable es crear un evento personalizado
// (por ejemplo, "miDOMContentLoaded") para re-dispatch manual.
export function ejecutarDOMContentLoaded() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-domcontentloaded');
    container.innerHTML = `
    <p>Ahora puedes volver a disparar un evento similar a DOMContentLoaded para ver la diferencia de las fases (bubbles vs. capture).</p>
    <button id="DOMContentLoadedBubbles">Ejecutar DOMContentLoadedBubbles</button>
    <button id="DOMContentLoadedCapture">Ejecutar DOMContentLoadedCapture</button>`;
    container.style.padding = "10px";
    container.style.border = '2px solid black';
    Utils.mostrarResultado(idResultado, "Oprime los botones para disparar el evento en cada fase");

    // Para el ejemplo, creamos  un div que esta a la escucha del evento DOMContentLoaded
    // y despachamos un evento personalizado de DOMContentLoaded con dos botones para ver la diferencia
    // de un evento lanzado con bubbles o con capture.
    // te recomiendo leer más en https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

    /* Después de ver asincronismo en JavaScript veremos este evento real para
        cargar los archivos .js en sus etiquetas code en app-js utilizando CargadorJSONenCode.js*/

    // Agregamos un listener en el contenedor para "capturar" el evento (este listener se registrará siempre que se dispare el evento en el contenedor)
    container.addEventListener('DOMContentLoaded', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `\n${ev.type} (personalizado) detectado a las ${date.toLocaleTimeString()} en fase: ${ev.eventPhase}`);
        container.style.backgroundColor = generarColorAleatorio();
        // Nota: Para crear un nuevo elemento se usa document.createElement
        const p = document.createElement('p');
        p.textContent = `${ev.type} detectado en fase: ${ev.eventPhase}`;
        p.style.backgroundColor = generarColorAleatorio();
        container.appendChild(p);
    });

    // Botón para disparar el evento con bubbles true
    const btnBubbles = document.getElementById('DOMContentLoadedBubbles');
    btnBubbles.addEventListener('click', (ev) => {
        // Creamos el evento con bubbles: true y cancelable: true
        const event = new Event('DOMContentLoaded', {
            bubbles: true,// se propada del elemento objetivo hasta window
            cancelable: true// indica que el evento puede ser cancelado utilizando el método event.preventDefault()
        });
        // Despachamos el evento desde el el botón para ver la propagación hacia arriba (bubbles)
        btnBubbles.dispatchEvent(event);
        Utils.mostrarResultado(idResultado, "Ejecutado DOMContentLoadedBubbles: se disparó el evento DOMContentLoaded con bubbles=true.");
    });

    // Botón para disparar el evento con bubbles false (captura)
    const btnCapture = document.getElementById('DOMContentLoadedCapture');
    btnCapture.addEventListener('click', (ev) => {
        const event = new Event('DOMContentLoaded', {
            bubbles: false,
            cancelable: true
        });
        // Despachamos el evento desde el container porque desde document no funciona
        container.dispatchEvent(event);
        Utils.mostrarResultado(idResultado, "Ejecutado DOMContentLoadedCapture: se disparó el evento DOMContentLoaded con bubbles=false.\n\nNinguno vuelve a activar el Listener de app.js");
    });

    const codigo = `//  EVENTO: DOMCONTENTLOADED

// El evento DOMContentLoaded es especial y se dispara automáticamente 
// una sola vez cuando el documento se ha cargado y parseado.Debido a ello,
// re - dispatcharlo de forma manual no garantiza que se ejecute el mismo 
// comportamiento(ni que se propague de la misma manera) porque muchos navegadores
// lo manejan de forma interna y podrían ignorar nuevas emisiones con ese mismo nombre.
// Para ilustrar el concepto de re - dispatch de eventos con opciones avanzadas, 
// lo recomendable es crear un evento personalizado(por ejemplo, "miDOMContentLoaded") 
// que se comporte de forma similar pero que puedas disparar todas las veces que desees.

// Este evento se lanza cuando se carga todo el HTML
// Se utiliza el mismo nombre de evento para ilustrar el uso de opciones
// (bubbles, capture, cancelable), pero recuerda que en un entorno real
// lo más recomendable es crear un evento personalizado
// (por ejemplo, "miDOMContentLoaded") para re-dispatch manual.
export function ejecutarDOMContentLoaded() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-domcontentloaded');
    container.innerHTML = \`
    <p>Ahora puedes volver a disparar un evento similar a DOMContentLoaded para ver la diferencia de las fases (bubbles vs. capture).</p>
    <button id="DOMContentLoadedBubbles">Ejecutar DOMContentLoadedBubbles</button>
    <button id="DOMContentLoadedCapture">Ejecutar DOMContentLoadedCapture</button>\`;
    container.style.padding = "10px";
    container.style.border = '2px solid black';
    Utils.mostrarResultado(idResultado, "Oprime los botones para disparar el evento en cada fase");

    // Para el ejemplo, creamos  un div que esta a la escucha del evento DOMContentLoaded
    // y despachamos un evento personalizado de DOMContentLoaded con dos botones para ver la diferencia
    // de un evento lanzado con bubbles o con capture.
    // te recomiendo leer más en https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event

    /* Después de ver asincronismo en JavaScript veremos este evento real para
        cargar los archivos .js en sus etiquetas code en app-js utilizando CargadorJSONenCode.js*/

    // Agregamos un listener en el contenedor para "capturar" el evento (este listener se registrará siempre que se dispare el evento en el contenedor)
    container.addEventListener('DOMContentLoaded', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`DOMContentLoaded (personalizado) detectado a las \${date.toLocaleTimeString()}\`);
        container.style.backgroundColor = generarColorAleatorio();
        // Nota: Para crear un nuevo elemento se usa document.createElement
        const p = document.createElement('p');
        p.textContent = \`\${ev.type} detectado\`;
        p.style.backgroundColor = generarColorAleatorio();
        container.appendChild(p);
    });

    // Botón para disparar el evento con bubbles true
    const btnBubbles = document.getElementById('DOMContentLoadedBubbles');
    btnBubbles.addEventListener('click', (ev) => {
        // Creamos el evento con bubbles: true y cancelable: true
        const event = new Event('DOMContentLoaded', {
            bubbles: true,// se propada del elemento objetivo hasta window
            cancelable: true// indica que el evento puede ser cancelado utilizando el método event.preventDefault()
        });
        // Despachamos el evento desde el el botón para ver la propagación hacia arriba (bubbles)
        btnBubbles.dispatchEvent(event);
        Utils.mostrarResultado(idResultado, "Ejecutado DOMContentLoadedBubbles: se disparó el evento DOMContentLoaded con bubbles=true.");
    });

    // Botón para disparar el evento con bubbles false (captura)
    const btnCapture = document.getElementById('DOMContentLoadedCapture');
    btnCapture.addEventListener('click', (ev) => {
        const event = new Event('DOMContentLoaded', {
            bubbles: false,
            cancelable: true
        });
        // Despachamos el evento desde el container porque desde document no funciona
        container.dispatchEvent(event);
        Utils.mostrarResultado(idResultado, "Ejecutado DOMContentLoadedCapture: se disparó el evento DOMContentLoaded con bubbles=false.\nNinguno vuelve a activar el Listener de app.js");
    });
`;

    Utils.mostrarCodigo(idCode, codigo);
    Utils.mostrarResultado(idResultado, "Función ejecutarDOMContentLoaded ejecutada.");
}

//  EVENTO: RESIZE

export function ejecutarResize() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-resize');
    container.innerHTML = '';
    // Para este ejemplo, añadimos un listener a window para el resize
    window.addEventListener('resize', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Resize detectado a las ${date.toLocaleTimeString()}`);
        container.style.backgroundColor = generarColorAleatorio();
        container.textContent = `Resize detectado a las ${date.toLocaleTimeString()}`;
    });
    Utils.mostrarResultado(idResultado, "Función ejecutarResize ejecutada, ahora window tiene un listener en evento: resize.\n Redimensiona la ventana para ver el efecto.");

    const codigo = `export function ejecutarResize() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-resize');
    container.innerHTML = '';
    // Para este ejemplo, añadimos un listener a window para el resize
    window.addEventListener('resize', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Resize detectado a las \${date.toLocaleTimeString()}\`);
        container.style.backgroundColor = generarColorAleatorio();
        container.textContent=\`Resize detectado a las \${date.toLocaleTimeString()}\`;
    });
    Utils.mostrarResultado(idResultado, "Función ejecutarResize ejecutada, ahora window tiene un listener en evento: resize.\n Redimensiona la ventana para ver el efecto.");
`;

    Utils.mostrarCodigo(idCode, codigo);
}


//  EVENTO: SCROLL

export function ejecutarScroll() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-scroll');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-scroll';
    div.style.height = '100px';
    div.style.overflowY = 'scroll';
    div.style.border = '2px solid black';
    const content = document.createElement('div');
    content.style.height = '300px';
    content.textContent = "Desplázate en este contenedor para disparar el evento scroll.";
    div.appendChild(content);

    div.addEventListener('scroll', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, `Scroll detectado a las ${date.toLocaleTimeString()}`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarScroll ejecutada, ahora el div que creaste tiene un listener en evento: scroll");

    const codigo = `export function ejecutarScroll() {
    limpiarResultadoEventos();
    const container = document.getElementById('container-ejemplo-scroll');
    container.innerHTML = '';
    const div = document.createElement('div');
    div.id = 'div-scroll';
    div.style.height = '100px';
    div.style.overflowY = 'scroll';
    div.style.border = '2px solid black';
    const content = document.createElement('div');
    content.style.height = '300px';
    content.textContent = "Desplázate en este contenedor para disparar el evento scroll.";
    div.appendChild(content);

    div.addEventListener('scroll', (ev) => {
        const date = new Date();
        Utils.mostrarResultado(idResultado, \`Scroll detectado a las \${date.toLocaleTimeString()}\`);
        ev.currentTarget.style.backgroundColor = generarColorAleatorio();
    });

    container.appendChild(div);
    Utils.mostrarResultado(idResultado, "Función ejecutarScroll ejecutada, ahora el div que creaste tiene un listener en evento: scroll");
`;

    Utils.mostrarCodigo(idCode, codigo);
}
