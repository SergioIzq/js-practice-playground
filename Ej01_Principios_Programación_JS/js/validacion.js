const p = document.createElement("p");
let respuesta;  
let num;       

function inicializa(){    
    respuesta = document.getElementById("respuesta");
    p.textContent = " "; 
    respuesta.appendChild(p);
    num = document.getElementById("num").value;  
}

function limpiar(){
    p.remove();
}

function numeroCorrecto(num) {
    let esNumeroCorrecto = true;
    let regex = /^(?:100|[1-9][0-9]?)$/;
    if (!regex.test(num)) {
        esNumeroCorrecto = false;
    }
    return esNumeroCorrecto;
}

function controladorEvento(){          
    let form = document.getElementById("form");

    form.addEventListener("submit", function(ev){
        ev.preventDefault();
        num = document.getElementById("num").value;

        if (numeroCorrecto(num)){
            p.textContent = "El número es correcto";
        } else {
            p.textContent = "El número es incorrecto";
        }
        respuesta.appendChild(p);
    });
}

function main(){
    limpiar();
    inicializa();
    controladorEvento();
}

main();
