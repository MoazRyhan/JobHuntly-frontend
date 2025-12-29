import { useState } from "react";
import ApplicationTable from "./ApplicationTable";
import SearchBar from "./SearchBar";
import { PageHeader } from "../DashboardSettings/headParts/headerPart";

export default function MyApplications() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
    <PageHeader 
        title="My Applications"     
        buttonText="Back to homepage"
        buttonLink="/Dashboard" />
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 w-full px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-8">        
        <div className="w-full max-w-[1104px] mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-[#25324B] text-xl md:text-2xl">Application History</h2>
            <SearchBar onSearch={(query) => setSearchText(query)} />
          </div>

          <div className="w-full overflow-x-auto">
            <ApplicationTable userId="user_applicant_001" searchText={searchText} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
