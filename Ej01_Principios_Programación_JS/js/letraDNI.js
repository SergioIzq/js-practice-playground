function letraDNI(n) {
    let letra = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let resto = n % 23;
    let lDNI = letra[resto];
    return lDNI;
}

function main() {
    let dniRegEx = /^[0-9]{8}$/;
    let formulario = document.getElementById("form-DNI");
    let numero = document.getElementById("numeroDNI");
    let letraDIV = document.getElementById("letra-DIV");

    formulario.addEventListener('submit', (ev) => {
        ev.preventDefault(); 

        let num = numero.value;
        if (dniRegEx.test(num)) {
            let numEn = letraDNI(num); 
            letraDIV.innerHTML = "La letra es " + numEn;
        } else {
            alert("El número de su DNI es erróneo");
        }
    });

}

main();
    