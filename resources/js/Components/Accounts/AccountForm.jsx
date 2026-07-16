import { useForm } from "@inertiajs/react";

import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";

export default function AccountForm({
    account = null,
    accountTypes = [],
    submitLabel,
    onSubmit,
}) {
    const { data, setData, processing, errors } = useForm({
        account_type_id: account?.account_type_id ?? "",
        name: account?.name ?? "",
        balance: account?.balance ?? "",
        color: account?.color ?? "#10B981",
        icon: account?.icon ?? "",
        is_active: account?.is_active ?? true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Input
                label="Account Name"
                placeholder="Example: BCA Savings"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                error={errors.name}
            />
            <Select
                label="Account Type"
                value={data.account_type_id}
                onChange={(e) => setData("account_type_id", e.target.value)}
                options={accountTypes.map((type) => ({
                    label: type.name,
                    value: type.id,
                }))}
            />

            <Input
                type="number"
                label="Initial Balance"
                placeholder="0"
                value={data.balance}
                onChange={(e) => setData("balance", e.target.value)}
                error={errors.balance}
            />

            

            <Input
                type="color"
                label="Color"
                value={data.color}
                onChange={(e) => setData("color", e.target.value)}
                error={errors.color}
            />

            <Select
                label="Status"
                value={data.is_active ? "1" : "0"}
                onChange={(e) => setData("is_active", e.target.value === "1")}
                options={[
                    { label: "Active", value: "1" },
                    { label: "Inactive", value: "0" },
                ]}
            />

            <div className="flex justify-end">
                <Button type="submit" disabled={processing}>
                    {processing ? "Saving..." : submitLabel}
                </Button>
            </div>
        </form>
    );
}
