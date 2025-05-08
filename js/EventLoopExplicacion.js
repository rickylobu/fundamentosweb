/* ejecutarEventLoop1 
        Utiliza mostrarResultado para el flujo Sincrono (Inicio, Fin) 
            CallStack -> Asignación Otras colas
                Se utiliza una promesa resulelta para utilizar la Microtask Queue
                Se utiliza setTimeout para utilizar la Task Queue */

function ejecutarEventLoop1 () {
    
    const resultado = document.getElementById("resultado-EventLoop1");
    resultado.style.display = 'flex';
    resultado.style.minWidth = '80%'
    const mostrarResultado = function(texto){
        
        if (resultado) {
            resultado.value += texto;
        } else {
            console.error(`Elemento con id "resultado-EventLoop1" no encontrado.`);
        }
    }

    mostrarResultado('Inicio' + " → ");
	
	setTimeout(() => {
	mostrarResultado('Callback de setTimeout');
	}, 0);
	
	Promise.resolve().then(() => {
	mostrarResultado('Callback de la Promesa' + " → ");
	});
	
	mostrarResultado('Fin' + " → ");



    const mostrarCodigo = function(codigo) {
        const div = document.getElementById("mostrarCodigoEventLoop1");
        if (div) {
            div.style.display = 'block';
            div.innerHTML=`
            <h4>El código real del ejemplo utilizado es el siguinete:</h4>
            <pre class="pre-largo" id="pre-ancho100">
            <code class="code-js" id="code-EventLoop1"></code>
            </pre>`;
            const code = document.getElementById('code-EventLoop1');
            code.textContent = codigo;
        } else {
            console.error(`Elemento con id "mostrarCodigoEventLoop1" no encontrado.`);
        }
    }

    const codigo = `
/* ejecutarEventLoop1 
    Utiliza mostrarResultado para el flujo Sincrono (Inicio, Fin) 
        CallStack -> Asignación Otras colas
            Se utiliza una promesa resulelta para utilizar la Microtask Queue
            Se utiliza setTimeout para utilizar la Task Queue */

function ejecutarEventLoop1 () {

const resultado = document.getElementById("resultado-EventLoop1");
resultado.style.display = 'flex';
resultado.style.minWidth = '80%'
const mostrarResultado = function(texto){
    
    if (resultado) {
        resultado.value += texto;
    } else {
        console.error(\`Elemento con id "resultado-EventLoop1" no encontrado.\`);
    }
}

mostrarResultado('Inicio' + " → ");

setTimeout(() => {
mostrarResultado('Callback de setTimeout');
}, 0);

Promise.resolve().then(() => {
mostrarResultado('Callback de la Promesa' + " → ");
});

mostrarResultado('Fin' + " → ");



const mostrarCodigo = function(codigo) {
    const div = document.getElementById("mostrarCodigoEventLoop1");
    if (div) {
        div.innerHTML=\`
        <h4>El código real del ejemplo utilizado es el siguinete:</h4>
        <pre class="pre-largo">
        <code class="code-js" id="code-EventLoop1"></code></pre>\`;
        code = div.getElementsByTagName('code');
        code.textContent = codigo;
    } else {
        console.error(\`Elemento con id "mostrarCodigoEventLoop1" no encontrado.\`);
    }
}`;
    mostrarCodigo(codigo);
}