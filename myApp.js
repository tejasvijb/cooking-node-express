let express = require('express');
require('dotenv').config()
let app = express();



function logger (req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}

app.use(logger)


console.log("Hello World")

function sendResponse (req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

app.get('/', sendResponse);

app.get('/json', (req, res) => {
    res.json({ "message": process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json" })
} )

app.use('/public', express.static(__dirname + '/public'));

























 module.exports = app;
