import ComponentBase from '../component_base.mjs'
import { User } from '../user/user.mjs'

class Task extends ComponentBase {
    #user = null;

    constructor() {
        super();

        this.#user = new User();
    }

    async render(html) {
        return await this.fetchFile(`components/task/${html}.html`);
    }

    createHandler(router) {
        document.querySelector("form.new.task").addEventListener("submit", async ev => {
            ev.preventDefault();

            const text = String(ev.target.elements[0].value);
            const completed = Number(document.querySelector('form.new.task input[name="completed"]:checked').value);

            let response = await this.#create(text, completed);

            if ("id" in response) {
                router.load("home");
                return true;
            }

            alert(response.message);
            return false;
        });
        document.querySelector("form.new.task button.cancel").addEventListener("click", async ev => {
            router.load("home");
        });
    }

    async getAll(id) {
        let response = await fetch(`https://dummyjson.com/todos/user/${id}?limit=10`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    }

    async completed(id, completed) {
        let response = await fetch(`https://dummyjson.com/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: completed,
            })
        });

        return await response.json();

    }

    async delete(id) {
        let response = await fetch(`https://dummyjson.com/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }
        });

        return await response.json();
    }

    async #create(text, completed) {
        this.#validateTask(text, completed);

        let response = await fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: text,
                completed: completed,
                userId: this.#user.id,
            })
        });
        return await response.json();
    }

    #validateTask(text, completed) {
        if (!text instanceof String) {
            throw new Error("Task title only allow text with chars and numbers");
        }

        if (!completed instanceof Boolean) {
            throw new Error("Task completed only allow boolean values");
        }
    }
}

export { Task }