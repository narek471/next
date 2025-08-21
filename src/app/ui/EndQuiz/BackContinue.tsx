"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackContinue() {
  const search = useSearchParams();
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    setSearchParam(search.toString());
  }, [search]);

  return (
    <section className="flex  gap-2 bg-white font-bold justify-center max-sm:top-[85%] fixed bottom-0 w-1/1 top-[90%]">
      <button>
        <Link
          href={`analyzing?${searchParam}`}
          className="h-[55px] rounded-[10px] w-[260px] max-md:w-[150px] bg-gray-200 text-black flex items-center justify-center gap-2">
          <ArrowLeft />
          Back
        </Link>
      </button>
      <button>
        <Link
          className={`h-[55px] rounded-[10px] max-md:w-[150px]   w-[260px] bg-[#e44240] text-white flex items-center justify-center gap-2`}
          href={`helpimprove?${searchParam}`}>
          Continue <ArrowRight />
        </Link>
      </button>
    </section>
  );
}
