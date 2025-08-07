"use client";
import { createPortal } from "react-dom";
import logo from "../../../../public/Kegel Power v5.png";
import Image from "next/image";
import discount from "../../../../public/discount.png";

export default function SuperDiscount({
  setFlag,
  setDiscount,
}: {
  setFlag: (arg: boolean) => void;
  setDiscount: (arg: boolean) => void;
}) {
  return createPortal(
    <div className="flex items-center flex-col fixed z-[1000] w-1/1 top-0 right-0 left-0 bottom-0 h-screen bg-[#111113]">
      <div>
        <header className="w-1/1 gap-2 flex items-center p-4">
          <Image width={28} alt="logo" src={logo} />
          <div className="flex flex-col justify-center">
            <p className="font-bold text-[12px] text-white">Kegel Power</p>
            <p className="font-bold text-[12px] text-gray-400">
              For Men`s Health
            </p>
          </div>
        </header>
        <section className="flex w-[600px] items-center max-sm:w-[330px] max-sm:gap-3 gap-5 flex-col text-white">
          <Image src={discount} alt="discount" className="max-sm:w-[300px]" />
          <h2 className="text-white font-bold text-[24px] text-center">
            Get your plan with a SUPER Discount!
          </h2>
          <p className="text-[14px]">
            We`re sure that by following this Kegel plan you can improve
            Erectile Function. This is confirmed by a huge number of positive
            reviews.
          </p>
          <p className="text-[14px]">
            We want you to reach your goal. That`s why{" "}
            <span className="font-bold">
              we`re giving you the super discount
            </span>{" "}
            so you can start improving your men`s health at the best price.
          </p>
          <button
            onClick={() => {
              window.location.reload();
              localStorage.setItem("access", "true");
            }}
            className={`mt-[30px] h-[55px] w-1/1 rounded-[100px] font-bold  cursor-pointer 
            
                 bg-[#e44240] shadow-[0px_10px_40px_#e44240]
             text-white flex items-center justify-center gap-2`}>
            Got it
          </button>
        </section>
      </div>
    </div>,
    document.body
  );
}
