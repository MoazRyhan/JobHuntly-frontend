import type { JSX } from "react";
import { useState } from "react";

export default function CompanySocialLinksTab(): JSX.Element {
  const [instagram, setInstagram] = useState("https://www.instagram.com/nomad/");
  const [twitter, setTwitter] = useState("https://twitter.com/nomad/");
  const [facebook, setFacebook] = useState("https://web.facebook.com/nomad/");
  const [linkedin, setLinkedin] = useState("");
  const [youtube, setYoutube] = useState("");

  return (
    <>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Social Links Information</h2>
        <p className="mt-2 text-sm text-slate-500">
          Add elsewhere links to your company profile. You can add only username without full https links.
        </p>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-slate-700">
            {/* left label empty intentionally */}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Instagram</label>
              <input
                className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Twitter</label>
              <input
                className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Facebook</label>
              <input
                className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">LinkedIn</label>
              <input
                className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Youtube</label>
              <input
                className="mt-2 w-full border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>

            {/* Save button aligned right */}
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-2 bg-[#4640DE] text-white rounded-md">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}