const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Web server is up and running!');
});

app.listen(3000, (req, res) => {
    console.log('Webserver is started on port 3000!');
});