let express = require('express');
let app = express();






console.log("Hello World")

function sendResponse (req, res) {
    res.send('Hello Express');
}

app.get('/', sendResponse);





























 module.exports = app;
