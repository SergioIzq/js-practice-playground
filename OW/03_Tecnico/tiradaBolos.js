// Tirada de bolos
// 1. Simulamos una tirada de 9 bolos con promesas.
// 2. Cada tirada tiene un tiempo aleatorio que tarda la bola en impactar, no mas de 2 segundos.
// 3. Si hemos tirado los 9 bolos sera un Strike, sino informar del numero de bolos tirados.
// 4. Si no hemos tirado bolos sacar con un error el resultado.
// 5. La salida debe ser por consola.

function ballThrow() {
    return new Promise((resolve, reject) => {
        const hits = Math.round(Math.random() * 10);
        const time = Math.round(Math.random() * 2000);

        if (hits > 0) {
            setTimeout(() => resolve(hits), time);
        } else {
            setTimeout(() => reject(hits), time);
        }
    });
}

let turn = ballThrow();

turn.then(
    hits => {
        if (hits == 9) {
            console.log(`Strike!!! XXX`);
        } else {
            console.log(`Hemos tirado ${hits} bolos`);
        }
    },
    fail => {
        console.error(`No has tirado nada! ${fail}`);
    }
);
