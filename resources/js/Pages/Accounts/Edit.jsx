import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import AccountForm from "@/Components/Accounts/AccountForm";

export default function Edit({ account }) {
    const submit = (data) => {
        router.put(route("accounts.update", account.uuid), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Account" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Edit Account
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Update account information.
                    </p>
                </div>

                <Card>
                    <AccountForm
                        account={account}
                        submitLabel="Update Account"
                        onSubmit={submit}
                    />
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
