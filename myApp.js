let express = require('express');
let app = express();






console.log("Hello World")

function sendResponse (req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

app.get('/', sendResponse);





























 module.exports = app;
