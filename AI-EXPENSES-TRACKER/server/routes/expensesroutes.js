import express from "express";
import expenses from "../models/expenses.js";
import auth from "../auth.js";  

const router = express.Router();

router.post("/", auth, async (req, res, next) => {
  try {
    const expense = await expenses.create({
      text: req.body.text,
      amount: req.body.amount,
      category: req.body.category || "food",
      userid: req.user.id
    });

    res.status(201).json(expense);
  } catch (err) {
    next(err);
  }
});
router.get("/", auth, async (req, res, next) => {
  try {
    const expensesList = await expenses
      .find({ userid: req.user.id })
      .sort({ createdat: -1 });

    res.json(expensesList);
  } catch (err) {
    next(err);
  }
});


export default router;
