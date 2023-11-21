
function random(number) {
    return Math.floor(Math.random() * (number + 1));
    }

function cambiaFondo(){
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    
    document.body.style.backgroundColor=rndCol;
    
}

window.addEventListener('load', cambiaFondo());