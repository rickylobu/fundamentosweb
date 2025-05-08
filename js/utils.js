const Utils = {
    mostrarResultado: function(idEtiqueta, resultado) {
        const textarea = document.getElementById(idEtiqueta);
        if (textarea) {
            textarea.value += resultado + "\n";
        } else {
            console.error(`Elemento con id "${idEtiqueta}" no encontrado.`);
        }
    },

    mostrarCodigo: function(idEtiqueta, codigo) {
        const codeFunciones = document.getElementById(idEtiqueta);
        if (codeFunciones) {
            codeFunciones.textContent = codigo;
        } else {
            console.error(`Elemento con id "${idEtiqueta}" no encontrado.`);
        }
    }
};

export default Utils;