import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import BudgetForm from "@/Components/Budgets/BudgetForm";

export default function Create({ categories }) {
    const submit = (data) => {
        router.post(route("budgets.store"), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Budget" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Create Budget
                    </h1>

                    <p className="text-gray-500">
                        Set a monthly budget for a category.
                    </p>
                </div>

                <Card>
                    <BudgetForm
                        categories={categories}
                        submitLabel="Create Budget"
                        onSubmit={submit}
                    />
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
