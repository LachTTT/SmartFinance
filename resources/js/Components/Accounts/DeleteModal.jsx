import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";

export default function DeleteModal({
    open,
    onClose,
    onConfirm,
    title = "Delete Account",
    message = "Are you sure you want to delete this account? This action cannot be undone.",
    processing = false,
}) {
    return (
        <Modal show={open} onClose={onClose}>
            <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">
                    {title}
                </h2>

                <p className="mt-3 text-gray-600">
                    {message}
                </p>

                <div className="mt-6 flex justify-end gap-3">
                    <SecondaryButton onClick={onClose}>
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        onClick={onConfirm}
                        disabled={processing}
                    >
                        Delete
                    </DangerButton>
                </div>
            </div>
        </Modal>
    );
}
