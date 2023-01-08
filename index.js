const express = require('express');
const expenseRouter = require('./src/routers/expense');
require('./src/db/mongoose');

const app = express();

app.use(express.json());
app.use(expenseRouter);

app.listen(3000, (req, res) => {
    console.log('Webserver is started on port 3000!');
});