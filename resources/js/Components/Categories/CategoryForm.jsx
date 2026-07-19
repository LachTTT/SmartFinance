import { useForm } from "@inertiajs/react";
import {
    Wallet,
    Landmark,
    CreditCard,
    Banknote,
    ShoppingCart,
    Utensils,
    Car,
    Home,
    HeartPulse,
    GraduationCap,
    Gift,
    Plane,
    PiggyBank,
    Briefcase,
} from "lucide-react";

const icons = [
    { value: "Wallet", icon: Wallet },
    { value: "Landmark", icon: Landmark },
    { value: "CreditCard", icon: CreditCard },
    { value: "Banknote", icon: Banknote },
    { value: "ShoppingCart", icon: ShoppingCart },
    { value: "Utensils", icon: Utensils },
    { value: "Car", icon: Car },
    { value: "Home", icon: Home },
    { value: "HeartPulse", icon: HeartPulse },
    { value: "GraduationCap", icon: GraduationCap },
    { value: "Gift", icon: Gift },
    { value: "Plane", icon: Plane },
    { value: "PiggyBank", icon: PiggyBank },
    { value: "Briefcase", icon: Briefcase },
];

import Input from "@/Components/UI/Input";
import Select from "@/Components/UI/Select";
import Button from "@/Components/UI/Button";

export default function CategoryForm({
    category = null,
    submitLabel,
    onSubmit,
}) {
    const { data, setData, processing, errors } = useForm({
        name: category?.name ?? "",

        type: category?.type ?? "expense",

        icon: category?.icon ?? "",

        color: category?.color ?? "#10B981",
    });

    const submit = (e) => {
        e.preventDefault();

        onSubmit(data);
    };
    const IconPreview =
        icons.find((i) => i.value === data.icon)?.icon || Wallet;

    return (
        <form onSubmit={submit} className="space-y-5">
            <Input
                label="Category Name"
                value={data.name}
                error={errors.name}
                onChange={(e) => setData("name", e.target.value)}
            />

            <Select
                label="Type"
                value={data.type}
                onChange={(e) => setData("type", e.target.value)}
                options={[
                    {
                        label: "Expense",
                        value: "expense",
                    },
                    {
                        label: "Income",
                        value: "income",
                    },
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
