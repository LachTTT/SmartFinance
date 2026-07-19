import { useForm } from "@inertiajs/react";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";
import Textarea from "@/Components/UI/Textarea";

export default function TransactionForm({
    transaction = null,
    accounts = [],
    categories = [],
    submitLabel,
    onSubmit,
}) {
    const { data, setData, processing, errors } = useForm({
        account_id: transaction?.account_id ?? "",
        category_id: transaction?.category_id ?? "",
        title: transaction?.title ?? "",
        description: transaction?.description ?? "",
        amount: transaction?.amount ?? "",
        type: transaction?.type ?? "expense",
        transaction_date:
            transaction?.transaction_date ??
            new Date().toISOString().slice(0, 10),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <Input
                label="Title"
                value={data.title}
                onChange={(e) =>
                    setData("title", e.target.value)
                }
                error={errors.title}
            />

            <Select
                label="Type"
                value={data.type}
                onChange={(e) =>
                    setData("type", e.target.value)
                }
                options={[
                    {
                        label: "Income",
                        value: "income",
                    },
                    {
                        label: "Expense",
                        value: "expense",
                    },
                ]}
            />

            <Select
                label="Account"
                value={data.account_id}
                onChange={(e) =>
                    setData("account_id", e.target.value)
                }
                options={accounts.map((a) => ({
                    label: a.name,
                    value: a.id,
                }))}
            />

            <Select
                label="Category"
                value={data.category_id}
                onChange={(e) =>
                    setData("category_id", e.target.value)
                }
                options={categories
                    .filter(
                        (c) => c.type === data.type
                    )
                    .map((c) => ({
                        label: c.name,
                        value: c.id,
                    }))}
            />

            <Input
                type="number"
                label="Amount"
                value={data.amount}
                onChange={(e) =>
                    setData("amount", e.target.value)
                }
                error={errors.amount}
            />

            <Input
                type="date"
                label="Transaction Date"
                value={data.transaction_date}
                onChange={(e) =>
                    setData(
                        "transaction_date",
                        e.target.value
                    )
                }
            />

            <Textarea
                label="Description"
                value={data.description}
                onChange={(e) =>
                    setData(
                        "description",
                        e.target.value
                    )
                }
            />

            <div className="flex justify-end">
                <Button
                    type="submit"
                    disabled={processing}
                >
                    {processing
                        ? "Saving..."
                        : submitLabel}
                </Button>
            </div>
        </form>
    );
}
