"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUserCircle, FaSignOutAlt, FaUser, FaHome, FaListUl, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { MdDashboardCustomize, MdRateReview } from "react-icons/md";

export default function Navbar() {
    const { data: session } = useSession();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Theme logic removed
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Theme useEffect removed

    const handleSignOut = async () => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "Do you really want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, logout",
            cancelButtonText: "Cancel",
        });
        if (result.isConfirmed) {
            await signOut({ redirect: false });
            await Swal.fire({
                icon: "success",
                title: "Logged out",
                text: "You have been successfully logged out.",
                timer: 1500,
                showConfirmButton: false,
            });
            router.push("/");
        }
    };

    const navLinks = (
        <>
            <Link
                href="/"
                className={`md:px-2 lg:px-3 py-2 font-medium flex items-center gap-2 ${pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <FaHome className="text-lg" /> Home
            </Link>
            <Link
                href="/browse-listing"
                className={`md:px-2 lg:px-3 py-2 font-medium flex items-center gap-2 ${pathname === "/browse-listing" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <FaListUl className="text-lg" /> Browse Listing
            </Link>
            <Link
                href="/reviews"
                className={`md:px-2 lg:px-3 py-2 font-medium flex items-center gap-2 ${pathname === "/reviews" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <MdRateReview className="text-lg mt-1" /> Reviews
            </Link>
            <Link
                href="/about-us"
                className={`md:px-2 lg:px-3 py-2 font-medium flex items-center gap-2 ${pathname === "/about-us" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <FaInfoCircle className="text-lg" /> About Us
            </Link>
            <Link
                href="/contact"
                className={`md:px-2 lg:px-3 py-2 font-medium flex items-center gap-2 ${pathname === "/contact" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <FaEnvelope className="text-lg" /> Contact Us
            </Link>
        </>
    );

    return (
        <nav
            className={`fixed w-full top-0 z-50 bg-white border-b border-gray-200 transition-colors duration-300 ${scrolled ? "shadow-md" : ""
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold flex items-center">
                        <span className="text-2xl font-extrabold tracking-tight ml-2 block md:hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">
                            RoomEase
                        </span>
                    </Link>
                </div>
                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-0 md:text-sm lg:text-base lg:space-x-4">{navLinks}</div>
                {/* Right Buttons (desktop) */}
                <div className="hidden md:flex items-center space-x-2 lg:space-x-3 z-105">
                    {!session ? (
                        <>
                            <Link
                                href="/login"
                                className="px-4 py-1 rounded-md text-sm border border-gray-200 hover:bg-gray-100"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-1 rounded-md text-sm bg-gray-900 text-white hover:bg-gray-700"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <div className="relative group cursor-pointer">
                            {session.user?.image ? (
                                <img
                                    src={session?.user?.image}
                                    alt={session.user.name}
                                    className="w-12 h-12 p-1 rounded-full border-2 border-gray-200"
                                />
                            ) : (
                                <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-200">
                                    <FaUser className="text-xl" />
                                </div>
                            )}
                            <div className="absolute right-2 border border-gray-200 top-12 w-45 bg-white rounded-md shadow origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-200 ease-out transform z-50">
                                <p className="px-4 py-2 font-medium">{session.user?.name}</p>
                                <hr className="border-t border-gray-200" />
                                <Link
                                    href="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                >
                                    <MdDashboardCustomize /> Dashboard
                                </Link>
                                <Link
                                    href="/dashboard/profile"
                                    className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100"
                                >
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
                        {mobileMenuOpen ? (
                            <FaTimes className="transition-all duration-300 ease-in-out" />
                        ) : (
                            <FaBars className="transition-all duration-300 ease-in-out" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile Nav */}
            <div
                className={`md:hidden absolute right-0 top-14 w-full z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen
                        ? "opacity-100 scale-y-100 max-h-[500px] pointer-events-auto"
                        : "opacity-0 scale-y-95 max-h-0 pointer-events-none"
                    } origin-top`}
            >
                <div className="border border-gray-200 w-11/12 mx-auto bg-white rounded-b-md shadow mt-2 p-4">
                    {navLinks}
                    {!session ? (
                        <div className="flex flex-col space-y-2 mt-2 px-3">
                            <Link
                                href="/login"
                                className="px-4 py-1 rounded-md text-sm border border-gray-200 hover:bg-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-1 rounded-md text-sm bg-gray-900 text-white hover:bg-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </div>
                    ) : (
                        <div className="border-t border-gray-200 pt-5 px-3 space-y-3 mt-2">
                            <Link
                                href="/dashboard/profile"
                                className="flex items-center gap-2 w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {session.user?.image ? (
                                    <img
                                        src={session.user.image}
                                        alt={session.user.name || "User"}
                                        className="w-10 h-10 border border-gray-200 p-1 rounded-full"
                                    />
                                ) : (
                                    <FaUser className="w-8 h-8 border border-gray-200 rounded-full p-1" />
                                )}
                                {session.user?.name}
                            </Link>
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <MdDashboardCustomize /> Dashboard
                            </Link>
                            <Link
                                href="/reviews"
                                className={`flex items-center gap-2 ${pathname === "/reviews" ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-gray-900"}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <MdRateReview className="text-lg" /> Reviews
                            </Link>
                            <button
                                onClick={() => {
                                    handleSignOut();
                                    setMobileMenuOpen(false);
                                }}
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
