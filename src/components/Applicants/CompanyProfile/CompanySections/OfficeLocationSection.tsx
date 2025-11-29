import { useState } from "react";

interface Location {
  name: string;
  logo: string;
}

function OfficeLocationSection({ locations }: { locations: Location[] }) {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleLocations = locations.slice(startIndex, endIndex);
  const hasNextPage = endIndex < locations.length;
  const hasPrevPage = page>0;

  return (
    <div className="rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Office Locations</h2>
      <p className="text-base text-slate-600 font-normal leading-relaxed mb-4 font-epilogue">Stripe offices spread across {locations.length} countries.</p>      
      <ul className="space-y-3">
        {visibleLocations.map((loc, index) => (
          <li
            key={index}
            className="flex items-center gap-3 text-gray-700"
          >
            <img
              src={loc.logo}
              alt={loc.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-[16px] font-medium">{loc.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 p-6">
        {hasNextPage && (
          <button
            className="text-[#4640de] font-medium hover:underline"
            style={{ fontSize: "16px" }}
            onClick={() => setPage(prev => prev + 1)}
          >
            Next →
          </button>
        )}

        {hasPrevPage && !hasNextPage && (
          <button
            className="text-[#4640de] font-medium hover:underline"
            style={{ fontSize: "16px" }}
            onClick={() => setPage(prev => prev - 1)}
          >
            ← Previous
          </button>
        )}
      </div>
    </div>
  );
}

export default OfficeLocationSection;
