import SearchBar from "./SearchBar";
import UserDropdown from "./UserDropdown";

export default function Navbar({
    title = "Dashboard",
    subtitle = "Welcome back 👋",
}) {
    return (
        <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">{title}</h1>

                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
                <SearchBar />

                <UserDropdown />
            </div>
        </header>
    );
}
