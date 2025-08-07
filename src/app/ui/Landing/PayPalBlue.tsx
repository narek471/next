import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import paypaltext from "../../../../public/textPaypal.svg";
import paypal from "../../../../public/paypallogo.svg";
import Image from "next/image";

export default function PayPalBlue() {
  const { selectedPlan } = useSelector(
    (state: { userData: { selectedPlan: number } }) => state.userData
  );

  const [amount, setAmount] = useState([
    ["1-month Kegel Plan", "31.00 USD"],
    ["51% introductory price discount", "-15.81 USD"],
    ["15.19 USD"],
    ["per 1 month", "You just saved 15.81 USD (51% off)"],
  ]);

  useEffect(() => {
    if (selectedPlan == 0) {
      setAmount([
        ["1-weel Kegel Plan", "10.59 USD"],
        ["34% introductory price discount", "-3.60 USD"],
        ["6.99 USD"],
        ["per 1 week", "You just saved 3.60 USD (34% off)"],
      ]);
    } else if (selectedPlan == 1) {
      setAmount([
        ["1-month Kegel Plan", "31.00 USD"],
        ["51% introductory price discount", "-15.81 USD"],
        ["15.19 USD"],
        ["per 1 month", "You just saved 15.81 USD (51% off)"],
      ]);
    } else if (selectedPlan == 2) {
      setAmount([
        ["3-months Kegel Plan", "53.04 USD"],
        ["51% introductory price discount", "-27.05 USD"],
        ["25.99 USD"],
        ["per 3 months", "You just saved 25.99 USD (51% off)"],
      ]);
    }
  }, [selectedPlan]);

  return (
    <div className="mt-[40px]">
      <div className="border-t-1 flex flex-col gap-2 pt-[10px] pb-[10px] border-b-1 border-[#f1f3f9]">
        <p className="text-[#11111380] text-[14px] flex justify-between items-center">
          <span>{amount[0][0]}</span>
          <span>{amount[0][1]}</span>
        </p>
        <p className="text-[#11111380] text-[14px] flex justify-between items-center">
          <span className="max-sm:w-[186px]">{amount[1][0]}</span>
          <span className="text-[#5773d6] font-bold">{amount[1][1]}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 pt-[10px] pb-[10px] ">
        <p className="flex justify-between text-[18px] font-bold">
          <span>Total</span>
          <span>{amount[2][0]}</span>
        </p>
        <p className="flex justify-between text-[12px] font-bold">
          <span className="text-[#11111380] ">{amount[3][0]}</span>
          <span className="text-[#5773d6] font-bold">{amount[3][1]}</span>
        </p>
      </div>
      <div className="w-1/1 flex gap-2 items-center mt-[20px] flex-col">
        <button className="h-[50px] hover:shadow-[inset_0_0_100px_100px_rgba(0,_0,_0,_0.06)]  cursor-pointer flex items-center justify-center p-4 gap-2 pl-8 pr-8 rounded-[100px] bg-[#ffc439]">
          <Image width={18} height={24} src={paypal} alt="paypal text" />
          <Image width={75} height={24} src={paypaltext} alt="paypal text" />
          <span className="text-[18px]">Buy Now</span>
        </button>
        <p className="text-[#11111380] font-bold text-[12px] ">
          THE SAFER EASIER WAY TO PAY
        </p>
      </div>
    </div>
  );
}
