import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="relative hidden md:block">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
                type="text"
                placeholder="Search..."
                className="w-72 rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-emerald-500 focus:bg-white"
            />
        </div>
    );
}
