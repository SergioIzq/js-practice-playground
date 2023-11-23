const respuesta = document.getElementById("respuesta");

function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
    respuesta.innerHTML += `Mi nombre es ${this.nombre}, tengo ${this.edad} años de edad y soy ${this.genero} <br>`;
}

function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = new Persona();

Estudiante.prototype.registrar = function () {
    respuesta.innerHTML += `El estudiante ${this.nombre} ha sido registrado en el curso ${this.curso}, en concreto, el grupo ${this.grupo}<br>`;
}

function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = new Persona();

Profesor.prototype.asignar = function () {
    respuesta.innerHTML += `${this.nombre} ha sido asignado para enseñar ${this.asignatura} en el nivel ${this.nivel}<br>`;
}

var estudiante1 = new Estudiante('Juan', 20, 'Masculino', 'Informática', 'A');
var profesor1 = new Profesor('Profesora Martínez', 35, 'Femenino', 'Matemáticas', 'Secundaria');

// Probar métodos
estudiante1.obtDetalles();
estudiante1.registrar();

profesor1.obtDetalles();
profesor1.asignar();
