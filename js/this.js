// Función para mostrar resultados acumulados
function mostrarResultadoThis(resultado) {
	const textarea = document.getElementById("resultado-this");
	textarea.value += resultado + "\n";
}

// Función para mostrar código dinámicamente
function mostrarCodigoThis(codigo) {
	const codeFunciones = document.getElementById("code-this-mostrar");
	codeFunciones.textContent = codigo;
}


// Uso de this
function ejecutarThis() {
	// Objeto
	const persona1 = {
		nombre: "Ricky",
		saludar: function () { //this es el objeto donde fué creado el método
			mostrarResultadoThis(`Hola, mi nombre es ${this.nombre}.`);
		}
	};

	persona1.saludar(); // "Hola, mi nombre es Ricky."

	// función anidada
	const persona2 = {
		nombre: "Ricky",
		saludar: function() {
			mostrarResultadoThis(`-----------\nHola, mi nombre es ${this.nombre} llamando this antes de entrar a fn anidada.`);
			
			function funcionAnidada() {
				mostrarResultadoThis(`Marca error this al anidar funciones:\n Hola, mi nombre es ${this.nombre} llamando this dentro de fn anidada.\n-----------`);
				// undefined (en modo estricto) o el objeto global (en modo no estricto)
			}
			
			funcionAnidada();
		}
	};
	
	persona2.saludar();
	
	// solución con una variable
	const persona3 = {
		nombre: "Ricky",
		saludar: function() {
			mostrarResultadoThis(`Solución con self = this:\nHola, mi nombre es ${this.nombre} llamando this antes de entrar a fn anidada.`);
			self = this; // self será el this anidado que necesitamos, la variable donde se guarda this de exterior
			function funcionAnidada() {
				mostrarResultadoThis(`Hola, mi nombre es ${self.nombre} llamando self = this; dentro de fn anidada.`);
				// Hola, mi nombre es Ricky llamando self = this; dentro de fn anidada.
			}
			
			funcionAnidada();
		}
	};
	
	persona3.saludar();

	// solución con función flecha
	const persona4 = {
		nombre: "Ricky",
		saludar: function() {
			mostrarResultadoThis(`Solución con función flecha =>:\nHola, mi nombre es ${this.nombre} llamando this antes de entrar a fn anidada.`);
			funcionAnidada = () => {
				mostrarResultadoThis(`Hola, mi nombre es ${this.nombre} llamando this heredado con arrow fn '=>' dentro de fn anidada.`);
				// Hola, mi nombre es Ricky llamando this heredado con arrow fn '=>' dentro de fn anidada.
			}
			
			funcionAnidada();
		}
	};
	
	persona4.saludar();
	
	const codigo = `
// Uso de this
function ejecutarThis() {
	// Objeto
	const persona1 = {
		nombre: "Ricky",
		saludar: function () { //this es el objeto donde fué creado el método
			mostrarResultadoThis(\`Hola, mi nombre es \${this.nombre}.\`);
		}
	};

	persona1.saludar(); // "Hola, mi nombre es Ricky."

	// función anidada
	const persona2 = {
		nombre: "Ricky",
		saludar: function() {
			mostrarResultadoThis(\`-----------\nHola, mi nombre es \${this.nombre} llamando this antes de entrar a fn anidada.\`);
			
			function funcionAnidada() {
				mostrarResultadoThis(\`Marca error this al anidar funciones:\n Hola, mi nombre es \${this.nombre} llamando this dentro de fn anidada.\n-----------\`);
				// undefined (en modo estricto) o el objeto global (en modo no estricto)
			}
			
			funcionAnidada();
		}
	};
	
	persona2.saludar();
	
	// solución con una variable
	const persona3 = {
		nombre: "Ricky",
		saludar: function() {
			mostrarResultadoThis(\`Solución con self = this:\nHola, mi nombre es \${this.nombre} llamando this antes de entrar a fn anidada.\`);
			self = this; // self será el this anidado que necesitamos, la variable donde se guarda this de exterior
			function funcionAnidada() {
				mostrarResultadoThis(\`Hola, mi nombre es \${self.nombre} llamando self = this; dentro de fn anidada.\`);
				// Hola, mi nombre es Ricky llamando self = this; dentro de fn anidada.
			}
			
			funcionAnidada();
		}
	};
	
	persona3.saludar();

	// solución con función flecha
	const persona4 = {
		nombre: "Ricky",
		saludar: function() {
			mostrarResultadoThis(\`Solución con función flecha =>:\nHola, mi nombre es \${this.nombre} llamando this antes de entrar a fn anidada.\`);
			funcionAnidada = () => {
				mostrarResultadoThis(\`Hola, mi nombre es \${this.nombre} llamando this heredado con arrow fn '=>' dentro de fn anidada.\`);
				// Hola, mi nombre es Ricky llamando this heredado con arrow fn '=>' dentro de fn anidada.
			}
			
			funcionAnidada();
		}
	};
	
	persona4.saludar();
	
	`;
	mostrarCodigoThis(codigo);

}
