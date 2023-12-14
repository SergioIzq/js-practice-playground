const input = document.getElementById("input");

const button = document.querySelector("button").addEventListener("click", (ev) => {
    if(input.value != ""){
        alert(`Bienvenido a mi página web ${input.value}`);
        input.value = "";
    }
});

