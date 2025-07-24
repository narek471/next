"use client";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import saveCard from "@/app/lib/actions/saveCard";

export default function ModalPay({
  setFlag,
  setModalFlag,
}: {
  setFlag: (arg: boolean) => void;
  setModalFlag: (arg: boolean) => void;
}) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (text.trim().length < 16) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [text]);
  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 w-1/1 flex items-center justify-center z-[1000] h-screen bg-[rgba(0,0,0,0.66)]">
      <motion.form
        initial={{ transform: `translateY(100vh)` }}
        animate={{ transform: `translateY(0vh)` }}
        transition={{ duration: 0.5, ease: "linear" }}
        action={saveCard}
        onSubmit={() => {
          setFlag(false);
          setModalFlag(true);
        }}
        className="h-[97%] gap-10 w-[585px] mt-[100px] max-lg:w-[300px] bg-white rounded-tl-[16px] p-[24px] flex flex-col">
        <button
          type="button"
          className="cursor-pointer flex flex-row-reverse"
          onClick={() => setFlag(false)}>
          <X />
        </button>{" "}
        <h2 className="text-2xl font-bold text-center">Input your card</h2>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-[2px]  text-[16px] h-[53px] bg-[#f1f3f9] w-1/1 outline-0 p-[14px]  rounded-[9px] relative border-white shadow-[inset_0_4px_4px_#0000000a]"
          type="text"
          placeholder="0000 0000 0000 0000"
          name="card"
        />
        <button
          type="submit"
          disabled={disabled}
          className={` h-[55px] rounded-[10px] font-bold ${
            disabled
              ? "bg-[#cacaca]"
              : "shadow-[0px_10px_40px_#e44240]  bg-[#e44240]"
          } text-white flex items-center justify-center gap-2 cursor-pointer`}>
          Continue
        </button>
      </motion.form>
    </div>,
    document.body
  );
}
