import gantele from "../../../../public/gantele.svg";
import Image from "next/image";
import fivemin from "../../../../public/EN_img_5min_day.webp";
import BackGotIt from "@/app/ui/EndQuiz/BackGotIt";
import { Suspense } from "react";

export default function BestThing() {
  return (
    <main className="flex items-center flex-col">
      <section className="flex items-center max-md:w-[320px] flex-col gap-6">
        <h2 className="text-[23px] font-bold text-center">
          The best thing? It takes just 5 min a day
        </h2>
        <Image
          className="max-lg:w-[300px] w-[500px]"
          src={fivemin}
          alt="five min"
        />
        <div className="flex flex-col gap-5">
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
      </section>
      <Suspense fallback={null}>
        <BackGotIt path="finaladjustment" backpath="helpimprove" />
      </Suspense>
    </main>
  );
}
