"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PropertyDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProperty() {
      setLoading(true);
      setError("");
      console.log("Fetching property with id:", id);
      try {
  const res = await fetch(`/api/properties/${id}`);
        console.log("API response status:", res.status);
        const data = await res.json();
        console.log("API response data:", data);
        if (!data.success) throw new Error(data.error || "Failed to fetch property");
        setProperty(data.property);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchProperty();
    else console.warn("No property id found in params.");
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return (
    <div className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="text-red-600 text-lg font-semibold">{error}</div>
      <button
        className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => router.push('/dashboard/my-properties')}
      >
        Go Back to Properties
      </button>
    </div>
  );
  if (!property) return null;

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative">
              {property.image && (
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              )}
              <div className="absolute top-4 right-4">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-bold shadow-lg ${
                    property.available
                      ? "bg-yellow-400 text-blue-900"
                      : "bg-blue-300 text-yellow-900"
                  }`}
                >
                  {property.available ? "Available" : "Not Available"}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 tracking-tight">
                  {property.title}
                </h1>
                <div className="text-yellow-700 font-bold text-2xl mb-4">
                  ${property.price}
                  <span className="text-base font-normal text-gray-500">/ night</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{property.city}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.rooms} Rooms</span>
                  </div>
                </div>
                {property.description && (
                  <div className="mt-4 text-gray-700 whitespace-pre-line">
                    {property.description}
                  </div>
                )}
              </div>
              <div className="mt-6 flex gap-4">
                <button
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-full shadow-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105"
                  onClick={() => router.push('/dashboard/my-properties')}
                >
                  Back to Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
