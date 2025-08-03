"use client";
import Image from "next/image";
import greenStar from "../../../../public/greenStar.svg";
import { Comment } from "@/app/lib/comments";

export default function CommentAnswerL({ data }: { data: Comment }) {
  return (
    <div className="w-[500px] max-md:w-1/1 max-lg:w-[300px] rounded-[10px] shadow-md p-5 gap-5">
      <div className="flex justify-between  text-black">
        <ol className="flex gap-[1px]">
          {new Array(5).fill(null).map((val, i) => (
            <Image key={i} src={greenStar} alt="green star" />
          ))}
        </ol>
        <p className="text-[12px] text-gray-400">{data.author}</p>
      </div>
      <div className=" flex flex-col gap-2 mt-2">
        <h4 className="text-[14px] font-bold">{data.message}</h4>
        <p className="text-[12px]">{data.description}</p>
      </div>
    </div>
  );
}
