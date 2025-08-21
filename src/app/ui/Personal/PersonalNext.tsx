"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

import { setSelected } from "../../store/reducers/userData";

export default function PersonalNext() {
  const task = useParams()["slug"];

  const search = useSearchParams().toString();

  return (
    <section className="flex gap-2 w-1/1 mt-[15px]  font-bold ">
      <button
        className="w-1/1"
        onClick={() => {
          setSelected(null);
        }}>
        <Link
          className={` h-[55px] rounded-[10px] font-bold shadow-[0px_10px_40px_#e44240]  bg-[#e44240] text-white flex items-center justify-center gap-2`}
          href={`${+task! + 1}?${search}`}>
          Continue
        </Link>
      </button>
    </section>
  );
}
