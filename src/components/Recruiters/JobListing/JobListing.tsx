import type { JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PageHeader } from "../DashboardSettings/headParts/headerPart";

export function JobListing(): JSX.Element {
  const tabClass = ({ isActive }: { isActive: boolean }) =>
    `py-4 text-sm font-medium ${
      isActive
        ? "text-slate-900 border-b-4 border-[#4640DE]"
        : "text-[#7C8493] hover:text-slate-700"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <PageHeader
        title="Social Media Assistant"
        description="full time"
        backTo="/DashboardRecruiter"
      />

      {/* Card */}
      <main className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
        {/* Tabs */}
        <div className="border-b">
          <nav className="flex gap-6 px-6">
            <NavLink to="" end className={tabClass}>
              Applicants
            </NavLink>

            <NavLink to="job-details" className={tabClass}>
              Job Details
            </NavLink>
          </nav>
        </div>

        {/* Outlet */}
        <section className="px-8 py-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default JobListing;
