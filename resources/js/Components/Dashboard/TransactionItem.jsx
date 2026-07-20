import clsx from "clsx";
import {
    ArrowDownLeft,
    ArrowUpRight,
} from "lucide-react";

export default function TransactionItem({
    transaction,
}) {
    return (
        <div className="flex items-center justify-between rounded-xl border border-gray-100 p-4 transition hover:bg-gray-50">
            <div className="flex items-center gap-4">
                <div
                    className={clsx(
                        "flex h-12 w-12 items-center justify-center rounded-full",
                        transaction.type === "income"
                            ? "bg-emerald-100"
                            : "bg-red-100"
                    )}
                >
                    {transaction.type === "income" ? (
                        <ArrowDownLeft
                            className="text-emerald-600"
                            size={22}
                        />
                    ) : (
                        <ArrowUpRight
                            className="text-red-600"
                            size={22}
                        />
                    )}
                </div>

                <div>
                    <h3 className="font-semibold">
                        {transaction.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {transaction.category?.name} •{" "}
                        {transaction.account?.name}
                    </p>
                </div>
            </div>

            <div className="text-right">
                <p
                    className={clsx(
                        "font-bold",
                        transaction.type === "income"
                            ? "text-emerald-600"
                            : "text-red-600"
                    )}
                >
                    {transaction.type === "income"
                        ? "+"
                        : "-"}
                    Rp{" "}
                    {Number(
                        transaction.amount
                    ).toLocaleString("id-ID")}
                </p>

                <p className="text-sm text-gray-500">
                    {transaction.transaction_date}
                </p>
            </div>
        </div>
    );
}
