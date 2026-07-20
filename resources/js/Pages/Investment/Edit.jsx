import { Head } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import InvestmentForm from "@/Components/Investments/InvestmentForm";

export default function Edit({
    investment,
    accounts,
    types,
}) {
    return (
        <AuthenticatedLayout>
            <Head title="Edit Investment" />

            <div className="space-y-6">

                <div>
                    <h1 className="text-3xl font-bold">
                        Edit Investment
                    </h1>

                    <p className="text-gray-500">
                        Update your investment.
                    </p>
                </div>

                <InvestmentForm
                    investment={investment}
                    accounts={accounts}
                    types={types}
                    submitRoute={route(
                        "investments.update",
                        investment.id
                    )}
                    method="put"
                />

            </div>
        </AuthenticatedLayout>
    );
}
