"use client";
import { SUCCESS_STORIES } from "@/app/lib/comments";
import { useState } from "react";
import CommentAnswerL from "./CommentAnswerL";

export default function SuccesStories() {
  const [countSlice, setCountSlice] = useState(3);
  return (
    <section className="flex flex-col gap-5">
      <ul className="flex flex-col max-md:items-center gap-2 max-md:p-5">
        {" "}
        <h2 className="text-[24px] text-center font-black max-md:p-2 ">
          Hear Success Stories From Our Customers
        </h2>
        {SUCCESS_STORIES.slice(0, countSlice).map((val, i) => (
          <CommentAnswerL data={val} key={i} />
        ))}
        {countSlice < 6 && (
          <button
            onClick={() => setCountSlice((val) => val + 1)}
            className="text-[14px] cursor-pointer text-[#5773d6] font-bold text-center">
            {" "}
            Show more
          </button>
        )}
      </ul>
    </section>
  );
}
