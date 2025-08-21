import PersonalNext from "../Personal/PersonalNext";
import timer from "../../../../public/timer.svg";
import gantele from "../../../../public/gantele.svg";
import Image from "next/image";
import DateAnimation from "../Personal/DateAnimtion";
import { Easing, motion } from "framer-motion";

const cubic1 = [0.98, 0.03, 0, 0.08];

export default function BaseCanGoals2() {
  return (
    <section className="flex items-center  max-md:max-w-[320px] flex-col gap-6">
      <h2 className="text-[22px] font-bold text-center">
        Based on your personal goals you can
      </h2>
      <p className="text-[15px] ">
        Improve <span className="font-bold">Erectile Function</span> and
        <span className="font-bold"> Ejaculation Control</span>
      </p>
      <DateAnimation />
      <video
        className="w-[450px] max-lg:w-[300px] max-lg:h-[200px] h-[279px]"
        autoPlay
        playsInline>
        <source src="https://quiz.kegel-plan.me/video/en/EN_video_graph_pp2.mp4" />
      </video>
      <p className="text-[12px] text-gray-500">
        *for illustration purposes only
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: cubic1 as unknown as Easing[] }}
        className="w-1/1 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <p className="flex">
            <Image src={timer} alt="timer" />
            Duration: <span className="font-bold">5 min/day</span>
          </p>
          <p className="flex">
            <Image src={gantele} alt="gantele" />
            Equipment: <span className="font-bold">not needed</span>
          </p>
        </div>
        <div className="border-l-[#5773d6] border-l-[4px] w-[500px] max-lg:w-[300px] pl-[20px]">
          <p>
            <span className="font-bold text-[16px]">Note:</span> All exercises
            from the Kegel Plan are discreet to other people. Therefore, you can
            do them anywhere and at any time
          </p>
        </div>
      </motion.div>
      <PersonalNext />
    </section>
  );
}
