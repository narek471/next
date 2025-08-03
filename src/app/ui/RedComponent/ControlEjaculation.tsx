"use client";
import Image from "next/image";
import diagramm from "../../../../public/EN_img_erection_kegels_nokegels.webp";
import corrected from "../../../../public/corrected.svg";
import NSH from "../../../../public/NSH.svg";
export default function ControlEjaculation() {
  return (
    <section className="flex items-center w-[550px] max-lg:w-[300px] mt-[50px] flex-col gap-6">
      <h2 className="font-bold  text-center text-[20px] text-white">
        The ability to <span className="underline">control ejaculation</span>{" "}
        depends on the strength of the{" "}
        <span className="text-[#53cc58]">Pelvic Floor (PF) muscles </span>
      </h2>
      <video height="720" autoPlay loop>
        <source src="https://quiz.kegel-plan.me/video/video_PE_s1.mp4"></source>
      </video>

      <p className="text-[15px] text-center text-white">
        Stronger PF muscles allow to control the ejaculatory reflex better and
        last longer.
      </p>
    </section>
  );
}
