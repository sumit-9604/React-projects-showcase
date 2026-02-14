import { useEffect, useState } from "react";
import API from "../api";
import ExpenseChart from "../components/charts";
import PredictionCard from "../components/PredictionCard";
import ExpenseForm from "../components/Expenseform";
import Expenseslist from "../components/Expenseslist";
import { predictmonthlyexpenses } from "../../../server/ai/predictexpenses";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [prediction, setPrediction] = useState(0);

  useEffect(() => {
    fetchExpenses();
    fetchPrediction();
  }, []);

  const {total} = predictmonthlyexpenses(expenses);

  const fetchExpenses = async() => {
    const res = await API.get("/expenses");
    setExpenses(res.data);};

  const handleAddExpense = (newExpense) => {
  setExpenses((prev) => [newExpense, ...prev]);
  fetchPrediction();};

  const deleteExpense = async(id) => {
    try{
      await API.delete(`/expenses/${id}`);
      fetchExpenses();
      fetchPrediction();
    }catch(err){
      console.error("delete error",err);}};
    

  const fetchPrediction = async()=>{
    try {
      const res = await API.get("/analytics/summary");
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error("analytic error : ", err);}
  };

  return (
    <>
      <h1>DASHBOARD</h1>
      <h1>MY EXPENSES</h1>
      
      <ExpenseForm onAdd={handleAddExpense} />

      <ExpenseChart 
        expenses={expenses}
        onDelete={deleteExpense} />

      <PredictionCard 

        prediction={prediction}
        total={total} />
      
      <Expenseslist expenses={expenses} onDelete={deleteExpense} />

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
