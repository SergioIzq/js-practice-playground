import ComponentBase from "../component_base.mjs";
import { User } from "../user/user.mjs";

class Home extends ComponentBase {
    #template = "components/home/home.html";
    #user = null;
    #welcome = "Welcome";


    constructor() {
        super();

        this.#user = new User();
    }

    async render() {
        let content = await this.fetchFile(this.#template);
        
        return this.#asingTemplateValues(content);
    }

    #asingTemplateValues(content) {
        return content.replace(/{name}/, `${this.#welcome} ${this.#user.name}`);
    }
}

export { Home };