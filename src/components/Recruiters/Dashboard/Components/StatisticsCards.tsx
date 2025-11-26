import StatisticsCard from "./StatisticsCard";

export default function StatisticsCards() {
    return (
        <>
            <main className="flex justify-between mx-8 gap-6">
                <StatisticsCard
                    title="New candidates to review"
                    bgColor="bg-[#4640DE]"
                />
                <StatisticsCard
                    title="Candidates reviewed today"
                    bgColor="bg-[#56CDAD]"
                />
                <StatisticsCard
                    title="Jobs Opened"
                    bgColor="bg-[#26A4FF]"
                />
            </main>
        </>
    );
}