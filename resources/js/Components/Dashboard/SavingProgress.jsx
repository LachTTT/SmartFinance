export default function SavingProgress({ savings = [] }) {
    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-bold">
                    Saving Goals
                </h2>

                <p className="text-sm text-gray-500">
                    Track your saving progress
                </p>
            </div>

            <div className="space-y-6">
                {savings.length ? (
                    savings.map((saving) => (
                        <div key={saving.id}>
                            <div className="mb-2 flex justify-between">
                                <span className="font-medium">
                                    {saving.title}
                                </span>

                                <span className="text-sm text-gray-500">
                                    Rp{" "}
                                    {Number(
                                        saving.current
                                    ).toLocaleString("id-ID")}
                                    {" / "}
                                    Rp{" "}
                                    {Number(
                                        saving.target
                                    ).toLocaleString("id-ID")}
                                </span>
                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className="h-full rounded-full bg-blue-500"
                                    style={{
                                        width: `${Math.min(
                                            saving.percentage,
                                            100
                                        )}%`,
                                    }}
                                />
                            </div>

                            <div className="mt-1 text-right text-xs text-gray-500">
                                {saving.percentage}%
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No saving goals.
                    </p>
                )}
            </div>
        </div>
    );
}
