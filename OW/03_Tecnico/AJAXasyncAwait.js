// Usaremos la web https://www.boredapi.com.

// 1. Implementaremos un script web. Puedes usar el ejemplo que ves aqui, copialo.
// 2. Mostraremos un boton que al hacerle click enviará una peticion AJAX al endpoint: https://www.boredapi.com/api/activity/
// 3. El verbo HTTP es GET
// 4. La información obtenida tiene que mostrarse dentro del div con clase activity
// 5. Hay que usar los Async / Await para evitar que se ejecute codigo hasta que se complete la acción de la petición.

    document.querySelector(".request").addEventListener("click", async (e) => { 
        let response = await requestActivity();
        insertOutputResponse(response);
    });


async function requestActivity() {
    const response = await fetch("https://www.boredapi.com/api/activity/");
    const jsonData = response.json();
    return jsonData;
}

function insertOutputResponse(response) {
    let container = document.querySelector(".activity");

    container.innerHTML = "";

    let activity = document.createElement("h4");
    activity.append(response.activity);
    container.append(activity);

    let link = document.createElement("a");
    link.href = response.link;
    link.text = response.link;
    link.target = "_blank";
    container.append(link);

    let type = document.createElement("p");
    type.append(response.type);
    container.append(type);
}