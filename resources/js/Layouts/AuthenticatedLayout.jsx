import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

export default function AuthenticatedLayout({ children }) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <Navbar />

                <main className="flex-1 p-8">{children}</main>
            </div>
        </div>
    );
}
