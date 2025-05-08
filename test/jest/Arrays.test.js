// Simulación del DOM con JSDOM
import { JSDOM } from 'jsdom';
const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
      <body>
          <div id="resultado-ejemplo-arrays"></div>
          <div id="code-ejemplo-arrays-mostrar"></div>
      </body>
  </html>
`);
global.document = dom.window.document;


// Polifill para TextEncoder y TextDecoder en Node
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;



// Importación de módulos
import * as Arrays from '../../js/Arrays.js';
import Utils from '../../js/utils.js';


describe('Pruebas de funciones de Arrays.js', () => {
  let mostrarResultadoSpy;

  beforeEach(() => {
    // Espiar la función mostrarResultado de Utils
    mostrarResultadoSpy = jest.spyOn(Utils, 'mostrarResultado').mockImplementation(() => { });

    //volvemos a colocar los ellementos de DOM para que no falle la proxoma prueba con Utils
    document.body.innerHTML = `
    <div id="resultado-ejemplo-arrays"></div>
    <div id="code-ejemplo-arrays-mostrar"></div>
  `;
  });

  afterEach(() => {
    jest.restoreAllMocks();
    // Limpiar inputs creados en el DOM si existen
    ['input-push', 'input-unshift', 'input-includes'].forEach(id => {
      const elem = document.getElementById(id);
      if (elem) elem.remove();
    });
    //volvemos a colocar los ellementos de DOM para que no falle la proxoma prueba con Utils
    document.body.innerHTML = `
    <div id="resultado-ejemplo-arrays"></div>
    <div id="code-ejemplo-arrays-mostrar"></div>
  `;
  });

  // Tests para cada función
  describe('ejecutarPush', () => {
    it('debe agregar el valor ingresado al final del array', () => {
      const inputPush = document.createElement('input');
      inputPush.id = 'input-push';
      inputPush.value = '10';
      document.body.appendChild(inputPush);

      Arrays.ejecutarPush();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array después de push: 1,2,3,10'
      );

      inputPush.remove();
    });

    it('debe agregar el valor por defecto 4 cuando no se ingresa nada', () => {
      const inputPush = document.createElement('input');
      inputPush.id = 'input-push';
      inputPush.value = '';
      document.body.appendChild(inputPush);

      Arrays.ejecutarPush();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array después de push: 1,2,3,4'
      );

      inputPush.remove();
    });
  });

  describe('ejecutarPop', () => {
    it('debe eliminar el último elemento del array', () => {
      Arrays.ejecutarPop();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Elemento eliminado: 3, Array restante: 1,2'
      );
    });
  });

  describe('ejecutarUnshift', () => {
    it('debe agregar el valor ingresado al principio del array', () => {
      const inputUnshift = document.createElement('input');
      inputUnshift.id = 'input-unshift';
      inputUnshift.value = '0';
      document.body.appendChild(inputUnshift);

      Arrays.ejecutarUnshift();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array después de unshift: 0,2,3'
      );

      inputUnshift.remove();
    });

    it('debe agregar el valor por defecto 1 cuando no se ingresa nada', () => {
      const inputUnshift = document.createElement('input');
      inputUnshift.id = 'input-unshift';
      inputUnshift.value = '';
      document.body.appendChild(inputUnshift);

      Arrays.ejecutarUnshift();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array después de unshift: 1,2,3'
      );

      inputUnshift.remove();
    });
  });

  describe('ejecutarShift', () => {
    it('debe eliminar el primer elemento del array', () => {
      Arrays.ejecutarShift();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Elemento eliminado: 1, Array restante: 2,3'
      );
    });
  });

  describe('ejecutarConcat', () => {
    it('debe concatenar los dos arrays', () => {
      Arrays.ejecutarConcat();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array concatenado: 1,2,3,4'
      );
    });
  });

  describe('ejecutarSort', () => {
    it('debe ordenar el array de forma ascendente', () => {
      Arrays.ejecutarSort();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array ordenado: 1,2,3,4'
      );
    });
  });

  describe('ejecutarSlice', () => {
    it('debe extraer el segmento del array', () => {
      Arrays.ejecutarSlice();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Resultado de slice: 2,3'
      );
    });
  });

  describe('ejecutarReverse', () => {
    it('debe invertir el array y mostrar los nombres en orden Z-A', () => {
      Arrays.ejecutarReverse();

      const expectedResultado =
        'Array invertido: 3,2,1\nNombres de Z - A: Willy,Ricardo,Patricio,Francisco,Bob,Alan';

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        expectedResultado
      );
    });
  });

  describe('ejecutarFlat', () => {
    it('debe aplanar el array', () => {
      Arrays.ejecutarFlat();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Array aplanado: 1,2,3,4'
      );
    });
  });

  describe('ejecutarIncludes', () => {
    it('debe verificar que el array contenga el valor ingresado (string)', () => {
      const inputIncludes = document.createElement('input');
      inputIncludes.id = 'input-includes';
      inputIncludes.value = 'Patricio';
      document.body.appendChild(inputIncludes);

      Arrays.ejecutarIncludes();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        '¿Contiene el valor Patricio?: true'
      );

      inputIncludes.remove();
    });

    it('debe buscar el valor por defecto "Ricardo" cuando no se ingresa nada', () => {
      const inputIncludes = document.createElement('input');
      inputIncludes.id = 'input-includes';
      inputIncludes.value = '';
      document.body.appendChild(inputIncludes);

      Arrays.ejecutarIncludes();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        '¿Contiene el valor Ricardo?: true'
      );

      inputIncludes.remove();
    });
  });

  describe('ejecutarIndexOf', () => {
    it('debe retornar el índice del valor 2', () => {
      Arrays.ejecutarIndexOf();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Índice del valor 2: 1'
      );
    });
  });

  describe('ejecutarLastIndexOf', () => {
    it('debe retornar el último índice del valor 2', () => {
      Arrays.ejecutarLastIndexOf();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Último índice del valor 2: 3'
      );
    });
  });

  describe('ejecutarLength', () => {
    it('debe mostrar la longitud del array', () => {
      Arrays.ejecutarLength();

      expect(mostrarResultadoSpy).toHaveBeenLastCalledWith(
        'resultado-ejemplo-arrays',
        'Longitud del array: 3'
      );
    });
  });
});
