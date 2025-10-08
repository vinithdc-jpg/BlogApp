import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdiminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';

export default function Layout({ children }) {
    return (
        <>
            <div className="flex min-h-screen bg-gray-50">
                <ToastContainer theame="dark"/>
                {/* ---------- Sidebar ---------- */}
                <Sidebar />

                {/* ---------- Main Content ---------- */}
                <div className="flex-1 flex flex-col">
                    {/* ---------- Top Navbar ---------- */}
                    <div className="flex items-center justify-between bg-white shadow-sm px-8 py-4 border-b">
                        <h3 className="text-2xl font-semibold text-gray-800">Admin Panel</h3>
                        <div className="flex items-center gap-4">
                            <p className="text-gray-600 text-sm hidden md:block">
                                Welcome, Admin
                            </p>
                            <Image
                                src={assets.profile_icon}
                                width={40}
                                height={40}
                                alt="Profile Icon"
                                className="rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition-transform"
                            />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}