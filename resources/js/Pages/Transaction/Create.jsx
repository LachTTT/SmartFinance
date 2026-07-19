import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/UI/Card";
import TransactionForm from "@/Components/Transactions/TransactionForm";

export default function Create({
    accounts,
    categories,
}) {
    const submit = (data) => {
        router.post(route("transactions.store"), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Transaction" />

            <Card>
                <TransactionForm
                    accounts={accounts}
                    categories={categories}
                    submitLabel="Create Transaction"
                    onSubmit={submit}
                />
            </Card>
        </AuthenticatedLayout>
    );
}
