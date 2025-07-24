import Continue from "@/app/ui/EndQuiz/Continue";
import DateEndAnimation from "@/app/ui/EndQuiz/DateEndAnimation";

export default function FinalAdjustment() {
  return (
    <main>
      <section className="flex flex-col gap-5 w-[600px] max-lg:w-[300px] items-center">
        <h2 className="text-[23px] font-bold text-center">Final adjustment</h2>
        <DateEndAnimation />
        <video
          className="w-[450px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
          autoPlay
          loop>
          <source src="https://quiz.kegel-plan.me/video/en/EN_video_graph_pp1.mp4" />
        </video>
        <p className="text-[12px] text-gray-500">
          *for illustration purposes only
        </p>
        <video
          className="w-[550px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
          autoPlay
          loop>
          <source src="https://quiz.kegel-plan.me/video/video_compatibility_score.mp4" />
        </video>
        <p className="text-[16px] text-center">
          87.1% of men from the same age group as you (25-35 years) report
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
