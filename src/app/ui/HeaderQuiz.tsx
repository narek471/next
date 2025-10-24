"use client";

import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";
import {useEffect, useState} from "react";
import quizes from "@/app/lib/quizs";

import { useParams, useSearchParams } from "next/navigation";

export default function HeaderQuiz() {

  const param = useParams();
  const [currQuizes, setQuizes] = useState(quizes);
  const [darkText, setDarkText] = useState(false);
  const quiz = currQuizes[Number(param["slug"])];

  useEffect(() => {
    if (quiz) {
      if (quiz.type == "red") {
        setDarkText(true);
      } else {
        setDarkText(false);
      }
    }
  }, [quiz]);

  return (
    <header className="h-[80px] max-lg:pl-5 flex justify-center items-center">
      <div className="w-[500px] flex gap-4">
        {" "}
        <Image width={50} alt="logo" src={logo} />
        <div className="flex flex-col justify-center">
          <p className={`font-bold text-[12px] ${darkText ? "text-white" : "text-black"}`}>
            Kegel Power
          </p>
          <p className={`font-bold text-[12px] ${darkText ? "text-gray-300" : "text-gray-400"}`}>
            For Men`s Health
          </p>
        </div>
      </div>
    </header>
  );
}
