"use client";
import HelpItem from "@/app/ui/EndQuiz/HelpItem";
import BackGotIt from "@/app/ui/EndQuiz/BackGotIt";
import { arrHelps, arrHelps1, arrHelps2 } from "@/app/lib/helps";
import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

export default function HelpImprove() {
  const [helps, setHelps] = useState(arrHelps);

  const search = useSearchParams();
  useEffect(() => {
    if (search.get("0") == "0") {
      setHelps(arrHelps);
    } else if (search.get("0") == "1") {
      setHelps(arrHelps1);
    } else if (search.get("0") == "2") {
      setHelps(arrHelps2);
    }
  }, [search]);
  return (
    <main className="flex items-center flex-col gap-5">
      <h1 className="text-[24px] font-bold text-center">
        Your Kegel plan will help you to improve:
      </h1>
      <ul className="flex flex-col  gap-5 w-1/1">
        {helps.map((val, i) => (
          <HelpItem key={i} title={val.title} image={val.image} delay={i / 3} />
        ))}
      </ul>
      <BackGotIt path="bestthing" backpath="trusted" />
    </main>
  );
}
