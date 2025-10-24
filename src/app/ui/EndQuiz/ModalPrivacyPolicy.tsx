"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowRight, CheckIcon } from "lucide-react";
import { createPortal } from "react-dom";

export default function ModalPrivacyPolicy() {
  const { taskAnswered } = useSelector(
    (state: {
      userData: { taskAnswered: { [key: number]: string }; selected: number };
    }) => state.userData
  );
  const [disabled, setDisabled] = useState(true);

  const search = useSearchParams().toString();

  return createPortal(
    <div className="fixed top-0 bottom-0 left-0 flex items-center justify-center right-0 bg-[rgba(0,0,0,0.62)]">
      <form className="bg-white flex  rounded-[16px] p-[24px] w-[600px] h-[182px] justify-between flex-col items-center">
        <div className="flex gap-5 pt-[10px]  items-center ">
          <button
            type="button"
            onClick={() => setDisabled(!disabled)}
            className={`${
              !disabled ? "bg-black" : "bg-white"
            } h-[24px] flex items-center justify-center text-white w-[24px] border-2 border-[#111113] rounded-[5px]`}>
            <CheckIcon />
          </button>
          <p className="text-[12px]">
            I consent to Dr. Kegel processing my health onboarding data to
            provide services and enhance my user experience.{" "}
            <a
              className="text-[#5773d6] underline"
              href="https://www.termsfeed.com/live/c61a8a44-f66d-4669-ad9f-faee10d11010"
              target="_blank">
              Privacy Policy
            </a>
          </p>
        </div>
        <button onClick={() => {}} disabled={disabled}>
          {!disabled ? (
            <Link
              className={`${
                disabled ? "opacity-40" : "opacity-100"
              } h-[55px] rounded-[10px]  w-[150px] bg-[#e44240] text-white flex items-center justify-center gap-2`}
              href={`analyzing?${search}`}>
              Continue <ArrowRight />
            </Link>
          ) : (
            <p className=" h-[55px] opacity-40 rounded-[10px]  w-[150px] bg-[#e44240] text-white flex items-center justify-center gap-2">
              Continue <ArrowRight />
            </p>
          )}
        </button>
      </form>
    </div>,
    document.body
  );
}
