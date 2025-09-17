"use client";
import Loading from "@/app/loading";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
// import { useState } from "react";
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

  if (isLoading) return <Loading />;
  if (error) return <div className="p-8 text-red-600">{error.message}</div>;

  return (
    <section className="py-10 px-4 mt-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-16 tracking-tight drop-shadow-lg">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((p) => (
          <div
            key={p._id}
            className={`relative bg-gradient-to-br from-blue-50 via-white to-red-50 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:ring-2 hover:ring-blue-400`}
          >
            {/* Property Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                width={300}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Like Icon Overlay (static, design only) */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <span className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md text-blue-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Property Information */}
            <div className="p-4">
              {/* Property Name */}
              <h3 className="text-blue-900 font-semibold text-lg mb-2 line-clamp-2 text-center">
                {p.title}
              </h3>
              {/* Price */}
              <p className="text-blue-700 font-bold text-xl mb-3 text-center">
                ${p.price || '0.00'}
              </p>
              {/* View Details Button */}
              <Link
                href={`/properties/${p._id}`}
                className="w-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 hover:to-yellow-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center block shadow"
              >
                VIEW DETAILS
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
