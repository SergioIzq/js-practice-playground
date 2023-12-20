document.getElementById("enviar").addEventListener("click", (ev) => {
    document.getElementById("total").value="";

    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    let total = precio * cantidad;
    document.getElementById("total").value=`${total}`;
})