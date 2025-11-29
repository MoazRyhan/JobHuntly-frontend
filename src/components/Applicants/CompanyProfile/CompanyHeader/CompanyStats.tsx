import { faCalendarAlt, faUsers, faMapMarkerAlt, faBuilding } from "@fortawesome/free-solid-svg-icons";
import DetailItem from "./DetailItem";

interface Props {
  founded: string;
  employees: string;
  location: number;
  industry: string;
}

function CompanyStats({ founded, employees, location, industry }: Props) {
  return (
    <div className="flex flex-wrap gap-10 justify-items-stretch pt-3 font-epilogue text-base text-slate-600">
      <DetailItem icon={faCalendarAlt} label="Founded" value={founded} />
      <DetailItem icon={faUsers} label="Employees" value={employees} />
      <DetailItem icon={faMapMarkerAlt} label="Location" value={location.toLocaleString() + " Countries"} />
      <DetailItem icon={faBuilding} label="Industry" value={industry} />
    </div>
  );
}
export default CompanyStats;
