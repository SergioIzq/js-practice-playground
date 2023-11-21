const respuesta = document.getElementById("respuesta");
function recogerNum(){
    let n = prompt("Introduzca el número"); 
    n = parseInt(n);
    return n;
}


function esParOImpar(num){
    if (!Number.isInteger(num)) {
        return "Por favor, ingresa un número entero";
      }    
    if(num % 2 == 0){
        return `El número ${num} es par`;
    }else{
        return `El número ${num} es impar`;
    }
}

 respuesta.innerHTML=esParOImpar(recogerNum());