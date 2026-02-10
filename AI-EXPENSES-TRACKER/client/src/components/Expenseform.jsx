import { useState } from "react";
import API from "../api";

export default function ExpenseForm({ refresh }){
    const [form,setForm] = useState({ title:"",amount:""});

    const submit = async(e) => {
        e.preventDefault();

        await API.post("/expenses",{
            title: form.title,
            amount: Number(form.amount)
        });

        setForm({ title: "", amount:""});
        if(refresh) refresh();

    };

    return(
        <>
        <form onSubmit={submit}>
            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                    setForm({...form, title: e.target.value})}

            />

            <input
                placeholder="Amount"
                type="number"
                value={form.amount}
                onChange={(e)=>setForm({...form, amount:e.target.value})}
            />
            <button type="submit">add</button>
        </form>

        </>
    );
}

