import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type CompanyErrors = {
  companyName?: string;
  email?: string;
  password?: string;
};

function CompanyForm() {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<CompanyErrors>({});

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const navigate = useNavigate();


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    const newErrors: CompanyErrors = {};

    if (!form.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Email must contain '@'";
    }

    if (!passwordPattern.test(form.password)) {
      newErrors.password =
        "Password must be 8+ chars, include uppercase, lowercase, number & special character.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    navigate("/find-jobs");

  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 ">
      <div>
        <label className="text-base font-epilogue text-[#515B6F] font-semibold block mb-1">
          Company Name
        </label>
        <input
          type="text"
          name="companyName"
          value={form.companyName}
          onChange={handleChange}
          placeholder="Enter your company name"
          className="w-full border px-4 py-3 
                     focus:ring-2 focus:ring-purple-300 outline-none border-gray-300"
        />
        {errors.companyName && (
          <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
        )}
      </div>

      <div>
        <label className="text-base font-epilogue text-[#515B6F] font-semibold block mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email address"
          className="w-full border px-4 py-3 
                     focus:ring-2 focus:ring-purple-300 outline-none border-gray-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="text-base font-epilogue text-[#515B6F] font-semibold block mb-1">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password"
          className="w-full border px-4 py-3 
                     focus:ring-2 focus:ring-purple-300 outline-none border-gray-300"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#4640DE] text-white py-3
                   transition duration-300 ease-in-out hover:scale-[1.01] cursor-pointer"
      >
        Continue
      </button>
    </form>
  );
}
export default CompanyForm;
