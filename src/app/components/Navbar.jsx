"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";

export default function Navbar() {
    const { data: session } = useSession();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() => (typeof window !== "undefined" ? localStorage.getItem("roomease-theme") || "light" : "light"));
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        document.body.style.colorScheme = theme;
        localStorage.setItem("roomease-theme", theme);
    }, [theme]);

    const handleSignOut = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel',
        });
        if (result.isConfirmed) {
            await signOut({ redirect: false });
            await Swal.fire({
                icon: 'success',
                title: 'Logged out',
                text: 'You have been successfully logged out.',
                timer: 1500,
                showConfirmButton: false,
            });
            router.push("/");
        }
    };

    const navLinks = (
        <>
            <Link href="/" className="md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/browse-listing" className="md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Browse Listing</Link>
            <Link href="/about-us" className="md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/contact" className="md:px-2 lg:px-3 py-2 block font-medium text-primary hover:text-secondary" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </>
    );

    return (
            <nav className={`fixed w-full top-0 z-50 bg-white border-b border-gray-200 transition-colors duration-300 ${scrolled ? "shadow-md" : ""}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold flex items-center">
                            {/* <img className="w-10" src="/logo-small.png" alt="RoomEase" /> */}
                             <span className="text-2xl font-extrabold tracking-tight ml-2 block md:hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">RoomEase</span>
                        </Link>
                    </div>
                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-0 md:text-sm lg:text-base lg:space-x-4">{navLinks}</div>
                    {/* Right Buttons (desktop) */}
                    <div className="hidden md:flex items-center space-x-2 lg:space-x-3 z-105">
                        {!session ? (
                            <>
                                <Link href="/login" className="px-4 py-1 rounded-md text-sm border border-gray-300 hover:bg-gray-100">Sign In</Link>
                                <Link href="/register" className="px-4 py-1 rounded-md text-sm bg-gray-900 text-white hover:bg-gray-700">Sign Up</Link>
                            </>
                        ) : (
                            <div className="relative group cursor-pointer">
                                {session.user?.image ? (
                                    <img
                                        src={session?.user?.image}
                                        alt={session.user.name}
                                        className="w-12 h-12 p-1 rounded-full border-2 border-gray-300"
                                    />
                                ) : (
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full border-2">
                                        <FaUser className="text-xl" />
                                    </div>
                                )}
                                <div className="absolute right-2 border top-12 border-gray-200 w-45 bg-white rounded-md shadow origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-out transform z-50">
                                    <p className="px-4 py-2 font-medium">{session.user?.name}</p>
                                    <hr className="border-t border-gray-200" />
                                    <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100">
                                        <MdDashboardCustomize /> Dashboard
                                    </Link>
                                    <Link href="/dashboard/profile" className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100">
                                        <FaUserCircle /> Profile
                                    </Link>
                                    <button
                                        onClick={handleSignOut}
                                        className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                    >
                                        <FaSignOutAlt /> Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Mobile: hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="transition-all duration-300 ease-in-out transform text-xl"
                            aria-label="Open menu"
                        >
                            {mobileMenuOpen ? <FaTimes className="transition-all duration-300 ease-in-out" /> : <FaBars className="transition-all duration-300 ease-in-out" />}
                        </button>
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`md:hidden absolute right-0 top-16 w-full z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 scale-y-100 max-h-[500px] pointer-events-auto' : 'opacity-0 scale-y-95 max-h-0 pointer-events-none'} origin-top`}
                >
                    <div className="border w-11/12 mx-auto bg-white rounded-md shadow mt-2 p-4">
                        {navLinks}
                        {!session ? (
                            <div className="flex flex-col space-y-2 mt-2 px-3">
                                <Link href="/login" className="px-4 py-1 rounded-md text-sm border border-gray-300 hover:bg-gray-100" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                                <Link href="/register" className="px-4 py-1 rounded-md text-sm bg-gray-900 text-white hover:bg-gray-700" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                            </div>
                        ) : (
                            <div className="border-t pt-5 px-3 space-y-3 mt-2">
                                <Link href="/dashboard/profile" className="flex items-center gap-2 w-full" onClick={() => setMobileMenuOpen(false)}>
                                    {session.user?.image ? (
                                        <img src={session.user.image} alt={session.user.name || "User"} className="w-10 h-10 border p-1 rounded-full" />
                                    ) : (
                                        <FaUser className="w-8 h-8 border rounded-full p-1" />
                                    )}
                                    {session.user?.name}
                                </Link>
                                <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                    <MdDashboardCustomize /> Dashboard
                                </Link>
                                <button
                                    onClick={() => { handleSignOut(); setMobileMenuOpen(false); }}
                                    className="flex items-center gap-2 w-full"
                                >
                                    <FaSignOutAlt /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
    );
}
