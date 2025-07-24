"use client";

import Link from "next/link";
import { useParams, useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Continue({
  path,
  disabled,
}: {
  path: string;
  disabled?: boolean;
}) {
  const task = useParams()["slug"];
  const { taskAnswered, selected } = useSelector(
    (state: {
      userData: {
        taskAnswered: { [key: number]: string };
        selected: number;
      };
    }) => state.userData
  );

  const search = useSearchParams();

  const [searchParams, setSearchParams] = useState("");
  useEffect(() => {
    let textUrl = `?age=${search.get("age")}&`;
    const arr = Object.entries(taskAnswered);
    for (let i = 0; i < arr.length; i++) {
      textUrl += `${arr[i][0]}=${arr[i][1]}&`;
    }

    setSearchParams(textUrl);
  }, [taskAnswered, selected]);
  return (
    <section className="flex gap-2 w-1/1 mt-[15px] font-bold ">
      <button className="w-1/1" disabled={disabled}>
        {disabled ? (
          <Link
            className={` h-[55px] rounded-[10px] font-bold shadow-[0px_10px_40px_#e44240]  bg-[#e44240] text-white flex items-center justify-center gap-2`}
            href={`/quiz/${path}${searchParams}`}>
            Continue
          </Link>
        ) : (
          <p
            className={` h-[55px] rounded-[10px] font-bold  bg-[#cacaca] text-white flex items-center justify-center gap-2`}>
            Continue
          </p>
        )}
      </button>
    </section>
  );
}
