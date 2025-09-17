"use client";
import Loading from "@/app/loading";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const queryClient = new QueryClient();

function PropertiesCardListInner() {
  const pathname = usePathname();
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to fetch properties.");
      return data.properties;
    },
  });
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 8;

  if (isLoading) return <Loading />;
  if (error) return <div className="p-8 text-red-600">{error.message}</div>;

  // Conditional: if /browse-listing, show all, else slice
  const isBrowseListing = pathname === "/browse-listing";
  let propertiesToShow = isBrowseListing ? data : data.slice(0, 4);
  const heading = isBrowseListing ? "All Properties" : "Featured Properties";

  // Filter properties by search term (title or location)
  if (isBrowseListing && search.trim()) {
    const term = search.trim().toLowerCase();
    propertiesToShow = propertiesToShow.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        (p.location && p.location.toLowerCase().includes(term))
    );
  }

  // Pagination logic (only for browse-listing)
  let paginatedProperties = propertiesToShow;
  let totalPages = 1;
  if (isBrowseListing) {
    totalPages = Math.ceil(propertiesToShow.length / pageSize) || 1;
    paginatedProperties = propertiesToShow.slice((page - 1) * pageSize, page * pageSize);
  }

  return (
    <section className="py-10 px-4 mt-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-10 tracking-tight drop-shadow-lg">
        {heading}
      </h2>
      {isBrowseListing && (
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by title or location..."
            className="w-full max-w-md px-4 py-2 border border-blue-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProperties.map((p) => (
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
                height={250}
                className="w-full h-50 object-cover group-hover:scale-105 transition-transform duration-300"
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
      {/* Pagination Controls */}
      {isBrowseListing && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded font-semibold ${page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-100 text-blue-700"}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
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
