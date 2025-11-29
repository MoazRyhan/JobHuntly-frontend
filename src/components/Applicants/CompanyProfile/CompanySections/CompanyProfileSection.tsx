import type { Company } from "../Types";

interface CompanyProfileProps {
  company: Company;
}

function CompanyProfileSection({company}: CompanyProfileProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Company Profile</h2>
      <p className="col-span-3 max-w-[85%]  text-gray-700 font-epilogue wrap-break-word">
        {company.description}
      </p>
    </div>
  );
}

export default CompanyProfileSection;