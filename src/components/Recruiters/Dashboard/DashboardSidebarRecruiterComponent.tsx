import type { JSX } from "react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import mainImage from "../../../assets/images/Logo.svg";
import HouseIcon from "../../../assets/icons/house-solid-full (1).svg";
import FolderIcon from "../../../assets/icons/folder-closed-solid-full.svg";
import UserIcon from "../../../assets/icons/user-solid-full.svg";
import HelpIcon from "../../../assets/icons/circle-question-regular-full.svg";
import GearIcon from "../../../assets/icons/gear-solid-full.svg";
import ProfileImage from "../../../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash 1.png";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 px-3 py-2 rounded-lg w-full transition
   ${
     isActive
       ? "bg-blue-50 text-[#4640DE] font-semibold"
       : "text-[#7C8493] hover:bg-blue-50"
   }`;

export function DashboardSidebarRecruiterComponent(): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  
  return (
    <>
      {/* MOBILE: hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 rounded-md bg-white shadow-sm border border-gray-200"
        >
          <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden md:flex md:w-64 min-h-screen bg-[#fbfdff] border-r border-gray-200 p-6 flex-col justify-between">
        <div>
          <img src={mainImage} alt="logo" className="w-28 mb-6" />

          <nav className="flex flex-col gap-3">
            <NavLink to="" end className={linkClass}>
              <img src={HouseIcon} className="w-5 h-5" />
              Dashboard
            </NavLink>

            <NavLink to="company-profile" className={linkClass}>
              <img src={UserIcon} className="w-5 h-5" />
              Company Profile
            </NavLink>

            <NavLink to="job-listing" className={linkClass}>
              <img src={FolderIcon} className="w-5 h-5" />
              Job Listing
            </NavLink>
          </nav>

          <div className="mt-10">
            <h4 className="text-xs uppercase text-[#7C8493] mb-2">Settings</h4>

            <NavLink to="settings" className={linkClass}>
              <img src={GearIcon} className="w-5 h-5" />
              Settings
            </NavLink>

            <NavLink to="help" className={linkClass}>
              <img src={HelpIcon} className="w-5 h-5" />
              Help Center
            </NavLink>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img src={ProfileImage} className="w-14 h-14 rounded-full object-cover" />
          <div>
            <div className="font-semibold">Jake Gyll</div>
            <div className="text-xs text-[#7C8493]">jakegyll@email.com</div>
            <button className="mt-2 px-3 py-1 border border-rose-200 text-rose-500 rounded hover:bg-rose-50 text-sm">
              Log Out
            </button>
          </div>
        </div>
      </aside>

      {/* MOBILE DRAWER */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/40" onClick={closeDrawer} />

          <div className="relative w-72 bg-[#fbfdff] p-6 border-r">
            <button
              onClick={closeDrawer}
              className="absolute top-4 right-4 p-2 border rounded"
            >
              ✕
            </button>

            <nav className="flex flex-col gap-3 mt-10">
              <NavLink to="" end className={linkClass} onClick={closeDrawer}>
                Dashboard
              </NavLink>

              <NavLink to="company-profile" className={linkClass} onClick={closeDrawer}>
                Company Profile
              </NavLink>

              <NavLink to="job-listing" className={linkClass} onClick={closeDrawer}>
                Job Listing
              </NavLink>

              <NavLink to="settings" className={linkClass} onClick={closeDrawer}>
                Settings
              </NavLink>

              <NavLink to="help" className={linkClass} onClick={closeDrawer}>
                Help Center
              </NavLink>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default DashboardSidebarRecruiterComponent;
