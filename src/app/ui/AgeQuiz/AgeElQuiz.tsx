"use client";
import { setGlobalAnim, setSelectedAge } from "@/app/store/reducers/userData";
import { CheckIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";

export default function AgeElQuiz({
  ageEl,
  image,
}: {
  ageEl: string;
  image: StaticImageData;
}) {
  const dispatch = useDispatch();
  const { age, globalAnim } = useSelector(
    (state: { userData: { age: string; globalAnim: boolean } }) =>
      state.userData
  );
  const [flag, setFlag] = useState(false);

  return (
    <button
      disabled={age ? true : false}
      onClick={() => {
        dispatch(setSelectedAge(ageEl));
        dispatch(setGlobalAnim(true));
        setFlag(true);
      }}
      className={`cursor-pointer w-[375px] h-[105px] transition-colors duration-[0.4s] rounded-[15px] font-bold   ${
        flag ? "bg-black text-white" : "bg-[#f1f3f9] text-black"
      }`}>
      <Link href={"quiz/0?age=" + ageEl}>
        <div className="flex justify-around">
          <div className="flex items-center gap-[20px]">
            <div className="bg-white font-bold flex items-center justify-center text-black rounded-full h-[23px] w-[23px]">
              {flag && <CheckIcon />}
            </div>
            <p className="text-[24px]">{ageEl}</p>
          </div>
          <div className="min-w-1/3 flex ">
            <Image
              className="h-[100px] left-[15px] relative w-[160px]"
              src={image}
              alt="person age"
            />
          </div>
        </div>
      </Link>
    </button>
  );
}
