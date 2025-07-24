"use client";
import { useEffect, useRef, useState } from "react";
import { easeIn, Easing, motion } from "framer-motion";

const MONTHS = [
  "by September 4",
  "by September 2",
  "by August 31",
  "by August 27",
  "by August 27",
];
const cubic1 = [0.98, 0.03, 0, 0.08];

export default function DateAnimation() {
  const [text, setText] = useState("");
  const [endByFlag, setByFlag] = useState(false);

  const [month, setMonth] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    let intervalMonth: NodeJS.Timeout;

    const intervalBy = setInterval(() => {
      setText((val) => {
        if (val.length < 3) {
          return val + ".";
        } else {
          return "";
        }
      });
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(intervalBy);
      ref.current!.style.display = "none";
      setByFlag(true);

      intervalMonth = setInterval(() => {
        setMonth((value) => {
          const newMonth = value + 1;
          if (newMonth === 4) {
            clearInterval(intervalMonth);
          }
          return newMonth;
        });
      }, 1550);
    }, 5000);

    // Функция очистки всех таймеров
    return () => {
      clearInterval(intervalBy);
      clearTimeout(timeout);
      if (intervalMonth) {
        clearInterval(intervalMonth);
      }
    };
  }, []);
  return (
    <div className="text-xl flex items-center text-[#5773d6] font-bold">
      {endByFlag && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: 4,
            ease: cubic1 as unknown as Easing[],
          }}>
          {MONTHS[month]}
        </motion.span>
      )}
      {month == 4 && (
        <motion.video
          playsInline
          initial={{ transform: "translateX(100px)" }}
          animate={{ transform: "translateX(0px)" }}
          transition={{ duration: 0.4 }}
          width={90}
          autoPlay>
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
