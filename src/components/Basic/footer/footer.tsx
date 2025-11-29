// src/components/Footer/Footer.tsx
import React, { useState } from "react";
import logoImage from "../../../assets/images/Logo.svg";
import facebookIcon from "../../../assets/icons/square-facebook-brands-solid-full.svg" 
import instaIcon from "../../../assets/icons/square-instagram-brands-solid-full.svg" 
import earthIcon from "../../../assets/icons/earth-africa-solid-full.svg" 
import LinkedinIcon from "../../../assets/icons/linkedin-brands-solid-full.svg" 
import XIcon from "../../../assets/icons/x-twitter-brands-solid-full.svg" 

type FooterProps = {
  logoSrc?: string;
};

const Footer: React.FC<FooterProps> = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // simulate subscription (replace with real API call) mo66 test
    setSubscribed(true);
    setTimeout(() => setEmail(""), 900);
  };

return (
    <footer className="w-full bg-[#2b2d3a] text-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
          {/* Brand column */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">JobHuntly</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About column */}
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Companies</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Advice</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a className="hover:text-white transition-colors" href="#">Help Docs</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Guide</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Updates</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter column */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold">Get job notifications</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2.5 rounded-md bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                required
              />
              <button
                type="submit"
                className={`px-4 py-2.5 rounded-md font-medium text-white transition-colors text-sm
                  ${subscribed ? "bg-emerald-500 hover:bg-emerald-600" : "bg-[#4640DE] hover:bg-indigo-700"}`}
              >
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>

            {error && <div className="text-rose-400 text-xs">{error}</div>}
            {subscribed && !error && <div className="text-emerald-400 text-xs">Thanks — you're subscribed!</div>}
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            2025 © JobHuntly. All rights reserved.
          </div>
          
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition">
              <img src={facebookIcon }  alt="facebook" />
            </a>

            <a href="#" aria-label="Instagram" className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition">
            <img src={instaIcon }  alt="Instagram" />
            </a>

            <a href="#" aria-label="Dribbble" className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition">
              <img src={earthIcon }  alt="Dribbble" />
            </a>

            <a href="#" aria-label="LinkedIn" className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition">
              <img src={LinkedinIcon }  alt="LinkedIn" />
            </a>

            <a href="#" aria-label="X" className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center hover:bg-slate-600 transition">
              <img src={XIcon }  alt="X" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
