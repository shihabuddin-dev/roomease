"use client";
import { FaHome, FaListAlt, FaListUl, FaPlusCircle, FaRegListAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isDashboardHome = pathname === "/dashboard";

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar for desktop, drawer for mobile */}
      <aside className={`fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg p-6 flex-col gap-6 transform ${drawerOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out lg:static lg:translate-x-0 lg:flex`}>
        {/* Close button for mobile */}
        <div className="flex items-center justify-between mb-8 lg:mb-8">
          <Link href={'/'} className="text-2xl font-bold text-blue-700">RoomEase</Link>
          <button
            className="lg:hidden text-2xl text-gray-500 hover:text-blue-700 p-2 rounded"
            onClick={closeDrawer}
            aria-label="Close sidebar"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l16 16M6 22L22 6" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium" onClick={closeDrawer}>
            <FaHome /> Overview
          </Link>
          <Link href="/dashboard/properties" className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium" onClick={closeDrawer}>
            <FaPlusCircle />Add Properties
          </Link>
          <Link href="/dashboard/my-properties" className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium" onClick={closeDrawer}>
            <FaListUl /> My Properties
          </Link>
          <Link href="/dashboard/bookings" className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium" onClick={closeDrawer}>
            <FaRegListAlt /> My Bookings
          </Link>
          <Link href="/dashboard/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-700 font-medium" onClick={closeDrawer}>
            <FaUser /> Profile
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-red-600 hover:text-white hover:bg-red-600 font-medium mt-8 px-4 py-2 rounded transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Overlay for mobile drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
          onClick={closeDrawer}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <div className="flex items-center justify-between bg-white border-b px-4 py-3 sticky top-0 z-20 shadow-sm">
          <button
            className="lg:hidden text-2xl text-blue-700"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open sidebar"
          >
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h20M4 14h20M4 22h20" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-blue-700">
            Welcome, <span className="text-gray-900">{session?.user?.name || "User"}</span>
          </span>
          <Link href="/dashboard/profile" className="ml-4 flex items-center gap-2">
            <img
              src={session?.user?.image || "/logo-small.png"}
              alt="User Avatar"
              className="h-10 w-10 p-1 rounded-full border object-cover"
            />
          </Link>
        </div>
        {/* Main dashboard content */}
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
