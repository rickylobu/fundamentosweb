// Función para mostrar resultados acumulados
function mostrarResultadoPOO(resultado) {
  const textarea = document.getElementById("resultado-poo");
  textarea.value += resultado + "\n";
}

// Función para mostrar código dinámicamente
function mostrarCodigoPOO(codigo) {
  const codeFunciones = document.getElementById("code-poo-mostrar");
  codeFunciones.textContent = codigo;
}


function ejecutarClases() {

  const codigo = `class Persona {
        constructor(nombre, edad) {
          this.nombre = nombre;
          this.edad = edad;
        }
      
        saludar() {
          mostrarResultadoPOO(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años.\`);
        }
      }`;

  mostrarCodigoPOO(codigo);

  mostrarResultadoPOO('No hay objeto instanciado sólo la clase Persona (molde o plantilla del objeto)')

}

function ejecutarObjetos() {

  const codigo = `class Persona {
        constructor(nombre, edad) {
          this.nombre = nombre;
          this.edad = edad;
        }
      
        saludar() {
          mostrarResultadoPOO(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años.\`);
        }
      }
    
      // Instanciamos una Persona
    const persona1 = new Persona('Ricky', 28);
    persona1.saludar(); // Hola, mi nombre es Ricky y tengo 28 años.
`;

  const persona1 = new Persona('Ricky', 28);
  persona1.saludar(); // Hola, mi nombre es Ricky y tengo 28 años.


  mostrarCodigoPOO(codigo);

}

function ejecutarHerencia() {
  class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
      super(nombre, edad);
      this.grado = grado;
    }

    estudiar() {
      mostrarResultadoPOO(`${this.nombre} está estudiando en el grado ${this.grado}.`);
    }
  }

  const estudiante1 = new Estudiante('Eduardo', 29, 'Segundo');
  estudiante1.saludar(); // Hola, mi nombre es Eduardo y tengo 29 años.
  estudiante1.estudiar(); // Eduardo está estudiando en el grado Segundo.


  //Herencia Prototipica: lo que pasa por debajo en la interpretación

  Array.prototype.CustomMethod = function (miArray) {
    const nombresCompletos = [];
    miArray.forEach(persona => {
      const nombreCompleto = `${persona.nombre} ${persona.apellidoPaterno} ${persona.apellidoMaterno}`;
      nombresCompletos.push(nombreCompleto);
    });
    return nombresCompletos;
  };

  const miArray = [
    { nombre: 'Ana', apellidoPaterno: 'García', apellidoMaterno: 'López' },
    { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'González' },
    { nombre: 'María', apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Martínez' },
  ];

  const miNuevoArrayNombresCompletos = miArray.CustomMethod(miArray);
  mostrarResultadoPOO(miNuevoArrayNombresCompletos);
  miNuevoArrayNombresCompletos.forEach(e => mostrarResultadoPOO(e));


  const codigo = `class Persona {
        constructor(nombre, edad) {
          this.nombre = nombre;
          this.edad = edad;
        }
      
        saludar() {
          mostrarResultadoPOO(\`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años.\`);
        }
      }
        
      class Estudiante extends Persona {
        constructor(nombre, edad, grado) {
          super(nombre, edad);
          this.grado = grado;
        }
      
        estudiar() {
            mostrarResultadoPOO(\`\${this.nombre} está estudiando en el grado \${this.grado}.\`);
        }
      }
      
      const estudiante1 = new Estudiante('Eduardo', 29, 'Segundo');
      estudiante1.saludar(); // Hola, mi nombre es Eduardo y tengo 29 años.
      estudiante1.estudiar(); // Eduardo está estudiando en el grado Segundo.
      
      //Herencia Prototipica: lo que pasa por debajo en la interpretación
      
      Array.prototype.CustomMethod = function (miArray) {
        const nombresCompletos = [];
        miArray.forEach(persona => {
          const nombreCompleto = \`\${persona.nombre} \${persona.apellidoPaterno} \${persona.apellidoMaterno}\`;
          nombresCompletos.push(nombreCompleto);
        });
        return nombresCompletos;
      };
      
      const miArray = [
        { nombre: 'Ana', apellidoPaterno: 'García', apellidoMaterno: 'López' },
        { nombre: 'Juan', apellidoPaterno: 'Pérez', apellidoMaterno: 'González' },
        { nombre: 'María', apellidoPaterno: 'Rodríguez', apellidoMaterno: 'Martínez' },
      ];
      
      const miNuevoArrayNombresCompletos = miArray.CustomMethod(miArray);
      mostrarResultadoPOO(miNuevoArrayNombresCompletos);
      miNuevoArrayNombresCompletos.forEach(e => mostrarResultadoPOO(e));`;

  mostrarCodigoPOO(codigo);

}



