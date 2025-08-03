import Image from "next/image";
import tablePlan from "../../../../public/EN_img_pills_vs_kegel_Erection_Stamina.png";
import NCB from "../../../../public/NCB.svg";

export default function KegelPlan() {
  return (
    <section className="flex items-center max-lg:w-[300px] w-[500px] mt-[40px] flex-col gap-5">
      <h2 className="font-bold   text-[20px] text-white text-center">
        The Kegel Plan is better than pills
      </h2>
      <Image
        className="w-1/1 h-[405px] max-lg:h-[300px]"
        src={tablePlan}
        alt="table plan"
      />
      <div className="bg-[#1c1c1f] p-[9px] text-white w-1/1 flex gap-2 items-center rounded-[9px]">
        <Image src={NCB} alt="National Center for Biotechnology Info" />
        <div>
          <p className="text-[12px]">Source:</p>
          <p className="text-[14px] font-bold">
            National Center for Biotechnology Info.
          </p>
        </div>
      </div>
    </section>
  );
}
