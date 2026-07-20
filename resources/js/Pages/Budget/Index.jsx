import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";

import BudgetTable from "@/Components/Budgets/BudgetTable";
import DeleteModal from "@/Components/Budgets/DeleteModal";

export default function Index({ budgets }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleEdit = (budget) => {
        router.get(route("budgets.edit", budget.id));
    };

    const handleDelete = (budget) => {
        setSelected(budget);
        setOpenDelete(true);
    };

    const confirmDelete = () => {
        router.delete(route("budgets.destroy", selected.id), {
            onSuccess: () => {
                setOpenDelete(false);
                setSelected(null);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Budgets" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Budgets</h1>

                        <p className="text-gray-500">
                            Manage your monthly budgets.
                        </p>
                    </div>

                    <Link href={route("budgets.create")}>
                        <Button>Add Budget</Button>
                    </Link>
                </div>

                <Card>
                    <BudgetTable
                        budgets={budgets}
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
