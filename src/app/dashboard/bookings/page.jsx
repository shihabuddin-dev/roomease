"use client";
import Loading from "@/app/loading";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function BookingPage() {
  const { data: session } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      if (!session || !session.user) return setLoading(false);
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/bookings/user?userEmail=${session.user.email}`);
        const data = await res.json();
        if (!data.success) throw new Error(data.error || "Failed to fetch bookings");
        setBookings(data.bookings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, [session]);

  if (loading) return <Loading />;
  if (error) return <div className="p-8 text-red-600">{error}</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">My Bookings</h1>
      {bookings.length === 0 ? (
        <div className="text-gray-500">No bookings found.</div>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {bookings.map((booking) => (
            <div key={booking._id} className="bg-white rounded-xl shadow p-4 sm:p-6 border border-gray-200 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] max-w-full">
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 hover:bg-red-700 text-white px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold transition"
                onClick={async () => {
                  const result = await Swal.fire({
                    title: 'Cancel Booking?',
                    text: 'Are you sure you want to cancel this booking?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, cancel it!',
                    cancelButtonText: 'No, keep it',
                    customClass: { popup: 'rounded-2xl p-6' },
                  });
                  if (!result.isConfirmed) return;
                  try {
                    const res = await fetch("/api/bookings", {
                      method: "DELETE",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ bookingId: booking._id }),
                    });
                    const data = await res.json();
                    if (data.success) {
                      setBookings((prev) => prev.filter((b) => b._id !== booking._id));
                      Swal.fire({
                        icon: 'success',
                        title: 'Booking Cancelled',
                        text: 'Your booking has been cancelled.',
                        customClass: { popup: 'rounded-2xl p-6' },
                      });
                    } else {
                      Swal.fire({
                        icon: 'error',
                        title: 'Cancel Failed',
                        text: data.error || 'Failed to delete booking',
                        customClass: { popup: 'rounded-2xl p-6' },
                      });
                    }
                  } catch (err) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Cancel Failed',
                      text: err.message,
                      customClass: { popup: 'rounded-2xl p-6' },
                    });
                  }
                }}
              >
                Cancel
              </button>
              <img src={booking.image} alt={booking.title} className="w-32 h-32 object-cover rounded-lg" />
              <div className="flex-1">
                <h2 className="text-lg font-bold text-blue-700 mb-2">{booking.title}</h2>
                <div className="text-gray-600 mb-1">Price: <span className="font-semibold">${booking.price}</span></div>
                <div className="text-gray-600 mb-1">Booking Date: {booking.createdAt ? new Date(booking.createdAt).toLocaleString() : "-"}</div>
                <div className="text-gray-400 text-xs">Booking ID: {booking._id}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
