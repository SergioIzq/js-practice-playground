// En esta página tienes dos bloques div a modo de botones, 
// como ves en este código HTML de abajo. 
// Debes escribir una única función Javascript (llamada pulsar) para manejar los eventos click de ambos botones. Cuando pulses con el ratón en cualquier botón deberá aparecer 
// una ventana alert indicando el id del botón donde se ha pulsado.

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

button1.addEventListener("click", press);
button2.addEventListener("click", press);

function press() {
    alert(event.target.id);
}