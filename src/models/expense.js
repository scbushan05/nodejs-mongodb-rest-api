const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    name: {
        type: String
    },
    amount: {
        type: Number
    }
})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;