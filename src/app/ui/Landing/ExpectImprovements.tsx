import Image from "next/image";
import final from "../../../../public/EN_video_graph_final.webp";

export default function ExpectImprovements() {
  return (
    <section className="flex items-center max-lg:w-[320px] w-[620px] bg-white z-[500] flex-col gap-6">
      <h2 className="text-[22px] font-bold text-center">
        When to Expect Improvements
      </h2>
      <p className="text-[15px] ">
        Based on our data you can reach noticeable improvements
      </p>
      <div className="flex gap-2 items-center">
        <p className="text-xl text-[#5773d6] font-bold">by August 21</p>
        <video playsInline width={90} autoPlay>
          <source src="https://quiz.kegel-plan.me/video/en/EN_video_34_faster.mp4" />
        </video>
      </div>

      <Image
        src={final}
        alt="image"
        className="w-[520px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
      />
      <p className="text-[12px] text-gray-500">
        *for illustration purposes only
      </p>
    </section>
  );
}
