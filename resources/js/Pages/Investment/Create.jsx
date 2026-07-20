import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import InvestmentForm from "@/Components/Investments/InvestmentForm";

export default function Create({ accounts, types }) {
    return (
        <AuthenticatedLayout>
            <Head title="Create Investment" />

            <div className="space-y-6">

                <div>
                    <h1 className="text-3xl font-bold">
                        Create Investment
                    </h1>

                    <p className="text-gray-500">
                        Add a new investment.
                    </p>
                </div>

                <InvestmentForm
                    accounts={accounts}
                    types={types}
                    submitRoute={route("investments.store")}
                    method="post"
                />

            </div>
        </AuthenticatedLayout>
    );
}
