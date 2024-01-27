let express = require('express');
require('dotenv').config()
let app = express();
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }))



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

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ time: req.time })
})

app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
})

app.route('/name').get((req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}` })
}).post((req, res) => {
    const { first, last } = req.body;
    res.json({ name: `${first} ${last}` })
})
























 module.exports = app;
