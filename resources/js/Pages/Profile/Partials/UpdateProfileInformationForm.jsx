import { useForm, usePage } from "@inertiajs/react";

import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";

export default function UpdateProfileInformationForm() {
    const user = usePage().props.auth.user;

    const {
        data,
        setData,
        patch,
        processing,
        errors,
    } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <>
            <h2 className="text-xl font-bold">
                Profile Information
            </h2>

            <p className="text-gray-500 mb-6">
                Update your profile.
            </p>

            <form
                onSubmit={submit}
                className="space-y-5"
            >
                <Input
                    label="Name"
                    value={data.name}
                    error={errors.name}
                    onChange={(e) =>
                        setData("name", e.target.value)
                    }
                />

                <Input
                    label="Email"
                    type="email"
                    value={data.email}
                    error={errors.email}
                    onChange={(e) =>
                        setData("email", e.target.value)
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
