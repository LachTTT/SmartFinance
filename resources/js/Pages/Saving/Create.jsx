import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import SavingForm from "@/Components/Savings/SavingForm";

export default function Create({ accounts }) {
    return (
        <AuthenticatedLayout>

            <Head title="Create Saving" />

            <div className="space-y-6">

                <div>

                    <h1 className="text-3xl font-bold">
                        Create Saving
                    </h1>

                    <p className="text-gray-500">
                        Create your saving goal.
                    </p>

                </div>

                <SavingForm
                    accounts={accounts}
                    submitRoute={route("savings.store")}
                    method="post"
                />

            </div>

        </AuthenticatedLayout>
    );
}
