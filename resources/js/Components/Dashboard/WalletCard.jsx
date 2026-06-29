import clsx from "clsx";

export default function WalletCard({
    name,
    balance,
    icon: Icon,
    color = "emerald",
    type,
}) {
    const colors = {
        emerald: {
            bg: "bg-emerald-100",
            text: "text-emerald-600",
        },
        blue: {
            bg: "bg-blue-100",
            text: "text-blue-600",
        },
        sky: {
            bg: "bg-sky-100",
            text: "text-sky-600",
        },
        orange: {
            bg: "bg-orange-100",
            text: "text-orange-600",
        },
        purple: {
            bg: "bg-purple-100",
            text: "text-purple-600",
        },
        gray: {
            bg: "bg-gray-100",
            text: "text-gray-600",
        },
    };

    const selected = colors[color] ?? colors.gray;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-500">{type}</p>

                    <h3 className="mt-1 text-lg font-semibold text-gray-900">
                        {name}
                    </h3>
                </div>

                {Icon && (
                    <div
                        className={clsx(
                            "flex h-12 w-12 items-center justify-center rounded-xl",
                            selected.bg,
                        )}
                    >
                        <Icon size={24} className={selected.text} />
                    </div>
                )}
            </div>

            <div className="mt-6">
                <p className="text-sm text-gray-500">Balance</p>

                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                    {balance}
                </h2>
            </div>
        </div>
    );
}
