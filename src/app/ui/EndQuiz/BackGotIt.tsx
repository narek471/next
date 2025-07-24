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

export default function BackGotIt({
  path,
  backpath,
}: {
  path: string;
  backpath: string;
}) {
  const task = useParams()["slug"];
  const { taskAnswered, selected } = useSelector(
    (state: {
      userData: { taskAnswered: { [key: number]: string }; selected: number };
    }) => state.userData
  );

  const search = useSearchParams();
  const router = useRouter();

  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    let textUrl = `?age=${search.get("age")}&`;
    const arr = Object.entries(taskAnswered);
    for (let i = 0; i < arr.length; i++) {
      textUrl += `${arr[i][0]}=${arr[i][1]}&`;
    }

    setSearchParams(textUrl);
  }, [taskAnswered]);
  return (
    <section className="flex  gap-2 bg-white font-bold  justify-center fixed bottom-0 w-1/1 top-[90%]">
      <button>
        <Link
          href={`${backpath}${searchParams}`}
          className="h-[55px] rounded-[10px]  w-[256px] bg-gray-200 text-black flex items-center justify-center gap-2">
          <ArrowLeft />
          Back
        </Link>
      </button>
      <button>
        <Link
          className={`h-[55px] rounded-[10px]  w-[256px] bg-[#e44240] text-white flex items-center justify-center gap-2`}
          href={`${path}${searchParams}`}>
          Got it <ArrowRight />
        </Link>
      </button>
    </section>
  );
}
