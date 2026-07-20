export default function BudgetProgress({ budgets = [] }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold">
                    Budget Progress
                </h2>

                <p className="text-sm text-gray-500">
                    Monthly budget usage
                </p>
            </div>

            <div className="space-y-6">
                {budgets.length ? (
                    budgets.map((budget) => (
                        <div key={budget.id}>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="font-medium">
                                    {budget.category}
                                </span>

                                <span className="text-sm text-gray-500">
                                    Rp{" "}
                                    {Number(
                                        budget.spent
                                    ).toLocaleString("id-ID")}
                                    {" / "}
                                    Rp{" "}
                                    {Number(
                                        budget.budget
                                    ).toLocaleString("id-ID")}
                                </span>
                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className="h-full rounded-full bg-emerald-500 transition-all"
                                    style={{
                                        width: `${Math.min(
                                            budget.percentage,
                                            100
                                        )}%`,
                                    }}
                                />
                            </div>

                            <div className="mt-1 flex justify-between text-xs text-gray-500">
                                <span>
                                    Remaining Rp{" "}
                                    {Number(
                                        budget.remaining
                                    ).toLocaleString("id-ID")}
                                </span>

                                <span>
                                    {budget.percentage}%
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No budget found.
                    </p>
                )}
            </div>
        </div>
    );
}
