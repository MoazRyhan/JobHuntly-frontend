import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import type { Company } from "../Types";

interface ContactProps {
  company: Company;
}

function ContactSection({ company }: ContactProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="flex flex-wrap gap-3 text-gray-700">

        {company.linkedin && (
          <div className="inline-flex items-center gap-3 text-sm px-3 py-2 border text-[#4640de] bg-white max-w-[calc(50%-6px)]">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#4640de]" />
            <span className="truncate">{company.linkedin}</span>
          </div>
        )}

        {company.twitter && (
          <div className="inline-flex items-center gap-3 text-sm px-3 py-2 border text-[#4640de] bg-white max-w-[calc(50%-6px)]">
            <FontAwesomeIcon icon={faPhone} className="text-[#4640de]" />
            <span className="truncate">{company.twitter}</span>
          </div>
        )}

        {company.facebook && (
          <div className="inline-flex items-center gap-3 text-sm px-3 py-2 border text-[#4640de] bg-white max-w-[calc(50%-6px)]">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#4640de]" />
            <span className="truncate">{company.facebook}</span>
          </div>
        )}

      </div>
    </div>
  );
}
export default ContactSection;

