import React from 'react';

function LandingCompany() {
  const companies = [
    { name: 'vodafone', logo: 'Vodafone' },
    { name: 'intel', logo: 'intel' },
    { name: 'tesla', logo: 'TESLA' },
    { name: 'amd', logo: 'AMD' },
    { name: 'talkit', logo: 'Talkit' }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-20">
        <p className="text-gray-500 text-base mb-10">
          Companies we helped grow
        </p>

        <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          {companies.map((company) => (
            <div 
              key={company.name}
              className="text-gray-400 text-3xl font-bold hover:text-gray-600 transition-colors cursor-pointer"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LandingCompany;