export default function Loading() {
  return (
    <section className="min-h-screen px-5 py-10 animate-pulse">
      
      {/* Title */}
      <div className="h-8 w-48 bg-gray-300 rounded mb-6"></div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {Array(8).fill(0).map((_, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4 space-y-4">
            
            {/* Image */}
            <div className="h-40 bg-gray-300 rounded"></div>

            {/* Title */}
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>

            {/* Description */}
            <div className="h-3 bg-gray-300 rounded w-full"></div>
            <div className="h-3 bg-gray-300 rounded w-5/6"></div>

            {/* Button */}
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </section>
  );
}