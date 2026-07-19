import { ArrowRightLeft } from "lucide-react";

export default function TransferRow({ transfer }) {
    return (
        <tr className="border-b hover:bg-gray-50">
            <td className="px-6 py-4">{transfer.from_account?.name}</td>

            <td className="px-6 py-4">{transfer.to_account?.name}</td>

            <td className="px-6 py-4 font-semibold">
                Rp {Number(transfer.amount).toLocaleString("id-ID")}
            </td>

            <td className="px-6 py-4">{transfer.transfer_date}</td>

            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    <ArrowRightLeft size={16} className="text-blue-500" />
                    {transfer.note || "-"}
                </div>
            </td>
        </tr>
    );
}
