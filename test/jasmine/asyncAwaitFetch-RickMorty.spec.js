import { obtenerUbicacion} from '../../js/asyncAwaitFetch-RickyMorty.js';
import Utils from '../../js/utils.js';


// asyncAwaitFetch-RickMorty.spec.js
//prueba sólo a la primera solicitud obtenerUbicación
describe("Pruebas para la función obtenerUbicacion", () => {
    let originalFetch;
    let originalMostrarResultado;
    const idResultado = 'resultado-Rick-y-Morty';

    beforeEach(() => {
        // Guardamos los métodos originales para restaurarlos luego
        originalFetch = global.fetch;
        originalMostrarResultado = Utils.mostrarResultado;

        // Mock de la función fetch
        global.fetch = jasmine.createSpy("fetch");

        // Mock de Utils.mostrarResultado
        Utils.mostrarResultado = jasmine.createSpy("mostrarResultado");
    });

    afterEach(() => {
        // Restauramos los métodos originales después de cada prueba
        global.fetch = originalFetch;
        Utils.mostrarResultado = originalMostrarResultado;
    });

    it("debería obtener la ubicación correctamente y llamar a mostrarResultado con la ubicación", async () => {
        const mockResponse = {
            ok: true,
            json: async () => ({
                id: 3,
                name: "Citadel of Ricks",
                type: "Space station",
                dimension: "Unknown dimension"
            })
        };

        global.fetch.and.returnValue(Promise.resolve(mockResponse));

        const ubicacion = await obtenerUbicacion();

        // Verifica que fetch fue llamado con la URL correcta
        expect(global.fetch).toHaveBeenCalledWith("https://rickandmortyapi.com/api/location/3");

         // Verifica que mostrarResultado se llamó con el mensaje correcto para la ubicación obtenida
         expect(Utils.mostrarResultado).toHaveBeenCalledWith(
            'resultado-Rick-y-Morty',
            "Ubicación obtenida: [object Object]"
        );

        // Verifica que la función devolvió la ubicación correcta
        expect(ubicacion).toEqual(await mockResponse.json());
    });

    it("debería manejar un error HTTP y llamar a mostrarResultado con el mensaje de error", async () => {
        const mockErrorResponse = {
            ok: false,
            status: 404
        };

        global.fetch.and.returnValue(Promise.resolve(mockErrorResponse));

        try {
            await obtenerUbicacion();
            fail("Se esperaba que lanzara un error HTTP");
        } catch (error) {
            // Verifica que se lanzó el error esperado
            expect(error.message).toBe("Error HTTP: 404");

            // Verifica que fetch fue llamado con la URL correcta
            expect(global.fetch).toHaveBeenCalledWith("https://rickandmortyapi.com/api/location/3");

            // Verifica que mostrarResultado se llamó con el mensaje de error
            expect(Utils.mostrarResultado).toHaveBeenCalledWith(
                idResultado,
                "Error al obtener la ubicación: " + error
            );
        }
    });

    it("debería manejar un error de red y llamar a mostrarResultado con el mensaje de error", async () => {
        const networkError = new Error("Fallo en la red");
        global.fetch.and.returnValue(Promise.reject(networkError));

        try {
            await obtenerUbicacion();
            fail("Se esperaba que lanzara un error de red");
        } catch (error) {
            // Verifica que se lanzó el error esperado
            expect(error.message).toBe("Fallo en la red");

            // Verifica que fetch fue llamado con la URL correcta
            expect(global.fetch).toHaveBeenCalledWith("https://rickandmortyapi.com/api/location/3");

            // Verifica que mostrarResultado se llamó con el mensaje de error
            expect(Utils.mostrarResultado).toHaveBeenCalledWith(
                idResultado,
                "Error al obtener la ubicación: " + error
            );
        }
    });
});

