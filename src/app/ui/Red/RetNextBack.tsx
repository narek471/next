"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { setSelected } from "../../store/reducers/userData";

export default function RedNextBack() {
  const task = useParams()["slug"];

  const search = useSearchParams().toString();

  return (
    <section className="flex gap-2  bg-[#111113] font-bold fixed bottom-0 max-sm:top-[80%] top-[90%]">
      <button>
        <Link
          href={Number(task) <= 0 ? "/" : `${+task! - 1}?${search}`}
          className="h-[55px] bg-[#282828] rounded-[10px] w-[150px] text-white flex items-center justify-center gap-2"
          onClick={() => {
            setSelected(null);
          }}>
          <ArrowLeft />
          Back
        </Link>
      </button>
      <button
        onClick={() => {
          setSelected(null);
        }}>
        <Link
          className={` h-[55px] rounded-[10px]  w-[150px] bg-[#e44240] text-white flex items-center justify-center gap-2`}
          href={`${+task! + 1}?${search}`}>
          I got it <ArrowRight />
        </Link>
      </button>
    </section>
  );
}
