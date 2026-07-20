import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";
import { Menu } from "lucide-react";

export default function Navbar({
    title = "Dashboard",
    subtitle = "Welcome back 👋",
    onMenuClick,
}) {
    return (
        <header
            className="
flex
h-20
items-center
justify-between
border-b
border-gray-200
bg-white
px-8
"
        >
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="
rounded-lg
p-2
hover:bg-gray-100
"
                >
                    <Menu size={24} />
                </button>

                <div>
                    <h1
                        className="
text-3xl
font-bold
text-gray-900
"
                    >
                        {title}
                    </h1>

                    <p
                        className="
mt-1
text-sm
text-gray-500
"
                    >
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <SearchBar />

                <UserDropdown />
            </div>
        </header>
    );
}
