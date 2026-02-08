import express from "express";
import expense from "../models/expenses.js";
import auth from "../auth.js";
import { predictmonthlyexpenses } from "../ai/predictexpenses.js";

const router = express.Router();

router.get("/summary" , auth, async(req,res) => {
    const expenses = await expense.find({userid:req.user.id});

    const prediction = predictmonthlyexpenses(expenses);
    res.json({
        total: expenses.reduce((s,e) => s+e.amount, 0), prediction
    });
});

export default router;