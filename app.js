//importación y asignación de EjemploPOO
import ejecutarEjemploPOO from './js/POO/EjemploPOO.js';

//Asignación de función ejecutarEjemploPOO al evento onclick por medio de querySelector
document.querySelector('button[onclick="ejecutarEjemploPOO()"]').onclick = ejecutarEjemploPOO;

//importación y asignación de funciones de Array
import * as Arrays from './js/Arrays.js';

function asignarBtnAFnArrays() {
    document.querySelector('button[onclick="ejecutarArrayPush()"]').onclick = Arrays.ejecutarPush;
    document.querySelector('button[onclick="ejecutarArrayPop()"]').onclick = Arrays.ejecutarPop;
    document.querySelector('button[onclick="ejecutarArrayUnshift()"]').onclick = Arrays.ejecutarUnshift;
    document.querySelector('button[onclick="ejecutarArrayShift()"]').onclick = Arrays.ejecutarShift;
    document.querySelector('button[onclick="ejecutarArrayConcat()"]').onclick = Arrays.ejecutarConcat;
    document.querySelector('button[onclick="ejecutarArraySort()"]').onclick = Arrays.ejecutarSort;
    document.querySelector('button[onclick="ejecutarArraySlice()"]').onclick = Arrays.ejecutarSlice;
    document.querySelector('button[onclick="ejecutarArrayReverse()"]').onclick = Arrays.ejecutarReverse;
    document.querySelector('button[onclick="ejecutarArrayFlat()"]').onclick = Arrays.ejecutarFlat;
    document.querySelector('button[onclick="ejecutarArrayIncludes()"]').onclick = Arrays.ejecutarIncludes;
    document.querySelector('button[onclick="ejecutarArrayIndexOf()"]').onclick = Arrays.ejecutarIndexOf;
    document.querySelector('button[onclick="ejecutarArrayLastIndexOf()"]').onclick = Arrays.ejecutarLastIndexOf;
    document.querySelector('button[onclick="ejecutarArrayLength()"]').onclick = Arrays.ejecutarLength;
}

//llamada a la función de asignación de Arrays
asignarBtnAFnArrays();

// Asignación e importación de programacionFuncional
import * as PF from './js/programacionFuncional.js'; // importamos archivo de programación funcional

function asignarBtnAFnProgramacionFuncional() {
    document.querySelector('button[onclick="ejecutarFnOrdenSuperior()"]').onclick = PF.ejecutarFnOrdenSuperior;
    document.querySelector('button[onclick="ejecutarFnCallback()"]').onclick = PF.ejecutarFnCallback;
    document.querySelector('button[onclick="ejecutarFnPura()"]').onclick = PF.ejecutarFnPura;
    document.querySelector('button[onclick="ejecutarFnComposicion()"]').onclick = PF.ejecutarFnComposicion;
}

// llamamos a la función de asignarBtnAFnProgramacionFuncional
asignarBtnAFnProgramacionFuncional();

// Asignación e importación de funcionesOrdenuperiorArrays.js 
import * as PFArrays from './js/funcionesOrdenSuperiorArrays.js';

// asignarBtnAFnProgramacionFuncionalArrays.js
function asignarBtnAFnProgramacionFuncionalArrays() {
    document.querySelector('button[onclick="ejecutarForEach()"]').onclick = PFArrays.ejecutarForEach;
    document.querySelector('button[onclick="ejecutarArraySortPF()"]').onclick = PFArrays.ejecutarArraySort;
    document.querySelector('button[onclick="ejecutarArrayMap()"]').onclick = PFArrays.ejecutarArrayMap;
    document.querySelector('button[onclick="ejecutarArrayFilter()"]').onclick = PFArrays.ejecutarArrayFilter;
    document.querySelector('button[onclick="ejecutarArrayReduce()"]').onclick = PFArrays.ejecutarArrayReduce;
    document.querySelector('button[onclick="ejecutarArraySome()"]').onclick = PFArrays.ejecutarArraySome;
    document.querySelector('button[onclick="ejecutarArrayEvery()"]').onclick = PFArrays.ejecutarArrayEvery;
    document.querySelector('button[onclick="ejecutarArrayFind()"]').onclick = PFArrays.ejecutarArrayFind;
    document.querySelector('button[onclick="ejecutarArrayFindIndex()"]').onclick = PFArrays.ejecutarArrayFindIndex;
    document.querySelector('button[onclick="ejecutarArrayFlatMap()"]').onclick = PFArrays.ejecutarArrayFlatMap;
}

asignarBtnAFnProgramacionFuncionalArrays();


// Importación de manipulacionDOM.js
import * as DOMUtils from './js/manipulacionDOM.js';

// Asignación de funciones a los botones
function asignarBtnAManipulacionDOM() {
    document.querySelector('button[onclick="ejecutarGetElementById()"]').onclick = DOMUtils.ejecutarGetElementById;
    document.querySelector('button[onclick="ejecutarGetElementsByTagName()"]').onclick = DOMUtils.ejecutarGetElementsByTagName;
    document.querySelector('button[onclick="ejecutarGetElementsByClassName()"]').onclick = DOMUtils.ejecutarGetElementsByClassName;
    document.querySelector('button[onclick="ejecutarQuerySelector()"]').onclick = DOMUtils.ejecutarQuerySelector;
    document.querySelector('button[onclick="ejecutarQuerySelectorAll()"]').onclick = DOMUtils.ejecutarQuerySelectorAll;
    document.querySelector('button[onclick="ejecutarModificarContenidoYatributos()"]').onclick = DOMUtils.ejecutarModificarContenidoYatributos;
    document.querySelector('button[onclick="ejecutarSetAttribute()"]').onclick = DOMUtils.ejecutarSetAttribute;
    document.querySelector('button[onclick="ejecutarCrearElementos()"]').onclick = DOMUtils.ejecutarCrearElementos;
    document.querySelector('button[onclick="ejecutarAppendRemoveChild()"]').onclick = DOMUtils.ejecutarAppendRemoveChild;
}

