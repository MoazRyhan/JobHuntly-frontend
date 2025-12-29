import ProfileImage from "../../../assets/images/alex-suprun-ZHvM3XIOHoE-unsplash 1.png";
import type { JSX } from "react";
import { PageHeader } from "../DashboardSettings/headParts/headerPart";

/**
 * Responsive Tailwind version of the Public Profile page.
 * Uses utility-first classes and stacks nicely on small screens.
 *
 * Replace avatar src and text with your real data as needed.
 */
export function DashboardPublicProfile(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Page header */}
            <PageHeader 
              title="My Profile"     
              buttonText="Back to homepage"
              buttonLink="/Dashboard" />

      {/* Banner */}
      <section className="bg-white rounded-lg p-6 border border-gray-100 mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            {/* replace src with your image */}
            <img
              src={ProfileImage}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-1">Jake Gyll</h2>
            <p className="text-sm text-slate-600 mb-1">Product Designer at Twitter</p>
            <p className="text-sm text-slate-600">Manchester, UK</p>

            <div className="mt-4">
              <button className="inline-block px-3 py-2 bg-green-100 text-green-800 rounded text-sm">
                Open for opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="bg-white rounded-lg p-6 border border-gray-100 mb-6">
        <h3 className="text-base font-semibold mb-3">About Me</h3>
        <p className="text-sm text-slate-600">
          I'm a product designer & filmmaker currently working remotely at Twitter. I focus on designing delightful
          user experiences and telling better product stories through motion and visual design.
        </p>
      </section>

      {/* Experience */}
      <section className="bg-white rounded-lg p-6 border border-gray-100 mb-6">
        <h3 className="text-base font-semibold mb-4">Experiences</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium">Product Designer — Twitter</h4>
            <p className="text-sm text-slate-600">Full-Time • Jun 2019 – Present • Manchester, UK</p>
            <p className="text-sm text-slate-600 mt-2">
              Created and executed social media plan, designed product features and collaborated across design and
              engineering to ship user-facing experiences.
            </p>
          </div>

          <div>
            <h4 className="font-medium">Growth Marketing Designer — GoDaddy</h4>
            <p className="text-sm text-slate-600">Full-Time • Jun 2011 – May 2019 • Manchester, UK</p>
            <p className="text-sm text-slate-600 mt-2">Developed digital marketing strategies and creative assets for campaigns.</p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white rounded-lg p-6 border border-gray-100 mb-6">
        <h3 className="text-base font-semibold mb-4">Education</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium">Harvard University</h4>
            <p className="text-sm text-slate-600">Postgraduate Degree • Applied Psychology</p>
          </div>

          <div>
            <h4 className="font-medium">University of Toronto</h4>
            <p className="text-sm text-slate-600">Bachelor of Arts • Visual Communication</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white rounded-lg p-6 border border-gray-100 mb-6">
        <h3 className="text-base font-semibold mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded text-sm">Communication</span>
          <span className="px-3 py-1 bg-gray-100 rounded text-sm">Analytics</span>
          <span className="px-3 py-1 bg-gray-100 rounded text-sm">Facebook Ads</span>
          <span className="px-3 py-1 bg-gray-100 rounded text-sm">Content Planning</span>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white rounded-lg p-6 border border-gray-100">
        <h3 className="text-base font-semibold mb-3">Portfolios</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0" />
          <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0" />
          <div className="w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0" />
        </div>
      </section>
    </div>
  );
}

export default DashboardPublicProfile;
