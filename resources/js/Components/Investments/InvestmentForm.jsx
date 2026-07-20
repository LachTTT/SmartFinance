import { useForm } from "@inertiajs/react";

import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";

export default function InvestmentForm({
    investment = null,
    accounts = [],
    types = [],
    submitRoute,
    method = "post",
}) {
    const { data, setData, post, put, processing, errors } = useForm({
        account_id: investment?.account_id?.toString() ?? "",
        investment_type_id: investment?.investment_type_id?.toString() ?? "",
        name: investment?.name ?? "",
        initial_amount: investment?.initial_amount ?? "",
        current_value: investment?.current_value ?? "",
        buy_date: investment?.buy_date ? investment.buy_date.split("T")[0] : "",
        note: investment?.note ?? "",
    });

    const submit = (e) => {
        e.preventDefault();

        if (method === "post") {
            post(submitRoute);
        } else {
            put(submitRoute);
        }
    };

    return (
        <Card>
            <form onSubmit={submit} className="space-y-6">
                <Input
                    label="Investment Name"
                    required
                    placeholder="Bitcoin"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    error={errors.name}
                />

                <Select
                    label="Account"
                    required
                    value={data.account_id}
                    onChange={(e) => setData("account_id", e.target.value)}
                    error={errors.account_id}
                    options={accounts.map((account) => ({
                        value: account.id,
                        label: account.name,
                    }))}
                />

                <Select
                    label="Investment Type"
                    required
                    value={data.investment_type_id}
                    onChange={(e) =>
                        setData("investment_type_id", e.target.value)
                    }
                    error={errors.investment_type_id}
                    options={types.map((type) => ({
                        value: type.id,
                        label: type.name,
                    }))}
                />

                <Input
                    label="Initial Amount"
                    required
                    type="number"
                    placeholder="1000000"
                    value={data.initial_amount}
                    onChange={(e) => setData("initial_amount", e.target.value)}
                    error={errors.initial_amount}
                />

                <Input
                    label="Current Value"
                    required
                    type="number"
                    placeholder="1200000"
                    value={data.current_value}
                    onChange={(e) => setData("current_value", e.target.value)}
                    error={errors.current_value}
                />

                <Input
                    label="Buy Date"
                    required
                    type="date"
                    value={data.buy_date}
                    onChange={(e) => setData("buy_date", e.target.value)}
                    error={errors.buy_date}
                />

                <Input
                    label="Note"
                    placeholder="Optional..."
                    value={data.note}
                    onChange={(e) => setData("note", e.target.value)}
                    error={errors.note}
                />

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Save Investment
                    </Button>
                </div>
            </form>
        </Card>
    );
}
