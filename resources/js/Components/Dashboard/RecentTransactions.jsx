import TransactionItem from "./TransactionItem";

export default function RecentTransactions({ transactions = [] }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold">Recent Transactions</h2>

                    <p className="text-sm text-gray-500">
                        Latest financial activity
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                {transactions.length ? (
                    transactions.map((transaction) => (
                        <TransactionItem
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))
                ) : (
                    <p className="text-center text-gray-500 py-8">
                        No recent transactions.
                    </p>
                )}
            </div>
        </div>
    );
}
