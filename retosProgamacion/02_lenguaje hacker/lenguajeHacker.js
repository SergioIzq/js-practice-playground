/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

function transformText(string) {
    let map = new Map([
        ["a", "4"],
        ["b", "l3"],
        ["c", "["],
        ["d", ")"],
        ["e", "3"],
        ["f", "|="],
        ["g", "&"],
        ["h", "#"],
        ["i", "1"],
        ["j", ",_|"],
        ["k", ">|"],
        ["l", "1"],
        ["m", "/\\/\\"],
        ["n", "^/"],
        ["o", "0"],
        ["p", "|*"],
        ["q", "(_,)"],
        ["r", "I2"],
        ["s", "5"],
        ["t", "7"],
        ["u", "(_)"],
        ["v", "\/"],
        ["w", "\/\/"],
        ["x", "><"]
    ]);

    string = string.toLowerCase();
    for (const caracter of string) {
        if (map.has(caracter)) {
            string = string.replace(caracter, map.get(caracter));
        }
    }
    return string;
}

console.log(transformText("Que buenas pipas me estoy comiendo"));
