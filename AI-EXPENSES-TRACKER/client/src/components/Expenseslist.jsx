export default function Expenseslist({ expenses }){
    return(
        <ul>
            {expenses.map(e=>(
                <li key={e._id}> {e.title} - {e.amount} ({e.catagory})</li>
            ))}
        </ul>
    );
}