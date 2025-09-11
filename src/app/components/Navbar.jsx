"use client";
import Link from "next/link";
import AuthButton from "./AuthButton";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <div className="text-2xl font-bold text-blue-700 tracking-tight"> RoomEase</div>
            <ul className="flex gap-6 text-gray-700 font-medium items-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><AuthButton /></li>
            </ul>
        </nav>
    );
}
