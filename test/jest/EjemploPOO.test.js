import ejecutarEjemploPOO from '../../js/POO/EjemploPOO.js';
import Coche from '../../js/POO/Coche.js';
import Moto from '../../js/POO/Moto.js';
import Utils from '../../js/utils.js';

// Mock de las dependencias necesarias
jest.mock('../../js/POO/Vehiculo.js', () => {
  return jest.fn().mockImplementation(() => {
    throw new Error("No se puede instanciar una clase abstracta Vehiculo.");
  });
});

jest.mock('../../js/POO/Coche.js', () => {
  return jest.fn().mockImplementation((marca, modelo) => {
    return {
      arrancar: jest.fn(() => `El coche ${marca} ${modelo} está arrancando.`),
      frenar: jest.fn(() => `El coche ${marca} ${modelo} está frenando.`),
      convertir: jest.fn(() => `El coche ${marca} ${modelo} se está convirtiendo.`)
    };
  });
});

jest.mock('../../js/POO/Moto.js', () => {
  return jest.fn().mockImplementation((marca, modelo) => {
    return {
      arrancar: jest.fn(() => `La moto ${marca} ${modelo} está arrancando.`),
      frenar: jest.fn(() => `La moto ${marca} ${modelo} está frenando.`)
    };
  });
});

jest.mock('../../js/utils.js', () => ({
  mostrarResultado: jest.fn(),
  mostrarCodigo: jest.fn()
}));

describe('ejecutarEjemploPOO', () => {
  it('debería manejar el error al intentar instanciar la clase Vehiculo', () => {
    ejecutarEjemploPOO();
    expect(Utils.mostrarResultado).toHaveBeenCalledWith('resultado-ejemplo-poo', "No se puede instanciar una clase abstracta Vehiculo.");
  });

  it('debería crear un coche y llamar a sus métodos', () => {
    ejecutarEjemploPOO();
    expect(Coche).toHaveBeenCalledWith('Toyota', 'Corolla');
    const cocheMockInstance = Coche.mock.results[0].value;
    expect(cocheMockInstance.arrancar).toHaveBeenCalled();
    expect(cocheMockInstance.frenar).toHaveBeenCalled();
    expect(cocheMockInstance.convertir).toHaveBeenCalled();
  });

  it('debería crear una moto y llamar a sus métodos', () => {
    ejecutarEjemploPOO();
    expect(Moto).toHaveBeenCalledWith('Yamaha', 'MT-07');
    const motoMockInstance = Moto.mock.results[0].value;
    expect(motoMockInstance.arrancar).toHaveBeenCalled();
    expect(motoMockInstance.frenar).toHaveBeenCalled();
  });

  it('debería mostrar el código generado dinámicamente', () => {
    ejecutarEjemploPOO();
    expect(Utils.mostrarCodigo).toHaveBeenCalledWith(
      'code-ejemplo-poo-mostrar',
      expect.stringContaining('======== ARCHIVO interfaces.js ========')
    );
  });
});
