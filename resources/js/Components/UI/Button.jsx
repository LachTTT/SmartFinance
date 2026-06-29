import clsx from "clsx";

export default function Button({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    ...props
}) {
    const variants = {
        primary:
            "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500",

        secondary:
            "bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500",

        outline:
            "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",

        danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

        success:
            "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

        warning:
            "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400",

        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={clsx(
                "rounded-xl font-medium transition-all duration-200",
                "focus:outline-none focus:ring-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
}
