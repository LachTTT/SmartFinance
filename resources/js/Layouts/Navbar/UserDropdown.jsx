import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import {
    ChevronDown,
    UserCircle2,
    User,
    Settings,
    LogOut,
} from "lucide-react";

export default function UserDropdown() {
    const { auth } = usePage().props;

    const user = auth?.user;

    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-gray-100"
            >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <UserCircle2 size={24} />
                </div>

                <div className="hidden text-left md:block">
                    <p className="font-semibold">
                        {user?.name}
                    </p>

                    <p className="text-xs uppercase text-gray-500">
                        {user?.role}
                    </p>
                </div>

                <ChevronDown
                    size={18}
                    className={`transition ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {open && (
                <div className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                    <div className="border-b p-4">
                        <p className="font-semibold">
                            {user?.name}
                        </p>

                        <p className="text-sm text-gray-500">
                            {user?.email}
                        </p>
                    </div>

                    <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                        <User size={18} />
                        Profile
                    </Link>

                    <Link
                        href="#"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                    >
                        <Settings size={18} />
                        Settings
                    </Link>

                    <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50"
                    >
                        <LogOut size={18} />
                        Logout
                    </Link>
                </div>
            )}
        </div>
    );
}
