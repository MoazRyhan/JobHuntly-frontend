export default function JobStatisticsChart() {
    return (
        <>
            <main className="m-8 border">

                {/* ===== Page Header (Title + Date Range) ===== */}
                <header className="w-full flex items-center justify-between p-6">

                    {/* Left side: title + date */}
                    <div className="w-1/2">
                        <h5 className="text-xl font-bold pb-1 text-[#25324B]">Job Statistics</h5>
                        <p className="text-sm font-normal text-[#7C8493]">From July 19 to July 25</p>
                    </div>

                    {/* // Right side: time filter navigation */}
                    <div className="flex justify-end w-max text-[#4640DE] bg-[#E9EBFD]">
                        <button className="p-3 m-1 cursor-pointer font-semibold text-base focus:bg-white">Week</button>
                        <button className="p-3 m-1 cursor-pointer font-semibold text-base focus:bg-white">Month</button>
                        <button className="p-3 m-1 cursor-pointer font-semibold text-base focus:bg-white">Year</button>
                    </div>

                </header>


                {/* ===== Stats Section: Tabs + Chart + Cards ===== */}
                <section>
                    {/* === Tabs Navigation (Overview / Job Views / Job Applications) === */}
                    <nav className="flex justify-around">
                        <button className="font-semibold text-base text-[#7C8493] border-b-2 border-[#4640DE] ">Overview</button>
                        <button className="font-semibold text-base text-[#7C8493]">Job Views</button>
                        <button className="font-semibold text-base text-[#7C8493]">Job Applications</button>
                    </nav>

                    {/* === Main Chart Area + Aside Cards === */}
                    <div>

                        {/* Chart */}
                        <figure>
                            {/* Chart will render here */}
                            <figcaption>Job statistics chart</figcaption>
                        </figure>

                        {/* Sidebar metrics */}
                        <aside>
                            {/* Top card */}
                            <article>
                                <h3>Total Job Views</h3>
                                {/* dynamic number later */}
                            </article>

                            {/* Bottom card */}
                            <article>
                                <h3>Total Job Applications</h3>
                                {/* dynamic number later */}
                            </article>
                        </aside>
                    </div>

                </section>
            </main>
        </>
    );
}