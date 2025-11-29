import React from "react";

function CategoryCard(props: any) {
  return (
    <div 
      className={`
        ${props.isHighlighted ? 'bg-blue-600' : 'bg-white'}
        border border-gray-200 rounded-lg p-6 
        hover:shadow-lg transition-all duration-300 
        cursor-pointer group
        ${props.isHighlighted ? 'hover:bg-blue-700' : 'hover:border-blue-600'}
      `}
    >
      <div className={`
        ${props.isHighlighted ? 'text-white' : 'text-blue-600'}
        mb-6 transform group-hover:scale-110 transition-transform duration-300
      `}>
        {props.icon}
      </div>

      <h3 className={`
        text-xl font-bold mb-3
        ${props.isHighlighted ? 'text-white' : 'text-gray-900'}
      `}>
        {props.title}
      </h3>

      <div className="flex items-center gap-2">
        <span className={`
          text-sm
          ${props.isHighlighted ? 'text-white/90' : 'text-gray-600'}
        `}>
          {props.jobsCount} jobs available
        </span>
        <svg 
          className={`
            w-4 h-4 transform group-hover:translate-x-1 transition-transform
            ${props.isHighlighted ? 'text-white' : 'text-gray-600'}
          `}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M17 8l4 4m0 0l-4 4m4-4H3" 
          />
        </svg>
      </div>
    </div>
  );
}

export default CategoryCard;