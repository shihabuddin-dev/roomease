export default function Hero() {
  return (
    <section className="mt-10 min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white w-full text-center px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        Welcome to <span className="text-yellow-300">RoomEase</span>
      </h1>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
        Find your perfect property and book rooms effortlessly. Simple, fast, and secure.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center items-center">
        <button className="w-full sm:w-auto px-8 py-3 bg-yellow-300 text-indigo-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition">
          Get Started
        </button>
        <button className="w-full sm:w-auto px-8 py-2 md:py-3 border border-white text-white rounded-xl hover:bg-white hover:text-indigo-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}
