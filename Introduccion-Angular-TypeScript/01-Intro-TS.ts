let palabra = "Hola mi niño";

// Para declarar un tipo a una variable se usa :
let number: number = 5;

//Para declarar uno o varios tipos a una variable se usa |
let multipleTipo: number|string;

// TypeScript no deja reasignar valores a tipos diferentes de los iniciales
// palabra = 1;

let caracteristicas_sam: caracteristicas = {
    saltar: true,
    magia: "Arcana",
    inventario: ["espada", "pico", "anillo"],
    nivel: 4
};

// Interfaces

interface caracteristicas {
    saltar: boolean,
    magia: string,
    inventario: string[],
    nivel: number
}