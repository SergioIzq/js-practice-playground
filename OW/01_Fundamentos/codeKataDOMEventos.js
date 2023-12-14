document.querySelector(".test").addEventListener("click", function (ev) {
    ev.stopPropagation();
    alert("Click en el botón");
});

document.addEventListener("contextmenu", function (ev) {
    ev.preventDefault();
    alert("Menú contextual está intervenido");
});

window.addEventListener("click", function (ev){
    console.log("Has clickado en la ventana de la web");
});