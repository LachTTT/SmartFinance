import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";

export default function DeleteModal({
    open,
    onClose,
    onConfirm,
    title = "Delete Account",
    message = "Are you sure you want to delete this account? This action cannot be undone.",
    processing = false,
}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            title={title}
            footer={
                <>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button
                        variant="danger"
                        onClick={onConfirm}
                        disabled={processing}
                    >
                        Delete
                    </Button>
                </>
            }
        >
            <p className="text-gray-600">{message}</p>
        </Modal>
    );
}
