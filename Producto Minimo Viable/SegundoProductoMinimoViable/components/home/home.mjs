import ComponentBase from "../component_base.mjs";
import { User } from "../user/user.mjs";
import { Task } from "../task/task.mjs"

class Home extends ComponentBase {
    #template = "components/home/home.html";
    #user = null;
    #tasks = null;
    #welcome = "Welcome";


    constructor() {
        super();

        this.#user = new User();
        this.#tasks = new Task();
    }

    async render() {
        let content = await this.fetchFile(this.#template);

        return this.#asingTemplateValues(content);
    }

    async #asingTemplateValues(content) {
        let tasks = await this.#tasks.getAll(this.#user.id);

        content = content.replace(/{name}/, `${this.#welcome} ${this.#user.name}`);
        content = content.replace(/{tasks}/, this.#taskListHtml(tasks));
        return content;
    }

    #taskListHtml(tasks) {
        let html = "";
        for (let task of tasks.todos) {
            html += `
                <div class="task${task.id}">
                    ${(task.completed ? "<strike>" : "")}${task.todo}${(task.completed ? "</strike>" : "")}
                </div>
                <div class="task${task.id}">
                    ${task.completed ? "" : `<button type="button" data-id=\"${task.id}\" name=\"complete_task\">`}
                    ${task.completed ? "✔️" : "⭕"}
                    ${task.completed ? "" : "</button>"}
                </div>
                <div class ="task${task.id}">
                    <button type="button" data-id="${task.id}" name="delete_task">🗑️</button>
                </div>
            `;
        }

        return html;
    }

    async homeHandler(router) {
        document.querySelectorAll("button[name=complete_task]").forEach(elem => elem.addEventListener("click", async ev => {
            let id = ev.target.attributes["data-id"].value;
            await this.#tasks.completed(id, true);

            ev.target.parentNode.innerHTML = "✔️";
        }));

        document.querySelectorAll("button[name=delete_task]").forEach(elem => elem.addEventListener("click", async ev => {
            let id = ev.target.attributes["data-id"].value;
            await this.#tasks.delete(id);

            document.querySelectorAll(`div.task${id}`).forEach(elem => elem.remove());
        }));
    }
}

export { Home };