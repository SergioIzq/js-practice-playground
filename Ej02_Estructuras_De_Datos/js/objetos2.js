const respuesta = document.getElementById("respuesta");

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    obtDetalles() {
        respuesta.innerHTML += `Mi nombre es ${this.nombre}, tengo ${this.edad} años de edad y soy ${this.genero} <br>`;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    registrar() {
        respuesta.innerHTML += `El estudiante ${this.nombre} ha sido registrado en el curso ${this.curso}, en concreto, el grupo ${this.grupo}<br>`;
    }
}

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    asignar() {
        respuesta.innerHTML += `${this.nombre} ha sido asignado para enseñar ${this.asignatura} en el nivel ${this.nivel}<br>`;
    }
}

var estudiante1 = new Estudiante('Juan', 20, 'Masculino', 'Informática', 'A');
var profesor1 = new Profesor('Profesora Martínez', 35, 'Femenino', 'Matemáticas', 'Secundaria');

// Probar métodos
estudiante1.obtDetalles();
estudiante1.registrar();

profesor1.obtDetalles();
profesor1.asignar();
