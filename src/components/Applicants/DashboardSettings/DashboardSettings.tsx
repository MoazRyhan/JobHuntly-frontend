import type { JSX } from "react";
import { Outlet } from "react-router-dom";
import { DashboardSidebarComponent } from "../Dashboard/DashboardSidebarComponent";

export default function DashboardSettings(): JSX.Element {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <DashboardSidebarComponent />

      {/* Main content */}
      <main className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
