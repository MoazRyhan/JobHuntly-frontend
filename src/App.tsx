
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Basic/Navbar/Navbar';
import Footer from './components/Basic/footer/footer';
import LandingPage from './components/Applicants/LandingPage/LandingPage';
import FindJobs from './components/Applicants/FindJobs/FindJobs';
import Login from './components/Applicants/Login/Login';
import Signup from './components/Applicants/Signup/Signup';
import SearchCompanies from './components/Applicants/SearchCompanies/SearchCompanies';
import NotFoundPage from './components/Basic/NotFoundPage';
import DashboardSettings from './components/Applicants/DashboardSettings/DashboardSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}
            <Route path="/" element={<DashboardSettings />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/browse-companies" element={<SearchCompanies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;