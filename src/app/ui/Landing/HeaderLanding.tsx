"use client";
import Image from "next/image";
import logo from "../../../../public/Kegel Power v5.png";
import { useEffect, useState } from "react";

export default function HeaderLanding() {
  const [timer, setTimer] = useState({ min: 10, seconds: 0, result: false });
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((val) => {
        if (val.min == 0 && val.seconds == 0) {
          clearInterval(interval);
          return { ...val, result: true };
        } else if (val.seconds <= 0) {
          return { min: val.min - 1, seconds: 59, result: false };
        } else {
          return { min: val.min, seconds: val.seconds - 1, result: false };
        }
      });
    }, 1000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return (
    <header className="h-[80px] max-md:w-[492px] max-sm:w-[452px] max-md:pl-10 max-md:pr-10  bg-white flex justify-center  fixed top-0 z-10  items-center">
      <div className="w-[600px] justify-between bg-white max-md:w-1/1 p-[16px] flex shadow-[0_4px_4px_#00000026]">
        {timer.result ? (
          <div className=" flex gap-4 ">
            <Image width={50} alt="logo" src={logo} />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-[12px]">Kegel Power</p>
              <p className="font-bold text-[12px] text-gray-400">
                For Men`s Health
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <p className=" text-[14px] ">61% Discount reserved for</p>
            <p className="font-bold text-[#e44240] text-[18px]">
              {timer.min < 10 && "0"}
              {timer.min}:{timer.seconds < 10 && "0"}
              {timer.seconds}
            </p>
          </div>
        )}
        <button
          onClick={(e) =>
            document.getElementById("personal-plan")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className="cursor-pointer bg-[#e44240] text-[16px] w-[143px] text-white rounded-[9px] font-bold">
          Get My Plan
        </button>
      </div>
    </header>
  );
}
