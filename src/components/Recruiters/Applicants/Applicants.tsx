
import ApplicantsTable from "./ApplicantsTable";

export default function ApplicantsPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="flex-1 w-full px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-8 overflow-x-auto">
        <div className="w-full">
          <ApplicantsTable />
        </div>
      </div>
      </div>
  );
}


