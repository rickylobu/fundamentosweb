class CargadorJSONenCode {
    constructor(jsonPath) {
        this.jsonPath = jsonPath; // Ruta al archivo JSON
    }

    async cargarArchivosJS() {
        try {
            // Fetch del JSON con las rutas
            const response = await fetch(this.jsonPath);
            if (!response.ok) throw new Error('No se pudo cargar el JSON');

            const data = await response.json(); // Parseamos el JSON
            const pathsSelectors = data.pathsSelectors; // Obtenemos el arreglo de pathsSelectors

            this.loadFiles(pathsSelectors); // Cargamos los archivos según las rutas
        } catch (error) {
            console.error('Error al cargar los archivos:', error);
        }
    }

    async loadFiles(pathsSelectors) {
        try {
            // Mapear cada archivo y cargarlo
            const promises = pathsSelectors.map(item =>
                fetch(item.path).then(res => res.text())
            );
            const contents = await Promise.all(promises);

            // Mostrar los contenidos en los elementos correspondientes
            contents.forEach((content, index) => {
                const element = document.getElementById(pathsSelectors[index].idSelector);
                if (element) {
                    element.textContent = content;
                }
            });
        } catch (error) {
            console.error('Error al cargar los archivos JS:', error);
        }
    }
}

export default CargadorJSONenCode;
