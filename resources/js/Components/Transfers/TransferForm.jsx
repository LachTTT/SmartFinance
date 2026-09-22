import { useForm } from "@inertiajs/react";

import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";
import Button from "@/Components/UI/Button";

export default function TransferForm({ accounts = [], submitLabel, onSubmit }) {
    const { data, setData, processing, errors } = useForm({
        from_account_id: "",
        to_account_id: "",
        amount: "",
        admin_fee: "",
        note: "",
        transfer_date: new Date().toISOString().split("T")[0],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    const accountOptions = accounts.map((account) => ({
        label: `${account.name} (Rp ${Number(account.balance).toLocaleString(
            "id-ID",
        )})`,
        value: account.id,
    }));

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Select
                label="From Account"
                value={data.from_account_id}
                onChange={(e) => setData("from_account_id", e.target.value)}
                options={accountOptions}
                error={errors.from_account_id}
            />

            <Select
                label="To Account"
                value={data.to_account_id}
                onChange={(e) => setData("to_account_id", e.target.value)}
                options={accountOptions}
                error={errors.to_account_id}
            />

            <Input
                label="Amount"
                type="number"
                value={data.amount}
                onChange={(e) => setData("amount", e.target.value)}
                error={errors.amount}
            />

            <Input
                label="Admin Fee"
                type="number"
                value={data.admin_fee}
                onChange={(e) => setData("admin_fee", e.target.value)}
                error={errors.admin_fee}
            />

            <Input
                label="Transfer Date"
                type="date"
                value={data.transfer_date}
                onChange={(e) => setData("transfer_date", e.target.value)}
                error={errors.transfer_date}
            />

            <Input
                label="Note"
                value={data.note}
                onChange={(e) => setData("note", e.target.value)}
                error={errors.note}
            />

            <div className="flex justify-end">
                <Button type="submit" disabled={processing}>
                    {processing ? "Processing..." : submitLabel}
                </Button>
            </div>
        </form>
    );
}
