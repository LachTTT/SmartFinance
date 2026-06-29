import { usePage, Link } from "@inertiajs/react";
import { LogOut } from "lucide-react";

export default function SidebarFooter() {
    const { auth } = usePage().props;

    return (
        <div className="border-t border-gray-800 p-5">
            <div className="mb-4">
                <p className="font-semibold text-white">{auth.user.name}</p>

                <p className="text-sm text-gray-400">{auth.user.email}</p>
            </div>

            <Link
                href="/logout"
                method="post"
                as="button"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-red-500 hover:text-white"
            >
                <LogOut size={18} />
                Logout
            </Link>
        </div>
    );
}
