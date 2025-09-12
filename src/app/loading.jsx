export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
      <span className="ml-4 text-blue-700 text-xl font-semibold">Loading...</span>
    </div>
  );
}
