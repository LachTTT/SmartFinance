import { navigation } from "@/Config/navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ open }) {
    return (
        <aside
            className={`
                fixed
                top-0
                left-0
                z-50
                h-screen
                w-72
                bg-gray-900
                flex
                flex-col
                transition-transform
                duration-300

                ${open ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            {/* Logo */}
            <div className="p-6">
                <h1 className="text-2xl font-bold text-white">SmartFinance</h1>
            </div>

            {/* Menu */}
            <div className="flex-1 px-5 space-y-2">
                {navigation.map((item) => (
                    <SidebarItem key={item.title} {...item} />
                ))}
            </div>
        </aside>
    );
}