class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    mostrarResultadoPOO(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}


function ejecutarEncapsulamiento() {
  class CuentaBancaria {
    #saldo = 0;

    depositar(cantidad) {
      this.#saldo += cantidad;
      mostrarResultadoPOO(`Usted depositó $${cantidad}`);
    }

    retirar(cantidad) {
      if (this.#saldo >= cantidad) {
        this.#saldo -= cantidad;
        mostrarResultadoPOO(`Usted retiró $${cantidad}`);
      } else {
        mostrarResultadoPOO(`saldo insuficiente: $${this.#saldo} No puede retirar $${cantidad}`);
      }
    }

    obtenerSaldo() {
      return `Su saldo es: $${this.#saldo}`;
    }
  }

  const cuenta = new CuentaBancaria();
  cuenta.depositar(100); //Usted depositó $100
  mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $100
  cuenta.retirar(25); // Usted retiró $25
  mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $75
  cuenta.depositar(100); // Usted deposito $100
  mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $175
  cuenta.retirar(200); // saldo insuficiente: $175 No puede retirar $200
  mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $175

  /* Lo que debes aprender de esta función de Encapsulamiento es que con # creas un campo privado que lanza error:*/
  mostrarResultadoPOO(`\n\ncuenta.#saldo; Error: Campo privado: Uncaught SyntaxError: Private field '#saldo' must be declared in an enclosing class`); 



  const codigo = `class CuentaBancaria {
        #saldo = 0;
      
        depositar(cantidad) {
          this.#saldo += cantidad;
          mostrarResultadoPOO(\`Usted depositó $\${cantidad}\`);
        }
      
        retirar (cantidad){
            if(this.#saldo>= cantidad){
                this.#saldo -= cantidad;
                mostrarResultadoPOO(\`Usted retiró $\${cantidad}\`);
            }else {
                mostrarResultadoPOO(\`saldo insuficiente: $\${this.#saldo} No puede retirar $\${cantidad}\`);
            }
        }

        obtenerSaldo() {
          return \`Su saldo es: $\${this.#saldo}\`;
        }
      }
      
      const cuenta = new CuentaBancaria();
      cuenta.depositar(100); //Usted depositó $100
      mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $100
      cuenta.retirar(25); // Usted retiró $25
      mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $75
      cuenta.depositar(100); // Usted deposito $100
      mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $175
      cuenta.retirar(200); // saldo insuficiente: $175 No puede retirar $200
      mostrarResultadoPOO(cuenta.obtenerSaldo()); // Su saldo es: $175
      
       /* Lo que debes aprender de esta función de Encapsulamiento es que con # creas un campo privado que lanza error:*/
      mostrarResultadoPOO(\`\n\ncuenta.#saldo; Error: Campo privado: Uncaught SyntaxError: Private field '#saldo' must be declared in an enclosing class\`);`;
  mostrarCodigoPOO(codigo);

}

