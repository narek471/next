"use client";
import Continue from "@/app/ui/EndQuiz/Continue";
import confrimEmail from "../../../../public/confirm-email-bg.avif";
import Image from "next/image";
import { Lock } from "lucide-react";
import { useState } from "react";

function validateEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
export default function ConfrimEmail() {
  const [email, setEmail] = useState("");
  return (
    <main className="flex flex-col items-center h-screen absolute z-10 top-0 gap-6">
      <div className="w-[600px] relative h-[700px] overflow-hidden">
        <Image src={confrimEmail} alt="confrim email" className="w-1/1 " />
        <div className="w-1/1 bg-[rgba(0,0,0,0.66)] absolute h-1/1 z-10 top-0 bottom-0  "></div>
      </div>
      <form className="w-[311px] gap-5 flex items-center flex-col">
        <h2 className="text-[20px] text-center font-bold">
          Enter email to get your personal Kegel Plan
        </h2>
        <label className="relative items-center justify-center flex" htmlFor="">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[2px]  text-[16px] h-[53px] bg-[#f1f3f9] w-[311px] outline-0 p-[14px]  rounded-[9px] relative border-white shadow-[inset_0_4px_4px_#0000000a]"
            type="email"
          />
          <Lock className="absolute top-[30%] left-[86%] opacity-50 right-0  bottom-0   " />
        </label>
        <p className="text-[10px] opacity-50 text-center">
          Your personal data is safe with us.We'll use your email for updates,
          receipts, and subscription details.
        </p>
        <Continue disabled={validateEmail(email)} path="/landing" />
      </form>
    </main>
  );
}
