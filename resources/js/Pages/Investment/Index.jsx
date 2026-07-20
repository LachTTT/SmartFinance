import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Card from "@/Components/UI/Card";
import Button from "@/Components/UI/Button";

import InvestmentTable from "@/Components/Investments/InvestmentTable";
import DeleteModal from "@/Components/Investments/DeleteModal";

export default function Index({ investments }) {
    const [selected, setSelected] = useState(null);

    const [openDelete, setOpenDelete] = useState(false);

    const handleEdit = (investment) => {
        router.get(route("investments.edit", investment.id));
    };

    const handleDelete = (investment) => {
        setSelected(investment);
        setOpenDelete(true);
    };

    const confirmDelete = () => {
        router.delete(route("investments.destroy", selected.id), {
            onSuccess: () => {
                setSelected(null);
                setOpenDelete(false);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Investments" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Investments</h1>

                        <p className="text-gray-500">
                            Manage your investments.
                        </p>
                    </div>

                    <Link href={route("investments.create")}>
                        <Button>Add Investment</Button>
                    </Link>
                </div>

                <Card>
                    <InvestmentTable
                        investments={investments}
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
