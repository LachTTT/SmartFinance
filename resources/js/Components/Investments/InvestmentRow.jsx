import { Pencil, Trash2 } from "lucide-react";

export default function InvestmentRow({ investment, onEdit, onDelete }) {
    const profit =
        Number(investment.current_value) - Number(investment.initial_amount);

    const isProfit = profit >= 0;

    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
                <div>
                    <p className="font-semibold">{investment.name}</p>

                    <p className="text-sm text-gray-500">
                        {investment.investment_type?.name}
                    </p>
                </div>
            </td>

            <td className="px-6 py-4">{investment.account?.name}</td>

            <td className="px-6 py-4 text-center font-medium">
                Rp {Number(investment.initial_amount).toLocaleString("id-ID")}
            </td>

            <td className="px-6 py-4 text-center font-medium">
                Rp {Number(investment.current_value).toLocaleString("id-ID")}
            </td>

            <td className="px-6 py-4 text-center">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isProfit
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {isProfit ? "+" : "-"} Rp{" "}
                    {Math.abs(profit).toLocaleString("id-ID")}
                </span>
            </td>

            <td className="px-6 py-4 text-center">
                {investment.buy_date
                    ? new Date(investment.buy_date).toLocaleDateString("id-ID")
                    : "-"}
            </td>

            <td className="px-6 py-4">
                <div className="flex justify-center gap-2">
                    <button
                        onClick={() => onEdit(investment)}
                        className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(investment)}
                        className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
