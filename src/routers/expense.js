const express = require('express');
const Expense = require('../models/expense');

const router = new express.Router();

router.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.send(expenses);
    } catch (error) {
        res.status(500).send();
    }
})

router.post('/expenses', async (req, res) => {
    const expense = new Expense(req.body);
    try {
        await expense.save();
        res.status(201).send(expense);
    } catch (error) {
        if (error.name === "ValidationError") {
            let errors = {};
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            })
            res.status(400).send(errors);
        }
        res.status(500).send();
    }
})

module.exports = router;