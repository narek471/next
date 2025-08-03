"use client";

import confrimEmail from "../../../../public/confirm-email-bg.avif";
import Image from "next/image";
import { Lock } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

import saveEmail from "@/app/lib/actions/saveEmail";
import Link from "next/link";

export function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
export default function ConfrimEmail() {
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);

  const search = useSearchParams();
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    setSearchParam(search.toString());
  }, [search]);
  useEffect(() => {
    if (validateEmail(email)) {
      setDisabled(false);
    }
  }, [email]);
  return (
    <main className="flex flex-col w-1/1 items-center h-screen absolute z-10 top-0 gap-6">
      <div className="w-[600px] max-lg:w-1/1 relative h-[700px] overflow-hidden">
        <Image src={confrimEmail} alt="confrim email" className="w-1/1 " />
        <div className="w-1/1 bg-[rgba(0,0,0,0.66)] absolute h-1/1 z-10 top-0 bottom-0  "></div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (validateEmail(email)) {
            saveEmail(email);
          }
        }}
        className="w-[311px] gap-5 flex items-center flex-col">
        <h2 className="text-[20px] text-center font-bold">
          Enter email to get your personal Kegel Plan
        </h2>
        <label className="relative items-center justify-center flex" htmlFor="">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[2px]  text-[16px] h-[53px] bg-[#f1f3f9] w-[311px] outline-0 p-[14px]  rounded-[9px] relative border-white shadow-[inset_0_4px_4px_#0000000a]"
            type="email"
            name="email"
          />
          <Lock className="absolute top-[30%] left-[86%] opacity-50 right-0  bottom-0   " />
        </label>
        <p className="text-[10px] opacity-50 text-center">
          Your personal data is safe with us.We`ll use your email for updates,
          receipts, and subscription details.
        </p>

        <button
          className="w-1/1"
          disabled={disabled}
          onClick={() => {
            if (email) {
              if (validateEmail(email)) {
                saveEmail(email);
              }
            }
          }}>
          {disabled == false ? (
            <Link
              className={` h-[55px] rounded-[10px] font-bold shadow-[0px_10px_40px_#e44240]  bg-[#e44240] text-white flex items-center justify-center gap-2`}
              href={`/quiz/landing?${searchParam}`}>
              Continue
            </Link>
          ) : (
            <p
              className={` h-[55px] rounded-[10px] font-bold  bg-[#cacaca] text-white flex items-center justify-center gap-2`}>
              Continue
            </p>
          )}
        </button>
      </form>
    </main>
  );
}
