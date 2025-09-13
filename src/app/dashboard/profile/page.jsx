"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-8 mt-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src={user?.image || "/logo-small.png"}
          alt={user?.name || "User"}
          className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
        />
        <h2 className="text-2xl font-bold text-blue-700">{user?.name || "User"}</h2>
        <p className="text-gray-700 text-lg">{user?.email}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2 text-blue-700">Account Details</h3>
        <ul className="space-y-2 text-gray-700">
          <li><span className="font-medium">Name:</span> {user?.name || "-"}</li>
          <li><span className="font-medium">Email:</span> {user?.email || "-"}</li>
          <li><span className="font-medium">Provider:</span> {user?.provider || "OAuth/Google"}</li>
        </ul>
      </div>
    </div>
  );
}
