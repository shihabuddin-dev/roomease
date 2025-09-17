"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useSession } from "next-auth/react";


export default function PropertyDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { data: session } = useSession();
  const [alreadyBooked, setAlreadyBooked] = useState(false);

  useEffect(() => {
    async function fetchProperty() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/properties/${id}`);
        const data = await res.json();
        if (!data.success) throw new Error(data.error || "Failed to fetch property");
        setProperty(data.property);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProperty();
    else console.warn("No property id found in params.");
  }, [id]);

  useEffect(() => {
    async function checkAlreadyBooked() {
      if (!session || !session.user || !id) return setAlreadyBooked(false);
      try {
        const res = await fetch(`/api/bookings/check?propertyId=${id}&userEmail=${session.user.email}`);
        const data = await res.json();
        setAlreadyBooked(data.booked === true);
      } catch {
        setAlreadyBooked(false);
      }
    }
    checkAlreadyBooked();
  }, [session, id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="text-red-600 text-lg font-semibold">{error}</div>
      <button
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => router.push('/')}
      >
        Go Back
      </button>
    </div>
  );
  if (!property) return null;

  return (
    <section className="mt-16 min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 text-gray-900 px-4 py-12">
      <div className="max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-800 mb-4">Property Details</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Discover amazing properties tailored just for you. From cozy rooms to luxury stays, we have everything you need.
          </p>
        </div>

        {/* Property Details Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Property Image Section */}
            <div className="p-8 flex items-center justify-center">
              <div className="relative overflow-hidden rounded-lg w-full">
                {property.image && (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 md:h-96 object-cover rounded-lg"
                  />
                )}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-bold shadow-lg ${property.available
                        ? "bg-yellow-400 text-blue-900"
                        : "bg-blue-300 text-yellow-900"
                      }`}
                  >
                    {property.available ? "Available" : "Not Available"}
                  </span>
                </div>
              </div>
            </div>

            {/* Property Information Section */}
            <div className="p-8 flex flex-col justify-center">
              {/* City & Rooms */}
              <div className="flex items-center gap-6 mb-4">
                <div className="flex items-center gap-2 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{property.city}</span>
                </div>
                <div className="flex items-center gap-2 text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>{property.rooms} Rooms</span>
                </div>
              </div>

              {/* Property Title */}
              <h2 className="text-3xl font-bold text-blue-800 mb-4 leading-tight">
                {property.title}
              </h2>

              {/* Property Description */}
              {property.description && (
                <div className="mb-6">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {property.description}
                  </p>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-900">
                  ${property.price || '0.00'}
                  <span className="text-base font-normal text-gray-500"> / night</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  className={`flex-1 bg-blue-600 border-2 border-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center ${alreadyBooked ? 'opacity-60 cursor-not-allowed' : 'hover:bg-blue-700 hover:border-blue-700'}`}
                  disabled={alreadyBooked}
                  onClick={async () => {
                    if (alreadyBooked) return;
                    if (!session || !session.user) {
                      Swal.fire({
                        icon: 'warning',
                        title: 'Login Required',
                        text: 'Please login to book this property.',
                        showConfirmButton: true,
                        confirmButtonText: 'Login',
                        customClass: { popup: 'rounded-2xl p-6' },
                        preConfirm: () => router.push('/login'),
                      });
                      return;
                    }
                    // Book property API call
                    try {
                      const res = await fetch('/api/bookings', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          propertyId: property._id,
                          userEmail: session.user.email,
                          title: property.title,
                          price: property.price,
                          image: property.image,
                        }),
                      });
                      const data = await res.json();
                      if (data.success) {
                        Swal.fire({
                          icon: 'success',
                          title: 'Booking Successful!',
                          text: `Your booking for ${property.title} is confirmed.`,
                          showConfirmButton: true,
                          customClass: { popup: 'rounded-2xl p-6' },
                        });
                        setAlreadyBooked(true);
                      } else {
                        throw new Error(data.error || 'Booking failed');
                      }
                    } catch (err) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Booking Failed',
                        text: err.message,
                        showConfirmButton: true,
                        customClass: { popup: 'rounded-2xl p-6' },
                      });
                    }
                  }}
                >
                  {alreadyBooked ? 'Booked' : 'Book Now'}
                </button>
                <button
                  className="flex-1 bg-white border-2 border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center"
                  onClick={() => {
                    Swal.fire({
                      title: 'Contact Host',
                      html: `
                        <div class='flex flex-col items-center gap-4'>
                          <img src='https://i.ibb.co.com/v4wz678M/shihab-img.jpg' alt='Shihab Uddin' class='w-20 h-20 rounded-full shadow-lg mb-2'/>
                          <div class='font-bold text-blue-800 text-lg'>Shihab Uddin</div>
                          <a href='https://shihab-dev.web.app/' target='_blank' rel='noopener' class='text-blue-600 hover:underline text-sm font-medium mb-2'>shihab-dev.web.app</a>
                          <div class='flex gap-4 justify-center mt-2'>
                            <a href='https://facebook.com/shihab.dev' target='_blank' rel='noopener' class='text-blue-600 hover:text-blue-800'><svg width='24' height='24' fill='currentColor'><path d='M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12'></path></svg></a>
                            <a href='https://linkedin.com/in/shihab-dev' target='_blank' rel='noopener' class='text-blue-700 hover:text-blue-900'><svg width='24' height='24' fill='currentColor'><path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.516-1.535-2.516-1.535 0-1.77 1.199-1.77 2.438v4.682h-3v-9h2.881v1.229h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.599v4.735z'></path></svg></a>
                            <a href='https://twitter.com/shihab_dev' target='_blank' rel='noopener' class='text-sky-500 hover:text-sky-700'><svg width='24' height='24' fill='currentColor'><path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.577-.666 2.483 0 1.713.872 3.229 2.197 4.117-.809-.026-1.57-.248-2.236-.616v.062c0 2.393 1.702 4.389 3.965 4.84-.415.113-.853.174-1.304.174-.319 0-.627-.031-.929-.089.627 1.956 2.444 3.377 4.6 3.417-1.685 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.426-.014-.637z'></path></svg></a>
                            <a href='https://github.com/shihabuddin-dev' target='_blank' rel='noopener' class='text-gray-800 hover:text-black'><svg width='24' height='24' fill='currentColor'><path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'></path></svg></a>
                          </div>
                        </div>
                      `,
                      showCloseButton: true,
                      showConfirmButton: false,
                      width: 400,
                      customClass: {
                        popup: 'rounded-2xl p-6',
                      },
                    });
                  }}
                >
                  Contact Host
                </button>
              </div>

              {/* Property ID */}
              <p className="text-xs text-gray-400 mt-2">
                Property ID: {property._id}
              </p>
            </div>
          </div>
        </div>

        {/* Back to Properties Link */}
        <div className="text-center mt-8">
          <a
            href="/browse-listing"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to All Properties
          </a>
        </div>
      </div>
    </section>
  );
}

