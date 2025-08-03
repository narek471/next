"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

export default function Continue({
  path,
  disabled,
}: {
  path: string;
  disabled?: boolean;
}) {
  const search = useSearchParams();
  const [searchParam, setSearchParam] = useState("");
  useEffect(() => {
    setSearchParam(search.toString());
  }, [search]);
  return (
    <section className="flex gap-2 w-1/1 mt-[15px] font-bold ">
      <button className="w-1/1" disabled={disabled}>
        {disabled !== false ? (
          <Link
            className={` h-[55px] rounded-[10px] font-bold shadow-[0px_10px_40px_#e44240]  bg-[#e44240] text-white flex items-center justify-center gap-2`}
            href={`/quiz/${path}?${searchParam}`}>
            Continue
          </Link>
        ) : (
          <p
            className={` h-[55px] rounded-[10px] font-bold  bg-[#cacaca] text-white flex items-center justify-center gap-2`}>
            Continue
          </p>
        )}
      </button>
    </section>
  );
}
