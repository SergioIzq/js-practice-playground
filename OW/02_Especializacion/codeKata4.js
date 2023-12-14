let html = "<html><body><h1 class=\"h1 font text\">Formación Técnica</h1></body></html>";

let expression = new RegExp(/<h1.*class=".*">(.*)<\/h1>/);

let result = expression.exec(html);

console.log(result[1]);