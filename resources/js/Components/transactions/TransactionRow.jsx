import { Pencil, Trash2, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

export default function TransactionRow({ transaction, onEdit, onDelete }) {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
                {transaction.type === "income" ? (
                    <div className="flex items-center gap-2 text-green-600">
                        <ArrowDownCircle size={18} />
                        Income
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-red-600">
                        <ArrowUpCircle size={18} />
                        Expense
                    </div>
                )}
            </td>

            <td className="px-6 py-4">{transaction.title}</td>

            <td className="px-6 py-4">{transaction.account?.name}</td>

            <td className="px-6 py-4">{transaction.category?.name}</td>

            <td className="px-6 py-4 font-semibold">
                Rp {Number(transaction.amount).toLocaleString("id-ID")}
            </td>

            <td className="px-6 py-4">
                {transaction.transaction_date.split("T")[0]}
            </td>

            <td className="px-6 py-4">
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(transaction)}
                        className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(transaction)}
                        className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
