
export default function AboutPage() {
  return (
    <section className="mt-16  min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100 py-10 px-2 md:py-16 md:px-4">
      <div className="max-w-5xl w-full bg-white/90 backdrop-blur-md rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 mb-8 text-center">About RoomEase</h1>
        {/* Mission Section */}
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Our Mission</h2>
          <p className="text-secondary text-sm md:text-base max-w-2xl mx-auto">
            RoomEase is dedicated to making property booking and management seamless for everyone. We empower hosts and guests with modern tools, transparency, and a supportive community.
          </p>
        </div>
        {/* Team Section */}
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-blue-50 rounded-xl shadow p-4 w-40">
              <a href="https://shihab-dev.web.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-800 hover:underline block">Shihab Uddin</a>
              <div className="text-xs text-secondary">Founder & CEO</div>
            </div>
            <div className="bg-blue-50 rounded-xl shadow p-4 w-40">
              <div className="font-semibold text-blue-800">Sarah Lee</div>
              <div className="text-xs text-secondary">Head of Product</div>
            </div>
            <div className="bg-blue-50 rounded-xl shadow p-4 w-40">
              <div className="font-semibold text-blue-800">Michael Chen</div>
              <div className="text-xs text-secondary">Lead Designer</div>
            </div>
            <div className="bg-blue-50 rounded-xl shadow p-4 w-40">
              <div className="font-semibold text-blue-800">Priya Patel</div>
              <div className="text-xs text-secondary">Customer Success</div>
            </div>
          </div>
        </div>
        {/* Values Section */}
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Our Values</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <li className="bg-yellow-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">Trust</li>
            <li className="bg-yellow-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">Innovation</li>
            <li className="bg-yellow-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">Community</li>
            <li className="bg-yellow-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">Support</li>
          </ul>
        </div>
        {/* Story Section */}
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Our Story</h2>
          <p className="text-secondary text-sm md:text-base max-w-2xl mx-auto">
            Founded in 2024, RoomEase started as a small team passionate about simplifying property management. Today, we connect thousands of hosts and guests, making travel and hosting easier, safer, and more enjoyable for everyone.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Our Achievements</h2>
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <li className="bg-blue-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">10,000+ Bookings</li>
            <li className="bg-blue-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">5,000+ Happy Hosts</li>
            <li className="bg-blue-50 rounded-xl px-4 py-2 shadow text-blue-800 font-semibold">Global Reach: 20+ Countries</li>
          </ul>
        </div>

        {/* Technology Section */}
        <div className="mb-8 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Our Technology</h2>
          <p className="text-secondary text-sm md:text-base max-w-2xl mx-auto">
            RoomEase leverages cutting-edge technology to ensure secure, fast, and reliable property management. Our platform is built with modern frameworks, robust security, and a focus on user experience.
          </p>
        </div>

        {/* Social Impact Section */}
        <div className="mb-2 text-center">
          <h2 className="text-lg md:text-2xl font-bold text-primary mb-2">Social Impact</h2>
          <p className="text-secondary text-sm md:text-base max-w-2xl mx-auto">
            We believe in giving back. RoomEase supports local communities, sustainable travel, and charitable initiatives to make a positive difference in the world.
          </p>
        </div>
      </div>
    </section>
  );
}
