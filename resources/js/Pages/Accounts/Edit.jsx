import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import AccountForm from "@/Components/Accounts/AccountForm";

export default function Edit({ account, accountTypes }) {
    const submit = (data) => {
        router.put(route("accounts.update", account.id), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Account" />

            <Card>
                <AccountForm
                    account={account}
                    accountTypes={accountTypes}
                    submitLabel="Update Account"
                    onSubmit={submit}
                />
            </Card>
        </AuthenticatedLayout>
    );
}
