import type { JSX } from "react";
import mainImage from "../../../assets/images/Logo.svg"
import HouseIcon from "../../../assets/icons/house-solid-full (1).svg" 
import FolderIcon from "../../../assets/icons/folder-closed-solid-full.svg" 
import UserIcon from "../../../assets/icons/user-solid-full.svg" 
import HelpIcon from "../../../assets/icons/circle-question-regular-full.svg" 
import GearIcon from "../../../assets/icons/gear-solid-full.svg" 
import ProfileImage from "../../../assets/images/Property 1=Divvy.png" 


export function DashboardSidebarComponent(): JSX.Element {
  return (
    <aside className="
      w-64 min-h-screen bg-[#fbfdff] border-r border-gray-200 
      p-6 flex flex-col justify-between 
      max-md:hidden
    ">
      {/* Top section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 pb-5">
          <img
            src={mainImage}
            alt="JobHuntly logo"
            className="object-cover"
          />
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 text-[#7C8493]">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
            <img className="w-6 h-6" src={HouseIcon }  alt="houseIcon" /> Dashboard
          </a>

          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="#">
            <img  className="w-6 h-6" src={FolderIcon }  alt="folderIcon" /> My Applications
          </a>

          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100" href="./">
            <img  className="w-6 h-6" src={UserIcon }  alt="UserIcon" /> My Public Profile
          </a>
        </nav>

        {/* Settings */}
        <div className="mt-10 text-[#7C8493]">
          <h4 className="text-xs text-[#7C8493] uppercase mb-2">Settings</h4>

          <ul className="space-y-2">
            <li className=" flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-50 text-[#4640DE] font-semibold cursor-pointer">
             <img  className="w-6 h-6" src={GearIcon }  alt="gearIcon" /> Settings
            </li>
            <li className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
             <img  className="w-6 h-6" src={HelpIcon }  alt="helpIcon" /> Help Center
            </li>
          </ul>
        </div>
      </div>

      {/* Profile / Logout */}
      <div className="flex items-center gap-3 mt-6">
        <img
          src={ProfileImage}
          alt="avatar"
          className="w-11 h-11 rounded-full object-cover"
        />

        <div className="text-sm">
          <button className="text-red-500 text-xs mb-1 hover:underline">Log Out</button>
          <div className="font-semibold">Jake Gyll</div>
          <div className="text-[#7C8493] text-xs">jakegyll@email.com</div>
        </div>
      </div>
    </aside>
  );
}
