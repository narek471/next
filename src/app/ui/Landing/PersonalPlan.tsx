import Image from "next/image";
import beforeafter from "../../../../public/EN_img_beforeafter2.webp";

export default function PersonalPlan() {
  return (
    <section className="w-[600px] items-center  max-md:w-[300px] flex flex-col gap-5">
      <h1 className="text-[31px] max-lg:text-[25px] font-bold text-center">
        Your Personal Plan is Ready!
      </h1>
      <Image
        className="w-[420px] max-md:w-[300px]"
        src={beforeafter}
        alt="befor after"
      />
    </section>
  );
}
