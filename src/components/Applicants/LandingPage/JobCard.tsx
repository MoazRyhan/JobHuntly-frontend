import React from "react";

function JobCard(props: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-blue-600">
      
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={props.logo} 
            alt={props.company}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full border border-green-200">
          {props.jobType}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {props.title}
      </h3>

      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
        <span>{props.company}</span>
        <span>•</span>
        <span>{props.location}</span>
      </div>

      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
        {props.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {props.tags.map((tag: string, index: number) => (
          <span 
            key={index}
            className={`
              px-3 py-1 text-xs font-medium rounded
              ${tag === 'Marketing' ? 'bg-yellow-100 text-yellow-700' : ''}
              ${tag === 'Design' ? 'bg-blue-100 text-blue-700' : ''}
              ${tag === 'Business' ? 'bg-purple-100 text-purple-700' : ''}
              ${tag === 'Technology' ? 'bg-red-100 text-red-700' : ''}
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobCard;