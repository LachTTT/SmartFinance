import { useForm } from "@inertiajs/react";

import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";

export default function SavingForm({
    saving = null,
    accounts = [],
    submitRoute,
    method = "post",
}) {
    const { data, setData, post, put, processing, errors } = useForm({
        account_id: saving?.account_id ?? "",
        title: saving?.title ?? "",
        target_amount: saving?.target_amount ?? "",
        deadline: saving?.deadline ? saving.deadline.split("T")[0] : "",
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
                    label="Saving Name"
                    required
                    placeholder="Vacation to Japan"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    error={errors.title}
                />

                <Select
                    label="Account"
                    value={data.account_id}
                    onChange={(e) => setData("account_id", e.target.value)}
                    options={accounts.map((account) => ({
                        value: account.id,
                        label: account.name,
                    }))}
                />

                <Input
                    label="Target Amount"
                    required
                    type="number"
                    placeholder="10000000"
                    value={data.target_amount}
                    onChange={(e) => setData("target_amount", e.target.value)}
                    error={errors.target_amount}
                />

                <Input
                    label="Deadline"
                    type="date"
                    value={data.deadline}
                    onChange={(e) => setData("deadline", e.target.value)}
                    error={errors.deadline}
                />

                <div className="flex justify-end">
                    <Button type="submit" disabled={processing}>
                        Save Saving
                    </Button>
                </div>
            </form>
        </Card>
    );
}
