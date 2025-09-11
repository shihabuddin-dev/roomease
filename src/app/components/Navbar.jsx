export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-indigo-600">RoomEase</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/auth/login">Login</a></li>
      </ul>
    </nav>
  )
}
