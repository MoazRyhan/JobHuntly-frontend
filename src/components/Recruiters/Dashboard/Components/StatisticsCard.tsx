export default function StatisticCard({title, bgColor}: {title?: string, bgColor?: string}) {
    return (
        <>
            <main className={`text-white p-6 w-1/3 flex gap-3 items-center ${bgColor}`}>
                <h1>70</h1>
                <p>{title}</p>
            </main>
        </>
    );
}