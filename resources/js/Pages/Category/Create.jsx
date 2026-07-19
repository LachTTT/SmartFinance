import { Head, router } from "@inertiajs/react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "@/Components/UI/Card";

import CategoryForm from "@/Components/Categories/CategoryForm";

export default function Create() {

    const submit = (data) => {
        router.post(route("categories.store"), data);
    };

    return (
        <AuthenticatedLayout>

            <Head title="Create Category"/>

            <Card>

                <CategoryForm
                    submitLabel="Create Category"
                    onSubmit={submit}
                />

            </Card>

        </AuthenticatedLayout>
    );
}
