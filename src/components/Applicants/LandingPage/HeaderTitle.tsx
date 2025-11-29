import React from "react";

function HeaderTitle() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Discover
            <br />
            more than
            <br />
            <span className="text-blue-600">5000+ Jobs</span>
          </h1>

          <div className="w-96 h-2 bg-blue-600 rounded-full mb-8"></div>

          <p className="text-gray-600 text-lg mb-10">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 flex items-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Job title or keyword"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="flex-1 flex items-center gap-3 bg-white border border-gray-300 rounded-md px-4 py-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <select className="flex-1 outline-none text-gray-700 bg-transparent">
                <option>Florence, Italy</option>
                <option>Rome, Italy</option>
                <option>Milan, Italy</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap">
              Search my job
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-gray-600">Popular :</span>
            <span className="text-gray-700">UI Designer,</span>
            <span className="text-gray-700">UX Researcher,</span>
            <span className="text-gray-700">Android,</span>
            <span className="text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderTitle;
