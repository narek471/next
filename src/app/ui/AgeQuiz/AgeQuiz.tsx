import AgeElQuiz from "./AgeElQuiz";
import age1 from "../../../../public/v6_img_1.png";
import age2 from "../../../../public/v6_img_2.png";
import age3 from "../../../../public/v6_img_3.png";
import age4 from "../../../../public/v6_img_4.png";
import Link from "next/link";

export default function AgeQuiz() {
  return (
    <section className="flex items-center flex-col gap-[20px]">
      <h2 className="text-[19px] font-[900]">Creating Sexual Wellness Plan </h2>
      <div className="w-[311px] bg-gray-200 h-[16px] rounded-2xl">
        <div className="w-[30%] overflow-hidden h-1/1 rounded-2xl">
          <div className="gradient rounded-2xl"></div>
        </div>
      </div>
      <p className="font-[900]">How old are you?</p>
      <ul className="flex flex-col gap-2">
        <AgeElQuiz ageEl="25-35" image={age1} />
        <AgeElQuiz ageEl="35-45" image={age2} />
        <AgeElQuiz ageEl="45-55" image={age3} />
        <AgeElQuiz ageEl="55+" image={age4} />
      </ul>
      <div className="w-[536px] max-lg:w-[300] p-[32px]">
        <p className="opacity-75  text-[#111113] text-[14px] text-center">
          By choosing your age and continuing you agree to our{" "}
          <Link
            className="text-[#5773d6] underline"
            href="https://quiz.kegel-plan.me/terms.html">
            Terms & Conditions | Privacy Policy
          </Link>
          .Please review before continuing
        </p>
      </div>
      <div className="opacity-75 text-[#111113] text-[14px] flex flex-col gap-1">
        <p className="text-center">Appercut sp z o o </p>
        <p className="text-center">Warsaw, Twarda 18, 00-105</p>
      </div>
    </section>
  );
}
