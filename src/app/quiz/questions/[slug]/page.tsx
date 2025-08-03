"use client";

import quizes, { quizes2, quizes3 } from "@/app/lib/quizs";
import { setProgress, setTaskAnswer } from "@/app/store/reducers/userData";

import NextBack from "@/app/ui/NextBack";

import ProgressBar from "@/app/ui/ProgressBar";
import HealthyQuiz from "@/app/ui/Quiz/HealthyQuiz";
import LowHighQuiz from "@/app/ui/Quiz/LowHighQuiz ";
import Quiz from "@/app/ui/Quiz/Quiz";
import RateQuiz from "@/app/ui/Quiz/RateQuiz";
import RedProgressBar from "@/app/ui/Red/RedProgress";
import RedNextBack from "@/app/ui/Red/RetNextBack";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Page() {
  const param = useParams();
  const [currQuizes, setQuizes] = useState(quizes);
  const ref = useRef<HTMLDivElement>(null);
  const quiz = currQuizes[Number(param["slug"])];
  const { progress, taskAnswered } = useSelector(
    (state: {
      userData: { progress: number; taskAnswered: { [key: number]: number } };
    }) => state.userData
  );
  const dispatch = useDispatch();
  const search = useSearchParams().toString();
  useEffect(() => {
    const arrSearch = search.split("&").map((val) => val.split("="));
    if (!taskAnswered) {
      for (let i = 0; i < arrSearch.length; i++) {
        dispatch(setTaskAnswer([+arrSearch[i][0], +arrSearch[i][1]]));
      }
    }
    if (taskAnswered[0] == 0 || taskAnswered[0] == 1) {
      dispatch(setProgress(arrSearch.length * 4.2));
    } else {
      dispatch(setProgress(arrSearch.length * 4.8));
    }
  }, [search, taskAnswered]);
  useEffect(() => {
    if (quiz) {
      if (quiz.type != "personal") {
        ref.current!.style.width = progress + "%";
      }
    }
  }, [progress, quiz, currQuizes]);
  useEffect(() => {
    if (taskAnswered[0] == 0) {
      setQuizes(quizes);
    } else if (taskAnswered[0] == 1) {
      setQuizes(quizes2);
    } else if (taskAnswered[0] == 2) {
      setQuizes(quizes3);
    }
  }, [taskAnswered]);
  useEffect(() => {
    if (quiz) {
      if (quiz.type == "red") {
        document.body.style.background = "#111113";
      } else {
        document.body.style.background = "";
      }
    }
    console.log(quiz);
  }, [currQuizes]);
  return (
    <div className="flex items-center flex-col">
      {quiz ? (
        quiz.type != "red" ? (
          quiz.type != "personal" ? (
            <>
              {" "}
              <ProgressBar progress={progress} ref={ref} />
              {quiz.type == "rate" ? (
                <RateQuiz data={quiz} />
              ) : quiz.type == "healthy" ? (
                <HealthyQuiz data={quiz} />
              ) : quiz.type == "lowhigh" ? (
                <LowHighQuiz data={quiz} />
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
