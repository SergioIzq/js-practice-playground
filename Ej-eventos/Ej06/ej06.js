// La página descrita con este código HTML posee dos bloques div cuyos atributos id son cX, cY. 
// Debes escribir un manejador para el evento de movimiento del ratón por el documento. 
// Este script deberá anotar en los cuadros cX y cY las coordenadas donde se encuentra el puntero del ratón
//  mientras se mueve por todo el documento.

let x = document.getElementById("cX");
let y = document.getElementById("cY");

document.addEventListener("mousemove", ev => {
    x.value = ev.screenX;
    y.value = ev.screenY;
});

