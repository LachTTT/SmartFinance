import { Pencil, Trash2, ArrowDownLeft, ArrowUpRight } from "lucide-react";

export default function CategoryRow({ category, onEdit, onDelete }) {
    const isIncome = category.type === "income";

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
                <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        isIncome
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                    }`}
                >
                    {isIncome ? (
                        <ArrowDownLeft size={20} />
                    ) : (
                        <ArrowUpRight size={20} />
                    )}
                </div>
            </td>

            <td className="px-6 py-4 font-medium">{category.name}</td>

            <td className="px-6 py-4">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isIncome
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {isIncome ? "Income" : "Expense"}
                </span>
            </td>

            <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => onEdit(category)}
                        className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(category)}
                        className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
