export default function Expenseslist({ expenses , onDelete }){
    return(
        <>
        <ul style={{listStyle:"none",padding:0}}>
            {expenses.map((e)=>{

                const date = new Date(e.createdAt);
                const formattedDate =
                    date.toLocaleDateString("en-IN") + " " +
                    date.toLocaleTimeString("en-IN");

                    return(
                <li
                    key={e._id}
                    style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        padding:"8px",
                        marginBottom:"6px",
                        border: "2px solid black",
                        borderRadius:"6px",
                    }}>

                    <span>
                        {e.title} - {e.amount} ({e.category})
                    </span>

                    
                    <small style={{color:"gray"}}>
                        added on: {formattedDate}
                    </small>

                    <button onClick={()=> onDelete(e._id)}>
                        DELETE
                    </button>

                </li>    
            )})}
        </ul>
        </>
    );
}