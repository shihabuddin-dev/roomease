"use client";
import { useState } from "react";

export default function PropertiesPage() {
  const [form, setForm] = useState({
    title: "",
    address: "",
    city: "",
    price: "",
    description: "",
    image: "",
    rooms: 1,
    available: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      // TODO: Send property to API
      alert("Property data: " + JSON.stringify(form, null, 2));
      setSuccess("Property added successfully!");
      setForm({
        title: "",
        address: "",
        city: "",
        price: "",
        description: "",
        image: "",
        rooms: 1,
        available: true,
      });
    } catch (err) {
      setError(err.message || "Failed to add property.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 space-y-4 mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Add New Property</h2>
      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" value={form.title} onChange={handleChange} required placeholder="Title" className="border rounded px-3 py-2 w-full" />
        <input name="address" value={form.address} onChange={handleChange} required placeholder="Address" className="border rounded px-3 py-2 w-full" />
        <input name="city" value={form.city} onChange={handleChange} required placeholder="City" className="border rounded px-3 py-2 w-full" />
        <input name="price" value={form.price} onChange={handleChange} required placeholder="Price" type="number" min="0" className="border rounded px-3 py-2 w-full" />
        <input name="rooms" value={form.rooms} onChange={handleChange} required placeholder="Rooms" type="number" min="1" className="border rounded px-3 py-2 w-full" />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="border rounded px-3 py-2 w-full" />
      </div>
      <textarea name="description" value={form.description} onChange={handleChange} required placeholder="Description" className="border rounded px-3 py-2 w-full min-h-[80px]" />
      <label className="flex items-center gap-2">
        <input type="checkbox" name="available" checked={form.available} onChange={handleChange} />
        Available
      </label>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" disabled={loading}>
        {loading ? "Adding..." : "Add Property"}
      </button>
    </form>
  );
}
