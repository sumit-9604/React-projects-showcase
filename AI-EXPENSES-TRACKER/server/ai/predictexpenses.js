export function predictmonthlyexpenses(expenses){
    if(expenses.length === 0) return 0;

    const total = expenses.reduce((sum,e) => sum + e.amount, 0);
    const avgperexpense = total / expenses.length;

    return Math.round(avgperexpense * 30);
}
