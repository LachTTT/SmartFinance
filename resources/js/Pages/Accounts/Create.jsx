import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import AccountForm from "@/Components/Accounts/AccountForm";

export default function Create({ accountTypes }) {
    console.log(accountTypes);
    const submit = (data) => {
        router.post(route("accounts.store"), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Account" />

            <Card>
                <AccountForm
                    accountTypes={accountTypes}
                    submitLabel="Create Account"
                    onSubmit={submit}
                />
            </Card>
        </AuthenticatedLayout>
    );
}
