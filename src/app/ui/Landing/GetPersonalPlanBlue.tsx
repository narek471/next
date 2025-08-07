"use client";
import { CheckIcon, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import figure from "../../../../public/figure.svg";
import blueFigure from "../../../../public/figureBlue.svg";
import access from "../../../../public/access.svg";
import ModalPay from "./ModalPay";
import ModalQueue from "./ModalQueue";
import { useDispatch } from "react-redux";
import { setSelectedPlan } from "@/app/store/reducers/userData";
import { AnimatePresence } from "framer-motion";
import SuperDiscount from "./SuperDiscount";

const arrPlans = [
  {
    title: "1-WEEK PLAN",
    wasPercent: "34%",
    stayPercent: "48%",
    was: "10.59 USD",
    stay: "6.99 USD",
    perDay: {
      was: "1.50 USD",
      stay: "0.99 USD",
    },
    description:
      "We’ve automatically applied the discount to your 1-week Kegel Plan. Please note that your subscription will be automatically renewed at the 31 USD per 1 month at the end of your 1-week Kegel Plan and will then be continuously renewed every - 1 month until you cancel. If you want to manage your subscription, you may do so visiting Billing Center or in the Dr. Kegel app.",
  },
  {
    title: "1-MONTH PLAN",
    wasPercent: "51%",
    stayPercent: "61%",
    was: "31.00 USD",
    stay: "15.19 USD",
    populary: true,
    perDay: {
      was: "1.00 USD",
      stay: "0.49 USD",
    },
    description:
      "We’ve automatically applied the discount to your 1-month Kegel Plan. After 1 month, your subscription will be automatically renewed at the full price of 31 USD per 1 month and will then be continuously renewed every 1 month until you cancel. If you want to manage your subscription, you may do so visiting Billing Center or in the Dr. Kegel app.",
  },
  {
    title: "3-MONTH PLAN",
    wasPercent: "51%",
    stayPercent: "60%",
    was: "53.04 USD",
    stay: "25.99 USD",
    perDay: {
      was: "0.59 USD",
      stay: "0.29 USD",
    },
    description:
      "We’ve automatically applied the discount to your 3-months Kegel Plan. After 3 months, your subscription will be automatically renewed at the full price of 53.04 USD per 3 months and will then be continuously renewed every 3 months until you cancel. If you want to manage your subscription, you may do so visiting Billing Center or in the Dr. Kegel app.",
  },
];

export default function GetPersonalPlanBlue({
  title,
  off,
}: {
  title: string;
  off?: boolean;
}) {
  const [timer, setTimer] = useState({ min: 10, seconds: 0, result: false });
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
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
    <section
      id="personal-plan"
      className="w-[600px] bg-[#f1f3f9] z-[400]  flex p-[32px] gap-5 items-center flex-col max-md:w-1/1">
      <h2 className="text-[32px] text-center   font-bold">{title}</h2>
      {off && !timer.result && (
        <div className="bg-[#E44240] h-[42px] w-1/1 flex items-center justify-center gap-2 text-white rounded-[9px]">
          <Clock size={13} />
          <p className="text-[13px] font-bold ">
            This offer ends in
            <span>
              {" "}
              {timer.min < 10 && "0"}
              {timer.min}:{timer.seconds < 10 && "0"}
              {timer.seconds}
            </span>
          </p>
        </div>
      )}

      <ul className="w-1/1 flex flex-col items-center gap-5">
        {arrPlans.map((val, i) => (
          <div
            onClick={() => {
              setSelected(i);
              dispatch(setSelectedPlan(i));
              setDescription(val.description);
            }}
            key={i}
            className={`flex items-center  ${
              selected == i ? "border-[#5773d6] border-1" : ""
            } bg-[#fff9] cursor-pointer rounded-[9px] justify-between relative  h-[72px] w-1/1 p-[8px] gap-[16px]`}>
            {val.populary && (
              <div
                className={`${
                  selected == i
                    ? "bg-[#5773d6] text-white"
                    : "bg-[#ebecf2] text-[#11111340]"
                } rounded-[50px] font-bold text-[12px] pl-[13px] top-[-10px] pr-[13px] text-[#11111340] absolute`}>
                MOST POPULAR
              </div>
            )}
            <div
              className={`flex gap-4 items-center pl-2 ${
                val.populary ? "max-md:mt-2" : ""
              }`}>
              <CheckIcon
                size={20}
                className={`border-2 ${
                  selected == i
                    ? "bg-[#5773d6] border-[#5773d6] text-white"
                    : ""
                } text-[#11111340] rounded-full `}
              />
              <div>
                <p
                  className={`${
                    selected == i ? "text-black" : "text-[#11111380]"
                  } font-bold text-[16px] max-md:text-[14px]`}>
                  {val.title}
                </p>
                <p
                  className={`${
                    selected == i ? "text-black" : "text-[#11111340]"
                  } text-[10px] max-md:text-[7px] flex gap-2`}>
                  <span className="line-through">{val.was}</span>
                  <span>{val.stay}</span>
                </p>
              </div>
            </div>
            <div className="relative z-10 w-[122px] max-md:h-[100px] left-[10px]  flex items-center">
              {selected == i ? (
                <Image
                  src={blueFigure}
                  alt="red figure"
                  className=" absolute max-md:h-1/1  "
                />
              ) : (
                <Image
                  src={figure}
                  alt="figure"
                  className=" absolute max-md:h-1/1 opacity-40  "
                />
              )}
              <div
                className={`w-1/1 z-100 ${
                  selected != i ? "opacity-50" : ""
                } items-center flex flex-col  justify-center `}>
                <p className="flex flex-col  text-center gap-1">
                  <span
                    className={`line-through ${
                      selected == i ? "text-black" : "text-[#11111340]"
                    } text-[12px]`}>
                    {val.perDay.was}
                  </span>
                  <span
                    className={`${
                      selected == i ? "text-white" : "text-[#5773d6]"
                    }  leading-1.5 font-bold text-[16px]`}>
                    {val.perDay.stay}
                  </span>
                  <span
                    className={`${
                      selected == i ? "text-white" : ""
                    } font-bold text-[12px]`}>
                    per day
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <p className="flex gap-2 text-center font-bold text-[14px]">
        <Image src={access} alt="access" />
        30-day money-back guarantee
      </p>
      <button
        onClick={() => setFlag(true)}
        className="shadow-[0_15px_37px_#5773d6] cursor-pointer font-bold text-[18px] bg-[#5773d6] w-1/1 rounded-[100px] text-white p-[16px]">
        Get My Plan
      </button>

      <AnimatePresence>
        {flag && <ModalPay setDiscount={setDiscount} setFlag={setFlag} />}
      </AnimatePresence>
      {discount && (
        <SuperDiscount setDiscount={setDiscount} setFlag={setFlag} />
      )}
      <p className="text-[10px] text-center opacity-50">{description}</p>
    </section>
  );
}
