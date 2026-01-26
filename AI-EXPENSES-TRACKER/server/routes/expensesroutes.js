import express from "express";
import expenses from "../models/expenses.js";
import auth from "../auth.js";
import { categorizeExpenses } from "../ai/categorizeExpenses.js";


const router = express.Router();

router.post("/",auth,async (req, res) => {
    const category = await categorizeExpenses(req.body.text);

    const expense = await expenses.create({
        text: req.body.text,
        amount: req.body.amount,
        category,
        userid: req.userid
    });

    res.json(expense);

});

router.get("/",auth,async(req,res) => {
    const expenses = await expenses.find({userid:req.userid}).sort({ createdAt: -1});

    res.json(expenses);
});

export default router;