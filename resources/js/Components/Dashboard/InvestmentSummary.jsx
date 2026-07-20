import clsx from "clsx";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function InvestmentSummary({ investments = [] }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold">Investments</h2>

                <p className="text-sm text-gray-500">
                    Current investment performance
                </p>
            </div>

            <div className="space-y-4">
                {investments.length ? (
                    investments.map((investment) => (
                        <div
                            key={investment.id}
                            className="flex items-center justify-between rounded-xl border p-4"
                        >
                            <div>
                                <h3 className="font-semibold">
                                    {investment.name}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    {investment.type}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold">
                                    Rp{" "}
                                    {Number(investment.current).toLocaleString(
                                        "id-ID",
                                    )}
                                </p>

                                <div
                                    className={clsx(
                                        "mt-1 flex items-center justify-end gap-1 text-sm font-medium",
                                        investment.profit >= 0
                                            ? "text-emerald-600"
                                            : "text-red-600",
                                    )}
                                >
                                    {investment.profit >= 0 ? (
                                        <TrendingUp size={16} />
                                    ) : (
                                        <TrendingDown size={16} />
                                    )}
                                    {investment.percentage}%
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No investments found.
                    </p>
                )}
            </div>
        </div>
    );
}
