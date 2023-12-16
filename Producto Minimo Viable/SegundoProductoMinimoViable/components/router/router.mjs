class Router {
    #routes

    constructor(routes) {
        this.#routes = routes;
    }

    init() {
        this.load("login");
        this.#handleClickEvent();
    }

    async load(path) {
        let page = (!path) ? "home" : path.replace("/", "");
        let component = await this.#loadComponent(this.#routes[page].component);

        if ("html" in this.#routes[page]) {
            let html = this.#routes[page].html;
            let container = document.querySelector(".content");
            container.innerHTML = await component.render(html);
        }

        if ("handler" in this.#routes[page]) {
            let methodName = this.#routes[page].handler;
            component[methodName](this);
        }
        window.history.pushState({}, "done", this.#routes[page].path);
    }

    async #loadComponent(componentName) {
        let component;
        await import(`../${componentName}/${componentName}.mjs`).then((module) => {
            // Capitalice component name
            let componetInternalName = String(componentName).replace(/\b\w/, letter => letter.toUpperCase());

            // Create new object
            component = new module[componetInternalName]();
        });

        return component;
    }

    #handleClickEvent() {
        document.addEventListener("click", (ev) => {
            if ((ev.target.nodeName === "A") && (ev.target.classList.contains("nav"))) {
                ev.preventDefault();
                ev.stopPropagation();

                let path = ev.target.pathname.replace("/", "");
                this.load(path);
            }
        });
    }
}

export { Router }