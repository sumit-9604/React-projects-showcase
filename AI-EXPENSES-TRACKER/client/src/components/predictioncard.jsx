
export default function PredictionCard({ prediction ,total}) {

    const predValue = typeof prediction === 'object' ? prediction.prediction : prediction;
    return (
        <div style={{ padding: 20, background: "#4182ae" }}>
            <h3>PREDICTED MONTHLY EXPENSES</h3>
            <h2>₹{predValue.toLocaleString()}</h2>
            <h3>TOTAL EXPENSES TILL NOW</h3>
            <h2>₹{total.toLocaleString()}</h2>

            {typeof prediction === 'object' && (
                <p>Current: ₹{prediction.total.toLocaleString()}</p>
            )}
        </div>
    );

}
