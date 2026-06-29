import { X } from "lucide-react";
import clsx from "clsx";

export default function Modal({
    open,
    onClose,
    title,
    children,
    footer,
    size = "md",
}) {
    if (!open) return null;

    const sizes = {
        sm: "max-w-md",
        md: "max-w-xl",
        lg: "max-w-3xl",
        xl: "max-w-5xl",
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div
                className={clsx(
                    "w-full rounded-2xl bg-white shadow-xl",
                    sizes[size],
                )}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="rounded-lg p-2 transition hover:bg-gray-100"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">{children}</div>

                {/* Footer */}
                {footer && (
                    <div className="flex justify-end gap-3 border-t px-6 py-4">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
}
