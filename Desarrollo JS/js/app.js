// app.js

window.addEventListener("load", () => {
    // Funciones del módulo de tareas
    const tareasModule = (() => {
        let permitirAgregar = true; // Variable para controlar si se permite agregar tareas

        const agregarTarea = (input) => {
            if (!permitirAgregar) {
                return; // No agregar tareas si no se permite
            }

            const nuevaTarea = input.value.trim();
            const listaTareas = document.getElementById("listaTareas");

            if (nuevaTarea !== "") {
                const li = document.createElement("li");
                li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
                li.textContent = nuevaTarea;

                // Agregar botón de eliminar para esta tarea
                const botonEliminar = document.createElement("button");
                botonEliminar.type = "button";
                botonEliminar.classList.add("btn", "btn-danger", "eliminarTareaBtn");
                botonEliminar.innerHTML = '<i class="fa fa-minus-circle" aria-hidden="true"></i>';
                botonEliminar.addEventListener("click", () => eliminarTarea(li));

                li.appendChild(botonEliminar);
                listaTareas.appendChild(li);
                input.value = ""; // Limpiar el campo de entrada
            }
        };

        const eliminarTarea = (tarea) => {
            const listaTareas = document.getElementById("listaTareas");
            listaTareas.removeChild(tarea);
        };

        const cargarTareasDesdeJSON = (json) => {
            const listaTareas = document.getElementById("listaTareas");
            listaTareas.innerHTML = ""; // Limpiar la lista actual

            const tareas = JSON.parse(json);

            tareas.forEach((tarea) => {
                const li = document.createElement("li");
                li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
                li.textContent = tarea;

                // Agregar botón de eliminar para esta tarea
                const botonEliminar = document.createElement("button");
                botonEliminar.type = "button";
                botonEliminar.classList.add("btn", "btn-danger", "eliminarTareaBtn");
                botonEliminar.innerHTML = '<i class="fa fa-minus-circle" aria-hidden="true"></i>';
                botonEliminar.addEventListener("click", () => eliminarTarea(li));

                li.appendChild(botonEliminar);
                listaTareas.appendChild(li);
            });

            // Desactivar la posibilidad de agregar más tareas
            permitirAgregar = false;
        };

        const filtrarTareas = (filtro) => {
            const listaTareas = document.getElementById("listaTareas");
            const tareas = listaTareas.getElementsByClassName("list-group-item");

            for (const tarea of tareas) {
                const textoTarea = tarea.textContent.toLowerCase();
                const coincide = textoTarea.includes(filtro.toLowerCase());
                tarea.style.display = coincide ? "flex" : "none";
            }
        };

        return { agregarTarea, eliminarTarea, cargarTareasDesdeJSON, filtrarTareas };
    })();

    // Obtener referencias a los elementos del DOM
    const tareaInput = document.getElementById("tareaInput");
    const buscarInput = document.getElementById("buscarInput");
    const agregarTareaBtn = document.getElementById("agregarTarea");
    const cargarTareasBtn = document.getElementById("cargarTareas");
    const eliminarTareaBtn = document.getElementById("eliminarTarea");

    // Agregar la tarea de inicio al cargar la página
    const listaTareas = document.getElementById("listaTareas");
    const tareaInicio = document.createElement("li");
    tareaInicio.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    tareaInicio.textContent = "Tarea de inicio";

    const botonEliminarInicio = document.createElement("button");
    botonEliminarInicio.type = "button";
    botonEliminarInicio.classList.add("btn", "btn-danger", "eliminarTareaBtn");
    botonEliminarInicio.innerHTML = '<i class="fa fa-minus-circle" aria-hidden="true"></i>';
    botonEliminarInicio.addEventListener("click", () => tareasModule.eliminarTarea(tareaInicio));

    tareaInicio.appendChild(botonEliminarInicio);
    listaTareas.appendChild(tareaInicio);

    // Evento click para el botón de agregar tarea
    agregarTareaBtn.addEventListener("click", () => tareasModule.agregarTarea(tareaInput));

    // Evento keydown para el campo de entrada
    tareaInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            tareasModule.agregarTarea(tareaInput);
        }
    });

    // Evento input para el campo de búsqueda
    buscarInput.addEventListener("input", () => {
        const filtro = buscarInput.value.trim();
        tareasModule.filtrarTareas(filtro);
    });

    // Evento click para el botón de cargar tareas desde JSON
    cargarTareasBtn.addEventListener("click", () => {
        // Simula la carga de un archivo JSON desde una carpeta local ('data' folder in this case)
        fetch('data/data.json') 
            .then(response => response.json())
            .then(data => {
                console.log('Datos cargados con éxito:', data);
                tareasModule.cargarTareasDesdeJSON(JSON.stringify(data));
            })
            .catch(error => console.error('Error fetching data:', error));
    });
    

    // Evento click para el botón de eliminar tarea de inicio
    eliminarTareaBtn.addEventListener("click", () => tareasModule.eliminarTarea(tareaInicio));
});
