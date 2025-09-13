"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Hi, {session.user?.name}</span>
        <button
          onClick={() => signOut()}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
    >
      Login With Google
    </button>
  )
}
