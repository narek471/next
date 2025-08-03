import Image from "next/image";
import peoopleRec from "../../../../public/EN_img_4mil_men_ww.webp";
import BackContinue from "@/app/ui/EndQuiz/BackContinue";

export default function Page() {
  return (
    <main className="w-[600px] flex items-center mt-[50px] min-h-[120vh] max-md:gap-0 gap-10 max-md:w-[300px] flex-col">
      <h1 className="text-[24px] font-[900]  text-center">
        Congratulations on joining the millions of men prioritizing sexual
        wellness
      </h1>
      <video
        className="w-[536px] h-[536px]  max-md:h-[340px]"
        autoPlay
        playsInline
        preload="auto">
        <source src="https://quiz.kegel-plan.me/video/video_reviews_f2.mp4" />
      </video>
      <Image src={peoopleRec} alt="trusted" />
      <BackContinue />
    </main>
  );
}
