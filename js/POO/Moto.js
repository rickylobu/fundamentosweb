import Vehiculo from './Vehiculo.js';
import { Arrancable, Frenable } from './interfaces/interfaces.js';
import Utils from '../utils.js';

export default class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.verificarImplementacion([Arrancable, Frenable]);
    }

    arrancar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', `La moto ${this.marca} ${this.modelo} está arrancando.`);
    }

    frenar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', `La moto ${this.marca} ${this.modelo} está frenando.`);
    }
}
