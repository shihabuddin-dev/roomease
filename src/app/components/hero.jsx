export default function Hero() {
  return (
    <section className="h-[61.8vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-full text-center px-6">
      <h1 className="text-5xl font-bold tracking-tight">
        Welcome to <span className="text-yellow-300">RoomEase</span>
      </h1>
      <p className="mt-6 text-lg max-w-2xl">
        Find your perfect property and book rooms effortlessly. Simple, fast, and secure.
      </p>
      <div className="mt-10 flex gap-6">
        <button className="px-8 py-3 bg-yellow-300 text-indigo-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition">
          Get Started
        </button>
        <button className="px-8 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-indigo-600 transition">
          Learn More
        </button>
      </div>
    </section>
  )
}
