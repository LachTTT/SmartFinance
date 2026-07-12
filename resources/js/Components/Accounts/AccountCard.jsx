import Card from "@/Components/UI/Card";
import Badge from "@/Components/UI/Badge";

export default function AccountCard({ account }) {
    const formatCurrency = (amount) =>
        new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(amount ?? 0);

    return (
        <Card className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl text-white"
                    style={{
                        backgroundColor: account.color || "#10B981",
                    }}
                >
                    {account.icon || "💳"}
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {account.name}
                    </h3>

                    <p className="text-sm text-gray-500 capitalize">
                        {account.type}
                    </p>
                </div>
            </div>

            <div className="text-right">
                <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(account.balance)}
                </p>

                <div className="mt-2">
                    <Badge
                        variant={
                            account.is_active
                                ? "success"
                                : "danger"
                        }
                    >
                        {account.is_active ? "Active" : "Inactive"}
                    </Badge>
                </div>
            </div>
        </Card>
    );
}
