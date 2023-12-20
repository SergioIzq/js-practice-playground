import { saveTask, onGetTasks, deleteTask, getTask, updateTask } from "./firebase.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

let editStatus = false;
let id = "";

window.addEventListener("DOMContentLoaded", async () => {
    onGetTasks((querySnapshot) => {
        tasksContainer.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const task = doc.data();

            tasksContainer.innerHTML += `
                <div>
                    <h3>${task.title}</h3>
                    <p>${task.description}</p>
                    <div>
                        <button class="btn-delete" data-id="${doc.id}">
                            Borrar
                        </button>
                        <button class="btn-edit" data-id="${doc.id}">
                            Editar
                        </button>
                    </div>
                </div>`;
        });

        const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
        const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");

        btnsDelete.forEach((btn) =>
            btn.addEventListener("click", async (ev) => {
                await deleteTask(ev.target.dataset.id);
            })
        );

        btnsEdit.forEach((btn) =>
            btn.addEventListener("click", async (ev) => {
                const doc = await getTask(ev.target.dataset.id);
                const task = doc.data();
                taskForm["task-title"].value = task.title;
                taskForm["task-description"].value = task.description;

                editStatus = true;
                id = doc.id;
            })
        );
    });
});

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskForm["task-title"].value;
    const description = taskForm["task-description"].value;

    if (!editStatus) {
        await saveTask(title, description);
    } else {
        await updateTask(id, {
            title: title,
            description: description,
        });
        editStatus = false;
        id = "";
        // Restablecer el texto del botón si es necesario
        taskForm["btn-task-form"].innerText = "Grabar";
    }

    taskForm.reset();
    taskForm["task-title"].focus();
});
