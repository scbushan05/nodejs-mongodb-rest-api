const express = require('express');
const Expense = require('./src/models/expense');
require('./src/db/mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Web server is up and running!');
});

app.get('/expenses', (req, res) => {
    Expense.find()
        .then((expenses) => {
            res.send(expenses);
        })
        .catch((error) => {
            res.send('Error occured', error).status(500);
        });
})

app.listen(3000, (req, res) => {
    console.log('Webserver is started on port 3000!');
});