import * as Funciones from '../../js/funcionesOrdenSuperiorArrays.js';
import Utils from '../../js/utils.js';

// Simula las funciones de Utils con Jasmine (similar a Jest pero con spies)
beforeEach(() => {
  spyOn(Utils, 'mostrarResultado'); // Crea un espía para `mostrarResultado`
  spyOn(Utils, 'mostrarCodigo');    // Crea un espía para `mostrarCodigo`
});

describe('Funciones de Orden Superior para Arrays', () => {
  describe('ejecutarForEach', () => {
    it('debería recorrer el array y mostrar los elementos con índices', () => {
      Funciones.ejecutarForEach();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Elemento 0: 1\nElemento 1: 2\nElemento 2: 3\nElemento 3: 4\n'
      );
    });
  });

  describe('ejecutarArraySort', () => {
    it('debería ordenar el array de forma ascendente', () => {
      Funciones.ejecutarArraySort();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Array ordenado: 1,2,3,4'
      );
    });
  });

  describe('ejecutarArrayMap', () => {
    it('debería mapear el array y multiplicar cada elemento por 2', () => {
      Funciones.ejecutarArrayMap();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Array mapeado (cada elemento * 2): 2,4,6,8'
      );
    });
  });

  describe('ejecutarArrayFilter', () => {
    it('debería filtrar los elementos pares del array', () => {
      Funciones.ejecutarArrayFilter();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Array filtrado (solo pares): 2,4,6'
      );
    });
  });

  describe('ejecutarArrayReduce', () => {
    it('debería reducir el array sumando sus elementos', () => {
      Funciones.ejecutarArrayReduce();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Suma de elementos con reduce: 10'
      );
    });
  });

  describe('ejecutarArraySome', () => {
    it('debería verificar si al menos un elemento es par', () => {
      Funciones.ejecutarArraySome();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        '¿Algún elemento es par? false'
      );
    });
  });

  describe('ejecutarArrayEvery', () => {
    it('debería verificar si todos los elementos son pares', () => {
      Funciones.ejecutarArrayEvery();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        '¿Todos los elementos son pares? true'
      );
    });
  });

  describe('ejecutarArrayFind', () => {
    it('debería encontrar el primer elemento mayor a 10', () => {
      Funciones.ejecutarArrayFind();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Primer elemento mayor a 10: 12'
      );
    });
  });

  describe('ejecutarArrayFindIndex', () => {
    it('debería devolver el índice del primer elemento mayor a 10', () => {
      Funciones.ejecutarArrayFindIndex();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Índice del primer elemento mayor a 10: 1'
      );
    });
  });

  describe('ejecutarArrayFlatMap', () => {
    it('debería aplanar el array después de duplicar cada elemento', () => {
      Funciones.ejecutarArrayFlatMap();

      expect(Utils.mostrarResultado).toHaveBeenCalledWith(
        'resultado-metodos-arrays-orden-superior',
        'Array flatMap (cada elemento y su doble): 1,2,2,4,3,6'
      );
    });
  });
});
