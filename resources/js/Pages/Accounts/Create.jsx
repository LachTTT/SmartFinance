import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import AccountForm from "@/Components/Accounts/AccountForm";

export default function Create() {
    const submit = (data) => {
        router.post(route("accounts.store"), data);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Create Account" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Create Account
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Add a new financial account.
                    </p>
                </div>

                <Card>
                    <AccountForm
                        submitLabel="Create Account"
                        onSubmit={submit}
                    />
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
