"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const pieData = [
  { name: "Booked", value: 12 },
  { name: "Available", value: 8 },
  { name: "Pending", value: 4 },
];
const COLORS = ["#6366f1", "#fbbf24", "#a78bfa"];

const barData = [
  { name: "Jan", bookings: 3 },
  { name: "Feb", bookings: 5 },
  { name: "Mar", bookings: 2 },
  { name: "Apr", bookings: 6 },
  { name: "May", bookings: 4 },
  { name: "Jun", bookings: 7 },
];

export default function DashboardOverview() {
  // You can fetch real stats here and update the data arrays above
  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Room Status</h3>
          <ResponsiveContainer width="100%" height={270}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Bar Chart */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Bookings Per Month</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="bookings" fill="#6366f1" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
