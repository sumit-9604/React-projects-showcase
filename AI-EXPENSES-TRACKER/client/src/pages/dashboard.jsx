import { useEffect,useState } from "react";
import {api} from "../api";
import ExpenseChart from "../components/charts";
import predictionCard from "../components/predictioncard";

export default function Dashboard(){
    const [expenses,setExpenses] = useState([]);
    const [PredictionCard,setPrediction] = useState(0);

    useEffect(() =>{
        api.get("/expenses").then(res => setExpenses(res.data));
        api.get("/analytic/summary").then(res => setPrediction(res.data.prediction));},[]);

    return(
        <>
        <h1>MY EXPENSES (ONLY ME)</h1>
        <ExpenseChart expenses={expenses} />
        <predictionCard Prediction={PredictionCard}/>

        {expenses.map(e => (
            <div key={e._id}>
                {e.text} - {e.amount} ({e.category})
            </div>
        ))}
        </>
    );
} 