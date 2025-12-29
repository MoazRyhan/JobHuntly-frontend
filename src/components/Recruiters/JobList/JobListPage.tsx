import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import JobListTable from "./JobListTable";
// import DashboardSidebarRecruiterComponent from "../Dashboard/DashboardSidebarRecruiterComponent";

export interface Job {
  _id: string;
  title: string;
  jobType: string;
  status: "live" | "closed";
  dueDate?: string;
  createdAt: string;
  applicantsCount: number;
}


export default function JobListPage() {
  const { companyId } = useParams<{ companyId: string }>();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
  status: "",   
  jobType: "",  
  search: "",   
});

  
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 7);

  const [totalPages, setTotalPages] = useState(1); 

 useEffect(() => {
  if (!companyId) return;

  const fetchJobs = async () => {
    try {
      setLoading(true);
      setError(null);

      const queryString = searchParams.toString();
      const res = await axios.get(
        `http://localhost:3000/companies/${companyId}/jobs?${queryString}`
      );

      setJobs(res.data.data.data);
      setTotalPages(res.data.data.totalPages || 1);
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message);
      else setError("Failed to load job listings");
    } finally {
      setLoading(false);
    }
  };

  fetchJobs();
}, [companyId, searchParams]);


  const goToPage = (newPage: number) => {
    searchParams.set("page", newPage.toString());
    searchParams.set("limit", limit.toString());
    navigate(`/companies/${companyId}/jobs?${searchParams.toString()}`);
  };

  if (loading) {
    return <p className="text-center mt-10">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* <DashboardSidebarRecruiterComponent /> */}

      <div className="flex-1 w-full px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-8">
        <div className="mb-6">
          <h2 className="font-bold text-[#25324B] text-2xl">Job Listings</h2>
        </div>

        <div className="mb-4 flex items-end justify-end gap-4">
          <select
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            className="border px-2 py-1 rounded"
          >
            <option value="">All Status</option>
            <option value="live">Live</option>
            <option value="closed">Closed</option>
          </select>

          <select
            value={filters.jobType}
            onChange={(e) =>
              setFilters({ ...filters, jobType: e.target.value })
            }
            className="border px-2 py-1 rounded"
          >
            <option value="">All Job Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>

          <input
            type="text"
            placeholder="Search title..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="border px-2 py-1 rounded"
          />

          <button
            onClick={() => {
              Object.entries(filters).forEach(([key, value]) => {
                if (value) searchParams.set(key, value);
                else searchParams.delete(key);
              });
              searchParams.set("page", "1");
              searchParams.set("limit", limit.toString());
              navigate(
                `/companies/${companyId}/jobs?${searchParams.toString()}`
              );
            }}
            className="bg-purple-600 text-white px-3 py-1 rounded"
          >
            Filter
          </button>
        </div>

        <div className="w-full max-w-[1104px] mx-auto">
          <JobListTable data={jobs} />

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => goToPage(p)}
                  className={`px-3 py-1 border rounded ${
                    p === page ? "bg-purple-300 text-white" : ""
                  }`}
                >
                  {p}
                </button>
              ))}

              <button
                disabled={page === totalPages}
                onClick={() => goToPage(page + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
