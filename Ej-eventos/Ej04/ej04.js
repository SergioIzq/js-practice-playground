// Crea un script para que se active cuando la página se haya cargado completamente (evento load de window). 
// Una vez cargada la página el script asignará un evento al bloque de manera que al entrar el ratón su fondo pase a rojo 
// y al salir vuelva al blanco.

window.addEventListener('load', asignar);
function asignar() {
    let div = document.querySelector('div');
    div.addEventListener('mouseenter', changeRed);
    div.addEventListener('mouseout', changeWhite);
}
function changeRed() {
    let square = document.querySelector('div');
    square.style.backgroundColor = 'red';
}
function changeWhite() {
    let square = document.querySelector('div');
    square.style.backgroundColor = 'white';
}