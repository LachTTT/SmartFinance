import TransactionRow from "./TransactionRow";

export default function TransactionTable({
    transactions,
    onEdit,
    onDelete,
}) {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Type</th>
                        <th className="px-6 py-4 text-left">Title</th>
                        <th className="px-6 py-4 text-left">Account</th>
                        <th className="px-6 py-4 text-left">Category</th>
                        <th className="px-6 py-4 text-left">Amount</th>
                        <th className="px-6 py-4 text-left">Date</th>
                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.length ? (
                        transactions.map((transaction) => (
                            <TransactionRow
                                key={transaction.id}
                                transaction={transaction}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={7}
                                className="py-10 text-center"
                            >
                                No Transactions
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
