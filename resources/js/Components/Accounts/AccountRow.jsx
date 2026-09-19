import {
    Pencil,
    Trash2,
    Wallet,
    Building2,
    Smartphone,
    CreditCard,
} from "lucide-react";

const icons = {
    wallet: Wallet,
    "building-2": Building2,
    smartphone: Smartphone,
    "credit-card": CreditCard,
};

export default function AccountRow({ account, onEdit, onDelete }) {
    const Icon = icons[account.account_type?.icon] || Wallet;

    return (
        <tr className="border-b hover:bg-gray-50 text-center">
            <td className="px-6 py-4">
                <div
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{
                        backgroundColor: account.color || "#10B981",
                    }}
                >
                    <Icon size={20} />
                </div>
            </td>

            <td className="px-6 py-4 font-medium">{account.name}</td>

            <td className="px-6 py-4">{account.account_type?.name}</td>

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
                <div className="flex gap-2 justify-center">
                    <button
                        onClick={() => onEdit(account)}
                        className="rounded-lg bg-blue-500 p-2 text-white transition hover:bg-blue-600"
                    >
                        <Pencil size={16} />
                    </button>

                    <button
                        onClick={() => onDelete(account)}
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
