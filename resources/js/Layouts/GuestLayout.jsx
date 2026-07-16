import Card from "@/Components/UI/Card";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white">
                        SmartFinance
                    </h1>

                    <p className="mt-2 text-emerald-100">
                        Manage your personal finance smarter
                    </p>
                </div>

                <Card className="rounded-3xl shadow-2xl p-8">{children}</Card>
            </div>
        </div>
    );
}
