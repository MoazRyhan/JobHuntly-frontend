import React from "react";

function JobHeader() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Featured <span className="text-blue-600">jobs</span>
            </h2>
          </div>

          <div>
            <a 
              href="#" 
              className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              <span>Show all jobs</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
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
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default JobHeader;