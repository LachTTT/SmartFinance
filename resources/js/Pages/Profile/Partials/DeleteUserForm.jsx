import { useState } from "react";
import { useForm } from "@inertiajs/react";

import Input from "@/Components/UI/Input";
import Button from "@/Components/UI/Button";
import Modal from "@/Components/UI/Modal";

export default function DeleteUserForm() {
    const [open, setOpen] = useState(false);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    };

    return (
        <>
            <h2 className="text-xl font-bold text-red-600">Delete Account</h2>

            <p className="text-gray-500 mb-6">This action cannot be undone.</p>

            <Button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-red-600 hover:bg-red-700"
            >
                Delete Account
            </Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <form onSubmit={submit} className="space-y-5">
                    <h3 className="text-xl font-bold">Delete Account</h3>

                    <p className="text-gray-500">
                        Enter your password to confirm.
                    </p>

                    <Input
                        type="password"
                        label="Password"
                        value={data.password}
                        error={errors.password}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <div className="flex justify-end gap-3">
                        <Button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="bg-gray-300 text-gray-700 hover:bg-gray-400"
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            disabled={processing}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Delete
                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
