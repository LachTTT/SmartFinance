import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";

import SavingTable from "@/Components/Savings/SavingTable";
import DeleteModal from "@/Components/Savings/DeleteModal";
import DepositModal from "@/Components/Savings/DepositModal";

export default function Index({ savings }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [openDeposit, setOpenDeposit] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleEdit = (saving) => {
        router.get(route("savings.edit", saving.id));
    };

    const handleDelete = (saving) => {
        setSelected(saving);
        setOpenDelete(true);
    };

    const handleDeposit = (saving) => {
        setSelected(saving);
        setOpenDeposit(true);
    };

    const confirmDelete = () => {
        router.delete(route("savings.destroy", selected.id), {
            onSuccess: () => {
                setOpenDelete(false);
                setSelected(null);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Savings" />

            <div className="space-y-6">

                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-3xl font-bold">
                            Savings
                        </h1>

                        <p className="text-gray-500">
                            Manage your saving goals.
                        </p>
                    </div>

                    <Link href={route("savings.create")}>
                        <Button>Add Saving</Button>
                    </Link>

                </div>

                <Card>

                    <SavingTable
                        savings={savings}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onDeposit={handleDeposit}
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

                <DepositModal
                    open={openDeposit}
                    saving={selected}
                    onClose={() => {
                        setOpenDeposit(false);
                        setSelected(null);
                    }}
                />

            </div>
        </AuthenticatedLayout>
    );
}
