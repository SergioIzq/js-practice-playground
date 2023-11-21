// Función entrada de datos 
// Función para tratar los datos
// Función salida
// Main que invoque todo

class DatosPersonales{
    constructor(nombre,apellidos,salario,edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = salario;
        this.edad = edad;
    }
}

function recogeDatos(){
    // Pedir datos
    let nombre = prompt("Introduzca su nombre: ");
    let apellidos = prompt("Introduzca sus apellidos: ");
    let salario = prompt("Introduzca su salario: ");
    let edad = prompt("Introduzca su edad: ");
    salario = parseFloat(salario);
    edad = parseInt(edad);
    return datosPersonales = new DatosPersonales(nombre,apellidos,salario,edad);
}

function calculaSalario(datosPersonales) {
    // Verificar si el salario es menor o igual a 2000
    if (datosPersonales.salario <= 2000) {
      // Verificar si el salario es menor a 1000
      if (datosPersonales.salario < 1000) {
        datosPersonales.salario += datosPersonales.salario * 0.10;
      } else if (datosPersonales.edad > 45) {
        datosPersonales.salario += datosPersonales.salario * 0.03;
      }
    } else {
      // El salario es mayor a 2000
      if (datosPersonales.salario < 1000) {
        if (datosPersonales.edad < 30) {
          datosPersonales.salario = 1100;
        } else if (datosPersonales.edad >= 30 && datosPersonales.edad <= 45) {
          datosPersonales.salario += datosPersonales.salario * 0.03;
        } else {
          datosPersonales.salario += datosPersonales.salario * 0.15;
        }
      }
    }
    return datosPersonales.salario;
  }

function pintarDatos(datosPersonales){
    // Pintar titulo principal
    let titulo = document.getElementById("titulo");
    const tituloH1 = document.createElement("h1");
    tituloH1.textContent = "Bienvenido al CALCULADOR DE SALARIO";
    titulo.appendChild(tituloH1);

    // Pintar titulo secundario
    let titulo2 = document.getElementById("titulo");
    const tituloH2 = document.createElement("h2");
    tituloH2.textContent = "Actualización de salario";
    titulo.appendChild(tituloH2);
    // Pintar datos
    let datos = document.getElementById("datos");
    const parrafoDatos = document.createElement("p");
    parrafoDatos.textContent = `Tu nombre es ${datosPersonales.nombre}, su apellido(s) es ${datosPersonales.apellidos}, su salario actualizado es ${datosPersonales.salario} y su edad es ${datosPersonales.edad}`;
    datos.appendChild(parrafoDatos);
}

function main(){
    let persona;
    persona = recogeDatos();
    calculaSalario(persona);
    pintarDatos(persona);    
}

main();
