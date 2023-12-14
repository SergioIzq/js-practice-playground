// Tirada de bolos en la web
// Prerequisito
// Usaremos la Code Kata de la clase 3 del bloque de asincronía como base de esta.
// 1. Separar la logica, usando modulos, de la tirada de bolos y el inicio de la tirada.
// 2. Montar la aplicacion modular en un html
// 3. Debe informar del resultado con un mensaje de alerta
// 4. Probarlo en un navegador

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

export {ballThrow};