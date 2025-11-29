import { useState } from "react";
import type { Tech } from "../Types";

interface Props {
  tech: Tech[];
}
function TechStackSection({ tech }: Props) {
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(0);

  const startIndex = page * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const visibleTech = tech.slice(startIndex, endIndex);
  const hasNextPage = endIndex < tech.length;
  const hasPrevPage = page > 0;

  return (
    <div className="rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
      <p className="text-base text-slate-600 font-normal leading-relaxed mb-4 font-epilogue">
        Learn about the technology and tools that the company uses.
      </p>{" "}
      <div className="grid grid-cols-3 gap-6">
        {visibleTech.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={item.logo}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <span className="mt-3 text-[16px] font-medium text-gray-800">
              {item.name}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 p-6 flex justify-between">
        {hasPrevPage && (
          <button
            className="text-[#4640de] font-medium hover:underline"
            style={{ fontSize: "16px" }}
            onClick={() => setPage((prev) => prev - 1)}
          >
            ← Previous
          </button>
        )}

        {hasNextPage && (
          <button
            className="text-[#4640de] font-medium hover:underline"
            style={{ fontSize: "16px" }}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
export default TechStackSection;
