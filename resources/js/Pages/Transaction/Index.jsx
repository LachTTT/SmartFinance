import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";

import TransactionTable from "@/Components/Transactions/TransactionTable";
import DeleteModal from "@/Components/Transactions/DeleteModal";

export default function Index({ transactions }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleEdit = (transaction) => {
        router.get(route("transactions.edit", transaction.id));
    };

    const handleDelete = (transaction) => {
        setSelected(transaction);
        setOpenDelete(true);
    };

    const confirmDelete = () => {
        router.delete(route("transactions.destroy", selected.id), {
            onSuccess: () => {
                setOpenDelete(false);
                setSelected(null);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Transactions" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Transactions
                        </h1>

                        <p className="mt-1 text-gray-500">
                            Manage your income and expense transactions.
                        </p>
                    </div>

                    <Link href={route("transactions.create")}>
                        <Button>Add Transaction</Button>
                    </Link>
                </div>

                <Card>
                    <TransactionTable
                        transactions={transactions}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                </Card>

                <DeleteModal
                    open={openDelete}
                    onClose={() => {
                        setOpenDelete(false);
                        setSelected(null);
                    }}
                    onConfirm={confirmDelete}
                />
            </div>
        </AuthenticatedLayout>
    );
}
