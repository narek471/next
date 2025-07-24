"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useParams, useSearchParams, useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProgress, setSelected } from "../../store/reducers/userData";

export default function PersonalNext() {
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
    <section className="flex gap-2 w-1/1 mt-[15px] font-bold ">
      <button
        className="w-1/1"
        onClick={() => {
          setProgress({ type: "add" });
          setSelected(null);
        }}>
        <Link
          className={` h-[55px] rounded-[10px] font-bold shadow-[0px_10px_40px_#e44240]  bg-[#e44240] text-white flex items-center justify-center gap-2`}
          href={`${+task! + 1}${searchParams}`}>
          Continue
        </Link>
      </button>
    </section>
  );
}
