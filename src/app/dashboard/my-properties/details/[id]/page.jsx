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
        const res = await fetch(`/api/properties/details/${id}`);
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
    <section className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">{property.title}</h1>
      {property.image && (
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-xl mb-4" />
      )}
      <div className="mb-2 text-lg font-semibold text-yellow-700">${property.price}</div>
      <div className="mb-2 text-gray-600">City: {property.city}</div>
      <div className="mb-2 text-gray-600">Rooms: {property.rooms}</div>
      <div className="mb-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${property.available ? 'bg-yellow-400 text-blue-900' : 'bg-blue-300 text-yellow-900'}`}>
          {property.available ? "Available" : "Not Available"}
        </span>
      </div>
      {property.description && (
        <div className="mt-4 text-gray-700 whitespace-pre-line">{property.description}</div>
      )}
      <button
        className="mt-8 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow font-semibold"
        onClick={() => router.push('/dashboard/my-properties')}
      >
        Back to All Properties
      </button>
    </section>
  );
}