// Llamar a la función para asignar funciones
asignarBtnAManipulacionDOM();


//importación de addEventListener.js
import * as Eventlisteners from  './js/addEventListener.js';

//asignación de funciones a los botones
function asignarBtnAddEventListener (){
    document.querySelector('button[onclick="ejecutarPropagacionEventos()"]').onclick= Eventlisteners.ejecutarPropagacionEventos;
}

//llamar a la función para asignar listeners
asignarBtnAddEventListener();


//importación de addEventListener.js
import * as Eventos from  './js/addEventListenerEventos.js';

//asignación de funciones a los botones
function asignarBtnAddEventListenerEventos (){
    document.querySelector('button[onclick="ejecutarClick()"]').onclick= Eventos.ejecutarClick;
    document.querySelector('button[onclick="ejecutarDblClick()"]').onclick= Eventos.ejecutarDblClick;
    document.querySelector('button[onclick="ejecutarMouseOver()"]').onclick= Eventos.ejecutarMouseOver;
    document.querySelector('button[onclick="ejecutarMouseOut()"]').onclick= Eventos.ejecutarMouseOut;
    document.querySelector('button[onclick="ejecutarMouseDown()"]').onclick= Eventos.ejecutarMouseDown;
    document.querySelector('button[onclick="ejecutarMouseUp()"]').onclick= Eventos.ejecutarMouseUp;
    document.querySelector('button[onclick="ejecutarMouseMove()"]').onclick= Eventos.ejecutarMouseMove;
    document.querySelector('button[onclick="ejecutarKeyDown()"]').onclick= Eventos.ejecutarKeyDown;
    document.querySelector('button[onclick="ejecutarKeyUp()"]').onclick= Eventos.ejecutarKeyUp;
    document.querySelector('button[onclick="ejecutarSubmit()"]').onclick= Eventos.ejecutarSubmit;
    document.querySelector('button[onclick="ejecutarFocus()"]').onclick= Eventos.ejecutarFocus;
    document.querySelector('button[onclick="ejecutarBlur()"]').onclick= Eventos.ejecutarBlur;
    document.querySelector('button[onclick="ejecutarChange()"]').onclick= Eventos.ejecutarChange;
    document.querySelector('button[onclick="ejecutarInput()"]').onclick= Eventos.ejecutarInput;
    document.querySelector('button[onclick="ejecutarLoad()"]').onclick= Eventos.ejecutarLoad;
    document.querySelector('button[onclick="ejecutarDOMContentLoaded()"]').onclick= Eventos.ejecutarDOMContentLoaded;
    document.querySelector('button[onclick="ejecutarResize()"]').onclick= Eventos.ejecutarResize;
    document.querySelector('button[onclick="ejecutarScroll()"]').onclick= Eventos.ejecutarScroll;
}

//llamar a la función para asignar listeners
asignarBtnAddEventListenerEventos();


//importación de addEventListener.js
import ejecutarListenerAvanzado from  './js/addEventListenerAvanzado.js';

//asignación de funciones a los botones
function asignarBtnAddEventListenerAvanzado (){
    document.querySelector('button[onclick="ejecutarListenerAvanzado()"]').onclick = ejecutarListenerAvanzado;
}

//llamar a la función para asignar listeners
asignarBtnAddEventListenerAvanzado();


//import xhrEjemplos.js
import { xhrGet, xhrPost, xhrPut, xhrDelete } from './js/xhrEjemplos.js';

export function asignarBtnXHR() {
  document.getElementById('btn-get').addEventListener('click', xhrGet);
  document.getElementById('btn-post').addEventListener('click', xhrPost);
  document.getElementById('btn-put').addEventListener('click', xhrPut);
  document.getElementById('btn-delete').addEventListener('click', xhrDelete);
}

asignarBtnXHR();

// importar y asignar addEventListener en btn-Rick-y-Morty función async await con fetch
import { ejecutarEjemploRickYMorty } from './js/asyncAwaitFetch-RickyMorty.js';

document.getElementById('btn-Rick-y-Morty').addEventListener('click', ejecutarEjemploRickYMorty);


// importar y asignar addEventListener en btn-asincronismo-completo función ejecutarEjemploAsincronismoCompleto

import ejecutarEjemploAsincronismoCompleto from './js/asincronismoCompleto.js';

document.getElementById('btn-asincronismo-completo').addEventListener('click', ejecutarEjemploAsincronismoCompleto);

//importacion de Cargador de archivos JavaScript en etiquetas code
import CargadorJSONenCode from './services/CargadorJSONenCode.js';
// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código 
// Ruta al archivo JSON que contiene los datos necesarios 
// Crea una instancia de la clase CargadorJSONenCode con la ruta del archivo JSON 
// Llama al método cargarArchivosJS() para cargar y mostrar los archivos JSON 
document.addEventListener('DOMContentLoaded', () => {
    const jsonPath = './assets/json/paths-js.json';
    const cargador = new CargadorJSONenCode(jsonPath);
    cargador.cargarArchivosJS();
});


