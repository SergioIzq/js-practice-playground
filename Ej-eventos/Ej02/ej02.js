// Necesitas una página web con dos bloques div. El primer bloque contiene el texto "Pasa por aqui" y el segundo "Efectos del movimiento" con un argumento id = "efecto" . 
// Cuando el ratón pase por el primer bloque se llamará a la función color que cambia el fondo del segundo bloque a color verde (backgroundColor green")

const primerDiv = document.getElementById("primerDiv");

const efecto = document.getElementById("efecto");

primerDiv.addEventListener("mouseenter", (ev) => {
    efecto.style.backgroundColor = "green";
});

primerDiv.addEventListener("mouseleave", (ev) => {
    efecto.style.backgroundColor = "";
});