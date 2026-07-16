import { Head, Link, useForm } from "@inertiajs/react";

import GuestLayout from "@/Layouts/GuestLayout";

import Card from "@/Components/UI/Card";
import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login" />

            <div>
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Welcome Back
                    </h2>

                    <p className="mt-2 text-gray-500">Sign in to continue</p>
                </div>

                {status && (
                    <div className="mb-4 rounded-xl bg-green-100 px-4 py-3 text-sm text-green-700">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-5">
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

                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        Remember me
                    </label>

                    <Button
                        type="submit"
                        disabled={processing}
                        className="w-full"
                    >
                        {processing ? "Signing In..." : "Login"}
                    </Button>
                </form>

                <div className="mt-6 flex justify-between text-sm">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-emerald-600 hover:text-emerald-700"
                        >
                            Forgot Password?
                        </Link>
                    )}

                    <Link
                        href={route("register")}
                        className="font-medium text-emerald-600 hover:text-emerald-700"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
