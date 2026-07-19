import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/UI/Card";
import TransactionForm from "@/Components/Transactions/TransactionForm";

export default function Edit({
    transaction,
    accounts,
    categories,
}) {
    const submit = (data) => {
        router.put(
            route("transactions.update", transaction.id),
            data
        );
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Transaction" />

            <Card>
                <TransactionForm
                    transaction={transaction}
                    accounts={accounts}
                    categories={categories}
                    submitLabel="Update Transaction"
                    onSubmit={submit}
                />
            </Card>
        </AuthenticatedLayout>
    );
}
