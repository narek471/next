"use client";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";

export default function ModalQueue() {
  const search = useSearchParams().toString();
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect("/quiz/landing?" + search);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
      className="fixed top-0 bottom-0 left-0 right-0 w-1/1 flex items-center justify-center z-[1000] h-screen bg-[rgb(0,0,0)]">
      <div className="text-white text-[25px] w-[600px] text-left gap-5 flex flex-col max-md:w-[300px] max-lg:text-[25px]">
        <h4>Thank you!</h4>
        <p>
          Our app is currently in development. We’ve added your email to the
          waitlist and will notify you as soon as it’s ready.
        </p>{" "}
        <p>Thank you again for your trust.</p>
        <p>Please note: your payment details have not been saved.</p>
      </div>
    </motion.div>,
    document.body
  );
}
