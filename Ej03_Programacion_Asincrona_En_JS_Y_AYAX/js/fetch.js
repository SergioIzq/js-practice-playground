const main = document.querySelector("main");

const fetchUsuarios = fetch("https://randomuser.me/api/")
.then(response => {
    console.log(response.status);
    return response.json();
})
.then((response) => {
    let usuariosFetched = response.results[0];

    let nombre = usuariosFetched.name.first
    let apellidos = usuariosFetched.name.last
         
    console.log(nombre);
    console.log(apellidos);
    main.innerHTML = `<p>${nombre}<br/>${apellidos}</p>`


})
.catch(error => {
    console.log(`Error: ${error}`);
});