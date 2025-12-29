import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import Navbar from './components/Basic/Navbar/Navbar'
import Footer from './components/Basic/footer/footer'
import LandingPage from './components/Applicants/LandingPage/LandingPage'
import FindJobs from './components/Applicants/FindJobs/FindJobs'
import Login from './components/Applicants/Login/Login'
import Signup from './components/Applicants/Signup/Signup'
import SearchCompanies from './components/Applicants/SearchCompanies/SearchCompanies'
import NotFoundPage from './components/Basic/NotFoundPage'
import JobDescriptions from './components/Applicants/JobDescriptions/jobDescriptions'
import CompanyPageWrapper from './components/Applicants/CompanyProfile/CompanyPageWrapper'
import DashboardSettings from './components/Applicants/DashboardSettings/DashboardSettings'
import CompanyLayout from './components/Recruiters/CompanyLayout'
import CompanyDashboard from './components/Recruiters/Dashboard/Dashboard'
import JobCreateLayout from './components/Recruiters/JobCreate/JobCreateLayout'
import { JobCreateProvider } from './components/Recruiters/JobCreate/JobCreateContext'
import Step1 from './components/Recruiters/JobCreate/Components/Steps/Step1'
import Step2 from './components/Recruiters/JobCreate/Components/Steps/Step2'
import Step3 from './components/Recruiters/JobCreate/Components/Steps/Step3'
import Step4 from './components/Recruiters/JobCreate/Components/Steps/Step4'
import MyApplications from './components/Applicants/MyApplications/MyApplications'
import ApplicantProfile from './components/Recruiters/ApplicantProfile/ApplicantProfile'
import Resume from './components/Recruiters/ApplicantProfile/Resume'
import ApplyQuestionsAndAnswers from './components/Recruiters/ApplicantProfile/ApplyQuestionsAndAnswers'
import JobListPage from "./components/Recruiters/JobList/JobListPage";
import ApplicantsTable from './components/Recruiters/Applicants/ApplicantsTable'
import './App.css'
import DashboardPublicProfile from "./components/Applicants/DashboardPublicProfile/DashboardPublicProfile";
import DashboardHelpCenter from "./components/Applicants/DashboardSettings/HelpCenter";
import { DashboardUpdateProfile } from './components/Applicants/DashboardSettings/DashboardUpdataProfile'
import Dashboard from './components/Recruiters/Dashboard/Dashboard'
import DashboardUpdateCompanyProfile from './components/Recruiters/DashboardSettings/DashboardUpdataCompanyProfile'
import CompanyPageRecruiterWrapper from './components/Recruiters/DashboardCompanyProfile/CompanyPageRecruiterWrapper'
import { JobListing } from './components/Recruiters/JobListing/JobListing'
import DashboardHelpCenterRecruiter from './components/Recruiters/DashboardSettings/HelpCenterRecruiter'
import DashboardRecruiter from './components/Recruiters/DashboardSettings/DashboardRecruiterSettings'
import ProfileSettingsTab from './components/Applicants/DashboardSettings/ProfileSettings'
import LoginSettingsTab from './components/Applicants/DashboardSettings/LoginSettings'
import CompanyOverviewTab from './components/Recruiters/DashboardSettings/CompanyOverview'
import CompanySocialLinksTab from './components/Recruiters/DashboardSettings/CompanySocialLinks'
import JobDetailsTab from './components/Recruiters/JobListing/JobDetails'
import ApplicantsPage from './components/Recruiters/Applicants/Applicants'
import LoginCompanySettingsTab from './components/Recruiters/DashboardSettings/LoginCompanySettings'
import SocialLinksTab from './components/Applicants/DashboardSettings/SocialLinks'
import ProfileCareerTab from './components/Applicants/DashboardSettings/ProfileCareerTab'




function App() {
 const location = useLocation()

  const showNavbarRoutes = ['/', '/find-jobs', '/browse-companies']

  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname)

  return (
    <div className="min-h-screen flex flex-col">
      {shouldShowNavbar && <Navbar />}
        <main className="grow">
          <Routes>
            
            {/*Applicants=================================================*/}
            <Route path="/" element={<LandingPage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-jobs/:id" element={<JobDescriptions />} />
            <Route path="/browse-companies" element={<SearchCompanies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
            {/*mariz*/}
            <Route path="/companies/:id" element={<CompanyPageWrapper />} />
            <Route path="/my-applications" element={<MyApplications />} />
            <Route path="/companies/:companyId/jobs" element={<JobListPage />} />
            <Route path="/applicants/:jobId" element={<ApplicantsTable />} />



            
            {/*( moaz )*/}
            <Route path="/dashboard" element={<DashboardSettings />}>
              <Route index element={<div className="text-lg p-4">Dashboard</div>} />

              <Route path="settings" element={<DashboardUpdateProfile />}>
                <Route index element={<ProfileSettingsTab />} />
                <Route path="career" element={<ProfileCareerTab />} />
                <Route path="social-links" element={<SocialLinksTab />} />
                <Route path="login" element={<LoginSettingsTab />} />
              </Route>

              <Route path="public-profile" element={<DashboardPublicProfile />} />
              <Route path="applications" element={<MyApplications />} />
              <Route path="help" element={<DashboardHelpCenter />} />
            </Route>



            
            {/*( shuab )*/}
              <Route path="applicant-profile/:id" element={<ApplicantProfile />}>
                <Route index element={<Resume />} />
                <Route path="Q&A" element={<ApplyQuestionsAndAnswers />} />
              </Route>{' '}



            {/*Recruiters===============================================*/}

            {/*( moaz )*/}
             <Route path="/DashboardRecruiter" element={<DashboardRecruiter/>}>
                <Route index element={<Dashboard />} />
 
              <Route path="job-listing" element={<JobListing />}>
                <Route index element={<ApplicantsPage />} />
                <Route path="job-details" element={<JobDetailsTab />} />
              </Route>

              <Route path="settings" element={<DashboardUpdateCompanyProfile />}>
                <Route index element={<CompanyOverviewTab />} />
                <Route path="social-links" element={<CompanySocialLinksTab />} />
                <Route path="login-details" element={<LoginCompanySettingsTab />} />
              </Route>

                <Route path="company-profile" element={<CompanyPageRecruiterWrapper />} />
                <Route path="help" element={<DashboardHelpCenterRecruiter />} />
              </Route>


            {/*Ahmed*/}
            <Route path="/company" element={<CompanyLayout />}>
              <Route index element={<CompanyDashboard />} />

              <Route
                path="job-create"
                element={
                  <JobCreateProvider>
                    <JobCreateLayout />
                  </JobCreateProvider>
                }
              >
                <Route index element={<Step1 />} />
                <Route path="step-1" element={<Step1 />} />
                <Route path="step-2" element={<Step2 />} />
                <Route path="step-3" element={<Step3 />} />
                <Route path="step-4" element={<Step4 />} />
              </Route>
          </Route>
        </Routes>
      </main>

      <Footer />
      <Toaster />
    </div>
  )
}

export default App
