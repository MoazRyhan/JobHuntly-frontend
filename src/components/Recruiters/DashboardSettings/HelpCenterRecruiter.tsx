import { useState, useMemo, type JSX } from "react";
import { PageHeader } from "../../Applicants/DashboardSettings/headParts/headerPart"

/**
 * DashboardHelpCenterRecruiter — improved typography version.
 * Make sure Inter is loaded (see snippet above) so fonts render as intended.
 */
export function DashboardHelpCenterRecruiter(): JSX.Element {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // contact form state
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactError, setContactError] = useState("");

  // sample categories + faqs (same as before, trimmed)
  const CATEGORIES = useMemo(
    () => [
      { id: "account", title: "Account & Login", desc: "Manage your account and login details." },
      { id: "applications", title: "Applications", desc: "Posting and tracking applications." },
      { id: "profile", title: "Profile", desc: "Profile visibility & settings." },
      { id: "security", title: "Security & Privacy", desc: "Privacy and data questions." },
      { id: "notifications", title: "Notifications", desc: "Control email and in-app alerts." },
      { id: "getting-started", title: "Getting Started", desc: "Guides for new users." },
    ],
    []
  );

  const FAQ_DATA = useMemo(
    () => [
      { id: "f1", q: "How do I reset my password?", a: "Use the Reset Password flow on the sign-in screen or Settings → Login Details.", category: "account", popular: true },
      { id: "f2", q: "How do I change my account email?", a: "Go to Settings → Login Details and follow the verification steps.", category: "account", popular: true },
      { id: "f3", q: "How do I hide my profile from employers?", a: "Open Public Profile settings and toggle visibility options.", category: "profile" },
      { id: "f4", q: "Why am I not receiving notifications?", a: "Check your Notification settings and device permissions.", category: "notifications" },
      { id: "f5", q: "How do I delete my account permanently?", a: "Use Close Account in Settings → Login Details. You will be asked to confirm.", category: "account", popular: true },
      { id: "f6", q: "How to post a job listing?", a: "From the company dashboard click 'Post a job' and complete the form.", category: "applications" },
    ],
    []
  );

  const faqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ_DATA.filter((f) => {
      if (activeCategory && f.category !== activeCategory) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    });
  }, [query, activeCategory, FAQ_DATA]);

  const popularFaqs = FAQ_DATA.filter((f) => f.popular);

  function onSearchSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    if (query.trim()) {
      setRecentSearches((s) => [query.trim(), ...s.filter((r) => r !== query.trim())].slice(0, 5));
    }
  }

  function toggleExpand(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function openContact() {
    setContactError("");
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setIsContactOpen(true);
  }

  function submitContact() {
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactError("Please fill name, email and a short message.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(contactEmail)) {
      setContactError("Please enter a valid email address.");
      return;
    }
    alert(`Message sent — ${contactName}`);
    setIsContactOpen(false);
  }

  // Root outer class uses font-sans (Inter via global CSS)
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans antialiased">
      <PageHeader
        title="Help center"
        buttonText="Back to homepage"
        buttonLink="/DashboardRecruiter"
      />

      <div className="max-w-6xl mx-auto mt-6 space-y-8">
        {/* Search + CTAs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <form onSubmit={onSearchSubmit} className="flex-1">
            <label htmlFor="hc-search" className="sr-only">Search help</label>
            <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 py-2 shadow-sm">
              <svg className="w-5 h-5 text-slate-400 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7 7 0 105.65 5.65a7 7 0 0011 11z" />
              </svg>

              <input
                id="hc-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for topics, FAQs, and guides..."
                className="flex-1 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                aria-label="Search help"
              />

              {query && (
                <button type="button" onClick={() => setQuery("")} className="text-xs text-slate-400 ml-3">
                  Clear
                </button>
              )}
            </div>

            {recentSearches.length > 0 && (
              <div className="mt-2 text-xs text-slate-500">
                Recent:
                <span className="inline-flex gap-2 ml-2">
                  {recentSearches.map((r) => (
                    <button
                      key={r}
                      onClick={() => setQuery(r)}
                      className="px-2 py-0.5 bg-gray-100 rounded text-xs hover:bg-gray-200"
                    >
                      {r}
                    </button>
                  ))}
                </span>
              </div>
            )}
          </form>

          <div className="flex gap-3">
            <button onClick={openContact} className="px-4 py-2 bg-[#4640DE] text-white rounded-md text-sm font-medium">Contact Support</button>
            <button onClick={() => { setQuery(""); setActiveCategory(null); setExpanded({}); }} className="px-4 py-2 border border-gray-200 rounded-md text-sm">Reset</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-slate-900 mb-3 tracking-tight">Browse by category</h3>
            <div className="space-y-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === null ? "bg-[#eef2ff] text-[#4640DE] font-semibold" : "hover:bg-gray-50 text-slate-600"}`}
              >
                All categories
              </button>

              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory((s) => (s === c.id ? null : c.id))}
                  className={`w-full text-left px-3 py-2 rounded-md ${activeCategory === c.id ? "bg-[#eef2ff] text-[#4640DE] font-semibold" : "hover:bg-gray-50 text-slate-600"}`}
                >
                  <div className="text-sm font-medium">{c.title}</div>
                  <div className="text-xs text-slate-400 mt-1">{c.desc}</div>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-slate-900 mb-2">Popular</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                {popularFaqs.slice(0, 4).map((f) => (
                  <li key={f.id}>
                    <button onClick={() => toggleExpand(f.id)} className="text-left w-full text-sm text-slate-700 hover:underline">
                      {f.q}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 tracking-tight">Popular questions</h2>
                <p className="text-sm text-slate-500 mt-1">{faqs.length} result{faqs.length !== 1 ? "s" : ""} {activeCategory ? `in "${CATEGORIES.find(c => c.id === activeCategory)?.title}"` : ""}</p>
              </div>
              <div className="text-sm text-slate-500">Showing most relevant</div>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg divide-y">
              {faqs.length === 0 ? (
                <div className="p-6 text-sm text-slate-500">No results found. Try a different search or browse categories.</div>
              ) : (
                faqs.map((f) => {
                  const isOpen = !!expanded[f.id];
                  return (
                    <div key={f.id} className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <button onClick={() => toggleExpand(f.id)} aria-expanded={isOpen} className="text-left w-full">
                            <div className="text-sm font-medium text-slate-900">{f.q}</div>
                          </button>

                          <div className="mt-2 text-sm text-slate-600">
                            <span className="inline-block mr-2 text-xs text-slate-400 uppercase tracking-wider">{CATEGORIES.find(c => c.id === f.category)?.title}</span>
                            {!isOpen && <span className="text-sm text-slate-500">{f.a.slice(0, 140)}{f.a.length > 140 ? "…" : ""}</span>}
                          </div>
                        </div>

                        <div className="flex-shrink-0 ml-4">
                          <button onClick={() => toggleExpand(f.id)} aria-label={isOpen ? "Collapse" : "Expand"} className="p-2 rounded hover:bg-gray-50">
                            <svg className={`w-5 h-5 text-slate-400 transform ${isOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {isOpen && (
                        <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                          {f.a}
                          <div className="mt-3"><a href="#" className="text-sm text-[#4640DE] hover:underline">Read detailed guide</a></div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            <div className="mt-6 flex justify-center">
              <button onClick={() => {}} className="px-4 py-2 border border-gray-200 rounded-md text-sm">Load more</button>
            </div>
          </main>
        </div>

        <div className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Still need help?</h3>
            <p className="text-sm text-slate-500 mt-1">If you can’t find what you’re looking for, our support team is here to help.</p>
          </div>

          <div className="flex gap-3">
            <button onClick={openContact} className="px-4 py-2 bg-[#4640DE] text-white rounded-md text-sm font-medium">Contact Support</button>
            <a href="/docs" className="px-4 py-2 border border-gray-200 rounded-md text-sm hover:bg-gray-50">Documentation</a>
          </div>
        </div>
      </div>

      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsContactOpen(false)} />
          <div className="relative bg-white rounded-lg max-w-lg w-full shadow-lg z-10">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">Contact Support</h4>
                <button onClick={() => setIsContactOpen(false)} className="p-1 rounded hover:bg-gray-50">✕</button>
              </div>

              <p className="text-sm text-slate-500 mt-2">Describe your issue and we'll get back to you within 1 business day.</p>

              {contactError && <div className="mt-3 text-sm text-rose-600">{contactError}</div>}

              <div className="mt-4 space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input className="mt-1 w-full border border-gray-200 rounded px-3 py-2 text-sm" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input className="mt-1 w-full border border-gray-200 rounded px-3 py-2 text-sm" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea className="mt-1 w-full border border-gray-200 rounded px-3 py-2 text-sm min-h-[120px]" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} />
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-3">
                <button onClick={() => setIsContactOpen(false)} className="px-4 py-2 border rounded-md text-sm">Cancel</button>
                <button onClick={submitContact} className="px-4 py-2 bg-[#4640DE] text-white rounded-md text-sm">Send message</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardHelpCenterRecruiter;
