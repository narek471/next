import HelpItem from "@/app/ui/EndQuiz/HelpItem";
import BackGotIt from "@/app/ui/EndQuiz/BackGotIt";
import { arrHelps } from "@/app/lib/helps";

export default function HelpImprove() {
  return (
    <main className="flex items-center flex-col gap-5">
      <h1 className="text-[24px] font-bold text-center">
        Your Kegel plan will help you to improve:
      </h1>
      <ul className="flex flex-col gap-5">
        {arrHelps.map((val, i) => (
          <HelpItem key={i} title={val.title} image={val.image} delay={i / 3} />
        ))}
      </ul>
      <BackGotIt path="bestthing" backpath="trusted" />
    </main>
  );
}
