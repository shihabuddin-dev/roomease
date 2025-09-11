import Link from "next/link";
import AuthButton from "./AuthButton";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
            <h1 className="text-2xl font-bold text-indigo-600">RoomEase</h1>
            <ul className="flex gap-6 text-gray-700 font-medium">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><AuthButton /></li>
            </ul>
        </nav>
    )
}