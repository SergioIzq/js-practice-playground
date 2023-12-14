import { ballThrow } from "./tiradaBolosModule.mjs";

let turn = ballThrow();

turn.then(
    hits => {
        if (hits == 9) {
            alert(`Strike!!! XXX`);
        } else {
            alert(`Hemos tirado ${hits} bolos`);
        }
    },
    fail => {
        alert(`No has tirado nada! ${fail}`);
    }
);