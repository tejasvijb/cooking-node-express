let express = require('express');
let app = express();






console.log("Hello World")

function sendResponse (req, res) {
    res.send('Response String');
}

app.get('/', sendResponse);





























 module.exports = app;
