export default function Features() {
  return (
    <section className="py-[61.8px] max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Why Choose RoomEase?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-8 rounded-2xl shadow-xl bg-white hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4">Easy Booking</h3>
          <p className="text-gray-600">Book your rooms in just a few clicks with a smooth checkout flow.</p>
        </div>
        <div className="p-8 rounded-2xl shadow-xl bg-white hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4">Property Management</h3>
          <p className="text-gray-600">List, update, and manage your properties with ease in the dashboard.</p>
        </div>
        <div className="p-8 rounded-2xl shadow-xl bg-white hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-4">Secure Authentication</h3>
          <p className="text-gray-600">Protected routes with NextAuth ensuring data safety and privacy.</p>
        </div>
      </div>
    </section>
  )
}
