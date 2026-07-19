import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import TransferForm from "@/Components/Transfers/TransferForm";

export default function Create({ accounts }) {
    const submit = (data) => {
        router.post(route("transfers.store"), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="New Transfer" />

            <Card>
                <TransferForm
                    accounts={accounts}
                    submitLabel="Transfer"
                    onSubmit={submit}
                />
            </Card>
        </AuthenticatedLayout>
    );
}
