// Escribe un script que responda al evento scroll y 
// que muestre un boton o bloque div en el fondo de la pantalla cuando deje de verse la linea superior del documento

document.addEventListener('scroll', ev => {
    let btn = document.getElementById('boton');
    if (window.scrollY > 30) {
        let posFondo = window.innerHeigh + window.scrollY;
        posFondo -= 32;
        btn.style.display = 'block';
        btn.style.top = posFondo + 'px';
    }
});

