"use client";
import { COMMENTS } from "@/app/lib/comments";
import PersonalNext from "../Personal/PersonalNext";
import CommentItem from "../Personal/CommentItem";
import { useState } from "react";

export default function BasedGoals3() {
  const [slice, setSlice] = useState(3);
  return (
    <section className="flex items-center  max-md:max-w-[320px] flex-col gap-6">
      <h2 className="text-[22px] font-bold text-center">
        Based on your personal goals you can
      </h2>
      <p className="text-[15px] ">
        Improve <span className="font-bold">Sexual Wellness</span>
      </p>
      <p className="text-xl text-[#5773d6] font-bold">by September 11</p>
      <video
        className="w-[450px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
        autoPlay
        playsInline>
        <source src="https://quiz.kegel-plan.me/video/en/EN_video_graph_pp1.mp4" />
      </video>
      <p className="text-[12px] text-gray-500">
        *for illustration purposes only
      </p>
      <div className="flex flex-col gap-5 items-center">
        <h3 className="text-[16px] font-bold max-lg:text-[14px]">
          Customer reviews
        </h3>
        <ul className="gap-2 flex flex-col">
          {COMMENTS.slice(0, slice).map((val, i) => (
            <CommentItem data={val} key={i} />
          ))}
          {slice < 5 && (
            <button
              onClick={() => setSlice((val) => val + 1)}
              className="text-[14px] cursor-pointer font-bold text-[#5773d6] text-center">
              Show more
            </button>
          )}
        </ul>
      </div>
      <PersonalNext />
    </section>
  );
}
