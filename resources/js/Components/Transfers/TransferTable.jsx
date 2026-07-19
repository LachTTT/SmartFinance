import TransferRow from "./TransferRow";

export default function TransferTable({ transfers }) {
    return (
        <div className="overflow-hidden rounded-2xl border">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-4 text-left">From</th>
                        <th className="px-6 py-4 text-left">To</th>
                        <th className="px-6 py-4 text-left">Amount</th>
                        <th className="px-6 py-4 text-left">Date</th>
                        <th className="px-6 py-4 text-left">Note</th>
                    </tr>
                </thead>

                <tbody>
                    {transfers.length ? (
                        transfers.map((transfer) => (
                            <TransferRow
                                key={transfer.id}
                                transfer={transfer}
                            />
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan={5}
                                className="py-10 text-center"
                            >
                                No Transfer Data
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
