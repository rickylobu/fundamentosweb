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
