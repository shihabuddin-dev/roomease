"use client";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
const queryClient = new QueryClient();

function PropertiesCardListInner() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to fetch properties.");
      return data.properties;
    },
  });

  if (isLoading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error.message}</div>;

  return (
    <section className="py-10 px-4 mt-24">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight drop-shadow-lg">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((p) => (
          <div
            key={p._id}
            className="group bg-gradient-to-br from-yellow-50 via-blue-50 to-yellow-100 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-yellow-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 relative"
          >
            {p.image && (
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${p.available ? 'bg-yellow-400 text-blue-900' : 'bg-blue-300 text-yellow-900'}`}>{p.available ? "Available" : "Not Available"}</span>
              </div>
            )}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-extrabold text-blue-800 mb-1 truncate" title={p.title}>{p.title}</h3>
              <div className="text-yellow-700 font-bold text-lg mb-1">${p.price}</div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><circle cx="8" cy="8" r="7" /><path d="M8 4v4l3 2" /></svg>
                <span>Rooms: {p.rooms}</span>
              </div>
              <Link href={`/properties/${p._id}`}
                className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white rounded-full shadow font-semibold tracking-wide transition-all duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PropertiesCardList() {
  return (
    <QueryClientProvider client={queryClient}>
      <PropertiesCardListInner />
    </QueryClientProvider>
  );
}
