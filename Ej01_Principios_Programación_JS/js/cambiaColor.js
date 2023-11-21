function dibujarCajas(color, idNombre) {
    const cajas = document.getElementById("divCajas");
    let caja = document.createElement("div");
    caja.setAttribute("id", idNombre);
    caja.setAttribute("style", `background-color: #${color}`);
    caja.setAttribute("class", "col-sm-2 border text-center text-light p-5 caja");
    caja.innerHTML = `#${color}`;
    cajas.appendChild(caja);
}

function main() {
    let datosCajas = [["534563", "caja"], ["fa4565", "caja"], ["126545", "caja"], ["654512", "caja"], ["003400", "caja"]];
    datosCajas.forEach((item) => {
        dibujarCajas(item[0], item[1]);
    });

    [...document.querySelectorAll(".caja")].forEach(function (element) {
        element.addEventListener("mouseover", ev => {
            let bgColorString = element.getAttribute("style");
            document.body.setAttribute("style", bgColorString);
        });
    });
}

main();
