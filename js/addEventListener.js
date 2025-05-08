import Utils from './utils.js';
const idResultado = 'resultado-addEventListener';
const idCode = 'code-addEventListener-mostrar';

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


function ejecutarPropagacionEventos() {
    // Limpiamos el contenedor donde se mostrará el ejemplo
    const container = document.getElementById('ejemplo-propagacion-eventos');
    container.innerHTML = '';
    container.style.height = 'fit-content';

    /* Creación de la estructura DOM:
       - Un div padre con un <p> que indica "Padre Fase x"
       - Dentro, un div hijo con un <p> "Hijo Fase x"
       - Y dentro del hijo, un botón (Elemento Objetivo) 
        que inicia una propagación del evento click 
    */
    const parentDiv = document.createElement('div');
    parentDiv.id = 'div-padre';
    parentDiv.style.border = '2px solid black';
    parentDiv.style.padding = '10px';
    parentDiv.style.margin = '10px';
        parentDiv.innerHTML = '<p>Elemento Padre </p>';
        parentDiv.style.backgroundColor = 'white';

    

    const childDiv = document.createElement('div');
    childDiv.id = 'div-hijo';
    childDiv.style.border = '2px solid gray';
    childDiv.style.padding = '10px';
    childDiv.style.margin = '10px';
    childDiv.innerHTML = '<p>Elemento Hijo</p>';
    childDiv.style.backgroundColor = 'white';

    

    const targetButton = document.createElement('button');
    targetButton.id = 'boton-objetivo';
    targetButton.style.padding = '10px';
    targetButton.style.margin = '10px';
    targetButton.innerHTML = 'Ejecutar <strong>Elemento Objetivo</strong>';
    targetButton.style.cursor='pointer';
    targetButton.style.backgroundColor = 'white';


    // Se arma la jerarquía: botón dentro del hijo, hijo dentro del padre y todo dentro del contenedor
    childDiv.appendChild(targetButton);
    parentDiv.appendChild(childDiv);
    container.appendChild(parentDiv);

   

    /* --- Fase de Captura --- */
    // Listener en el padre (fase de captura: tercer parámetro true)
    parentDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Padre en (fase de captura)\n' + e.currentTarget.id);
        setTimeout(() => {
        parentDiv.firstChild.innerHTML = '<p>Elemento <strong>Padre Fase Captura</strong></p>';
        parentDiv.style.backgroundColor = generarColorAleatorio();
        },100);
        setTimeout(() => {
            parentDiv.firstChild.innerHTML = 'Elemento Padre';
            parentDiv.style.backgroundColor = 'white';
        },3000);
    }, true); // true asigna fase de captura, de window a elemento objetivo (->) interceptado por parentDiv

    // Listener en el hijo (fase de captura)
    childDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Hijo (fase de captura)\n' + e.currentTarget.id);
        setTimeout(() => {
    childDiv.firstChild.innerHTML = '<p>Elemento <strong>Hijo Fase Captura</strong></p>';
        childDiv.style.backgroundColor = generarColorAleatorio();
        },3000);
        setTimeout(() => {
            childDiv.firstChild.innerHTML = 'Elemento Hijo';
            childDiv.style.backgroundColor = 'white';
        },6000);
    }, true); // true asigna fase de captura, de window a elemento objetivo (->) interceptado por childDiv

    /* --- Listener en el botón (Elemento Objetivo) --- */
    // Este listener detiene la propagación (por lo tanto, no se ejecutarán los listeners en burbujeo)
    targetButton.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Elemento Objetivo: Fase de Target\n' + e.currentTarget.id);
        setTimeout(() => {
        targetButton.innerHTML = '<strong>Elemento Objetivo Alcanzado</strong>';
        targetButton.style.backgroundColor = generarColorAleatorio();
        },6000);
        setTimeout(() => {
            targetButton.innerHTML = 'Elemento Objetivo';
            targetButton.style.backgroundColor = 'white';
        },9000);
    }); // En el elemento objetivo da igual true o false dado que es como si fuera el final de la dase de captura y el inicio de la de burbujeo

    /* --- Fase de Burbujeo --- */
    // Listener en el hijo para la fase de burbujeo (tercer parámetro false)
    childDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Hijo (fase de Burbujeo)\n' + e.currentTarget.id);
        setTimeout(() => {
        childDiv.firstChild.innerHTML = 'Elemento <strong>Hijo Fase Burbujeo</strong>';
        childDiv.style.backgroundColor = generarColorAleatorio();
        },9000);
        setTimeout(() => {
            childDiv.firstChild.innerHTML = 'Elemento Hijo';
            childDiv.style.backgroundColor = 'white';
        },12000);
    }, false);

    // Listener en el padre para la fase de burbujeo
    parentDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Padre en (fase de Burbujeo)\n' + e.currentTarget.id);
        setTimeout(() => {
        parentDiv.firstChild.innerHTML = 'Elemento <strong>Padre Fase Burbujeo</strong>';
        parentDiv.style.backgroundColor = generarColorAleatorio();
        },12000);
        setTimeout(() => {
            parentDiv.firstChild.innerHTML = 'Elemento Padre';
            parentDiv.style.backgroundColor = 'white';
        },15000);
    }, false);

  
    // Código a mostrar en el área de código (Utils)
    const code = `
import Utils from './utils.js';
const idResultado = 'resultado-addEventListener';
const idCode = 'code-addEventListener-mostrar';

function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}


function ejecutarPropagacionEventos() {
    // Limpiamos el contenedor donde se mostrará el ejemplo
    const container = document.getElementById('ejemplo-propagacion-eventos');
    container.innerHTML = '';
    container.style.height = 'fit-content';
    
    /* Creación de la estructura DOM:
       - Un div padre con un <p> que indica "Padre Fase x"
       - Dentro, un div hijo con un <p> "Hijo Fase x"
       - Y dentro del hijo, un botón (Elemento Objetivo) 
        que inicia una propagación del evento click 
    */
    const parentDiv = document.createElement('div');
    parentDiv.id = 'div-padre';
    parentDiv.style.border = '2px solid black';
    parentDiv.style.padding = '10px';
    parentDiv.style.margin = '10px';
        parentDiv.innerHTML = '<p>Elemento Padre </p>';
        parentDiv.style.backgroundColor = 'white';

    

    const childDiv = document.createElement('div');
    childDiv.id = 'div-hijo';
    childDiv.style.border = '2px solid gray';
    childDiv.style.padding = '10px';
    childDiv.style.margin = '10px';
    childDiv.innerHTML = '<p>Elemento Hijo</p>';
    childDiv.style.backgroundColor = 'white';

    

    const targetButton = document.createElement('button');
    targetButton.id = 'boton-objetivo';
    targetButton.style.padding = '10px';
    targetButton.style.margin = '10px';
    targetButton.innerHTML = 'Ejecutar <strong>Elemento Objetivo</strong>';
    targetButton.style.cursor='pointer';
    targetButton.style.backgroundColor = 'white';


    // Se arma la jerarquía: botón dentro del hijo, hijo dentro del padre y todo dentro del contenedor
    childDiv.appendChild(targetButton);
    parentDiv.appendChild(childDiv);
    container.appendChild(parentDiv);

   

    /* --- Fase de Captura --- */
    // Listener en el padre (fase de captura: tercer parámetro true)
    parentDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Padre en (fase de captura)\n' + e.currentTarget.id);
        setTimeout(() => {
        parentDiv.firstChild.innerHTML = '<p>Elemento <strong>Padre Fase Captura</strong></p>';
        parentDiv.style.backgroundColor = generarColorAleatorio();
        },100);
        setTimeout(() => {
            parentDiv.firstChild.innerHTML = 'Elemento Padre';
            parentDiv.style.backgroundColor = 'white';
        },3000);
    }, true); // true asigna fase de captura, de window a elemento objetivo (->) interceptado por parentDiv

    // Listener en el hijo (fase de captura)
    childDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Hijo (fase de captura)\n' + e.currentTarget.id);
        setTimeout(() => {
    childDiv.firstChild.innerHTML = '<p>Elemento <strong>Hijo Fase Captura</strong></p>';
        childDiv.style.backgroundColor = generarColorAleatorio();
        },3000);
        setTimeout(() => {
            childDiv.firstChild.innerHTML = 'Elemento Hijo';
            childDiv.style.backgroundColor = 'white';
        },6000);
    }, true); // true asigna fase de captura, de window a elemento objetivo (->) interceptado por childDiv

    /* --- Listener en el botón (Elemento Objetivo) --- */
    // Este listener detiene la propagación (por lo tanto, no se ejecutarán los listeners en burbujeo)
    targetButton.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Elemento Objetivo: Fase de Target\n' + e.currentTarget.id);
        setTimeout(() => {
        targetButton.innerHTML = '<strong>Elemento Objetivo Alcanzado</strong>';
        targetButton.style.backgroundColor = generarColorAleatorio();
        },6000);
        setTimeout(() => {
            targetButton.innerHTML = 'Elemento Objetivo';
            targetButton.style.backgroundColor = 'white';
        },9000);
    }); // En el elemento objetivo da igual true o false dado que es como si fuera el final de la dase de captura y el inicio de la de burbujeo

    /* --- Fase de Burbujeo --- */
    // Listener en el hijo para la fase de burbujeo (tercer parámetro false)
    childDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Hijo (fase de Burbujeo)\n' + e.currentTarget.id);
        setTimeout(() => {
        childDiv.firstChild.innerHTML = 'Elemento <strong>Hijo Fase Burbujeo</strong>';
        childDiv.style.backgroundColor = generarColorAleatorio();
        },9000);
        setTimeout(() => {
            childDiv.firstChild.innerHTML = 'Elemento Hijo';
            childDiv.style.backgroundColor = 'white';
        },12000);
    }, false);

    // Listener en el padre para la fase de burbujeo
    parentDiv.addEventListener('click',  (e) => {
        Utils.mostrarResultado(idResultado, 'Padre en (fase de Burbujeo)\n' + e.currentTarget.id);
        setTimeout(() => {
        parentDiv.firstChild.innerHTML = 'Elemento <strong>Padre Fase Burbujeo</strong>';
        parentDiv.style.backgroundColor = generarColorAleatorio();
        },12000);
        setTimeout(() => {
            parentDiv.firstChild.innerHTML = 'Elemento Padre';
            parentDiv.style.backgroundColor = 'white';
        },15000);
    }, false);
    `;
    Utils.mostrarCodigo(idCode, code);
}


