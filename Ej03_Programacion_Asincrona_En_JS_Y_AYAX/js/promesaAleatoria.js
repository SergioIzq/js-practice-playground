console.log("Comenzamos...");

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

const miPromesa = new Promise((resolve, reject) => {
    const numeroGenerado = generarNumeroAleatorio();

    setTimeout(() => {
        if (numeroGenerado <= 5) {
            resolve(`Número generado: ${numeroGenerado}. La promesa ha sido resuelta.`);
        } else {
            reject(`Número generado: ${numeroGenerado}. La promesa ha sido rechazada.`);
        }
    }, 3000);
});

miPromesa
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("Promesa acabada.");
    });
