import TransactionItem from "./TransactionItem";

const transactions = [
    {
        title: "Salary",
        category: "Income",
        account: "BCA",
        amount: "Rp8.000.000",
        date: "Today",
        type: "income",
    },
    {
        title: "Coffee",
        category: "Food",
        account: "Cash",
        amount: "Rp35.000",
        date: "Today",
        type: "expense",
    },
    {
        title: "Netflix",
        category: "Subscription",
        account: "GoPay",
        amount: "Rp65.000",
        date: "Yesterday",
        type: "expense",
    },
    {
        title: "Freelance",
        category: "Income",
        account: "Dana",
        amount: "Rp1.200.000",
        date: "Yesterday",
        type: "income",
    },
];

export default function RecentTransactions() {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold">Recent Transactions</h2>

                    <p className="text-sm text-gray-500">
                        Latest financial activity
                    </p>
                </div>

                <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
                    View All
                </button>
            </div>

            <div className="space-y-3">
                {transactions.map((transaction, index) => (
                    <TransactionItem key={index} {...transaction} />
                ))}
            </div>
        </div>
    );
}
