
"use client";

export default function AboutUsPage() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-50 via-white to-blue-100 px-4 py-16 overflow-hidden">
      {/* Golden spiral SVG background */}
      <svg className="absolute left-0 top-0 w-[60vw] h-[60vw] opacity-10 pointer-events-none" viewBox="0 0 100 100" fill="none">
        <path d="M50,50 m0,-40 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80" stroke="#FACC15" strokeWidth="2" fill="none" />
        <path d="M50,50 m0,-24.7 a24.7,24.7 0 1,1 0,49.4 a24.7,24.7 0 1,1 0,-49.4" stroke="#2563EB" strokeWidth="1.5" fill="none" />
      </svg>
      <div className="max-w-4xl w-full rounded-[2.618rem] shadow-2xl bg-white/95 p-8 md:p-16 border-2 border-yellow-200 relative z-10" style={{ aspectRatio: '1.618 / 1' }}>
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Left: Textual content */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-500 mb-2 tracking-tight text-left md:text-center" style={{ letterSpacing: '0.01em' }}>
              <span className="block text-blue-700 drop-shadow-lg">RoomEase</span>
              <span className="block text-yellow-600 text-2xl md:text-3xl font-medium mt-2">Where Harmony Meets Home</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-left md:text-center">
              RoomEase is your trusted platform for finding and booking the perfect property. We blend technology, design, and a passion for hospitality to make your search for a new home or rental as seamless as possible.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="bg-yellow-100 border-l-4 border-yellow-400 rounded-r-xl p-4 shadow-sm">
                <h2 className="text-2xl font-bold text-yellow-700 mb-1">Our Mission</h2>
                <p className="text-gray-700">
                  To empower people to find their ideal living space with ease, transparency, and confidence. We believe everyone deserves a place they can call home.
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-4 shadow-sm">
                <h2 className="text-2xl font-bold text-blue-700 mb-1">Why Golden Ratio?</h2>
                <p className="text-gray-700">
                  Our design is inspired by the golden ratio (1.618), a timeless principle found in nature and art. It guides our layouts, spacing, and visual harmony, ensuring a beautiful and intuitive experience for every user.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Visual & features */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="relative">
              <img src="/globe.svg" alt="RoomEase Globe" className="w-56 h-56 rounded-full shadow-xl border-4 border-yellow-200 bg-white" style={{ aspectRatio: '1 / 1' }} />
              <span className="absolute -bottom-4 -right-4 bg-yellow-300 text-blue-900 font-bold px-4 py-2 rounded-full shadow-lg text-lg rotate-6">#1 in Harmony</span>
            </div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-2 text-center">What Makes Us Unique?</h3>
            <ul className="list-none text-gray-700 space-y-2 text-left md:text-center">
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>Modern, golden-ratio inspired UI</li>
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>Secure authentication & user profiles</li>
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>Easy property listing & booking</li>
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>Responsive, accessible design</li>
              <li className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-yellow-400 rounded-full"></span>Community-driven support</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <span className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-300 to-blue-200 text-blue-900 font-extrabold rounded-full shadow-lg hover:scale-105 transition-transform text-xl tracking-wide border-2 border-yellow-400">Join RoomEase and find your perfect space today!</span>
        </div>
      </div>
      {/* Decorative floating shapes */}
      <div className="absolute right-10 bottom-10 w-24 h-24 bg-yellow-200 rounded-full opacity-30 blur-2xl animate-pulse" />
      <div className="absolute left-10 top-24 w-16 h-16 bg-blue-200 rounded-full opacity-20 blur-xl animate-pulse" />
    </section>
  );
}
