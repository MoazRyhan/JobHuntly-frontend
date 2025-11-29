import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type FormErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};


function JobSeekerForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function validate() {
  const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if(!form.email.trim()){
       newErrors.email= "Email is required";
    }
    else if (!form.email.includes("@")) {
      newErrors.email = "Email is not valid";
    }
    if(!form.password.trim()){
       newErrors.password= "Password is required";
    }
    else if (!passwordPattern.test(form.password)) {
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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="text-base font-epilogue text-[#515B6F] font-semibold block mb-1">
          Full name
        </label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className={`w-full border px-4 py-3 
            focus:ring-2 focus:ring-purple-300 outline-none border-gray-300
            ${errors.fullName ? "border-red-600" : ""}`}
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm">{errors.fullName}</p>
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
          className={`w-full border px-4 py-3 border-gray-300
            focus:ring-2 focus:ring-purple-300 outline-none
            ${errors.email ? "border-red-600" : ""}`}
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
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
          className={`w-full border px-4 py-3 border-gray-300
            focus:ring-2 focus:ring-purple-300 outline-none
            ${errors.password ? "border-red-600" : ""}`}
        />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password}</p>
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
export default JobSeekerForm; 
