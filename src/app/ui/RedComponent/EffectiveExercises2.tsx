"use client";
import Image from "next/image";
import diagramm from "../../../../public/diagramm2.png";
import corrected from "../../../../public/corrected.svg";
import SU from "../../../../public/SU.svg";
export default function EffectiveExercises2() {
  return (
    <section className="flex items-center w-[500px] max-lg:w-[300px] mt-[50px] flex-col gap-6">
      <div className="bg-[#e44240] gap-1 uppercase text-[13px] font-[Roboto, sans-serif] text-white flex items-center rounded-[10px] justify-center font-bold  w-[120px] h-[32px]">
        <Image
          src={corrected}
          width={18}
          className="text-white "
          alt="corrected"
        />
        Study fact
      </div>
      <h2 className="font-bold  text-center text-[20px] text-white">
        <span className="underline">Kegel Exercises</span> strengthen PF
        muscles, which effectively enhances
        <span className="text-[#53cc58]">Erection</span>{" "}
      </h2>
      <Image
        src={diagramm}
        className="h-[360px] max-lg:h-[300px] max-lg:w-[320px] w-[536px] "
        alt="erection diagramm"
      />

      <div className="bg-[#1c1c1f] p-[9px] text-white w-1/1 flex gap-2 items-center rounded-[9px]">
        <Image src={SU} alt="Sapienza University" />
        <div>
          <p className="text-[12px]">Source:</p>
          <p className="text-[14px] font-bold">Sapienza University</p>
        </div>
      </div>
    </section>
  );
}
