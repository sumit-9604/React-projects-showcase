import { useEffect, useState } from "react";
import API from "../api";
import ExpenseChart from "../components/charts";
import PredictionCard from "../components/PredictionCard";
import ExpenseForm from "../components/Expenseform";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [prediction, setPrediction] = useState(0);

  const fetchExpenses = async() => {
    const res = await API.get("/expenses");
    setExpenses(res.data);
  };


  useEffect(() => {

    fetchExpenses();
    API.get("/analytic/summary")
      .then((res) => setPrediction(res.data.prediction))
      .catch((err) => console.error("analytic error :", err));
  }, []);

  return (
    <>
      <h1>MY EXPENSES (ONLY ME)</h1>
      <ExpenseForm refresh={fetchExpenses} />
      <ExpenseChart expenses={expenses} />
      <PredictionCard prediction={prediction} />

      {expenses.map((e) => (
        <div key={e._id}>
          {e.text} - {e.amount} ({e.category})
        </div>
      ))}
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        Logout
      </button>
    </>
  );
}
