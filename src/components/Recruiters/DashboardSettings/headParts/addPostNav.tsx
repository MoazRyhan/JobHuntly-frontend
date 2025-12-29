import { Link } from "react-router-dom";

interface CompanyHeaderProps {
  logo: string;
  companyName: string;
  buttonText?: string;
  buttonLink?: string;
}

export function CompanyHeader({
  logo,
  companyName,
  buttonText = "Post a job",
  buttonLink = "/company/job-create",
}: CompanyHeaderProps) {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        <div className="flex items-center justify-between">
          
          {/* LEFT SIDE: Burger + Logo + Name */}
          <div className="flex items-center gap-3">
            
            {/* 🍔 Burger (mobile only) */}
            <button
              className="md:hidden p-2 rounded-md border border-gray-200 bg-white"
              aria-label="Open menu"
            >
              <svg
                className="w-5 h-5 text-slate-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <img
              src={logo}
              className="w-10 h-10 rounded-md object-cover"
              alt="Company Logo"
            />

            {/* Name */}
            <span className="text-base font-semibold text-slate-900 whitespace-nowrap">
              {companyName}
            </span>
          </div>

          {/* RIGHT SIDE: Button */}
          <Link
            to={buttonLink}
            className="
              inline-flex items-center justify-center
              px-4 py-2
              bg-[#4640DE] text-white
              rounded-md text-sm font-medium
              hover:opacity-90 transition
              whitespace-nowrap
            "
          >
            {buttonText}
          </Link>
        </div>

      </div>
    </header>
  );
}
