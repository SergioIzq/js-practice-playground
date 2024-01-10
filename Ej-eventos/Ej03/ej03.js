// En esta págian web debes agregar un script para asignar un manejador de eventos al botón button. 
// Este script deberá escribir en el campo total el valor de multiplicar los dos campos.

document.getElementById("enviar").addEventListener("click", (ev) => {
    document.getElementById("total").value="";

    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    let total = precio * cantidad;
    document.getElementById("total").value=`${total}`;
})