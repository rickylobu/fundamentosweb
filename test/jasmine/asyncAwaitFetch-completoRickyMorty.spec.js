import { JSDOM } from 'jsdom';
import { ejecutarEjemploRickYMorty } from '../../js/asyncAwaitFetch-RickyMorty.js';
import Utils from '../../js/utils.js';

describe("Pruebas para la función ejecutarEjemploRickYMorty", () => {
    let originalFetch;
    let originalMostrarResultado;
    let originalMostrarCodigo;
    let dom;

    beforeEach(() => {
        // Simula un DOM con jsdom
        dom = new JSDOM(`<!DOCTYPE html><div id="container-Rick-y-Morty"></div>`);
        global.document = dom.window.document;
        global.window = dom.window;

        // Mock de métodos originales
        originalFetch = global.fetch;
        originalMostrarResultado = Utils.mostrarResultado;
        originalMostrarCodigo = Utils.mostrarCodigo;

        // Mock de Utils
        Utils.mostrarResultado = jasmine.createSpy("mostrarResultado");
        Utils.mostrarCodigo = jasmine.createSpy("mostrarCodigo");
    });

    afterEach(() => {
        // Restauramos métodos originales
        global.fetch = originalFetch;
        Utils.mostrarResultado = originalMostrarResultado;
        Utils.mostrarCodigo = originalMostrarCodigo;
        delete global.document;
        delete global.window;
    });

    it("debería ejecutar correctamente la función y mostrar los resultados", async () => {
        // Mock de fetch para obtener ubicación y residentes
        global.fetch = jasmine.createSpy("fetch").and.callFake((url) => {
            if (url === "https://rickandmortyapi.com/api/location/3") {
                return Promise.resolve({
                    ok: true,
                    json: async () => ({
                        residents: ["https://rickandmortyapi.com/api/character/1"]
                    })
                });
            } else if (url === "https://rickandmortyapi.com/api/character/1") {
                return Promise.resolve({
                    ok: true,
                    json: async () => ({
                        id: 1,
                        name: "Rick Sanchez",
                        status: "Alive",
                        location: { name: "Earth" },
                        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    })
                });
            }
        });

        // Ejecuta la función principal
        await ejecutarEjemploRickYMorty();

        // Verifica que se generó correctamente una card
        const cards = document.getElementsByClassName('card');
        expect(cards.length).toBe(1);
        expect(cards[0].querySelector('h4').textContent).toBe("Rick Sanchez");

        // Verifica que Utils.mostrarResultado se llamó con éxito
        expect(Utils.mostrarResultado).toHaveBeenCalledWith(
            'resultado-Rick-y-Morty',
            'Ejemplo ejecutado correctamente.'
        );
    });

    it("debería manejar errores al obtener la ubicación", async () => {
        // Mock de fetch para fallar al obtener la ubicación
        global.fetch = jasmine.createSpy("fetch").and.returnValue(
            Promise.reject(new Error("Fallo en obtener la ubicación"))
        );

        // Ejecuta la función principal
        await ejecutarEjemploRickYMorty();

        // Verifica que Utils.mostrarResultado se llamó con el error
        expect(Utils.mostrarResultado).toHaveBeenCalledWith(
            'resultado-Rick-y-Morty',
            'Error: Error: Fallo en obtener la ubicación'
        );
    });

    it("debería manejar errores al obtener residentes", async () => {
        // Mock de fetch para obtener ubicación, pero fallar al obtener residentes
        global.fetch = jasmine.createSpy("fetch").and.callFake((url) => {
            if (url === "https://rickandmortyapi.com/api/location/3") {
                return Promise.resolve({
                    ok: true,
                    json: async () => ({
                        residents: ["https://rickandmortyapi.com/api/character/1"]
                    })
                });
            } else if (url === "https://rickandmortyapi.com/api/character/1") {
                return Promise.reject(new Error("Fallo en obtener residentes"));
            }
        });

        // Ejecuta la función principal
        await ejecutarEjemploRickYMorty();

        // Verifica que Utils.mostrarResultado se llamó con el error
        expect(Utils.mostrarResultado).toHaveBeenCalledWith(
            'resultado-Rick-y-Morty',
            'Error: Error: Fallo en obtener residentes'
        );
    });
});
