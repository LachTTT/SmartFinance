import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";

import Card from "@/Components/UI/Card";
import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div>
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Create Account
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Join SmartFinance today
                    </p>
                </div>

                <form onSubmit={submit} className="space-y-5">
                    <Input
                        label="Full Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        error={errors.name}
                        required
                    />

                    <Input
                        label="Email"
                        type="email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                        required
                    />

                    <Input
                        label="Confirm Password"
                        type="password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        error={errors.password_confirmation}
                        required
                    />

                    <Button
                        type="submit"
                        disabled={processing}
                        className="w-full"
                    >
                        {processing ? "Creating..." : "Register"}
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <Link
                        href={route("login")}
                        className="font-medium text-emerald-600 hover:text-emerald-700"
                    >
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
