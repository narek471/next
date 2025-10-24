"use client";
import { useEffect, useRef, useState } from "react";
import { Easing, motion } from "framer-motion";

const cubic1 = [0.98, 0.03, 0, 0.08];

function formatDate(date: Date) {
  return `by ${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()}`;
}

// Генерация массива с актуальными датами (+1 месяц и +10 дней, далее -2 дня)
function generateDates(): string[] {
  const result: string[] = [];
  const base = new Date();

  // стартовая дата — через месяц и 10 дней
  base.setMonth(base.getMonth() + 1);
  base.setDate(base.getDate() + 10);

  for (let i = 0; i < 5; i++) {
    result.push(formatDate(new Date(base))); // новый объект даты
    base.setDate(base.getDate() - 2);
  }

  return result;
}

export default function DateAnimation2() {
  const [text, setText] = useState("");
  const [endByFlag, setByFlag] = useState(false);
  const [month, setMonth] = useState(0);
  const [dates, setDates] = useState<string[]>([]);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const formattedDates = generateDates();
    setDates(formattedDates);

    const intervalBy: NodeJS.Timeout = setInterval(() => {
      setText((val) => (val.length < 3 ? val + "." : ""));
    }, 300);

    const timeout: NodeJS.Timeout = setTimeout(() => {
      clearInterval(intervalBy);
      if (ref.current) ref.current.style.display = "none";
      setByFlag(true);

      const intervalMonth: NodeJS.Timeout = setInterval(() => {
        setMonth((value) => {
          const newMonth = value + 1;
          if (newMonth === formattedDates.length - 1) clearInterval(intervalMonth);
          return newMonth;
        });
      }, 1550);
    }, 5000);

    return () => {
      clearInterval(intervalBy);
      clearTimeout(timeout);
    };
  }, []);

  return (
      <div className="text-xl flex items-center text-[#5773d6] font-bold">
        {endByFlag && dates.length > 0 && (
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.7,
                  repeat: 4,
                  ease: cubic1 as unknown as Easing[],
                }}
            >
              {dates[month]}
            </motion.span>
        )}

        {month === 4 && (
            <motion.video
                playsInline
                initial={{ transform: "translateX(100px)" }}
                animate={{ transform: "translateX(0px)" }}
                transition={{ duration: 0.4 }}
                width={90}
                autoPlay
            >
              <source src="https://quiz.kegel-plan.me/video/en/EN_video_19_faster.mp4" />
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
