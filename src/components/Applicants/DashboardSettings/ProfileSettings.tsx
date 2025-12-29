import type { JSX } from "react";
import { useEffect, useState } from "react";
import ProfileImage from "../../../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash 1.png";
import axios from "axios";

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  city: string;
  country: string;
  aboutMe: string;
  avatar?: string;
}

export default function ProfileSettingsTab(): JSX.Element {
  const [profile, setProfile] = useState<ProfileData>({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    city: "",
    country: "",
    aboutMe: "",
  });

  const [saving, setSaving] = useState(false);

  /* 🔹 Load profile data */
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/profile", {
          withCredentials: true,
        });

        setProfile({
          ...profile,
          ...res.data,
        });
      } catch (err) {
        console.error("Failed to load profile", err);
      }
    };

    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 🔹 Handle input change */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  /* 🔹 Save profile */
  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put("/api/profile", profile, {
        withCredentials: true,
      });
      alert("Profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* Basic heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Basic Information
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          This is your personal information that you can update anytime.
        </p>
      </div>

      <div className="border-t border-b py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left column */}
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Profile Photo</div>
            <p className="text-xs text-slate-400">
              This image will be shown publicly as your profile picture,
              it will help recruiters recognize you!
            </p>
          </div>

          {/* Avatar */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img
                src={profile.avatar || ProfileImage}
                alt="avatar"
                className="w-24 h-24 rounded-full object-cover ring-2 ring-slate-100"
              />

              <label
                htmlFor="avatar-upload"
                className="flex-1 border-2 border-dashed border-[#4640DE] rounded-md p-6 text-center cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2">
                  <svg
                    className="w-6 h-6 text-[#4640DE]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 16v-4m0 0l5-5 5 5M12 12v8"
                    />
                  </svg>
                  <div className="text-sm font-medium text-slate-700">
                    Click to replace or drag and drop
                  </div>
                  <div className="text-xs text-slate-400">
                    SVG, PNG, JPG or GIF (max. 400 x 400px)
                  </div>
                </div>
                <input
                  id="avatar-upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Personal details */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Personal Details</div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* ✅ City */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                City
              </label>
              <input
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            {/* ✅ Country */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Country
              </label>
              <input
                name="country"
                value={profile.country}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ About Me (same section style) */}
      <div className="py-8 border-t">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">About Me</div>
          </div>

          <div className="lg:col-span-2">
            <textarea
              name="aboutMe"
              value={profile.aboutMe}
              onChange={handleChange}
              className="w-full border border-slate-200 rounded px-3 py-2 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>
      </div>

      {/* Save button (UNCHANGED POSITION & STYLE) */}
      <div className="pt-6 pb-8 border-t">
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-4 py-2 bg-[#4640DE] text-white rounded shadow-sm disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save Profile"}
          </button>
        </div>
      </div>
    </>
  );
}
