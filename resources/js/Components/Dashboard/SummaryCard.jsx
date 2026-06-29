import clsx from "clsx";

export default function SummaryCard({
    title,
    value,
    icon: Icon,
    color = "emerald",
    description,
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
        red: {
            bg: "bg-red-100",
            text: "text-red-600",
        },
        amber: {
            bg: "bg-amber-100",
            text: "text-amber-600",
        },
        purple: {
            bg: "bg-purple-100",
            text: "text-purple-600",
        },
    };

    const selected = colors[color] ?? colors.emerald;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900">
                        {value}
                    </h2>

                    {description && (
                        <p className="mt-2 text-sm text-gray-500">
                            {description}
                        </p>
                    )}
                </div>

                {Icon && (
                    <div
                        className={clsx(
                            "flex h-14 w-14 items-center justify-center rounded-2xl",
                            selected.bg,
                        )}
                    >
                        <Icon size={28} className={selected.text} />
                    </div>
                )}
            </div>
        </div>
    );
}
