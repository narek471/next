"use client";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import allCard from "../../../../public/all_cards.webp";
import paypal from "../../../../public/icon_paypal.webp";
import Image from "next/image";
import CreditCard from "./CreditCard";
import PayPal from "./PayPal";
import PayPalBlue from "./PayPalBlue";
import CreditCardBlue from "./CreditCardBlue";
import { useLocalStorage } from "@/app/lib/hooks/useLocalStorage";
import { redirect, useSearchParams } from "next/navigation";

export default function ModalPay({
  setFlag,
  setModalFlag,
  setDiscount,
}: {
  setFlag: (arg: boolean) => void;
  setModalFlag?: (arg: boolean) => void;
  setDiscount?: (arg: boolean) => void;
}) {
  const [currPay, setCurPay] = useState(false);
  const { storage } = useLocalStorage();
  const search = useSearchParams().toString();
  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 w-1/1 flex items-center justify-center z-[1000] h-screen bg-[rgba(0,0,0,0.66)]">
      <motion.form
        initial={{ transform: `translateY(100vh)` }}
        animate={{ transform: `translateY(0vh)` }}
        exit={{ transform: `translateY(100vh)` }}
        transition={{ duration: 0.5, ease: "linear" }}
        onSubmit={(e) => {
          e.preventDefault();
          setFlag(false);
          if (setModalFlag) {
            setModalFlag(true);
            redirect("/thank?" + search);
          }
        }}
        className="h-[97%]  w-[585px] mt-[100px] max-md:w-1/1 bg-white rounded-tl-[16px] p-[24px] flex flex-col">
        <button
          type="button"
          className="cursor-pointer flex flex-row-reverse"
          onClick={() => {
            if (storage) {
              setFlag(false);
            } else if (setDiscount) {
              setDiscount(true);
            }
          }}>
          <X />
        </button>{" "}
        <h2 className="text-[20px] font-bold text-center">
          Select Payment method
        </h2>
        <div className="flex gap-2 mt-[20px]">
          <button
            type="button"
            onClick={() => setCurPay(true)}
            className={`${
              currPay
                ? "bg-[#eef1fb] border-[#5773d6]"
                : "bg-[#f9f9f9] border-transparent"
            } border-2  rounded-[9px] h-[49px] cursor-pointer flex items-center justify-center transition-all duration-[0.25] ease-in w-1/1`}>
            <Image height={39} width={100} src={paypal} alt="alt card" />
          </button>
          <button
            type="button"
            onClick={() => {
              setCurPay(false);
            }}
            className={`${
              !currPay
                ? "bg-[#eef1fb] border-[#5773d6]"
                : "bg-[#f9f9f9] border-transparent"
            } border-2  rounded-[9px] cursor-pointer h-[49px] flex items-center justify-center transition-all duration-[0.25] ease-in w-1/1`}>
            <Image height={39} width={100} src={allCard} alt="alt card" />
          </button>
        </div>
        {currPay ? (
          storage ? (
            <PayPal />
          ) : (
            <PayPalBlue />
          )
        ) : storage ? (
          <CreditCard />
        ) : (
          <CreditCardBlue />
        )}
      </motion.form>
    </div>,
    document.body
  );
}
