import StatisticsCard from "./StatisticCard";
import { useWindowWidth } from "./StatisticCard";

// Container for cards
export default function StatisticsCards() {
    const width = useWindowWidth();
    // Flex in one row
    // >1050 → 3 per row
    let containerClasses = "flex gap-6 justify-between mx-8";

    // <1050 → 2 cards top + 1 centered below
    if (width < 1050 && width >= 670) {
        containerClasses = "flex flex-wrap justify-evenly gap-6 mx-8";
    }

    // <670 → 3 cards in column
    if (width < 670) {
        containerClasses = "flex flex-col items-center gap-6 mx-8";
    }

    // Width Logic
    let cardWidth = "w-1/3"; // >1050 → 3 per row

    if (width < 1050 && width >= 950) { 
        cardWidth = "w-100"; // 2 per row
    }
    else if (width < 950 && width >= 830) {
        cardWidth = "w-90"; // 2 per row
    }
    else if (width < 830 && width >= 800) {
        cardWidth = "w-80"; // 2 per row
    }
    else if (width < 800 && width >= 670) {
        cardWidth = "w-70"; // 2 per row
    }
    else if (width < 670) {
        cardWidth = "w-full"; // 3 in a column
    }

    return (
        <main className={containerClasses}>

            <div className={cardWidth}>
                <StatisticsCard title="New candidates to review" bgColor="bg-[#4640DE]" />
            </div>

            <div className={cardWidth}>
                <StatisticsCard title="Candidates reviewed today" bgColor="bg-[#56CDAD]" />
            </div>

            <div className={cardWidth}>
                <StatisticsCard title="Jobs Opened" bgColor="bg-[#26A4FF]" />
            </div>

        </main>
    );
}
