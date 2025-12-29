import type { JSX } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { PageHeader } from "./headParts/headerPart";

export function DashboardUpdateProfile(): JSX.Element {
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
        buttonLink="/Dashboard"
      />

      <main className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm ring-1 ring-slate-100">
        {/* Tabs */}
        <div className="border-b">
          <nav className="flex gap-6 px-6">
            <NavLink to="" end className={tabClass}>
              My Profile
            </NavLink>

            <NavLink to="career" className={tabClass}>
              Career Info
            </NavLink>

            <NavLink to="social-links" className={tabClass}>
              Social Links
            </NavLink>

            <NavLink to="login" className={tabClass}>
              Login Details
            </NavLink>
          </nav>
        </div>

        {/* EXACT SAME CONTENT AREA */}
        <section className="px-8 py-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