// delegacionEventos.js

// Asignamos un único listener al contenedor del formulario para manejar el envío
document.getElementById('form-container').addEventListener('submit',  (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario
    
    // Debido a la delegación, el evento se origina en el formulario
    const form = e.target;
    Utils.mostrarResultado(idResultado, form);
    // Extraemos los elementos del formulario
    const emailInput = form.email;
    const passwordInput = form.password;
    const ageInput = form.age;
    
    let valid = true;
    const errors = [];
    
    // Validación de correo: formato básico usando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      valid = false;
      errors.push("El correo electrónico es inválido.");
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
    } else {
      emailInput.classList.remove('error');
      emailInput.classList.add('success');
    }
    
    // Validación de contraseña: mínimo 6 caracteres
    if (passwordInput.value.length < 6) {
      valid = false;
      errors.push("La contraseña debe tener al menos 6 caracteres.");
      passwordInput.classList.add('error');
      passwordInput.classList.remove('success');
    } else {
      passwordInput.classList.remove('error');
      passwordInput.classList.add('success');
    }
    
    // Validación de edad: debe ser un número mayor o igual a 18
    const ageValue = parseInt(ageInput.value, 10);
    if (isNaN(ageValue) || ageValue < 18) {
      valid = false;
      errors.push("Debes ser mayor de 18 años.");
      ageInput.classList.add('error');
      ageInput.classList.remove('success');
    } else {
      ageInput.classList.remove('error');
      ageInput.classList.add('success');
    }
    
    // Mostrar resultado de la validación
    const resultDiv = document.getElementById('result');
    if (valid) {
      resultDiv.textContent = "¡Formulario enviado correctamente!";
      resultDiv.className = "success";
      Utils.mostrarResultado(
        idResultado,
        "Formulario válido: " +
          JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
            age: ageInput.value,
          })
      );
      // Aquí, en un entorno de producción, podrías enviar los datos vía AJAX:
      // fetch('/api/registro', { method: 'POST', body: new FormData(form) })
      //   .then(response => response.json())
      //   .then(data => { ... });
      Utils.mostrarResultado(idResultado, "todo bien en " + e.currentTarget + " durante fase:" + e.eventPhase);
    } else {
      resultDiv.innerHTML = errors.map((err) => `<p>${err}</p>`).join(" ");
      resultDiv.className = "error";
      e.stopImmediatePropagation();
      e.stopPropagation();
      Utils.mostrarResultado(idResultado, "Evento detenido en " + e.currentTarget + "durante" + e.eventPhase);
      Utils.mostrarResultado(idResultado, "Errores: " + errors.join(" "));
    // Podemos poner el foco en el primer input con error
    form.querySelector('.error')?.focus();
    }

    const codigo =`// Asignamos un único listener al contenedor del formulario para manejar el envío
document.getElementById('form-container').addEventListener('submit',  (e) => {
    e.preventDefault(); // Prevenir el envío por defecto del formulario
    
    // Debido a la delegación, el evento se origina en el formulario
    const form = e.target;
    Utils.mostrarResultado(idResultado, form);
    // Extraemos los elementos del formulario
    const emailInput = form.email;
    const passwordInput = form.password;
    const ageInput = form.age;
    
    let valid = true;
    const errors = [];
    
    // Validación de correo: formato básico usando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      valid = false;
      errors.push("El correo electrónico es inválido.");
      emailInput.classList.add('error');
      emailInput.classList.remove('success');
    } else {
      emailInput.classList.remove('error');
      emailInput.classList.add('success');
    }
    
    // Validación de contraseña: mínimo 6 caracteres
    if (passwordInput.value.length < 6) {
      valid = false;
      errors.push("La contraseña debe tener al menos 6 caracteres.");
      passwordInput.classList.add('error');
      passwordInput.classList.remove('success');
    } else {
      passwordInput.classList.remove('error');
      passwordInput.classList.add('success');
    }
    
    // Validación de edad: debe ser un número mayor o igual a 18
    const ageValue = parseInt(ageInput.value, 10);
    if (isNaN(ageValue) || ageValue < 18) {
      valid = false;
      errors.push("Debes ser mayor de 18 años.");
      ageInput.classList.add('error');
      ageInput.classList.remove('success');
    } else {
      ageInput.classList.remove('error');
      ageInput.classList.add('success');
    }
    
    // Mostrar resultado de la validación
    const resultDiv = document.getElementById('result');
    if (valid) {
      resultDiv.textContent = "¡Formulario enviado correctamente!";
      resultDiv.className = "success";
      Utils.mostrarResultado(
        idResultado,
        "Formulario válido: " +
          JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value,
            age: ageInput.value,
          })
      );
      // Aquí, en un entorno de producción, podrías enviar los datos vía AJAX:
      // fetch('/api/registro', { method: 'POST', body: new FormData(form) })
      //   .then(response => response.json())
      //   .then(data => { ... });
      Utils.mostrarResultado(idResultado, "todo bien en " + e.currentTarget + " durante fase:" + e.eventPhase);
    } else {
      resultDiv.innerHTML = errors.map((err) => \`<p>\${err}</p>\`).join(" ");
      resultDiv.className = "error";
      e.stopImmediatePropagation();
      e.stopPropagation();
      Utils.mostrarResultado(idResultado, "Evento detenido en " + e.currentTarget + "durante" + e.eventPhase);
      Utils.mostrarResultado(idResultado, "Errores: " + errors.join(" "));
    // Podemos poner el foco en el primer input con error
    form.querySelector('.error')?.focus();
    }
  },true);
  `;

  Utils.mostrarCodigo(idCode,codigo);
  },true);
  
  


export { ejecutarPropagacionEventos };
