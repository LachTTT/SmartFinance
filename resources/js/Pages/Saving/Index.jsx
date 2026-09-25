import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";

import SavingTable from "@/Components/Savings/SavingTable";
import DeleteModal from "@/Components/Savings/DeleteModal";
import DepositModal from "@/Components/Savings/DepositModal";
import FinishSavingModal from "@/Components/Savings/FinishSavingModal";

export default function Index({ savings, accounts, expenseCategories }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [openDeposit, setOpenDeposit] = useState(false);
    const [finishSaving, setFinishSaving] = useState(null);
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

    const handleFinish = (saving) => {
        setFinishSaving(saving);
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
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Savings</h1>

                        <p className="text-gray-500">
                            Manage your saving goals.
                        </p>
                    </div>

                    <Link href={route("savings.create")}>
                        <Button>Add Saving</Button>
                    </Link>
                </div>

                {/* Saving Table */}
                <Card>
                    <SavingTable
                        savings={savings}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        onDeposit={handleDeposit}
                        onFinish={handleFinish}
                    />
                </Card>

                {/* Delete Modal */}
                <DeleteModal
                    open={openDelete}
                    onClose={() => {
                        setOpenDelete(false);
                        setSelected(null);
                    }}
                    onConfirm={confirmDelete}
                />

                {/* Deposit Modal */}
                <DepositModal
                    open={openDeposit}
                    saving={selected}
                    onClose={() => {
                        setOpenDeposit(false);
                        setSelected(null);
                    }}
                />

                {/* Finish Saving Modal */}
                <FinishSavingModal
                    open={!!finishSaving}
                    saving={finishSaving}
                    accounts={accounts}
                    categories={expenseCategories}
                    onClose={() => {
                        setFinishSaving(null);
                    }}
                />
            </div>
        </AuthenticatedLayout>
    );
}
