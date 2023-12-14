const form = document.querySelector(".form");
const button = document.querySelector(".button");
const input = document.querySelector(".input");
const div = document.querySelector(".h2");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    saveName();
    input.value = "";

    if (button.textContent == "Enviar") {
        button.textContent = "Forget";
        let h2 = document.createElement("h2");
        h2.textContent = localStorage.getItem("nombre");
        div.appendChild(h2);
    } else {
        button.textContent = "Enviar";
        let h2 = div.querySelector("h2");
        div.removeChild(h2);
    }
    
    input.hidden = !input.hidden;
});

function saveName() {
    let nombre = input.value;
    localStorage.setItem("nombre", nombre);
}
