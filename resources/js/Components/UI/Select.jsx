import clsx from "clsx";

export default function Input({
    label,
    error,
    helperText,
    required = false,
    className = "",
    containerClassName = "",
    ...props
}) {
    return (
        <div className={clsx("w-full", containerClassName)}>
            {label && (
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    {label}

                    {required && <span className="ml-1 text-red-500">*</span>}
                </label>
            )}

            <input
                className={clsx(
                    "w-full rounded-xl border border-gray-300 bg-white",
                    "px-4 py-2.5",
                    "text-sm text-gray-700",
                    "placeholder:text-gray-400",
                    "transition-all duration-200",
                    "focus:border-emerald-500",
                    "focus:ring-2 focus:ring-emerald-200",
                    "outline-none",
                    "disabled:bg-gray-100",
                    "disabled:cursor-not-allowed",
                    error &&
                        "border-red-500 focus:border-red-500 focus:ring-red-200",
                    className,
                )}
                {...props}
            />

            {helperText && !error && (
                <p className="mt-1 text-xs text-gray-500">{helperText}</p>
            )}

            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
}
