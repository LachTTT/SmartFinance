import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/UI/Card";

import CategoryForm from "@/Components/Categories/CategoryForm";

export default function Edit({ category }) {

    const submit = (data) => {
        router.put(route("categories.update", category.id), data);
    };

    return (
        <AuthenticatedLayout>

            <Head title="Edit Category"/>

            <Card>

                <CategoryForm
                    category={category}
                    submitLabel="Update Category"
                    onSubmit={submit}
                />

            </Card>

        </AuthenticatedLayout>
    );
}
