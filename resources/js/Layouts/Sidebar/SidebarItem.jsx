import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function SidebarItem({ title, href, icon: Icon }) {
    const { url } = usePage();

    const active = url.startsWith(href);

    function handleClick() {
        console.log("CLICK:", href);
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={clsx(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",

                active
                    ? "bg-emerald-500 text-white shadow"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white",
            )}
        >
            <Icon size={20} />

            <span>{title}</span>
        </Link>
    );
}
