import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function CompanyLogin() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();

  function validate() {
    const newErrors: LoginErrors = {};

    if (!values.email) 
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(values.email))
      newErrors.email = "Invalid email format";

    if (!values.password) 
      newErrors.password = "Password is required";
    else if (values.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) navigate("/find-jobs");
  }

   return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">

      <input
        type="email"
        placeholder="Enter company email"
        className={`w-full border rounded-md p-3 text-gray-700 focus:outline-none ${
          errors.email ? "border-red-500" : "border-gray-300"
        }`}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="password"
        placeholder="Enter password"
        className={`w-full border rounded-md p-3 text-gray-700 focus:outline-none ${
          errors.password ? "border-red-500" : "border-gray-300"
        }`}
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

      <button
        type="submit"
        className="w-full border border-gray-300 py-3 flex items-center justify-center rounded-md
                   text-white bg-[#4640DE] hover:bg-[#3b35c5] transition duration-300"
      >
        Login
      </button>

    </form>
  );
}
