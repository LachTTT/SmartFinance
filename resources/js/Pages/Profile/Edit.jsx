import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import Card from "@/Components/UI/Card";

import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import DeleteUserForm from "./Partials/DeleteUserForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout>
            <Head title="Profile" />

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        Profile
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage your account settings.
                    </p>
                </div>

                <Card>
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </Card>

                <Card>
                    <UpdatePasswordForm />
                </Card>

                <Card>
                    <DeleteUserForm />
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
