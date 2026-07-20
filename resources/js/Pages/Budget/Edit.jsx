import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import BudgetForm from "@/Components/Budgets/BudgetForm";

export default function Edit({
    budget,
    categories,
}) {
    const submit = (data) => {
        router.put(
            route("budgets.update", budget.id),
            data
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Budget" />

            <div className="space-y-6">

                <div>
                    <h1 className="text-3xl font-bold">
                        Edit Budget
                    </h1>

                    <p className="text-gray-500">
                        Update your monthly budget.
                    </p>
                </div>

                <Card>
                    <BudgetForm
                        budget={budget}
                        categories={categories}
                        submitLabel="Update Budget"
                        onSubmit={submit}
                    />
                </Card>

            </div>
        </AuthenticatedLayout>
    );
}