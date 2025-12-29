import type { JSX } from "react";
import { useState } from "react";

export default function LoginCompanySettingsTab(): JSX.Element {
  const [newEmail, setNewEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [closeReason, setCloseReason] = useState("");
  const [confirmText, setConfirmText] = useState("");

  return (
    <>
      <div className="max-w-5xl mx-auto">
        {/* Basic heading */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Login Details Information
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            This is login information that you can update anytime.
          </p>
        </div>

        {/* Divider line */}
        <div className="border-b mb-8" />

        {/* Update email */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Update Email</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Update your email address to
              <br />
              make sure it is safe
            </p>
          </div>

          <div className="lg:col-span-2">
            {/* Current email with verification */}
            <div className="mb-6">
              <div className="font-semibold">jakegyll@email.com</div>
              <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                <svg
                  className="w-4 h-4 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Your email address is verified.</span>
              </div>
            </div>

            {/* New email input */}
            <div className="max-w-md">
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter your new email"
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button className="mt-3 w-full sm:w-auto px-4 py-2 bg-[#4640DE] text-white rounded text-sm shadow-sm hover:opacity-95">
                Update Email
              </button>
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 pb-16 border-b">
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">New Password</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Manage your password to make
              <br />
              sure it is safe
            </p>
          </div>

          <div className="lg:col-span-2 max-w-md">
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Old Password
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your old password"
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <div className="text-xs text-slate-400 mt-1">
                Minimum 8 characters
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-slate-700">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <div className="text-xs text-slate-400 mt-1">
                Minimum 8 characters
              </div>
            </div>

            <button className="mt-5 px-4 py-2 bg-[#4640DE] text-white rounded text-sm shadow-sm">
              Change Password
            </button>
          </div>
        </div>

        {/* Close account */}
        <div className="flex justify-end pt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-sm text-rose-500 hover:underline flex items-center gap-1"
          >
            Close Account
            <svg
              className="w-4 h-4 text-rose-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 4h.01M12 4a8 8 0 100 16 8 8 0 000-16z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          aria-modal="true"
        >
          <div className="bg-white max-w-lg w-full rounded-lg shadow-lg">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Close your account
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    This action is <strong>irreversible</strong>. Before
                    closing your account, please confirm.
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">
                  Reason (optional)
                </label>
                <textarea
                  value={closeReason}
                  onChange={(e) => setCloseReason(e.target.value)}
                  rows={4}
                  className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">
                  Type
                  <span className="text-xs text-slate-400 ml-2">
                    Type <strong>DELETE</strong> to confirm
                  </span>
                </label>
                <input
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  className="w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>

              <div className="mt-6 flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (confirmText.trim() !== "DELETE") {
                      alert("Type DELETE to confirm.");
                      return;
                    }
                    alert("Mock: account closed");
                    setIsModalOpen(false);
                  }}
                  className="px-4 py-2 bg-rose-500 text-white rounded text-sm"
                >
                  Close Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}