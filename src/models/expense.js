const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    name: {
        type: String
    },
    amount: {
        type: Number
    },
    category: {
        type: String
    },
    date: {
        type: Date
    }
})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;