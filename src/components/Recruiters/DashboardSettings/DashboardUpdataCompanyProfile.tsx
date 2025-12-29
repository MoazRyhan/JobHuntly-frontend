import type { JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PageHeader } from "../../Applicants/DashboardSettings/headParts/headerPart"

export function DashboardUpdateCompanyProfile(): JSX.Element {
  const tabClass = ({ isActive }: { isActive: boolean }) =>
    `py-4 text-sm font-medium ${
      isActive
        ? "text-slate-900 border-b-4 border-[#4640DE]"
        : "text-[#7C8493] hover:text-slate-700"
    }`;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
        <PageHeader
        title="Settings"
        buttonText="Back to homepage"
        buttonLink="/DashboardRecruiter"
      />

      <main className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm ring-1 ring-slate-100 mt-6">
        {/* Tabs */}
        <div className="border-b">
          <nav className="flex gap-6 px-6">
            <NavLink to="" end className={tabClass}>
              OverView
            </NavLink>

            <NavLink to="social-links" className={tabClass}>
              Social Links
            </NavLink>

            <NavLink to="login-details" className={tabClass}>
              Login Details
            </NavLink>
          </nav>
        </div>

        {/* Tab content */}
        <section className="px-8 py-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default DashboardUpdateCompanyProfile;
