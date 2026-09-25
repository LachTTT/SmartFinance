import { useEffect } from "react";
import { useForm } from "@inertiajs/react";

import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";

export default function FinishSavingModal({
    open,
    saving,
    accounts = [],
    categories = [],
    onClose,
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        saving_id: "",
        account_id: "",
        category_id: "",
        amount: "",
        transaction_date: new Date().toISOString().split("T")[0],
        description: "",
    });

    useEffect(() => {
        if (saving) {
            setData({
                saving_id: saving.id,
                account_id: saving.account_id,
                category_id: "",
                amount: saving.current_amount,
                transaction_date: new Date().toISOString().split("T")[0],
                description: "",
            });
        }
    }, [saving]);

    const submit = (e) => {
        e.preventDefault();

        post(route("savings.finish"), {
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
                    <h2 className="text-2xl font-bold">Finish Saving</h2>

                    <p className="mt-1 text-sm text-gray-500">
                        {saving?.title}
                    </p>
                </div>

                <Input
                    label="Amount"
                    required
                    type="number"
                    value={data.amount}
                    readOnly
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

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Account
                    </label>

                    <select
                        value={data.account_id}
                        onChange={(e) => setData("account_id", e.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                    >
                        <option value="">Select Account</option>

                        {accounts.map((account) => (
                            <option key={account.id} value={account.id}>
                                {account.name}
                            </option>
                        ))}
                    </select>

                    {errors.account_id && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.account_id}
                        </p>
                    )}
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Expense Category
                    </label>

                    <select
                        value={data.category_id}
                        onChange={(e) => setData("category_id", e.target.value)}
                        className="w-full rounded-lg border px-3 py-2"
                    >
                        <option value="">Select Category</option>

                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>

                    {errors.category_id && (
                        <p className="mt-1 text-sm text-red-500">
                            {errors.category_id}
                        </p>
                    )}
                </div>

                <Input
                    label="Description"
                    placeholder="Optional description..."
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                    error={errors.description}
                />

                <div className="flex justify-end gap-3 pt-2">
                    <Button type="button" variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button type="submit" disabled={processing}>
                        Finish Saving
                    </Button>
                </div>
            </form>
        </Modal>
    );
}
