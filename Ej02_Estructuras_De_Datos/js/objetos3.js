class Edificio {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = 0;
        this.puertasPorPlanta = 0;
        this.propietarios = []; 

        document.write(`Construido nuevo edificio en calle: ${calle}, no: ${numero}, CP: ${codigoPostal}.<br>`);
    }

    agregarPlantasYPuertas(numPlantas, puertasPorPlanta) {
        this.plantas += numPlantas;
        this.puertasPorPlanta += puertasPorPlanta;
    }

    modificarNumero(numero) {
        this.numero = numero;
    }

    modificarCalle(calle) {
        this.calle = calle;
    }

    modificarCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    imprimeCalle() {
        return this.calle;
    }

    imprimeNumero() {
        return this.numero;
    }

    imprimeCodigoPostal() {
        return this.codigoPostal;
    }

    agregarPropietario(nombre, planta, puerta) {
        this.propietarios.push({ nombre, planta, puerta });
        document.write(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.<br>`);
    }

    imprimePlantas() {
        this.propietarios.forEach(propietario => {
            document.write(`${propietario.nombre} es propietario de la puerta ${propietario.puerta} de la planta ${propietario.planta}.<br>`);
        });
    }
}

const miEdificio = new Edificio("Calle Ejemplo", 123, "12345");
miEdificio.agregarPlantasYPuertas(5, 4);

document.write(`Calle: ${miEdificio.imprimeCalle()}, Número: ${miEdificio.imprimeNumero()}, Código Postal: ${miEdificio.imprimeCodigoPostal()}<br>`);

miEdificio.agregarPropietario("Juan", 1, 101);
miEdificio.agregarPropietario("María", 2, 205);

miEdificio.imprimePlantas();
