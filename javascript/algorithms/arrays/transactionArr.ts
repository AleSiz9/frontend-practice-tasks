// Необходимо:
// Получить сумму всех доходов (income).
// Получить сумму всех расходов (expense).
const transactions: Transaction[] = [
  { amount: 100, type: 'income' },
  { amount: 50, type: 'expense' },
  { amount: 200, type: 'income' },
  { amount: 30, type: 'expense' },
  { amount: 500, type: 'income' }
];
type Transaction = {
  amount: number;
  type: 'income' | 'expense';
}

type TransactionTotals = {
  income: number;
  expense: number;
}

function calculateTransactionTotals(transactions: Transaction[]): TransactionTotals{
  return transactions.reduce((acc, value) => {
    if(value.type === 'expense'){
      acc.expense += value.amount
    } else {
      acc.income += value.amount
    }
    return acc
  }, {income: 0, expense: 0})
}
console.log(calculateTransactionTotals(transactions))