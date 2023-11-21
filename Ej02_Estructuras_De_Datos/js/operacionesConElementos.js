var valores = [true,5,false,"hola","adios",2];

// 1. Determinar cuál de los dos elementos de texto es mayor
if(valores[3].length > valores[4].length){
    console.log(`La cadena ${valores[3]} es mayor que la cadena ${valores[4]}`)
}else if(valores[3].length < valores[4].length){
    console.log(`La cadena ${valores[3]} es menor que la cadena ${valores[4]}`)
}else{
    console.log(`La cadena ${valores[3]} es igual que la cadena ${valores[4]}`)
}

// 2. Utilizando exclusivamente los dos valores booleanos del array,
// determinar los operadores necesarios para obtener un resultado true
// y otro resultado false

var resultadoTrue = valores[0] === valores[2];
console.log(resultadoTrue);

// 3. Determinar el resultado de las cinco operaciones matemáticas
// realizadas con los dos elementos numéricos

var num1 = valores[1];
var num2 = valores[5];

console.log(`La suma de ${num1} + ${num2} es ${num1+num2}`);
console.log(`La resta de ${num1} - ${num2} es ${num1-num2}`);
console.log(`La multiplicación de ${num1} * ${num2} es ${num1*num2}`);
console.log(`La división de ${num1} / ${num2} es ${num1/num2}`);
console.log(`El mod de ${num1} % ${num2} es ${num1%num2}`);

