"use client";

import quizes from "@/app/lib/quizs";

import NextBack from "@/app/ui/NextBack";
import ProgressBar from "@/app/ui/ProgressBar";
import Quiz from "@/app/ui/Quiz/Quiz";
import RateQuiz from "@/app/ui/Quiz/RateQuiz";

import { CheckIcon } from "lucide-react";
import {
  redirect,
  useParams,
  usePathname,
  useSearchParams,
} from "next/navigation";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
export default function Page() {
  const param = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const quiz = quizes[Number(param["slug"])];
  const { progress } = useSelector(
    (state: { userData: { progress: number } }) => state.userData
  );
  useEffect(() => {
    ref.current!.style.width = progress + "%";
  }, [progress]);
  return (
    <div className="flex items-center flex-col">
      <ProgressBar progress={progress} ref={ref} />
      {quiz.type == "rate" ? <RateQuiz data={quiz} /> : <Quiz data={quiz} />}
      <NextBack />
    </div>
  );
}
