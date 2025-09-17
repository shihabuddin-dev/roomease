"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Swal from "sweetalert2"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation";

export default function AuthButton() {
  const { data: session } = useSession();
  const hasShownLoginAlert = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (session && !hasShownLoginAlert.current) {
      hasShownLoginAlert.current = true;
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: `Welcome, ${session.user?.name || 'User'}!`,
        timer: 1800,
        showConfirmButton: false,
        willClose: () => {
          router.push("/");
        }
      });
    }
    if (!session) {
      hasShownLoginAlert.current = false;
    }
  }, [session, router]);

  if (session) {
    return (
      <div className="flex items-center gap-4 justify-center">
        <span className="text-base font-medium text-slate-900 bg-gray-100 px-3 py-2 rounded-lg shadow-sm">Hi, {session.user?.name}</span>
        <button
          onClick={async () => {
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
              signOut();
            }
          }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-red-600 hover:to-pink-600 transition-all duration-150"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold shadow hover:from-indigo-700 hover:to-blue-600 transition-all duration-150"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.22l6.93-6.93C36.16 2.69 30.45 0 24 0 14.64 0 6.4 5.48 2.44 13.44l8.06 6.27C12.6 13.09 17.86 9.5 24 9.5z" /><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.43-4.75H24v9.02h12.44c-.54 2.91-2.18 5.38-4.65 7.04l7.23 5.62C43.98 37.09 46.1 31.23 46.1 24.5z" /><path fill="#FBBC05" d="M10.5 28.13c-.62-1.85-.98-3.81-.98-5.83s.36-3.98.98-5.83l-8.06-6.27C1.09 13.98 0 18.81 0 24s1.09 10.02 2.44 13.44l8.06-6.27z" /><path fill="#EA4335" d="M24 48c6.45 0 12.16-2.13 16.61-5.81l-7.23-5.62c-2.01 1.35-4.59 2.15-7.38 2.15-6.14 0-11.4-3.59-13.5-8.77l-8.06 6.27C6.4 42.52 14.64 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg>
      Login With Google
    </button>
  );
}
