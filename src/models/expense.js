const mongoose = require('mongoose');
const validator = require('validator');

const expenseSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Expense name is required'],
        trim: true
    },
    amount: {
        type: Number,
        required: [true, 'Expense amount is required'],
        validate(value) {
            if (value < 1) {
                throw new Error('Expense amount should be atleast 1.00');
            }
        }
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        trim: true
    },
    date: {
        type: Date,
        default: new Date(),
        validate(value) {
            if (!validator.isDate(value)) {
                throw new Error('Please provide valid date');
            }
        }
    }
})

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;