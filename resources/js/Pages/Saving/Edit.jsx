import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import SavingForm from "@/Components/Savings/SavingForm";

export default function Edit({ saving, accounts }) {
    return (
        <AuthenticatedLayout>
            <Head title="Edit Saving" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Edit Saving</h1>

                    <p className="text-gray-500">Update your saving goal.</p>
                </div>

                <SavingForm
                    saving={saving}
                    accounts={accounts}
                    submitRoute={route("savings.update", saving.id)}
                    method="put"
                />
            </div>
        </AuthenticatedLayout>
    );
}
