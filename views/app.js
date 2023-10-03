const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/landing-page.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'));
})

// Handling Post request

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send('Entered UserName :' + data.userName + '\n' + 'Entered password :' + data.password);
});

app.listen(port);

