import { Pencil, Trash2, PiggyBank } from "lucide-react";

export default function SavingRow({ saving, onEdit, onDelete, onDeposit }) {
    const percentage = Math.min(
        (Number(saving.current_amount) / Number(saving.target_amount)) * 100,
        100,
    );

    const statusColor = {
        active: "bg-blue-100 text-blue-700",
        completed: "bg-green-100 text-green-700",
        cancelled: "bg-red-100 text-red-700",
    };

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
                <div className="flex flex-col">
                    <span className="font-semibold">{saving.title}</span>

                    <span className="text-xs text-gray-500">
                        Rp{" "}
                        {Number(saving.current_amount).toLocaleString("id-ID")}
                        {" / "}
                        Rp{" "}
                        {Number(saving.target_amount).toLocaleString("id-ID")}
                    </span>
                </div>
            </td>

            <td className="px-6 py-4">{saving.account?.name}</td>

            <td className="px-6 py-4">
                <div className="space-y-2">
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full bg-emerald-500 transition-all"
                            style={{
                                width: `${percentage}%`,
                            }}
                        />
                    </div>

                    <p className="text-center text-xs font-medium text-gray-500">
                        {percentage.toFixed(0)}%
                    </p>
                </div>
            </td>

            <td className="px-6 py-4 text-center">
                {saving.deadline
                    ? new Date(saving.deadline).toLocaleDateString("id-ID")
                    : "-"}
            </td>

            <td className="px-6 py-4 text-center">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        statusColor[saving.status]
                    }`}
                >
                    {saving.status}
                </span>
            </td>

            <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => onDeposit(saving)}
                        className="rounded-lg bg-emerald-500 p-2 text-white transition hover:bg-emerald-600"
                    >
                        <PiggyBank size={16} />
                    </button>

                    <button
                        onClick={() => onEdit(saving)}
                        className="rounded-lg bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(saving)}
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
