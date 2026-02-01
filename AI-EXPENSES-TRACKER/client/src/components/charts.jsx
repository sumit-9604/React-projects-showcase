import { PieChart, Pie, Tooltip } from "recharts";

export default function ExpenseChart({ expenses }) {
    const data = Object.values(
        expenses.reduce((acc, e) => {
            acc[e.category] = acc[e.category] || {
                name: e.category,
                values: 0
            };
            acc[e.category].value += e.amount;
            return acc;
        },{})
    );
    return(
        <PieChart width={350} height={300}>
        <Pie data={data} datakey="value" namekey="name" />
        <Tooltip />
        </PieChart>
    );
}
