const boton = document.getElementById("boton");
const dado = document.getElementById("dado");

function numRandom() {
    return Math.floor(Math.random() * 6) + 1;
}

function pintarNumero() {    
    boton.onclick = function () {        
        dado.innerHTML = numRandom();
    };

};

function main() {
    pintarNumero();
}

main();