function ejecutarPolimorfismo() {
  class Animal {
    hacerSonido() {
      mostrarResultadoPOO('El animal hace un sonido.');
    }
  }

  class Perro extends Animal {
    hacerSonido() {
      mostrarResultadoPOO('El perro ladra.');
    }
  }

  class Gato extends Animal {
    hacerSonido() {
      mostrarResultadoPOO('El gato maúlla.');
    }
  }

  const animales = [new Animal(), new Perro(), new Gato()];
  animales.forEach(animal => animal.hacerSonido());
  // El animal hace un sonido.
  // El perro ladra.
  // El gato maúlla.

  //Con protoripos:
  // Prototipo "Animal"
  function AnimalP(nombre) {
    this.nombre = nombre;
  }

  AnimalP.prototype.hacerSonido = function () {
    mostrarResultadoPOO("Sonido genérico de animal (sería un Error)");
  };

  // Prototipo "Perro"
  function PerroP(nombre) {
    AnimalP.call(this, nombre); // Llama al constructor de "Animal"
  }

  PerroP.prototype = Object.create(AnimalP.prototype); // Establece la herencia

  PerroP.prototype.hacerSonido = function () {
    mostrarResultadoPOO(this.nombre + ": Guau");
  };

  // Prototipo "Gato"
  function GatoP(nombre) {
    AnimalP.call(this, nombre); // Llama al constructor de "Animal"
  }

  GatoP.prototype = Object.create(AnimalP.prototype); // Establece la herencia

  GatoP.prototype.hacerSonido = function () {
    mostrarResultadoPOO(this.nombre + ": Miau");
  };

  // Crear instancias
  const miPerro = new PerroP("Sitka");
  const miGato = new GatoP("Simba");

  // Llamar a los métodos
  miPerro.hacerSonido(); // Imprime "Sitka: Guau"
  miGato.hacerSonido(); // Imprime "Simba: Miau"

  const codigo = `class Animal {
        hacerSonido() {
          mostrarResultadoPOO('El animal hace un sonido.');
        }
      }
      
      class Perro extends Animal {
        hacerSonido() {
          mostrarResultadoPOO('El perro ladra.');
        }
      }
      
      class Gato extends Animal {
        hacerSonido() {
          mostrarResultadoPOO('El gato maúlla.');
        }
      }
      
      const animales = [new Animal(), new Perro(), new Gato()];
      animales.forEach(animal => animal.hacerSonido());
      
            //Con protoripos:
      // Prototipo "Animal"
function AnimalP(nombre) {
  this.nombre = nombre;
}

AnimalP.prototype.hacerSonido = function() {
  mostrarResultadoPOO("Sonido genérico de animal (sería un Error)");
};

// Prototipo "Perro"
function Perro(nombre) {
  AnimalP.call(this, nombre); // Llama al constructor de "Animal"
}

Perro.prototype = Object.create(Animal.prototype); // Establece la herencia

Perro.prototype.hacerSonido = function() {
  mostrarResultadoPOO(this.nombre +  ": Guau");
};

// Prototipo "Gato"
function Gato(nombre) {
  Animal.call(this, nombre); // Llama al constructor de "Animal"
}

Gato.prototype = Object.create(Animal.prototype); // Establece la herencia

Gato.prototype.hacerSonido = function() {
  mostrarResultadoPOO(this.nombre +  ": Miau");
};

// Crear instancias
const miPerro = new Perro("Sitka");
const miGato = new Gato("Simba");

// Llamar a los métodos
miPerro.hacerSonido(); // Imprime "Sitka: Guau"
miGato.hacerSonido(); // Imprime "Simba: Miau"`;

  mostrarCodigoPOO(codigo);

}

function ejecutarAbstraccion() {
  // Clase base Vehiculo
  class Vehiculo {
    error;
    constructor(marca, modelo) {
      if (this.constructor === Vehiculo) {
        // throw new Error("No se puede instanciar una clase abstracta Vehiculo.");
        this.error = "ERROR: No se puede instanciar una clase abstracta Vehiculo.";
        mostrarResultadoPOO(this.error);
      }
      this.marca = marca;
      this.modelo = modelo;
    }

    arrancar() {
      // throw new Error("Método 'arrancar()' de clase abstracta Vehiculo debe ser implementado.");
      this.error = "ERROR: Método 'arrancar()' de clase abstracta Vehiculo debe ser implementado."
      mostrarResultadoPOO(this.error);
    }
  }

  // Clase concreta Coche
  class Coche extends Vehiculo {
    arrancar() {
      mostrarResultadoPOO(`El coche ${this.marca} ${this.modelo} está arrancando.`);
    }
  }

  const miVehiculo = new Vehiculo('vehiculo', 'abstracto Error');
  miVehiculo.arrancar();
  const miCoche = new Coche('Toyota', 'Corolla');
  miCoche.arrancar(); // El coche Toyota Corolla está arrancando.

  const codigo = `// Clase base Vehiculo
class Vehiculo {
  error;
  constructor(marca, modelo) {
      if (this.constructor === Vehiculo) {
          // throw new Error("No se puede instanciar una clase abstracta Vehiculo.");
          this.error="ERROR: No se puede instanciar una clase abstracta Vehiculo.";
          mostrarResultadoPOO(this.error);
      }
      this.marca = marca;
      this.modelo = modelo;
  }

  arrancar() {
      // throw new Error("Método 'arrancar()' de clase abstracta Vehiculo debe ser implementado.");
      this.error= "ERROR: Método 'arrancar()' de clase abstracta Vehiculo debe ser implementado."
      mostrarResultadoPOO(this.error);
  }
}

// Clase concreta Coche
class Coche extends Vehiculo {
  arrancar() {
      mostrarResultadoPOO(\`El coche \${this.marca} \${this.modelo} está arrancando.\`);
  }
}

const miVehiculo = new Vehiculo('vehiculo', 'abstracto Error');
miVehiculo.arrancar(); 
const miCoche = new Coche('Toyota', 'Corolla');
miCoche.arrancar(); // El coche Toyota Corolla está arrancando.`;

  mostrarCodigoPOO(codigo);
}

