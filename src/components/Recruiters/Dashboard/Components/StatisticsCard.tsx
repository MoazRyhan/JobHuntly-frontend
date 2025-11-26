export default function StatisticCard({title, bgColor}: {title?: string, bgColor?: string}) {
    return (
        <>
            <main className={`text-white p-6 w-1/3 flex gap-3 items-center ${bgColor}`}>
                <h2 className="font-semibold text-5xl">70</h2>
                <p>{title}</p>
            </main>
        </>
    );
}