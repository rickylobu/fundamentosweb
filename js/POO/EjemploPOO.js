//importaciones se suelen hacer al principio del documento

import Vehiculo from './Vehiculo.js';
import Coche from './Coche.js';
import Moto from './Moto.js';
import Utils from '../utils.js';

export default function ejecutarEjemploPOO(){
try {
    const miVehiculo = new Vehiculo('Genérico', 'Modelo'); // Error: No se puede instanciar una clase abstracta Vehiculo.
} catch (error) {
    Utils.mostrarResultado('resultado-ejemplo-poo', error.message);
}

const miCoche = new Coche('Toyota', 'Corolla');
miCoche.arrancar(); // El coche Toyota Corolla está arrancando.
miCoche.frenar(); // El coche Toyota Corolla está frenando.
miCoche.convertir(); // El coche Toyota Corolla se está convirtiendo.

const miMoto = new Moto('Yamaha', 'MT-07');
miMoto.arrancar(); // La moto Yamaha MT-07 está arrancando.
miMoto.frenar(); // La moto Yamaha MT-07 está frenando.

// Mostrar código dinámicamente con utils.js ahora que sabemos module.exports y require
const codigo= `
======== ARCHIVO interfaces.js ========

// Definición de las "interfaces"
export const Arrancable = {
    arrancar: function() {
        throw new Error("Método 'arrancar()' debe ser implementado.");
    }
};

export const Frenable = {
    frenar: function() {
        throw new Error("Método 'frenar()' debe ser implementado.");
    }
};

export const Convertible = {
    convertir: function() {
        throw new Error("Método 'convertir()' debe ser implementado.");
    }
};


======== ARCHIVO Vehiculo.js ========

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
                    throw new Error(\`La clase \${this.constructor.name} debe implementar el método \${method}\`);
                }
            }
        });
    }
}

======== ARCHIVO Coche.js ========

import Vehiculo from './Vehiculo.js';
import { Arrancable, Frenable, Convertible } from './interfaces/interfaces.js';
import Utils from '../utils.js';

export default class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.verificarImplementacion([Arrancable, Frenable, Convertible]);
    }

    arrancar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', \`El coche \${this.marca} \${this.modelo} está arrancando.\`);
    }

    frenar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', \`El coche \${this.marca} \${this.modelo} está frenando.\`);
    }

    convertir() {
        Utils.mostrarResultado('resultado-ejemplo-poo', \`El coche \${this.marca} \${this.modelo} se está convirtiendo.\`);
    }
}

======== ARCHIVO Moto.js =========

import Vehiculo from './Vehiculo.js';
import { Arrancable, Frenable } from './interfaces/interfaces.js';
import Utils from '../utils.js';

export default class Moto extends Vehiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
        this.verificarImplementacion([Arrancable, Frenable]);
    }

    arrancar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', \`La moto \${this.marca} \${this.modelo} está arrancando.\`);
    }

    frenar() {
        Utils.mostrarResultado('resultado-ejemplo-poo', \`La moto \${this.marca} \${this.modelo} está frenando.\`);
    }
}
\


======== ARCHIVO EjemploPOO.js ========

import Coche from './Coche.js';
import Moto from './Moto.js';
import Utils from '../utils.js';

export default function ejecutarEjemploPOO(){
try {
    const miVehiculo = new Vehiculo('Genérico', 'Modelo'); // Error: No se puede instanciar una clase abstracta Vehiculo.
} catch (error) {
    Utils.mostrarResultado('resultado-ejemplo-poo', error.message);
}

const miCoche = new Coche('Toyota', 'Corolla');
miCoche.arrancar(); // El coche Toyota Corolla está arrancando.
miCoche.frenar(); // El coche Toyota Corolla está frenando.
miCoche.convertir(); // El coche Toyota Corolla se está convirtiendo.

const miMoto = new Moto('Yamaha', 'MT-07');
miMoto.arrancar(); // La moto Yamaha MT-07 está arrancando.
miMoto.frenar(); // La moto Yamaha MT-07 está frenando.
`;
Utils.mostrarCodigo('code-ejemplo-poo-mostrar',codigo);
}