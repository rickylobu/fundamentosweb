    // Importa el módulo Utils
    import Utils from '../../js/utils.js';

    // Mock de console.error para verificar llamadas a errores
    global.console = {
    error: jest.fn(),
    };

    describe('Pruebas para las funciones de Utils', () => {
    // Limpiar el DOM y los mocks después de cada prueba
    afterEach(() => {
        document.body.innerHTML = '';
        jest.clearAllMocks();
    });

    describe('mostrarResultado', () => {
        it('debe agregar el resultado al valor del textarea cuando el elemento existe', () => {
        // Configura el DOM con un textarea
        document.body.innerHTML = '<textarea id="resultado"></textarea>';
        const textarea = document.getElementById('resultado');

        // Llama a la función
        Utils.mostrarResultado('resultado', 'Prueba de resultado');

        // Verifica que el valor del textarea se haya actualizado correctamente
        expect(textarea.value).toBe('Prueba de resultado\n');
        });

        it('debe registrar un error en la consola cuando el elemento no existe', () => {
        // Llama a la función sin configurar el DOM
        Utils.mostrarResultado('resultado', 'Prueba de resultado');

        // Verifica que se haya llamado a console.error con el mensaje adecuado
        expect(console.error).toHaveBeenCalledWith('Elemento con id "resultado" no encontrado.');
        });
    });

    describe('mostrarCodigo', () => {
        it('debe establecer el contenido de texto del elemento cuando este existe', () => {
        // Configura el DOM con un elemento div
        document.body.innerHTML = '<div id="codigo"></div>';
        const div = document.getElementById('codigo');

        // Llama a la función
        Utils.mostrarCodigo('codigo', 'Código de ejemplo');

        // Verifica que el contenido de texto del div se haya establecido correctamente
        expect(div.textContent).toBe('Código de ejemplo');
        });

        it('debe registrar un error en la consola cuando el elemento no existe', () => {
        // Llama a la función sin configurar el DOM
        Utils.mostrarCodigo('codigo', 'Código de ejemplo');

        // Verifica que se haya llamado a console.error con el mensaje adecuado
        expect(console.error).toHaveBeenCalledWith('Elemento con id "codigo" no encontrado.');
        });
    });
    });
