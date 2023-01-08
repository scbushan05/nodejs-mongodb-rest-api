const express = require('express');
const Expense = require('../models/expense');

const router = new express.Router();

router.get('/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.send(expenses);
    } catch (error) {
        res.send(error).status(500);
    }
})

router.post('/expenses', async (req, res) => {
    const expense = new Expense(req.body);

    try {
        await expense.save();
        res.send(expense).status(201);
    } catch (error) {
        res.send().status(400);
    }
})

module.exports = router;