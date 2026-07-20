import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

export default function AuthenticatedLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar open={sidebarOpen} />

            {/* Main Area */}
            <div
                className={`
                    transition-all duration-300
                    ${sidebarOpen ? "ml-72" : "ml-0"}
                `}
            >
                <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

                <main className="p-8">{children}</main>
            </div>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="
                        fixed inset-0
                        bg-black/30
                        md:hidden
                    "
                />
            )}
        </div>
    );
}
