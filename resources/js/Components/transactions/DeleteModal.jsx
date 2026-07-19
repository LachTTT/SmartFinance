import Modal from "@/Components/UI/Modal";
import Button from "@/Components/UI/Button";

export default function DeleteModal({ open, onClose, onConfirm }) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className="space-y-6 p-6">
                <div>
                    <h2 className="text-xl font-bold text-gray-900">
                        Delete Transaction
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                        Are you sure you want to delete this transaction? This
                        action cannot be undone.
                    </p>
                </div>

                <div className="flex justify-end gap-3">
                    <Button type="button" variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>

                    <Button type="button" variant="danger" onClick={onConfirm}>
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
