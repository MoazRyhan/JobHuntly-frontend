import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Basic/Navbar/Navbar';
import Footer from './components/Basic/footer/footer';
import LandingPage from './components/Applicants/LandingPage/LandingPage';
import FindJobs from './components/Applicants/FindJobs/FindJobs';
import Login from './components/Applicants/Login/Login';
import Signup from './components/Applicants/Signup/Signup';
import SearchCompanies from './components/Applicants/SearchCompanies/SearchCompanies';
import NotFoundPage from './components/Basic/NotFoundPage';
import CompanyPage from './components/Applicants/CompanyProfile/CompanyPage';
import type { Company } from './components/Applicants/CompanyProfile/Types';

import Dashboard from './components/Recruiters/Dashboard/Dashboard';
// import DashboardSettings from './components/Applicants/DashboardSettings/DashboardSettings';
import './App.css';

function App() {
  //test company data
  const testCompany: Company & { jobCount: number } = {
    id: 1,
    name: "Stripe",
    logo: "/images/company/stripe.png",
    website: "https://stripe.com",
    description: `Stripe is a software platform for starting and running internet businesses. 
                Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. 
                Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. 
                We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. 
                Stripe is built for developers, makers, and creators. 
                We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.`,
    founded: "2010",
    employees: "7000+",
    industry: "FinTech",
    linkedin: "https://www.linkedin.com/company/stripe/",
    facebook:
      "https://www.facebook.com/stripe",
    twitter: "https://twitter.com/stripe",
    locations: [
      { name: "San Francisco, USA", logo: "/images/location/us.png" },
      {
        name: "Dublin, Ireland",
        logo: "/images/location/england.png",
      },
      { name: "San Francisco, USA", logo: "/images/location/us.png" },
      {
        name: "Dublin, Ireland",
        logo: "/images/location/england.png",
      },
      { name: "San Francisco, USA", logo: "/images/location/us.png" },
      {
        name: "Dublin, Ireland",
        logo: "/images/location/england.png",
      },
      {
        name: "Dublin, Ireland",
        logo: "/images/location/england.png",
      },
    ],
    techStack: [
      { name: "React", logo: "/images/stack/ruby.png" },
      { name: "CSS", logo: "/images/stack/css.png" },
      { name: "JavaScript", logo: "/images/stack/js.png" },
      { name: "React", logo: "/images/stack/ruby.png" },
      { name: "CSS", logo: "/images/stack/css.png" },
      { name: "JavaScript", logo: "/images/stack/js.png" },
      { name: "CSS", logo: "/images/stack/css.png" },
    ],
    images: [
      { src: "/images/companyImage/img1.png" },
      { src: "/images/companyImage/img2.png" },
      { src: "/images/companyImage/img3.png" },
    ],
    jobCount: 14,
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="grow">
          <Routes>
            {/* Home / main pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/browse-companies" element={<SearchCompanies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* CompanyProfile test routes */}
            <Route path="/companies"  element={<CompanyPage company={testCompany} />}/>
            <Route path="/companies/:id" element={<CompanyPage company={testCompany} />} />

            <Route path="*" element={<NotFoundPage />} />

            // this is handled for now  ( moaz )
            <Route path="/Company" element={<Dashboard />} />
            {/* <Route path="/" element={<DashboardSettings />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
