import clsx from "clsx";
import { Wallet, Landmark, Smartphone, CreditCard } from "lucide-react";

export default function WalletCard({ account }) {
    const type = account.account_type?.name ?? account.type ?? "Account";

    const colors = {
        Cash: "emerald",
        Bank: "blue",
        "E-Wallet": "purple",
    };

    const icons = {
        Cash: Wallet,
        Bank: Landmark,
        "E-Wallet": Smartphone,
    };

    const color = colors[type] ?? "gray";

    const Icon = icons[type] ?? CreditCard;

    const selected = {
        emerald: {
            bg: "bg-emerald-100",
            text: "text-emerald-600",
        },
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-600",
        },
        purple: {
            bg: "bg-purple-100",
            text: "text-purple-600",
        },
        gray: {
            bg: "bg-gray-100",
            text: "text-gray-600",
        },
    }[color];

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">{type}</p>

                    <h3 className="mt-1 text-lg font-semibold">
                        {account.name}
                    </h3>
                </div>

                <div
                    className={clsx(
                        "flex h-12 w-12 items-center justify-center rounded-xl",
                        selected.bg,
                    )}
                >
                    <Icon size={24} className={selected.text} />
                </div>
            </div>

            <div className="mt-6">
                <p className="text-sm text-gray-500">Balance</p>

                <h2 className="mt-1 text-2xl font-bold">
                    Rp {Number(account.balance).toLocaleString("id-ID")}
                </h2>
            </div>
        </div>
    );
}
