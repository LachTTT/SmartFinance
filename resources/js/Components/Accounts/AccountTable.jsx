import AccountRow from "./AccountRow";

export default function AccountTable({ accounts, onEdit, onDelete }) {
    return (
        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="w-full text-balance">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4">Icon</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Type</th>
                        <th className="px-6 py-4">Balance</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {accounts.length > 0 ? (
                        accounts.map((account) => (
                            <AccountRow
                                key={account.id}
                                account={account}
                                onEdit={onEdit}
                                onDelete={onDelete}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={6}
                                className="py-10 text-center text-gray-500"
                            >
                                No accounts found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
