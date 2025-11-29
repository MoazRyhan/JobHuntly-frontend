import {useNavigate} from "react-router-dom";

interface PathProps {
  companyName: string;
  className?: string;
}

function CompanyPath({ companyName, className = "" }: PathProps) {
  const navigate = useNavigate();

  return (
    <div className={`text-gray-500 text-sm flex items-center gap-1 ${className}`}>
      <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">
        Home
      </span>

      <span>/</span>

      <span onClick={() => navigate("/companies")} className="cursor-pointer hover:underline">
        Companies
      </span>

      <span>/</span>

      <span className="text-gray-800 font-medium">{companyName}</span>
    </div>
  );
}

export default CompanyPath;

