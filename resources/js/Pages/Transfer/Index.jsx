import { Head, Link } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";

import TransferTable from "@/Components/Transfers/TransferTable";

export default function Index({ transfers }) {
    return (
        <AuthenticatedLayout>
            <Head title="Transfers" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Transfers
                        </h1>

                        <p className="text-gray-500">
                            Transfer balance between your accounts.
                        </p>
                    </div>

                    <Link href={route("transfers.create")}>
                        <Button>New Transfer</Button>
                    </Link>
                </div>

                <Card>
                    <TransferTable transfers={transfers} />
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
