function recogerCadena() {
    let cadena = prompt("Introduzca una cadena para comprobar si es palíndroma");
    return cadena.trim();
}

function quitarTildes(cadena) {
    const tildes = {
        á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
        Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U'
    };

    return cadena.replace(/[áéíóúÁÉÍÓÚ]/g, letra => tildes[letra]);
}

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

function esPalindromo(cadena) {
    let cadenaSinTildes = quitarTildes(cadena.trim().toLowerCase().replace(/\s/g, ''));
    if (invertirCadena(cadenaSinTildes) === cadenaSinTildes) {
        alert(`La cadena "${cadena}" es palíndroma`);
    } else {
        alert(`La cadena "${cadena}" no es palíndroma`);
    }
}

function main() {
    let cadena = recogerCadena();
    esPalindromo(cadena);
}

main();
