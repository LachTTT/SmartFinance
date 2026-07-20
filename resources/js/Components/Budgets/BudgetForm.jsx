import { useForm } from "@inertiajs/react";

import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";
import Button from "@/Components/UI/Button";

const months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "September", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
];

export default function BudgetForm({
    budget = null,
    categories = [],
    submitLabel,
    onSubmit,
}) {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;

    const { data, setData, processing, errors } = useForm({
        category_id: budget?.category_id ?? "",
        amount: budget?.amount ?? "",
        month: budget?.month ?? currentMonth,
        year: budget?.year ?? currentYear,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <Select
                label="Category"
                value={data.category_id}
                onChange={(e) =>
                    setData("category_id", e.target.value)
                }
                error={errors.category_id}
                options={categories.map((category) => ({
                    label: category.name,
                    value: category.id,
                }))}
            />

            <Input
                label="Budget Amount"
                type="number"
                placeholder="1000000"
                value={data.amount}
                onChange={(e) =>
                    setData("amount", e.target.value)
                }
                error={errors.amount}
            />

            <div className="grid grid-cols-2 gap-4">

                <Select
                    label="Month"
                    value={data.month}
                    onChange={(e) =>
                        setData("month", e.target.value)
                    }
                    error={errors.month}
                    options={months}
                />

                <Input
                    label="Year"
                    type="number"
                    value={data.year}
                    onChange={(e) =>
                        setData("year", e.target.value)
                    }
                    error={errors.year}
                />

            </div>

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
