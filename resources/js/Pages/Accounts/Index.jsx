import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";

import AccountTable from "@/Components/Accounts/AccountTable";
import DeleteModal from "@/Components/Accounts/DeleteModal";

export default function Index({ accounts }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleDelete = (account) => {
        setSelected(account);
        setOpenDelete(true);
    };

    const confirmDelete = () => {
        console.log("Delete:", selected);

        setOpenDelete(false);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Accounts" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Accounts
                        </h1>

                        <p className="mt-1 text-gray-500">
                            Manage your bank accounts and wallets.
                        </p>
                    </div>

                    <Link href={route("accounts.create")}>
                        <Button>Add Account</Button>
                    </Link>
                </div>

                <Card>
                    <AccountTable
                        accounts={accounts}
                        onDelete={handleDelete}
                    />
                </Card>

                <DeleteModal
                    open={openDelete}
                    onClose={() => setOpenDelete(false)}
                    onConfirm={confirmDelete}
                />
            </div>
        </AuthenticatedLayout>
    );
}
