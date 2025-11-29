import { useState } from "react";
import JobSeekerForm from "./JobSeekerForm";
import CompanyForm from "./CompanyForm";

function Signup() {
  const [activeTab, setActiveTab] = useState<"jobseeker" | "company">(
    "jobseeker");

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white [&_*]:!overflow-visible">

      <div className="w-full lg:w-[634px] h-[400px] lg:h-[850px] bg-gray-100 overflow-hidden">
        <img
          src="/images/login.png"
          alt="Signup visual"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex justify-center items-start overflow-visible">
        <div className="w-[408px] h-auto lg:h-[724px] pt-[63px] flex flex-col gap-6 overflow-visible">

          <div className="flex gap-6 justify-center">
            <button
              onClick={() => setActiveTab("jobseeker")}
              className={`font-semibold px-4 py-1 rounded ${
                activeTab === "jobseeker" ? "text-[#4640DE] bg-[#E9EBFD]" : "text-gray-600"
              }`}
            >
              Job Seeker
            </button>

            <button
              onClick={() => setActiveTab("company")}
              className={`font-semibold px-4 py-1 rounded ${
                activeTab === "company" ? "text-[#4640DE] bg-[#E9EBFD]" : "text-gray-600"
              }`}
            >
              Company
            </button>
          </div>

<h2 className="text-4xl font-bold w-full whitespace-nowrap text-center">Get more opportunities</h2>
          <button
            className="w-full border border-gray-300 py-3 flex rounded
        items-center justify-center gap-3 text-gray-700 hover:bg-gray-50"
          >
            <img src="/images/google.png" className="w-5 h-5" alt="Google" />
            Sign Up with Google
          </button>

          <div className="flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-base">
              Or sign up with email
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {activeTab === "jobseeker" ? <JobSeekerForm /> : <CompanyForm />}

          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <a className="font-semibold cursor-pointer text-[#4640DE]">Login</a>
          </p>

          <p className="text-xs text-gray-500 leading-5">
            By clicking 'Continue', you acknowledge that you have read and
            accept the{" "}
            <span className="text-sm text-[#4640DE]">Terms of Service</span> and
            <span className="text-sm text-[#4640DE]"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;
