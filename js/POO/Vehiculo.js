export default class Vehiculo {
    constructor(marca, modelo) {
        if (this.constructor === Vehiculo) {
            throw new Error("No se puede instanciar una clase abstracta Vehiculo.");
        }
        this.marca = marca;
        this.modelo = modelo;
    }

    verificarImplementacion(interfaces) {
        interfaces.forEach(interfaz => {
            for (let method in interfaz) {
                if (typeof this[method] !== 'function') {
                    throw new Error(`La clase ${this.constructor.name} debe implementar el método ${method}`);
                }
            }
        });
    }
}
