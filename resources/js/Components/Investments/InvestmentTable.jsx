import InvestmentRow from "./InvestmentRow";

export default function InvestmentTable({ investments, onEdit, onDelete }) {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Investment</th>

                        <th className="px-6 py-4 text-left">Account</th>

                        <th className="px-6 py-4 text-center">Initial</th>

                        <th className="px-6 py-4 text-center">Current</th>

                        <th className="px-6 py-4 text-center">Profit / Loss</th>

                        <th className="px-6 py-4 text-center">Buy Date</th>

                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {investments.length ? (
                        investments.map((investment) => (
                            <InvestmentRow
                                key={investment.id}
                                investment={investment}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={7}
                                className="py-10 text-center text-gray-500"
                            >
                                No Investment Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
