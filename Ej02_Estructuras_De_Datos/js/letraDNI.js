var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const respuesta = document.getElementById("respuesta");
class DatosPersonales{
    constructor(numDNI,letraDNI){
        this. numDNI = numDNI;
        this.letraDNI = letraDNI;
    }
}

function recogerDatos(){
    let numDNI = prompt("Intrduce tu número de DNI: ");
    let letraDNI = prompt("Introduzca una letra: ");
    return datosPersonales = new DatosPersonales(numDNI,letraDNI.toUpperCase());
}

function comprobarDatos(datosPersonales){
    datosCorrectos = true;
    if(datosPersonales.numDNI <0 || datosPersonales.numDNI>99999999 || isNaN(datosPersonales.numDNI)){
        datosCorrectos = false;
        respuesta.innerHTML = `El número proporcionado ${datosPersonales.numDNI} no es válido`;
    }
    return datosCorrectos;
}

function calculaLetra(datosPersonales){
        let resto = datosPersonales.numDNI % 23;
        return letras[resto];    
}

function comparaLetra(datosPersonales){
    if(datosPersonales.letraDNI == calculaLetra(datosPersonales)){
        respuesta.innerHTML = `El número de DNI ${datosPersonales.numDNI} y la letra ${datosPersonales.letraDNI} son correctos`;
    }else{
        respuesta.innerHTML = `Lo siento el número de DNI ${datosPersonales.numDNI} tiene la letra ${datosPersonales.letraDNI} incorrecta, ya que debería ser ${calculaLetra(datosPersonales)}`;
    }
}

function main(){
    let persona = recogerDatos();
    if(comprobarDatos(persona)){
        calculaLetra(persona);
        comparaLetra(persona);
    }
}
Object
main();