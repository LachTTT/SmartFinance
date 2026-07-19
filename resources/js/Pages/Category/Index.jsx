import { Head, Link, router } from "@inertiajs/react";
import { useState } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Button from "@/Components/UI/Button";
import Card from "@/Components/UI/Card";

import CategoryTable from "@/Components/Categories/CategoryTable";
import DeleteModal from "@/Components/Categories/DeleteModal";

export default function Index({ categories }) {
    const [openDelete, setOpenDelete] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleEdit = (category) => {
        router.get(route("categories.edit", category.id));
    };

    const handleDelete = (category) => {
        setSelected(category);
        setOpenDelete(true);
    };

    const confirmDelete = () => {
        router.delete(route("categories.destroy", selected.id), {
            onSuccess: () => {
                setOpenDelete(false);
                setSelected(null);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <Head title="Categories" />

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">Categories</h1>

                        <p className="text-gray-500">
                            Manage income & expense categories.
                        </p>
                    </div>

                    <Link href={route("categories.create")}>
                        <Button>Add Category</Button>
                    </Link>
                </div>

                <Card>
                    <CategoryTable
                        categories={categories}
                        onEdit={handleEdit}
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
