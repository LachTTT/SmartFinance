import { navigation } from "@/Config/navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
    return (
        <aside className="flex h-screen w-72 flex-col bg-gray-900">
            <div className="flex-1 p-5">
                {navigation.map((item) => (
                    <SidebarItem key={item.title} {...item} />
                ))}
            </div>
        </aside>
    );
}
