"use client";
import { Answer, Quiz as IQuiz } from "@/app/lib/quizs";
import { setTaskAnswer } from "@/app/store/reducers/userData";
import { CheckIcon } from "lucide-react";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelected as setSelectedStore } from "@/app/store/reducers/userData";

export default function Quiz({ data }: { data: IQuiz }) {
  const [selected, setSelected] = useState(-1);
  const dispatch = useDispatch();
  const task = useParams()["slug"];
  useEffect(() => {
    if (selected != -1) {
      dispatch(setSelectedStore(selected));
      dispatch(setTaskAnswer([Number(task), selected]));
    }
  }, [selected]);
  return (
    <section className="mt-[20px] w-[500px] max-lg:max-w-[300px] items-center flex flex-col gap-[30px]">
      <div className="w-1/1 flex flex-col gap-5">
        <h2 className="text-xl max-lg:text-[15px] font-bold">
          {data.question}
        </h2>
        <ul className="flex flex-col gap-2">
          {data.answers.map((val, i) => (
            <button
              onClick={() => {
                setSelected(i);
              }}
              className={`h-[60px] cursor-pointer rounded-[10px] ${
                selected === i ? "bg-black text-white" : "bg-gray-100"
              } w-1/1 flex items-center justify-between pl-5 pr-5`}
              key={i}>
              {(val as Answer).title ? (
                <p className="flex flex-col font-bold">
                  {(val as Answer).title}
                  <span
                    className={`text-[14px] self-start font-[100] ${
                      selected == i ? "text-white" : "text-gray-900 "
                    }`}>
                    {(val as Answer).description}
                  </span>
                </p>
              ) : (
                <p className="font-bold">{val as string}</p>
              )}
              <span className="h-[20px] rounded-full w-[20px] text-black bg-white">
                {selected === i && <CheckIcon size={20} />}
              </span>
            </button>
          ))}
        </ul>
      </div>
    </section>
  );
}
