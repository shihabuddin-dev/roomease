'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

export default function EditPropertyForm({ propertyId }) {
  const [form, setForm] = useState({
    title: '',
    address: '',
    city: '',
    price: '',
    description: '',
    image: '',
    rooms: 1,
    available: true,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (propertyId) {
      setLoading(true);
      fetch(`/api/properties/${propertyId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setForm(data.property);
          } else {
            toast.error(data.error || 'Failed to fetch property details.');
          }
        })
        .catch((err) => {
          toast.error(err.message || 'Failed to fetch property details.');
        })
        .finally(() => setLoading(false));
    }
  }, [propertyId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (result.success) {
        toast.success('Property updated successfully!');
        router.push('/dashboard/my-properties');
      } else {
        toast.error(result.error || 'Failed to update property.');
      }
    } catch (err) {
      toast.error(err.message || 'Failed to update property.');
    } finally {
      setLoading(false);
    }
  };

  if (loading && !form.title) return <div>Loading...</div>;

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-xl shadow p-8 space-y-4 mt-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Edit Property</h2>
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
          {loading ? 'Updating...' : 'Update Property'}
        </button>
      </form>
    </>
  );
}
