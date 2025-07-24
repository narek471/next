import erctile from "../../../../public/erectile.svg";
import ejaculation from "../../../../public/ejaculation.svg";
import prostate from "../../../../public/prostate.svg";
import confidence from "../../../../public/confidence.svg";
import relation from "../../../../public/relationShip.svg";
import HelpItem from "@/app/ui/EndQuiz/HelpItem";
import BackGotIt from "@/app/ui/EndQuiz/BackGotIt";

const arrHelps = [
  { title: "Erectile function", image: erctile },
  { title: "Ejaculation control", image: ejaculation },
  { title: "Prostate health", image: prostate },
  { title: "Confidence", image: confidence },
  { title: "Relationship happiness", image: relation },
];

export default function HelpImprove() {
  return (
    <main className="flex items-center flex-col gap-5">
      <h1 className="text-[24px] font-bold">
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
