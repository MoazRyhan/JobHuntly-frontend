import { Users, CheckCircle, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";


// Window width hook

export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handle = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handle);
        return () => window.removeEventListener("resize", handle);
    }, []);

    return width;
};

// Card
export default function StatisticsCard({ title, bgColor }: { title: string; bgColor: string }) {
    const width = useWindowWidth();

    // React supports this with string tag names
    let TitleTag = "h2" as keyof HTMLElementTagNameMap;

    if (width < 670) TitleTag = "h2";
    else if (width < 800) TitleTag = "h5";
    else if (width < 950) TitleTag = "h3";
    else if (width < 1050) TitleTag = "h2";
    else if (width < 1150) TitleTag = "h4";
    else if (width < 1350) TitleTag = "h3";
    else TitleTag = "h2";

    let Icon =
        title.includes("candidates") ? Users :
            title.includes("reviewed") ? CheckCircle :
                title.includes("Jobs") ? Briefcase :
                    null;

    return (
        <div className={`text-white p-6 flex flex-col justify-between h-35 rounded-xl shadow-md ${bgColor}`}>
            <header className="flex justify-between">
                <TitleTag>{title}</TitleTag>

                {Icon && <Icon size={24} className="opacity-80" />}
            </header>
            <h1>70</h1>
        </div>
    );
}