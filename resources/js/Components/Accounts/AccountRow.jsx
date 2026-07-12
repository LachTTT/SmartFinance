import { Pencil, Trash2 } from "lucide-react";

export default function AccountRow({
    account,
    onEdit,
    onDelete,
}) {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">
                    {account.icon}
                </div>
            </td>

            <td className="px-6 py-4 font-medium">
                {account.name}
            </td>

            <td className="px-6 py-4">
                {account.type}
            </td>

            <td className="px-6 py-4">
                Rp {Number(account.balance).toLocaleString("id-ID")}
            </td>

            <td className="px-6 py-4">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        account.is_active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                    }`}
                >
                    {account.is_active ? "Active" : "Inactive"}
                </span>
            </td>

            <td className="px-6 py-4">
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(account)}
                        className="rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(account)}
                        className="rounded-lg bg-red-500 p-2 text-white hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
