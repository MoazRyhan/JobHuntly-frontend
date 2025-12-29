import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import { DashboardSidebarRecruiterComponent } from "../Dashboard/DashboardSidebarRecruiterComponent";
import { CompanyHeader } from "./headParts/addPostNav";
import CompanyLogo from "../../../assets/images/twiteer.jpg";

export default function DashboardRecruiter(): JSX.Element {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebarRecruiterComponent />

      {/* Main content */}
      <main className="flex-1 p-2">
        <CompanyHeader
          logo={CompanyLogo}
          companyName="Nomad"
          buttonText="Post a job"
          buttonLink="/company/job-create"
        />

        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
