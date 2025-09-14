
"use client";
import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function PropertiesTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await fetch("/api/properties");
      const data = await res.json();
      if (!data.success) throw new Error(data.error || "Failed to fetch properties.");
      return data.properties;
    },
  });

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">All Properties</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error.message}</div>
      ) : (
        <div className="overflow-x-auto bg-gradient-to-br from-yellow-50 via-blue-50 to-yellow-100 rounded-md shadow-2xl p-4">
          <table className="min-w-full bg-white/90 rounded-md shadow-xl border-separate border-spacing-0 overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-yellow-300 via-blue-100 to-yellow-200 text-blue-900 sticky top-0 z-10 rounded-t-md">
                <th className="px-6 py-3 font-bold text-lg border-b border-yellow-300">Title</th>
                <th className="px-6 py-3 font-bold text-lg border-b border-yellow-300">City</th>
                <th className="px-6 py-3 font-bold text-lg border-b border-yellow-300">Price</th>
                <th className="px-6 py-3 font-bold text-lg border-b border-yellow-300">Rooms</th>
                <th className="px-6 py-3 font-bold text-lg border-b border-yellow-300">Available</th>
                <th className="px-6 py-3 font-bold text-lg border-b border-yellow-300 rounded-tr-md">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p, idx) => (
                <tr
                  key={p._id}
                  className={`transition-colors duration-200 ${idx % 2 === 0 ? 'bg-yellow-50/80' : 'bg-blue-50/80'} hover:bg-yellow-200/80 rounded-md`}
                >
                  <td className="px-6 py-3 border-b border-yellow-200 font-semibold text-yellow-700 rounded-l-md">{p.title}</td>
                  <td className="px-6 py-3 border-b border-yellow-200 text-blue-800">{p.city}</td>
                  <td className="px-6 py-3 border-b border-yellow-200 text-yellow-800 font-bold">${p.price}</td>
                  <td className="px-6 py-3 border-b border-yellow-200 text-blue-800">{p.rooms}</td>
                  <td className="px-6 py-3 border-b border-yellow-200">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${p.available ? 'bg-yellow-400 text-blue-900' : 'bg-blue-300 text-yellow-900'}`}>
                      {p.available ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-6 py-3 border-b border-yellow-200 text-center rounded-r-md">
                    <div className="flex gap-2 justify-center">
                      <button className="px-3 py-1 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow text-xs font-semibold transition" title="Show Details">
                        Details
                      </button>
                      <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-blue-900 rounded-full shadow text-xs font-semibold transition" title="Update">
                        Update
                      </button>
                      <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full shadow text-xs font-semibold transition" title="Delete">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function MyPropertiesPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <PropertiesTable />
    </QueryClientProvider>
  );
}
