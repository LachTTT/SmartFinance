import { useForm } from "@inertiajs/react";

import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";

export default function UpdatePasswordForm() {
    const {
        data,
        setData,
        put,
        processing,
        errors,
        reset,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <>
            <h2 className="text-xl font-bold">
                Update Password
            </h2>

            <p className="text-gray-500 mb-6">
                Change your password.
            </p>

            <form
                onSubmit={submit}
                className="space-y-5"
            >
                <Input
                    label="Current Password"
                    type="password"
                    value={data.current_password}
                    error={errors.current_password}
                    onChange={(e) =>
                        setData(
                            "current_password",
                            e.target.value
                        )
                    }
                />

                <Input
                    label="New Password"
                    type="password"
                    value={data.password}
                    error={errors.password}
                    onChange={(e) =>
                        setData("password", e.target.value)
                    }
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    value={data.password_confirmation}
                    error={errors.password_confirmation}
                    onChange={(e) =>
                        setData(
                            "password_confirmation",
                            e.target.value
                        )
                    }
                />

                <Button
                    type="submit"
                    disabled={processing}
                >
                    Save
                </Button>
            </form>
        </>
    );
}
