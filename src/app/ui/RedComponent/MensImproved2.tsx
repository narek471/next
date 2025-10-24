import Image from "next/image";
import greenStar from "../../../../public/greenStar.svg";
import mans from "../../../../public/EN_img_erection_84.webp";
import { User2 } from "lucide-react";

export default function MensImproved2() {
  return (
    <section className="flex items-center max-lg:w-[300px] w-[500px] mt-[40px] flex-col gap-6">
      <div className="bg-[#ff7a00] gap-1 uppercase text-[13px] font-[Roboto, sans-serif] text-white font-bold flex items-center rounded-[10px] justify-center    p-2">
        <User2 size={22} />
        USER SURVEY
      </div>
      <h2 className="font-bold  text-center text-[20px] text-white">
        <span className="text-[#53cc58]">84% of men </span>significantly
        improved erection by following <span className="underline">the Kegel Plan</span>
      </h2>
      <Image height={400} src={mans} alt="mans" />
      <div className=" flex gap-2 flex-col w-[500px] max-lg:w-[300px] p-[16px] rounded-[9px] bg-[#1d1d1f] text-[15px]  text-white">
        <div className="flex justify-between ">
          <ol className="flex gap-[1px]">
            {new Array(5).fill(null).map((val, i) => (
              <Image key={i} src={greenStar} alt="green star" />
            ))}
          </ol>
          <p className="text-[12px] text-gray-400">Chauchooo</p>
        </div>
        <div className="text-white flex flex-col gap-2">
          <h4 className="text-[14px] font-bold">The effect is great</h4>
          <p className="text-[12px]">
            After 4 weeks of kegels, I have no trouble getting and maintaining
            erection. If you’re struggling as I did, try these exercises
          </p>
        </div>
      </div>
    </section>
  );
}
