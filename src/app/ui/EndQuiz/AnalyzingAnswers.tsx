"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import CommentAnswer from "./CommentAnswer";
import { ANSWERS_COMMENTS } from "@/app/lib/comments";
import ModalSuccess from "./ModalSuccess";

function AnswersProgress({
  text,
  flag,
  setCount,
  count,
}: {
  text: string;
  flag: boolean;
  setCount: (arg: number | ((arg: number) => number)) => void;
  count: number;
}) {
  const [percent, setPercent] = useState(0);
  const [shouldUpdateCount, setShouldUpdateCount] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldUpdateCount) {
      setCount((prevCount) => prevCount + 1);
      setShouldUpdateCount(false);
    }
  }, [shouldUpdateCount, setCount]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (flag) {
      interval = setInterval(() => {
        setPercent((val) => {
          if (ref.current) {
            ref.current.style.width = `${val}%`;
          }

          if (val >= 99) {
            clearInterval(interval);
            setShouldUpdateCount(true);
            return 100;
          }
          return val + 1;
        });
      }, 50);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [flag]);
  return (
    <div className="flex gap-2  text-[14px] flex-col w-[536px] ">
      <div
        className={`flex font-bold ${
          !flag ? "opacity-70" : ""
        } justify-between`}>
        <p>{text}</p>
        <div className="flex gap-2">
          {flag && (
            <div className="h-[20px] w-[20px] rounded-full  border-[#e44240] border-[2px] border-t-transparent animate-spin"></div>
          )}
          <span className="w-[32px]">{percent}%</span>
        </div>
      </div>
      <div className="w-1/1 rounded-2xl h-[10px] bg-gray-200">
        <div
          ref={ref}
          className={`bg-black h-[10px] rounded-2xl transition-[width] duration-75 w-0`}></div>
      </div>
    </div>
  );
}

export default function AnalyzingAnswers() {
  const [points, setPoints] = useState("");
  const [countProgresses, setCountProgresses] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints((val) => {
        if (val.length < 3) {
          return val + ".";
        }
        return "";
      });
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="flex w-1/1 flex-col items-center gap-10">
      <div className="flex w-1/1 ml-[2s0px]  font-bold justify-center">
        <h2 className="text-[20px]  text-center">Analyzing your answers</h2>
        <span className="w-[32px] text-[20px]">{points}</span>
      </div>
      <ul className="flex gap-5 flex-col">
        <AnswersProgress
          count={countProgresses}
          setCount={setCountProgresses}
          flag={countProgresses === 1}
          key={0}
          text="Intimate health indicators"
        />
        <AnswersProgress
          count={countProgresses}
          setCount={setCountProgresses}
          flag={countProgresses === 2}
          key={1}
          text="Sexual behaviours"
        />
        <AnswersProgress
          count={countProgresses}
          setCount={setCountProgresses}
          flag={countProgresses === 3}
          key={2}
          text="Lifestyle"
        />
        <AnswersProgress
          count={countProgresses}
          setCount={setCountProgresses}
          flag={countProgresses === 4}
          key={3}
          text="Creating your plan"
        />
      </ul>
      <CommentAnswer
        data={
          countProgresses <= 4
            ? ANSWERS_COMMENTS[countProgresses - 1]
            : ANSWERS_COMMENTS[3]
        }
      />
      {countProgresses > 4 && <ModalSuccess />}
    </section>
  );
}
