export default function predictionCard({ prediction }){
    return(
        <div style={{ padding:20 , background:"#e0f2fe"}}>
            <h3>PREDICTED MONTHLY EXPENSES </h3>
            <h2>{prediction}</h2>
        </div>
    );
}