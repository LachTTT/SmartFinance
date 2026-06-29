import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <h1 className="text-3xl font-bold">Dashboard Berhasil</h1>
        </AuthenticatedLayout>
    );
}
