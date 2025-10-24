"use client";

import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";
import { useParams } from "next/navigation";
import quizes from "@/app/lib/quizs";

export default function HeaderQuiz() {
  const param = useParams();

  // Получаем текущий quiz по slug
  const quiz = currQuiz(param?.slug);

  // Определяем цвет текста сразу
  const darkText = quiz?.type === "red";

  return (
      <header className="h-[80px] max-lg:pl-5 flex justify-center items-center">
        <div className="w-[500px] flex gap-4">
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

// Вынесем получение quiz в отдельную функцию
function currQuiz(slug?: string) {
  if (!slug) return undefined;
  const index = Number(slug);
  return quizes[index];
}
