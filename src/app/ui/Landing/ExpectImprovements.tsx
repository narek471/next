"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import final from "../../../../public/EN_video_graph_final.webp";

export default function ExpectImprovements() {
    const [futureDate, setFutureDate] = useState("");

    useEffect(() => {
        const now = new Date();

        // Добавляем 1 месяц
        now.setMonth(now.getMonth() + 1);

        // Добавляем 10 дней
        now.setDate(now.getDate() + 2);

        // Форматируем дату в "Month Day"
        const formatted = now.toLocaleString("en-US", {
            month: "long",
            day: "numeric",
        });

        setFutureDate(formatted);
    }, []);

    return (
        <section className="flex items-center max-md:w-[320px] w-[620px] bg-white flex-col gap-6">
            <h2 className="text-[22px] font-bold text-center">
                When to Expect Improvements
            </h2>
            <p className="text-[15px] text-center">
                Based on our data you can reach noticeable improvements
            </p>
            <div className="flex gap-2 items-center">
                <p className="text-xl text-[#5773d6] font-bold">by {futureDate}</p>
                <video playsInline width={90} autoPlay>
                    <source src="https://quiz.kegel-plan.me/video/en/EN_video_34_faster.mp4" />
                </video>
            </div>

            <Image
                src={final}
                alt="image"
                className="w-[520px] max-md:w-[300px] max-lg:h-[200px] h-[279px]"
            />
            <p className="text-[12px] text-gray-500">
                *for illustration purposes only
            </p>
        </section>
    );
}
