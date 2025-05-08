import Utils from './utils.js';
const idResultado = 'resultado-XHR';
const idCode = 'code-XHR-mostrar';

// Función para realizar solicitud GET
export function xhrGet() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        Utils.mostrarResultado(idResultado, xhr.responseText);
      } else {
        Utils.mostrarResultado(idResultado, "Error GET: " + xhr.status);
      }
    }
  };
  xhr.send();

  const codigo = `// Función para realizar solicitud GET
export function xhrGet() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        Utils.mostrarResultado(idResultado, xhr.responseText);
      } else {
        Utils.mostrarResultado(idResultado, "Error GET: " + xhr.status);
      }
    }
  };
  xhr.send();
`;
  Utils.mostrarCodigo(idCode,codigo);
}

// Función para realizar solicitud POST
export function xhrPost() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        Utils.mostrarResultado(idResultado, xhr.responseText);
      } else {
        Utils.mostrarResultado(idResultado, "Error POST: " + xhr.status);
      }
    }
  };
  const data = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });
  xhr.send(data);

  const codigo = `// Función para realizar solicitud POST
export function xhrPost() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        Utils.mostrarResultado(idResultado, xhr.responseText);
      } else {
        Utils.mostrarResultado(idResultado, "Error POST: " + xhr.status);
      }
    }
  };
  const data = JSON.stringify({ title: 'foo', body: 'bar', userId: 1 });
  xhr.send(data);
`;
  Utils.mostrarCodigo(idCode,codigo);
}

// Función para realizar solicitud PUT
export function xhrPut() {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        Utils.mostrarResultado(idResultado, xhr.responseText);
      } else {
        Utils.mostrarResultado(idResultado, "Error PUT: " + xhr.status);
      }
    }
  };
  const data = JSON.stringify({ id: 1, title: 'foo updated', body: 'bar updated', userId: 1 });
  xhr.send(data);

  const codigo = `// Función para realizar solicitud PUT
export function xhrPut() {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        Utils.mostrarResultado(idResultado, xhr.responseText);
      } else {
        Utils.mostrarResultado(idResultado, "Error PUT: " + xhr.status);
      }
    }
  };
  const data = JSON.stringify({ id: 1, title: 'foo updated', body: 'bar updated', userId: 1 });
  xhr.send(data);`;
  Utils.mostrarCodigo(idCode,codigo);
}

// Función para realizar solicitud DELETE
export function xhrDelete() {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        Utils.mostrarResultado(idResultado, "DELETE successful: Post eliminado");
      } else {
        Utils.mostrarResultado(idResultado, "Error DELETE: " + xhr.status);
      }
    }
  };
  xhr.send();

  const codigo = `export function xhrDelete() {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        Utils.mostrarResultado(idResultado, "DELETE successful: Post eliminado");
      } else {
        Utils.mostrarResultado(idResultado, "Error DELETE: " + xhr.status);
      }
    }
  };
  xhr.send();`;
  Utils.mostrarCodigo(idCode,codigo);
}
