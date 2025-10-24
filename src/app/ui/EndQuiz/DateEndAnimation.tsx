"use client";
import { useEffect, useRef, useState } from "react";
import { Easing, motion } from "framer-motion";

const cubic1 = [0.98, 0.03, 0, 0.08];

function formatDate(date: Date) {
    return `by ${date.toLocaleDateString("en-US", { month: "long", day: "numeric" })}`;
}

// Генерация массива дат: первая +1 месяц +10 дней, остальные -2 дня
function generateDates(): string[] {
    const result: string[] = [];
    const base = new Date();

    base.setMonth(base.getMonth() + 1);
    base.setDate(base.getDate() + 10);

    for (let i = 0; i < 5; i++) {
        result.push(formatDate(new Date(base))); // создаем новый объект Date
        base.setDate(base.getDate() - 2);
    }

    return result;
}

export default function DateEndAnimation() {
    const [text, setText] = useState("");
    const [endByFlag, setByFlag] = useState(false);
    const [dates, setDates] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
    const ref = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const formattedDates = generateDates();
        setDates(formattedDates);

        const intervalDots: NodeJS.Timeout = setInterval(() => {
            setText((val) => (val.length < 3 ? val + "." : ""));
        }, 300);

        const timeoutSwitch: NodeJS.Timeout = setTimeout(() => {
            clearInterval(intervalDots);
            if (ref.current) ref.current.style.display = "none";
            setByFlag(true);

            const intervalDates: NodeJS.Timeout = setInterval(() => {
                setIndex((prev) => {
                    const next = prev + 1;
                    if (next === formattedDates.length - 1) clearInterval(intervalDates);
                    return next;
                });
            }, 1550);
        }, 5000);

        return () => {
            clearInterval(intervalDots);
            clearTimeout(timeoutSwitch);
        };
    }, []);

    return (
        <div className="text-xl flex items-center text-[#5773d6] font-bold">
            {endByFlag && dates.length > 0 && (
                <motion.span
                    key={dates[index]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        repeat: index === dates.length - 1 ? 0 : 4,
                        ease: cubic1 as unknown as Easing[],
                    }}
                >
                    {dates[index]}
                </motion.span>
            )}

            {index === 4 && (
                <motion.video
                    playsInline
                    initial={{ transform: "translateX(100px)" }}
                    animate={{ transform: "translateX(0px)" }}
                    transition={{ duration: 0.4 }}
                    width={90}
                    autoPlay
                >
                    <source src="https://quiz.kegel-plan.me/video/en/EN_video_34_faster.mp4" />
                </motion.video>
            )}

            {!endByFlag && (
                <p ref={ref}>
                    by<span>{text}</span>
                </p>
            )}
        </div>
    );
}
