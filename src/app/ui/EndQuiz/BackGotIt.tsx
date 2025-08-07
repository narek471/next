"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

export default function BackGotIt({
  path,
  backpath,
}: {
  path: string;
  backpath: string;
}) {
  const search = useSearchParams().toString();
  const [searchParam, setSearchParam] = useState("");

  return (
    <section className="flex  gap-2 bg-white font-bold  justify-center fixed bottom-0 w-1/1 top-[90%]">
      <button>
        <Link
          href={`${backpath}?${search}`}
          className="h-[55px] rounded-[10px] max-lg:w-[200px]  w-[256px] bg-gray-200 text-black flex items-center justify-center gap-2 max-ms:w-[180px]">
          <ArrowLeft />
          Back
        </Link>
      </button>
      <button>
        <Link
          className={`h-[55px] rounded-[10px] max-lg:w-[200px]  w-[256px] bg-[#e44240] text-white flex items-center justify-center gap-2 max-ms:w-[180px]`}
          href={`${path}?${search}`}>
          Got it <ArrowRight />
        </Link>
      </button>
    </section>
  );
}
