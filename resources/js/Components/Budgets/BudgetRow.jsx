import { Pencil, Trash2 } from "lucide-react";

const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export default function BudgetRow({ budget, onEdit, onDelete }) {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                    <div>
                        <p className="font-medium">{budget.category?.name}</p>

                        <p className="text-xs text-gray-500">Expense Budget</p>
                    </div>
                </div>
            </td>

            <td className="px-6 py-4 font-semibold text-emerald-600">
                Rp {Number(budget.amount).toLocaleString("id-ID")}
            </td>

            <td className="px-6 py-4 text-center">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                    {months[budget.month]}
                </span>
            </td>

            <td className="px-6 py-4 text-center">{budget.year}</td>

            <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => onEdit(budget)}
                        className="rounded-lg bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(budget)}
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
