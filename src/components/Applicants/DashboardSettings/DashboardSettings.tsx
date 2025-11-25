import type { JSX } from "react";
import { DashboardSidebarComponent } from "../Dashboard/DashboardSidebarComponent";
import {  DashboardUpdataProfile } from "./DashboardUpdataProfile";
import { DashboardLoginDetails } from "./DashboardLoginDetails";


// Example Settings page that composes the three components
export default function DashboardSettings(): JSX.Element {
  return (
    <div style={{display: 'flex', minHeight: '100vh', background: '#f8fafc'}}>
      <DashboardSidebarComponent />

      <main style={{flex: 1, padding: 28}}>
        <div style={{maxWidth: 1100, margin: '0 auto'}}>
          <DashboardUpdataProfile />
          <DashboardLoginDetails />
        </div>
      </main>
    </div>
  );
}
