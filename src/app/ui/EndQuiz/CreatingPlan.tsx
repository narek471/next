"use client";
import { useEffect, useState } from "react";

export default function CreatingPlan() {
  const [points, setPoints] = useState("");
  useEffect(() => {
    const pointInterval = setInterval(() => {
      setPoints((val) => {
        if (val.length < 3) {
          return val + ".";
        } else {
          return "";
        }
      });
    }, 1000);
    return () => {
      clearInterval(pointInterval);
    };
  }, []);
  return (
    <section className="w-1/1 flex flex-col items-center gap-15">
      <div className="flex w-1/1 ml-[29px] justify-center font-bold">
        <h1 className="text-[28px] text-center">Creating your plan </h1>
        <span className="text-[28px] w-[30px] overflow-visible">{points}</span>
      </div>
      <div className="h-[48px] w-[48px] rounded-full border-black border-[4px] border-t-transparent animate-spin"></div>
    </section>
  );
}
