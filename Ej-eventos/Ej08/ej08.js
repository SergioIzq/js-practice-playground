// En esta página existen tres bloques ocultos.
// Debes crear un evento de teclado para que actúe cuando el usuario pulsa una etcla. si pulsa la tecla 1 se abre 
// el bloque con id ficha1,
//  si pulsa 2 se abre el bloque ficha2 y si 3 se abre el de ficha3.

document.addEventListener("keypress", ev => {
    let id = '';
    switch (ev.key) {
        case '1':
            id = "ficha1";
            break;
        case '2':
            id = "ficha2";
            break;
        case '3':
            id = "ficha3";
            break;
        default:
            alert("Tecla pulsada incorrecta");
            break;
    }
    if (id != '') {
        let o = document.querySelector('.visible');
        if (o) {
            o.classList.replace('visible', 'oculto');
        }
        o = document.getElementById(id);
        o.classList.replace('oculto', 'visible');
    }
});