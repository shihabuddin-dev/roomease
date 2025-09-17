export default function Features() {
  return (
  <section className="py-20 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-14 text-blue-800 drop-shadow-lg tracking-tight">Why Choose RoomEase?</h2>
  <div className="grid gap-[1.618rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="p-[1.618rem] rounded-2xl shadow bg-white border border-yellow-400 hover:scale-105 transition flex flex-col items-center">
          <div className="mb-2">
            <svg className="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"/><path d="M20 12a8 8 0 10-16 0 8 8 0 0016 0z"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-1 text-blue-700">Easy Booking</h3>
          <p className="text-gray-600 text-sm">Book rooms fast.</p>
        </div>
        <div className="p-[1.618rem] rounded-2xl shadow bg-white border border-yellow-400 hover:scale-105 transition flex flex-col items-center">
          <div className="mb-2">
            <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-1 text-yellow-700">Property Management</h3>
          <p className="text-gray-600 text-sm">Manage easily.</p>
        </div>
        <div className="p-[1.618rem] rounded-2xl shadow bg-white border border-yellow-400 hover:scale-105 transition flex flex-col items-center">
          <div className="mb-2">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-1 text-blue-700">Secure Auth</h3>
          <p className="text-gray-600 text-sm">Data protected.</p>
        </div>
        <div className="p-[1.618rem] rounded-2xl shadow bg-white border border-yellow-400 hover:scale-105 transition flex flex-col items-center">
          <div className="mb-2">
            <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-1 text-green-700">Verified Listings</h3>
          <p className="text-gray-600 text-sm">Quality only.</p>
        </div>
        <div className="p-[1.618rem] rounded-2xl shadow bg-white border border-yellow-400 hover:scale-105 transition flex flex-col items-center">
          <div className="mb-2">
            <svg className="w-7 h-7 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c2.54 0 4.71 1.61 5.5 4.09C14.79 4.61 16.96 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <h3 className="text-lg font-bold mb-1 text-pink-700">Trusted Community</h3>
          <p className="text-gray-600 text-sm">Safe hosts.</p>
        </div>
      </div>
    </section>
  )
}
