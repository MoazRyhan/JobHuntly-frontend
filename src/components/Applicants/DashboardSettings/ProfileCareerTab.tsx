import type { JSX } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

/* ================= SAFE DEFAULT STATE ================= */
const defaultState = {
  headline: "",
  currentJobTitle: "",
  experienceYears: "" as number | "",
  highestQualification: "",
  openForOpportunities: false,

  skills: [] as string[],

  languages: [] as {
    name: string;
    level: string;
  }[],

  experiences: [] as {
    jobTitle: string;
    companyName: string;
    employmentType?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    currentlyWorking?: boolean;
    description?: string;
  }[],

  educations: [] as {
    institution: string;
    degree?: string;
    fieldOfStudy?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
  }[],

  resumeUrl: "",
  portfolioUrl: "",
  backgroundUrl: "",
};

export default function ProfileCareerTab(): JSX.Element {
  const [data, setData] = useState(defaultState);
  const [saving, setSaving] = useState(false);
  
  // Skills input
  const [skillInput, setSkillInput] = useState("");
  
  // Modal states
  const [languageModal, setLanguageModal] = useState(false);
  const [experienceModal, setExperienceModal] = useState(false);
  const [educationModal, setEducationModal] = useState(false);
  
  
  // Language form
  const [langForm, setLangForm] = useState({ name: "", level: "" });
  
  // Experience form
  const [expForm, setExpForm] = useState({
    jobTitle: "",
    companyName: "",
    employmentType: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });
  
  // Education form
  const [eduForm, setEduForm] = useState({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/profile/career", {
          withCredentials: true,
        });

        setData({
          ...defaultState,
          ...res.data,
          skills: res.data?.skills ?? [],
          languages: res.data?.languages ?? [],
          experiences: res.data?.experiences ?? [],
          educations: res.data?.educations ?? [],
        });
      } catch (err) {
        console.error("Failed to load career profile", err);
      }
    };

    fetchData();
  }, []);

  /* ================= SAVE ================= */
  const handleSave = async () => {
    setSaving(true);
    try {
      await axios.put("/api/profile/career", data, {
        withCredentials: true,
      });
      alert("Career profile updated");
    } catch (err) {
      console.error(err);
      alert("Failed to save career profile");
    } finally {
      setSaving(false);
    }
  };
  
  /* ================= SKILLS ================= */
  const addSkill = () => {
    if (skillInput.trim()) {
      setData({ ...data, skills: [...data.skills, skillInput.trim()] });
      setSkillInput("");
    }
  };
  
  const removeSkill = (index: number) => {
    setData({ ...data, skills: data.skills.filter((_, i) => i !== index) });
  };
  
  /* ================= LANGUAGE ================= */
  const addLanguage = () => {
    if (langForm.name.trim() && langForm.level.trim()) {
      setData({ ...data, languages: [...data.languages, langForm] });
      setLangForm({ name: "", level: "" });
      setLanguageModal(false);
    }
  };
  
  const removeLanguage = (index: number) => {
    setData({ ...data, languages: data.languages.filter((_, i) => i !== index) });
  };
  
  /* ================= EXPERIENCE ================= */
  const addExperience = () => {
    if (expForm.jobTitle.trim() && expForm.companyName.trim()) {
      setData({ ...data, experiences: [...data.experiences, expForm] });
      setExpForm({
        jobTitle: "",
        companyName: "",
        employmentType: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      });
      setExperienceModal(false);
    }
  };
  
  const removeExperience = (index: number) => {
    setData({ ...data, experiences: data.experiences.filter((_, i) => i !== index) });
  };
  
  /* ================= EDUCATION ================= */
  const addEducation = () => {
    if (eduForm.institution.trim()) {
      setData({ ...data, educations: [...data.educations, eduForm] });
      setEduForm({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        description: "",
      });
      setEducationModal(false);
    }
  };
  
  const removeEducation = (index: number) => {
    setData({ ...data, educations: data.educations.filter((_, i) => i !== index) });
  };

    /* ================= FILE HANDLERS ================= */
  const handleBackgroundUpload = (file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setData({ ...data, backgroundUrl: previewUrl });
  };

  const handleResumeUpload = (file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setData({ ...data, resumeUrl: previewUrl });
  };


  return (
    <>
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Career Information
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Manage your professional background and career preferences.
        </p>
      </div>

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="border-t border-b py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Background Image</div>
            <p className="text-xs text-slate-400">
              This image will be shown as your profile background banner.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {data.backgroundUrl && (
                <div className="w-full h-32 rounded-md overflow-hidden bg-gray-100">
                  <img src={data.backgroundUrl} alt="background" className="w-full h-full object-cover" />
                </div>
              )}

              <label
                htmlFor="background-upload"
                className="border-2 border-dashed border-[#4640DE] rounded-md p-6 text-center cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center gap-2">
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
                  <div className="text-sm font-medium text-slate-700">Click to replace or drag and drop</div>
                  <div className="text-xs text-slate-400">SVG, PNG, JPG or GIF (max. 1920 x 400px)</div>
                </div>
                <input id="background-upload" type="file" className="hidden" accept="image/*" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RESUME UPLOAD ================= */}
      <div className="border-b py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Resume / CV</div>
            <p className="text-xs text-slate-400">
              Upload your resume or CV to share with potential employers.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-6">
              {data.resumeUrl && (
                <div className="flex items-center gap-3 p-3 border rounded-md bg-gray-50">
                  <svg
                    className="w-8 h-8 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-700">Resume uploaded</div>
                    <a
                      href={data.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#4640DE] hover:underline"
                    >
                      View resume
                    </a>
                  </div>
                </div>
              )}

              <label
                htmlFor="resume-upload"
                className="border-2 border-dashed border-[#4640DE] rounded-md p-6 text-center cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center gap-2">
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
                  <div className="text-sm font-medium text-slate-700">Click to upload or drag and drop</div>
                  <div className="text-xs text-slate-400">PDF, DOC, DOCX (max. 5MB)</div>
                </div>
                <input id="resume-upload" type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ================= BASIC DETAILS ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Basic Details</div>
            <p className="text-xs text-slate-400">
              Provide essential information about your career profile
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Headline
                </label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={data.headline}
                  onChange={(e) =>
                    setData({ ...data, headline: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Current Job Title
                </label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={data.currentJobTitle}
                  onChange={(e) =>
                    setData({ ...data, currentJobTitle: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Years of Experience
                </label>
                <input
                  type="number"
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={data.experienceYears}
                  onChange={(e) =>
                    setData({
                      ...data,
                      experienceYears:
                        e.target.value === "" ? "" : Number(e.target.value),
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Highest Qualification
                </label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  value={data.highestQualification}
                  onChange={(e) =>
                    setData({
                      ...data,
                      highestQualification: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= JOB PREFERENCES ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Job Preferences</div>
            <p className="text-xs text-slate-400">
              Let recruiters know your availability
            </p>
          </div>

          <div className="lg:col-span-2">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={data.openForOpportunities}
                onChange={(e) =>
                  setData({
                    ...data,
                    openForOpportunities: e.target.checked,
                  })
                }
                className="mt-1"
              />
              <div>
                <div className="font-medium text-slate-900">
                  Open for new opportunities
                </div>
                <div className="text-xs text-slate-400">
                  Recruiters will be able to see that you're actively looking
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* ================= SKILLS ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Skills</div>
            <p className="text-xs text-slate-400">
              Highlight your key professional skills
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="flex gap-2 mb-3">
              <input
                className="flex-1 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Add a skill (e.g., JavaScript, Design)"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addSkill()}
              />
              <button
                onClick={addSkill}
                className="px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
              >
                Add
              </button>
            </div>
            
            {data.skills.length === 0 ? (
              <p className="text-sm text-slate-400">No skills added yet</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-indigo-50 text-indigo-700 text-xs flex items-center gap-1"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(i)}
                      className="ml-1 text-indigo-500 hover:text-indigo-700"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= LANGUAGES ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Languages</div>
            <p className="text-xs text-slate-400">
              Languages you can communicate in
            </p>
          </div>

          <div className="lg:col-span-2">
            <button
              onClick={() => setLanguageModal(true)}
              className="mb-3 px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
            >
              + Add Language
            </button>
            
            {data.languages.length === 0 ? (
              <p className="text-sm text-slate-400">No languages added yet</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {data.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs flex items-center gap-1"
                  >
                    {lang.name} - {lang.level}
                    <button
                      onClick={() => removeLanguage(i)}
                      className="ml-1 text-emerald-500 hover:text-emerald-700"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= EXPERIENCE ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Work Experience</div>
            <p className="text-xs text-slate-400">
              Your professional work history
            </p>
          </div>

          <div className="lg:col-span-2">
            <button
              onClick={() => setExperienceModal(true)}
              className="mb-3 px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
            >
              + Add Experience
            </button>
            
            {data.experiences.length === 0 ? (
              <p className="text-sm text-slate-400">No experiences added yet</p>
            ) : (
              <div className="space-y-4">
                {data.experiences.map((exp, i) => (
                  <div key={i} className="border rounded-md p-4 text-sm bg-white relative">
                    <button
                      onClick={() => removeExperience(i)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
                    >
                      ✕
                    </button>
                    <div className="font-medium text-slate-900">{exp.jobTitle}</div>
                    <div className="text-slate-500 text-xs mt-1">{exp.companyName}</div>
                    {exp.description && (
                      <p className="mt-2 text-slate-600 text-xs">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Education</div>
            <p className="text-xs text-slate-400">
              Your academic background and qualifications
            </p>
          </div>

          <div className="lg:col-span-2">
            <button
              onClick={() => setEducationModal(true)}
              className="mb-3 px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
            >
              + Add Education
            </button>
            
            {data.educations.length === 0 ? (
              <p className="text-sm text-slate-400">No education records added</p>
            ) : (
              <div className="space-y-4">
                {data.educations.map((edu, i) => (
                  <div key={i} className="border rounded-md p-4 text-sm bg-white relative">
                    <button
                      onClick={() => removeEducation(i)}
                      className="absolute top-3 right-3 text-slate-400 hover:text-slate-600"
                    >
                      ✕
                    </button>
                    <div className="font-medium text-slate-900">{edu.institution}</div>
                    <div className="text-slate-500 text-xs mt-1">
                      {edu.degree}
                      {edu.fieldOfStudy && ` • ${edu.fieldOfStudy}`}
                    </div>
                    {edu.description && (
                      <p className="mt-2 text-slate-600 text-xs">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= FILES & LINKS ================= */}
      <div className="py-8 border-b">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Additional Links</div>
            <p className="text-xs text-slate-400">
              Share your portfolio and other professional profiles
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">
                  Portfolio URL
                </label>
                <input
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="https://yourportfolio.com"
                  value={data.portfolioUrl}
                  onChange={(e) =>
                    setData({ ...data, portfolioUrl: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LANGUAGE MODAL ================= */}
      {languageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          aria-modal="true"
        >
          <div className="bg-white max-w-lg w-full rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Add Language
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Add a language you can communicate in
                  </p>
                </div>

                <button
                  onClick={() => setLanguageModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">
                  Language Name
                </label>
                <input
                  value={langForm.name}
                  onChange={(e) => setLangForm({ ...langForm, name: e.target.value })}
                  placeholder="e.g., English"
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">
                  Proficiency Level
                </label>
                <select
                  value={langForm.level}
                  onChange={(e) => setLangForm({ ...langForm, level: e.target.value })}
                  className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  <option value="">Select level</option>
                  <option value="Native">Native</option>
                  <option value="Fluent">Fluent</option>
                  <option value="Professional">Professional</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Basic">Basic</option>
                </select>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setLanguageModal(false)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={addLanguage}
                  className="px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
                >
                  Add Language
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= EXPERIENCE MODAL ================= */}
      {experienceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          aria-modal="true"
        >
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Add Work Experience
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Add your professional work experience
                  </p>
                </div>

                <button
                  onClick={() => setExperienceModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={expForm.jobTitle}
                    onChange={(e) => setExpForm({ ...expForm, jobTitle: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={expForm.companyName}
                    onChange={(e) => setExpForm({ ...expForm, companyName: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Employment Type
                  </label>
                  <select
                    value={expForm.employmentType}
                    onChange={(e) => setExpForm({ ...expForm, employmentType: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="">Select type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Location
                  </label>
                  <input
                    value={expForm.location}
                    onChange={(e) => setExpForm({ ...expForm, location: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={expForm.startDate}
                    onChange={(e) => setExpForm({ ...expForm, startDate: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={expForm.endDate}
                    onChange={(e) => setExpForm({ ...expForm, endDate: e.target.value })}
                    disabled={expForm.currentlyWorking}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:bg-gray-100"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={expForm.currentlyWorking}
                      onChange={(e) => setExpForm({ ...expForm, currentlyWorking: e.target.checked })}
                    />
                    <span className="text-sm text-slate-700">I currently work here</span>
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Description
                  </label>
                  <textarea
                    value={expForm.description}
                    onChange={(e) => setExpForm({ ...expForm, description: e.target.value })}
                    rows={4}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setExperienceModal(false)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={addExperience}
                  className="px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
                >
                  Add Experience
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDUCATION MODAL ================= */}
      {educationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          aria-modal="true"
        >
          <div className="bg-white max-w-2xl w-full rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Add Education
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    Add your educational background
                  </p>
                </div>

                <button
                  onClick={() => setEducationModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Institution <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={eduForm.institution}
                    onChange={(e) => setEduForm({ ...eduForm, institution: e.target.value })}
                    placeholder="e.g., Harvard University"
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Degree
                  </label>
                  <input
                    value={eduForm.degree}
                    onChange={(e) => setEduForm({ ...eduForm, degree: e.target.value })}
                    placeholder="e.g., Bachelor's Degree"
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Field of Study
                  </label>
                  <input
                    value={eduForm.fieldOfStudy}
                    onChange={(e) => setEduForm({ ...eduForm, fieldOfStudy: e.target.value })}
                    placeholder="e.g., Computer Science"
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={eduForm.startDate}
                    onChange={(e) => setEduForm({ ...eduForm, startDate: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={eduForm.endDate}
                    onChange={(e) => setEduForm({ ...eduForm, endDate: e.target.value })}
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Description
                  </label>
                  <textarea
                    value={eduForm.description}
                    onChange={(e) => setEduForm({ ...eduForm, description: e.target.value })}
                    rows={4}
                    placeholder="Describe your achievements, coursework, etc."
                    className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setEducationModal(false)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={addEducation}
                  className="px-4 py-2 bg-[#4640DE] text-white rounded text-sm"
                >
                  Add Education
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
       {/* ================= BACKGROUND IMAGE ================= */}
      <div className="border-t border-b py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Background Image</div>
            <p className="text-xs text-slate-400">
              This image will be shown as your profile background banner.
            </p>
          </div>

          <div className="lg:col-span-2">
            {data.backgroundUrl && (
              <div className="w-full h-32 rounded-md overflow-hidden bg-gray-100 mb-4">
                <img
                  src={data.backgroundUrl}
                  alt="background"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <label
              htmlFor="background-upload"
              className="border-2 border-dashed border-[#4640DE] rounded-md p-6 text-center cursor-pointer"
            >
              Click to upload
              <input
                id="background-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) =>
                  e.target.files?.[0] &&
                  handleBackgroundUpload(e.target.files[0])
                }
              />
            </label>
          </div>
        </div>
      </div>

      {/* ================= RESUME ================= */}
      <div className="border-b py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Resume / CV</div>
            <p className="text-xs text-slate-400">
              Upload your resume to share with employers.
            </p>
          </div>

          <div className="lg:col-span-2">
            {data.resumeUrl && (
              <a
                href={data.resumeUrl}
                target="_blank"
                className="block mb-3 text-sm text-[#4640DE]"
              >
                View Resume
              </a>
            )}

            <label
              htmlFor="resume-upload"
              className="border-2 border-dashed border-[#4640DE] rounded-md p-6 text-center cursor-pointer"
            >
              Click to upload
              <input
                id="resume-upload"
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) =>
                  e.target.files?.[0] &&
                  handleResumeUpload(e.target.files[0])
                }
              />
            </label>
          </div>
        </div>
      </div>

      {/* ================= SAVE ================= */}
      <div className="pt-6 pb-8">
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-[#4640DE] text-white rounded-md"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </>
  );
}