import SavingRow from "./SavingRow";

export default function SavingTable({
    savings = [],
    onEdit,
    onDelete,
    onDeposit,
}) {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left">Saving</th>

                        <th className="px-6 py-4 text-left">Account</th>

                        <th className="px-6 py-4 text-center">Progress</th>

                        <th className="px-6 py-4 text-center">Deadline</th>

                        <th className="px-6 py-4 text-center">Status</th>

                        <th className="px-6 py-4 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {savings.length ? (
                        savings.map((saving) => (
                            <SavingRow
                                key={saving.id}
                                saving={saving}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onDeposit={onDeposit}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={6}
                                className="py-12 text-center text-gray-500"
                            >
                                No Saving Goals Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
