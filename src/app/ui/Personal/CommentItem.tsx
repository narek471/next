import { Comment } from "@/app/lib/comments";
import star from "../../../../public/star.svg";
import Image from "next/image";

export default function CommentItem({ data }: { data: Comment }) {
  return (
    <div className="bg-[#f9f9f9] w-[536px] max-lg:w-[330px] justify-between flex gap-4 flex-col items-center  p-[16px] rounded-[9px]">
      <div className="flex w-1/1 flex-col ">
        <div className="flex justify-between gap-2">
          <h4 className="font-bold max-lg:text-[12px] text-[14px]">
            {data.message}
          </h4>{" "}
          <p className="text-[12px] max-lg:text-[9px] opacity-50 auto">
            {data.author}
          </p>
        </div>
        <ol className="flex">
          {new Array(data.rate).fill(null).map((val, i) => (
            <Image key={i} alt="star" src={star} />
          ))}
        </ol>
      </div>
      <div className="w-1/1">
        <p className="text-[12px] max-lg:text-[10px]  ">{data.description}</p>
      </div>
    </div>
  );
}
