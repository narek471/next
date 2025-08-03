import Continue from "@/app/ui/EndQuiz/Continue";
import DateEndAnimation from "@/app/ui/EndQuiz/DateEndAnimation";

export default function FinalAdjustment() {
  return (
    <main>
      <section className="flex flex-col gap-5 w-[600px] max-md:w-[300px] items-center">
        <h2 className="text-[23px] font-bold text-center">Final adjustment</h2>
        <DateEndAnimation />
        <video
          className="w-[450px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
          autoPlay
          playsInline>
          <source src="https://quiz.kegel-plan.me/video/en/EN_video_graph_final.mp4" />
        </video>
        <p className="text-[12px] text-gray-500">
          *for illustration purposes only
        </p>
        <video
          className="w-[550px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
          autoPlay
          playsInline>
          <source src="https://quiz.kegel-plan.me/video/video_compatibility_score.mp4" />
        </video>
        <p className="font-black pr-[12px] pl-[12px] rounded-[9px] text-[#53cc58] text-[20px] border-2 border-[#53cc58]">
          87.8%
        </p>
        <p className="text-[16px] text-center w-[500px] max-lg:w-[300px]">
          <span className="font-bold">87.1%</span> of men from the same age
          group as you <span className="font-bold">(25-35 years)</span> report
          noticeable improvements by following Kegel Plan.
        </p>
        <p className="text-[12px] text-gray-500">
          *statistics from internal survey
        </p>

        <Continue path={"confrim-email"} />
      </section>
    </main>
  );
}
