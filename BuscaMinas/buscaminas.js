function solicitarNumero(mensaje) {
    let input;
    do {
      input = prompt(mensaje);
      if (input === null) { 
        return null;
      }
      input = parseInt(input);
    } while (isNaN(input) || input <= 0);
  
    return input;
  }
  
  function generarTablero(n, minas) {
    const tablero = [];
  
    for (let i = 0; i < n; i++) {
      tablero.push(Array(n).fill('0'));
    }
  
    let minasColocadas = 0;
    while (minasColocadas < minas) {
      const fila = Math.floor(Math.random() * n);
      const columna = Math.floor(Math.random() * n);
  
      if (tablero[fila][columna] !== '*') {
        tablero[fila][columna] = '*';
        minasColocadas++;
      }
    }
  
    return tablero;
  }
  
  function imprimirTablero(tablero) {
    let mensaje = "";
    for (let fila of tablero) {
      mensaje += fila.join(' ') + '\n';
    }
    return mensaje;
  }
  
  
  function validarEntrada(n, minas) {
    const maxMinas = Math.floor(n * n / 3);
  
    return n * n === Math.pow(Math.floor(Math.sqrt(n * n)), 2) && minas <= maxMinas;
  }
  
  function main() {
    const n = solicitarNumero("Introduce el número de casillas del tablero (cuadrado perfecto):");
    if (n === null) {
      alert("Juego cancelado.");
      return;
    }
  
    const minas = solicitarNumero(`Introduce el número de minas (hasta ${Math.floor(n * n / 3)}):`);
    if (minas === null) {
      alert("Juego cancelado.");
      return;
    }
  
    if (!validarEntrada(n, minas)) {
      alert("Cantidad de casillas o minas incorrecta. Juego cancelado.");
      return;
    }
  
    const tablero = generarTablero(n, minas);
    alert("Tablero:\n" + imprimirTablero(tablero));
  }
  
  main();
  