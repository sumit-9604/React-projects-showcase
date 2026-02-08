import { useState } from "react";
import API from "../client/src/api";

export default function ExpenseForm({ refresh }){
    const [form,setForm] = useState({ title:"",amount:""});

    const submit = async() => {
        await API.post("/expenses" , {...form,amount:Number(form.amount) });
        refresh();
    };

    return(
        <>
            <input placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})}></input>
            <input placeholder="Amount" type="number" onChange={e=>setForm({...form,amount:e.target.value})} />
            <button onClick={submit}>Add</button>
        </>
    );
}