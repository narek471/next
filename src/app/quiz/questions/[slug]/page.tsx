"use client";

import quizes from "@/app/lib/quizs";

import NextBack from "@/app/ui/NextBack";
import BasedGoals from "@/app/ui/PersonalComponent/BasedGoals";
import ProgressBar from "@/app/ui/ProgressBar";
import Quiz from "@/app/ui/Quiz/Quiz";
import RateQuiz from "@/app/ui/Quiz/RateQuiz";
import RedProgressBar from "@/app/ui/Red/RedProgress";
import RedNextBack from "@/app/ui/Red/RetNextBack";

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
    if (quiz.type != "personal") {
      ref.current!.style.width = progress + "%";
    }
  }, [progress]);
  useEffect(() => {
    if (quiz.type == "red") {
      document.body.style.background = "#111113";
    } else {
      document.body.style.background = "";
    }
  }, []);
  return (
    <div className="flex items-center flex-col">
      {quiz.type ? (
        quiz.type != "red" ? (
          quiz.type != "personal" ? (
            <>
              {" "}
              <ProgressBar progress={progress} ref={ref} />
              {quiz.type == "rate" ? (
                <RateQuiz data={quiz} />
              ) : (
                <Quiz data={quiz} />
              )}
              <NextBack />
            </>
          ) : (
            quiz.content
          )
        ) : (
          <>
            <RedProgressBar progress={progress} ref={ref} />
            {quiz.content}
            <RedNextBack />
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
}
