"use client";
import { SUCCESS_STORIES } from "@/app/lib/comments";
import { useState } from "react";
import CommentAnswer from "../EndQuiz/CommentAnswer";

export default function SuccesStories() {
  const [countSlice, setCountSlice] = useState(3);
  return (
    <section className="flex flex-col gap-5">
      <h2 className="text-[24px] text-center font-bold ">
        Hear Success Stories From Our Customers
      </h2>
      <ul className="flex flex-col gap-2">
        {SUCCESS_STORIES.slice(0, countSlice).map((val, i) => (
          <CommentAnswer data={val} key={i} />
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
