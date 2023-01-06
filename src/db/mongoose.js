const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/expense-manager').then(() => {
    console.log('Connected!');
}).catch((error) => {
    console.log('Unable connect!', error);
}) 