"use client";
import { Answer, Quiz as IQuiz } from "@/app/lib/quizs";
import { setTaskAnswer } from "@/app/store/reducers/userData";
import { CheckIcon } from "lucide-react";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelected as setSelectedStore } from "@/app/store/reducers/userData";

export default function RateQuiz({ data }: { data: IQuiz }) {
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
    <section className="mt-[40px]   max-lg:max-w-[300px]  items-center flex flex-col gap-[30px]">
      <div className=" flex flex-col gap-10 items-center">
        <h2 className="text-xl w-[400px] max-lg:w-[300px] max-lg:text-[15px] text-center font-bold">
          {data.question}
        </h2>
        <p className="text-gray-700 text-center">Rate from 1 to 5</p>
        <div className="flex flex-col gap-2  items-center">
          <ul className="flex gap-2 justify-center">
            {data.answers!.map((val, i) => (
              <button
                onClick={() => {
                  setSelected(i);
                }}
                className={`max-lg:h-[60px] h-[80px] max-lg:w-[60px] w-[80px] cursor-pointer rounded-[10px] ${
                  selected === i ? "bg-black text-white" : "bg-gray-100"
                } w-1/1 flex items-center   justify-center`}
                key={i}>
                <p className="font-bold">{val as string}</p>
              </button>
            ))}
          </ul>
          <div className="text-gray-700 w-1/1  max-lg:w-1/2 flex justify-between">
            <p>Not hard</p>
            <p>Very hard</p>
          </div>
        </div>
      </div>
    </section>
  );
}
