import Vehiculo from './Vehiculo.js';
import { Arrancable, Frenable, Convertible } from './interfaces/interfaces.js';
import Utils from '../utils.js';

export default class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.verificarImplementacion([Arrancable, Frenable, Convertible]);
    }

    arrancar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', `El coche ${this.marca} ${this.modelo} está arrancando.`);
    }

    frenar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', `El coche ${this.marca} ${this.modelo} está frenando.`);
    }

    convertir() {
        Utils.mostrarResultado('resultado-ejemplo-poo', `El coche ${this.marca} ${this.modelo} se está convirtiendo.`);
    }
}