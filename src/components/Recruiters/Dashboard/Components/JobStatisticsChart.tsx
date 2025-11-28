import React, { useState } from 'react';
import { Eye, Briefcase } from 'lucide-react'; // Using Lucide React for icons
import { BarChart, Bar, XAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

// --- MOCK DATA ---

// Data for the metric cards (Views/Applications) based on time filter
const mockMetricData = {
    'Week': {
        jobViews: { title: "Job Views", count: 2342, change: 6.4, icon: <Eye size={18} className="text-[#4640DE]" /> },
        jobApplications: { title: "Job Applications", count: 654, change: -0.5, icon: <Briefcase size={18} className="text-[#4640DE]" /> }, // RENAMED
    },
    'Month': {
        jobViews: { title: "Job Views", count: 10500, change: 12.1, icon: <Eye size={18} className="text-[#4640DE]" /> },
        jobApplications: { title: "Job Applications", count: 3200, change: 8.9, icon: <Briefcase size={18} className="text-[#4640DE]" /> }, // RENAMED
    },
    'Year': {
        jobViews: { title: "Job Views", count: 120000, change: -3.2, icon: <Eye size={18} className="text-[#4640DE]" /> },
        jobApplications: { title: "Job Applications", count: 45000, change: 1.5, icon: <Briefcase size={18} className="text-[#4640DE]" /> }, // RENAMED
    },
};

// Data for the bar chart based on time filter
const mockChartData = {
    'Week': [
        { name: 'Mon', 'Job View': 120, 'Job Applications': 280 }, 
        { name: 'Tue', 'Job View': 180, 'Job Applications': 320 }, 
        { name: 'Wed', 'Job View': 122, 'Job Applications': 34 },  
        { name: 'Thu', 'Job View': 90, 'Job Applications': 350 }, 
        { name: 'Fri', 'Job View': 150, 'Job Applications': 200 }, 
        { name: 'Sat', 'Job View': 100, 'Job Applications': 120 }, 
        { name: 'Sun', 'Job View': 50, 'Job Applications': 180 }, 
    ],
    'Month': [
        { name: 'Wk 1', 'Job View': 4000, 'Job Applications': 1500 }, 
        { name: 'Wk 2', 'Job View': 3500, 'Job Applications': 1200 }, 
        { name: 'Wk 3', 'Job View': 2800, 'Job Applications': 1000 }, 
        { name: 'Wk 4', 'Job View': 3200, 'Job Applications': 1300 }, 
    ],
    'Year': [
        { name: 'Q1', 'Job View': 28000, 'Job Applications': 12000 }, 
        { name: 'Q2', 'Job View': 30000, 'Job Applications': 14000 }, 
        { name: 'Q3', 'Job View': 32000, 'Job Applications': 15000 }, 
        { name: 'Q4', 'Job View': 30000, 'Job Applications': 13000 }, 
    ],
};


const timeFilters = ['Week', 'Month', 'Year'];
const chartTabs = ['Overview', 'Job Views', 'Job Applications'];


// Custom Tooltip to display specific data on hover (matching the dark box style)
const CustomTooltip = ({ active, payload}: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-gray-800 text-white p-2 rounded-lg text-xs shadow-xl">
                {payload.map((p: any, index: number) => (
                    <div key={index} className="flex justify-between items-center space-x-2">
                        <span style={{ color: p.color }}>{p.value.toLocaleString()}</span>
                        <span className="text-gray-400">{p.name}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

// Component to display a single metric card (Job Views or Job Applications)
interface MetricCardProps {
    // Adjusted type reference to use 'jobApplications'
    data: typeof mockMetricData['Week']['jobViews'] | typeof mockMetricData['Week']['jobApplications'];
    timeFrame: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ data, timeFrame }) => {
    // Determine color and arrow based on the change percentage
    const isPositive = data.change >= 0;
    const arrow = isPositive ? '▲' : '▼';
    // Green for positive changes and red for negative changes
    const colorClass = isPositive ? 'text-green-500' : 'text-red-500';

    return (
        <article className="bg-white p-4 rounded-lg shadow-md border border-gray-100 h-40">
            <h3 className="text-[#25324B] flex justify-between items-center mb-1">
                {data.title}
                <span className="p-2 bg-[#E9EBFD] rounded-full">{data.icon}</span>
            </h3>
            <h1 className="text-[#25324B] mb-1">{data.count.toLocaleString()}</h1>

            <p className={"text-base font-semibold text-[#7C8493]"}>
                {timeFrame} <span className={`text-base font-semibold ${colorClass}`}>{Math.abs(data.change).toFixed(1)}% {arrow}</span>
            </p>
        </article>
    );
};



export default function JobStatisticsChart() {
    const [activeFilter, setActiveFilter] = useState(timeFilters[0]); // Default to 'Week'

    const [activeTab, setActiveTab] = useState(chartTabs[0]); // Default to 'Overview'

    // Get the current metric and chart data based on the active filter
    const currentMetrics = mockMetricData[activeFilter as keyof typeof mockMetricData];
    const currentChartData = mockChartData[activeFilter as keyof typeof mockChartData];

    // Determine the text for the time frame displayed on the cards (e.g., "This Month")
    const cardTimeFrame = `This ${activeFilter}`;

    // Handles click for time filter buttons
    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    // Handles click for tab navigation buttons
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    // Function to determine the time filter button's style (Active: bg-white)
    const getTimeFilterButtonClass = (filter: string) => {
        const isActive = filter === activeFilter;
        // Base classes: padding, margin, transition, rounded corners
        const baseClasses = "p-3 m-1 transition-colors duration-200 rounded-lg";

        // Use bg-white for the active state, and make inactive state transparent 
        const activeClasses = isActive
            ? "bg-white"
            : "bg-transparent";

        return `${baseClasses} ${activeClasses}`;
    };

    // Function to determine the tab button's style (Active: purple bottom border)
    const getTabButtonClass = (tab: string) => {
        const isActive = tab === activeTab;
        // Base classes for all tabs. text-base (1rem) respects the user's button CSS.
        const baseClasses = "py-4 px-6 text-base font-semibold transition-all duration-200";

        // Dynamic classes: Text color and bottom border style
        const activeClasses = isActive
            // Active: Purple text and purple bottom border
            ? "text-[#4640DE] border-b-2 border-[#4640DE]"
            // Inactive: Gray text and transparent bottom border (to maintain button height)
            : "text-[#7C8493] border-b-2 border-transparent";

        return `${baseClasses} ${activeClasses}`;
    };

    // Helper component to render a single-series BarChart (Views or Applications)
    const SingleBarChart = ({ dataKey, fill }: { dataKey: string, fill: string }) => (
        <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={currentChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#7C8493" />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                    <Legend
                        verticalAlign="bottom"
                        height={36}
                        iconType="square"
                        wrapperStyle={{ paddingTop: '10px' }}
                    />
                    {/* The single Bar element */}
                    <Bar dataKey={dataKey} fill={fill} barSize={30} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );

    return (
        <>
            <main className="m-8 border border-gray-200 rounded-xl shadow-lg bg-white">
                <header className="w-full flex items-center justify-between p-6">

                    {/* Left side: title + date */}
                    <div className="w-1/2">
                        {/* h3 remains text-xl font-bold (700) to comply with user's CSS */}
                        <h2 className="pb-1 text-[#25324B]">Job Statistics</h2>
                        <p className="text-sm font-normal text-[#7C8493]">From July 19 to July 25</p>
                    </div>

                    {/* Right side: time filter navigation (Week/Month/Year) */}
                    <div className="flex justify-end w-max text-[#4640DE] bg-[#E9EBFD] rounded-lg">
                        {timeFilters.map((filter) => (
                            <button
                                key={filter}
                                className={getTimeFilterButtonClass(filter)}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </header>


                {/* ===== Stats Section: Tabs + Chart + Cards ===== */}
                <section>
                    {/* === Tabs Navigation (Overview / Job Views / Job Applications) === */}
                    <nav className="flex border-b border-gray-200 px-6">
                        {chartTabs.map((tab) => (
                            <button
                                key={tab}
                                className={getTabButtonClass(tab)}
                                onClick={() => handleTabClick(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>

                    {/* === Main Chart Area + Aside Cards === */}
                    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Chart Area - Takes up 2/3 of the space on large screens */}
                        <figure className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-4 min-h-96 w-full">
                            {/* Conditional Chart Rendering based on activeTab */}
                            {activeTab === 'Overview' ? (
                                <div className="h-80 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            data={currentChartData}
                                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                            stackOffset="none"
                                        >
                                            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e0e0e0" />
                                            <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#7C8493" />
                                            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                                            <Legend
                                                verticalAlign="bottom"
                                                height={36}
                                                iconType="square"
                                                wrapperStyle={{ paddingTop: '10px' }}
                                            />
                                            {/* Overview Chart: Stacked bars for Applications and Views */}
                                            <Bar dataKey="Job Applications" stackId="a" fill="#4640DE" barSize={30} />
                                            <Bar dataKey="Job View" stackId="a" fill="#FFC93C" barSize={30} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            ) : activeTab === 'Job Views' ? (
                                // Job Views Chart: Dedicated bar chart for views
                                <SingleBarChart
                                    dataKey="Job View"
                                    fill="#FFC93C"
                                />
                            ) : activeTab === 'Job Applications' ? (
                                // Job Applications Chart: Dedicated bar chart for applications
                                <SingleBarChart
                                    dataKey="Job Applications"
                                    fill="#4640DE"
                                />
                            ) : null}

                            <figcaption className="sr-only">Job statistics chart for {activeTab} data filtered by {activeFilter}</figcaption>
                        </figure>

                        {/* Sidebar metrics - Takes up 1/3 of the space (1 column) on large screens */}
                        <aside className="lg:col-span-1 space-y-4">

                            {/* Top card: Total Job Views */}
                            <MetricCard
                                data={currentMetrics.jobViews}
                                timeFrame={cardTimeFrame}
                            />

                            {/* Bottom card: Total Job Applications - Renamed property to jobApplications */}
                            <MetricCard
                                data={currentMetrics.jobApplications}
                                timeFrame={cardTimeFrame}
                            />
                        </aside>
                    </div>
                </section>
            </main >
        </>
    );
}