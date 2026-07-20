import BudgetRow from "./BudgetRow";

export default function BudgetTable({ budgets, onEdit, onDelete }) {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Category</th>

                        <th className="px-6 py-4 text-left">Budget</th>

                        <th className="px-6 py-4 text-center">Month</th>

                        <th className="px-6 py-4 text-center">Year</th>

                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {budgets.length ? (
                        budgets.map((budget) => (
                            <BudgetRow
                                key={budget.id}
                                budget={budget}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={5}
                                className="py-10 text-center text-gray-500"
                            >
                                No Budget Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
