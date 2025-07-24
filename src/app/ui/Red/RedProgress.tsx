import { CheckIcon } from "lucide-react";
import { Ref } from "react";

export default function RedProgressBar({
  progress,
  ref,
}: {
  ref: Ref<HTMLDivElement>;
  progress: number;
}) {
  return (
    <div>
      <div className="w-[311px] flex items-center relative bg-[#282828] rounded-2xl mt-[20px] justify-between h-[8px]">
        <span className="h-[19px] w-[19px] rounded-full bg-[#e44240]"></span>
        <span
          className={`h-[19px] w-[19px] rounded-full flex items-center justify-center ${
            progress >= 35 ? "bg-[#e44240]" : "bg-[#282828]"
          }`}>
          {progress >= 35 && <CheckIcon size={30} className="text-white z-1" />}
        </span>
        <span
          className={`h-[19px] w-[19px] rounded-full flex items-center justify-center ${
            progress >= 65 ? "bg-[#e44240]" : "bg-[#282828]"
          }`}>
          {progress >= 65 && <CheckIcon size={30} className="text-white z-1" />}
        </span>
        <span
          className={`h-[19px] w-[19px] rounded-full flex items-center justify-center ${
            progress >= 100 ? "bg-[#e44240]" : "bg-[#282828]"
          }`}>
          {progress >= 100 && (
            <CheckIcon size={30} className="text-white z-1" />
          )}
        </span>
        <div
          ref={ref}
          className={`bg-[#e44240] h-[8px] rounded-2xl transition-all duration-150 absolute w-[${progress}%]`}></div>
      </div>
    </div>
  );
}
