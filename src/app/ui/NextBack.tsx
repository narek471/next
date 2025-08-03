"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelected, setTaskAnswer } from "../store/reducers/userData";
import quizes from "../lib/quizs";

export default function NextBack() {
  const task = useParams()["slug"];
  const { taskAnswered, selected } = useSelector(
    (state: {
      userData: { taskAnswered: { [key: number]: string }; selected: number };
    }) => state.userData
  );
  const [disabled, setDisabled] = useState(false);

  const search = useSearchParams();

  const router = useRouter();

  const [searchParams, setSearchParams] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const strSearch = search.toString();
    const arrSearch = strSearch.split("&").map((val) => val.split("="));
    setSearchParams(strSearch);
    if (!taskAnswered[0] && taskAnswered[0] != "0") {
      for (let i = 0; i < arrSearch.length; i++) {
        if (arrSearch[i][0] == "age") {
          continue;
        } else {
          dispatch(setTaskAnswer([+arrSearch[i][0], +arrSearch[i][1]]));
        }
      }
    }

    if (
      taskAnswered[Number(task)] == undefined &&
      selected == +taskAnswered[Number(task) - 1]
    ) {
      setDisabled(true);
    } else if (
      quizes[Number(task)].type != "base" &&
      taskAnswered[Number(task)] == undefined &&
      selected == +taskAnswered[Number(task) - 2]
    ) {
      setDisabled(true);
    } else if (
      quizes[Number(task)].type != "rate" &&
      taskAnswered[Number(task)] == undefined &&
      selected == +taskAnswered[Number(task) - 2]
    ) {
      setDisabled(true);
    } else if (
      quizes[Number(task)].type != "base" &&
      taskAnswered[Number(task)] == undefined &&
      selected == +taskAnswered[Number(task) - 3]
    ) {
      setDisabled(true);
    } else if (
      quizes[Number(task)].type != "rate" &&
      taskAnswered[Number(task)] == undefined &&
      selected == +taskAnswered[Number(task) - 3]
    ) {
      setDisabled(true);
    } else {
      if (selected || selected == 0) {
        let textUrl = `?age=${search.get("age")}&`;

        const arr = Object.entries(taskAnswered);
        for (let i = 0; i < arr.length; i++) {
          textUrl += `${arr[i][0]}=${arr[i][1]}&`;
        }
        setSearchParams(textUrl);
        router.push(`${task}${textUrl}`);

        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [taskAnswered, selected, searchParams]);

  return (
    <section className="flex gap-2 bg-white font-bold fixed bottom-0 top-[90%]">
      <button>
        <Link
          href={Number(task) <= 0 ? "/" : `${+task! - 1}?${searchParams}`}
          className="h-[55px] rounded-[10px] w-[150px] bg-gray-200 text-black flex items-center justify-center gap-2"
          onClick={() => {
            setSelected(null);
          }}>
          <ArrowLeft />
          Back
        </Link>
      </button>
      <button
        onClick={() => {
          setSelected(null);
        }}
        disabled={disabled}>
        {!disabled ? (
          <Link
            className={`${
              disabled ? "opacity-40" : "opacity-100"
            } h-[55px] rounded-[10px]  w-[150px] bg-black text-white flex items-center justify-center gap-2`}
            href={`${
              +taskAnswered[0] == 2
                ? Number(task) == 26
                  ? `/quiz/planing`
                  : +task! + 1
                : Number(task) == 27
                ? `/quiz/planing`
                : +task! + 1
            }${searchParams}`}>
            Next <ArrowRight />
          </Link>
        ) : (
          <p className=" h-[55px] opacity-40 rounded-[10px]  w-[150px] bg-black text-white flex items-center justify-center gap-2">
            Next <ArrowRight />
          </p>
        )}
      </button>
    </section>
  );
}
