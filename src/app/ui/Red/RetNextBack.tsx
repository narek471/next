"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter,
} from "next/navigation";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProgress, setSelected } from "../../store/reducers/userData";

export default function RedNextBack() {
  const task = useParams()["slug"];
  const { taskAnswered, selected } = useSelector(
    (state: {
      userData: {
        taskAnswered: { [key: number]: string };
        selected: number;
      };
    }) => state.userData
  );
  const [disabled, setDisabled] = useState(false);
  const pathname = usePathname();
  const search = useSearchParams();
  const router = useRouter();

  const [searchParams, setSearchParams] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selected || selected == 0) {
      let textUrl = `?age=${search.get("age")}&`;
      const arr = Object.entries(taskAnswered);
      for (let i = 0; i < arr.length; i++) {
        textUrl += `${arr[i][0]}=${arr[i][1]}&`;
      }

      router.push(`${task}${textUrl}`);
      setSearchParams(textUrl);
      setDisabled(false);
    } else {
      setDisabled(true);
      console.log(disabled);
    }
  }, [taskAnswered, selected]);
  return (
    <section className="flex gap-2  bg-[#111113] font-bold fixed bottom-0 top-[90%]">
      <button>
        <Link
          href={Number(task) <= 0 ? "/" : `${+task! - 1}${searchParams}`}
          className="h-[55px] bg-[#282828] rounded-[10px] w-[150px] text-white flex items-center justify-center gap-2"
          onClick={() => {
            dispatch(setProgress({ type: "min" }));
            setSelected(null);
          }}>
          <ArrowLeft />
          Back
        </Link>
      </button>
      <button
        onClick={() => {
          dispatch(setProgress({ type: "add" }));
          setSelected(null);
        }}>
        <Link
          className={` h-[55px] rounded-[10px]  w-[150px] bg-[#e44240] text-white flex items-center justify-center gap-2`}
          href={`${+task! + 1}${searchParams}`}>
          I got it <ArrowRight />
        </Link>
      </button>
    </section>
  );
}
