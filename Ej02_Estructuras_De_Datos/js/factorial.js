const form = document.getElementById("form");
const respuesta = document.getElementById("respuesta");

    function calcularFactorialConProceso(numero) {
      if (numero < 0) {
        return "El factorial no está definido para números negativos";
      }

      if (!Number.isInteger(numero)) {
        return "Por favor, ingresa un número entero";
      }

      if (numero > 20) {
        return "El número es demasiado grande para calcular el factorial en este ejemplo.";
      }

      let resultado = 1;
      let proceso = `${numero}! =`;

      for (let i = numero; i >= 1; i--) {
        resultado *= i;
        proceso += ` ${i} ${i > 1 ? 'x' : ''}`;
      }

      proceso += ` = ${resultado}`;
      return proceso;
    }

    form.addEventListener("submit", function(ev){
      ev.preventDefault();

      const num = parseInt(document.getElementById("num").value);
      respuesta.innerHTML = calcularFactorialConProceso(num);
    });