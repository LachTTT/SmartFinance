import { useEffect } from "react";
import { useForm } from "@inertiajs/react";

import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";

export default function DepositModal({ open, saving, onClose }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        saving_id: "",
        account_id: "",
        amount: "",
        transaction_date: new Date().toISOString().split("T")[0],
        note: "",
    });

    useEffect(() => {
        if (saving) {
            setData({
                saving_id: saving.id,
                account_id: saving.account_id,
                amount: "",
                transaction_date: new Date().toISOString().split("T")[0],
                note: "",
            });
        }
    }, [saving]);

    const submit = (e) => {
        e.preventDefault();

        post(route("savings.deposit"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onClose();
            },
        });
    };

    return (
        <Modal open={open} onClose={onClose}>
            <form onSubmit={submit} className="space-y-6 p-6">
                <div>
                    <h2 className="text-2xl font-bold">Deposit Saving</h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {saving?.title}
                    </p>
                </div>

                <Input
                    label="Amount"
                    required
                    type="number"
                    placeholder="100000"
                    value={data.amount}
                    onChange={(e) => setData("amount", e.target.value)}
                    error={errors.amount}
                />

                <Input
                    label="Transaction Date"
                    required
                    type="date"
                    value={data.transaction_date}
                    onChange={(e) =>
                        setData("transaction_date", e.target.value)
                    }
                    error={errors.transaction_date}
                />

                <Input
                    label="Note"
                    placeholder="Optional note..."
                    value={data.note}
                    onChange={(e) => setData("note", e.target.value)}
                    error={errors.note}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <Button type="button" variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button type="submit" disabled={processing}>
                        Deposit
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
