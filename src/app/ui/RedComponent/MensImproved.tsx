import Image from "next/image";
import greenStar from "../../../../public/greenStar.svg";

export default function MensImproved() {
  return (
    <section className="flex items-center max-lg:w-[300px] w-[500px] mt-[40px] flex-col gap-10">
      <h2 className="font-bold  text-center text-[20px] text-white">
        <span className="text-[#53cc58]">8 out of 10 </span>men improved their
        ejaculation control by following <span className="underline">the Kegel Plan</span>
      </h2>
      <video autoPlay playsInline>
        <source src="https://quiz.kegel-plan.me/video/video_8outof10.mp4"></source>
      </video>
      <div className=" flex gap-2 flex-col w-[500px] max-lg:w-[300px] p-[16px] rounded-[9px] bg-[#1d1d1f] text-[15px]  text-white">
        <div className="flex justify-between ">
          <ol className="flex gap-[1px]">
            {new Array(5).fill(null).map((val, i) => (
              <Image key={i} src={greenStar} alt="green star" />
            ))}
          </ol>
          <p className="text-[12px] text-gray-400">JiggySpot</p>
        </div>
        <div className="text-white flex flex-col gap-2">
          <h4 className="text-[14px] font-bold">
            I’m glad I found these exercises
          </h4>
          <p className="text-[12px]">
            I’ve been doing Kegel exercises for 2 weeks now and I increased my
            stamina for real! I feel more confident with my partner. You should
            try Kegels as well
          </p>
        </div>
      </div>
    </section>
  );
}
