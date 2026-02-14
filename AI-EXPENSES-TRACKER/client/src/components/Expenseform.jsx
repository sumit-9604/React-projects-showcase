import { useState } from "react";
import API from "../api";

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/expenses", {
        title,
        amount,
        category
      });

      onAdd(res.data);

      // Clear form
      setTitle("");
      setAmount("");
      setCategory("food");

    } catch (err) {
      console.error("Add error:", err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="food">Food</option>
        <option value="travel">Travel</option>
        <option value="shopping">Shopping</option>
        <option value="bills">Bills</option>
        <option value="other">Other</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}
