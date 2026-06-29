import clsx from "clsx";

export default function Card({
    children,
    title,
    subtitle,
    footer,
    className = "",
    bodyClassName = "",
    padding = true,
}) {
    return (
        <div
            className={clsx(
                "bg-white rounded-2xl border border-gray-200 shadow-sm",
                className,
            )}
        >
            {(title || subtitle) && (
                <div className="border-b border-gray-100 px-6 py-4">
                    {title && (
                        <h2 className="text-lg font-semibold text-gray-800">
                            {title}
                        </h2>
                    )}

                    {subtitle && (
                        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
                    )}
                </div>
            )}

            <div className={clsx(padding && "p-6", bodyClassName)}>
                {children}
            </div>

            {footer && (
                <div className="border-t border-gray-100 px-6 py-4">
                    {footer}
                </div>
            )}
        </div>
    );
}
