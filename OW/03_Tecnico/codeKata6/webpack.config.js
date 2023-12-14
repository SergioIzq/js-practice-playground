const path = require("path");

module.exports = {
    entry: "./app.compiled.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    }
}
