import AgeElQuiz from "./AgeElQuiz";
import age1 from "../../../../public/v6_img_1.png";
import age2 from "../../../../public/v6_img_2.png";
import age3 from "../../../../public/v6_img_3.png";
import age4 from "../../../../public/v6_img_4.png";

export default function AgeQuiz() {
  return (
    <section className="flex items-center flex-col gap-[20px]">
      <h2 className="text-[19px] font-[900]">Creating Sexual Wellness Plan </h2>
      <div className="w-[311px] bg-gray-200 h-[16px] rounded-2xl"></div>
      <p className="font-[900]">How old are you?</p>
      <ul className="flex flex-col gap-2">
        <AgeElQuiz ageEl="25-35" image={age1} />
        <AgeElQuiz ageEl="35-45" image={age2} />
        <AgeElQuiz ageEl="45-55" image={age3} />
        <AgeElQuiz ageEl="55+" image={age4} />
      </ul>
    </section>
  );
}
