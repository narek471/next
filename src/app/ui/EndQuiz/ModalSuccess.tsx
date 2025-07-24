"use client";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import success from "../../../../public/succcesReady.svg";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useSelector } from "react-redux";

export default function ModalSuccess() {
  const [text, setText] = useState("");
  const { taskAnswered } = useSelector(
    (state: {
      userData: { taskAnswered: { [key: number]: string }; selected: number };
    }) => state.userData
  );
  const router = useRouter();
  const search = useSearchParams();
  const textNeed = "Your plan is ready!";

  useEffect(() => {
    let textUrl = `?age=${search.get("age")}&`;
    const arr = Object.entries(taskAnswered);
    for (let i = 0; i < arr.length; i++) {
      textUrl += `${arr[i][0]}=${arr[i][1]}&`;
    }

    const interval = setInterval(() => {
      setText((val) => {
        if (val.length < textNeed.length) {
          return val + textNeed[val.length];
        }
        return val;
      });
    }, 100);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      router.push(`/quiz/trusted${textUrl}`);
    }, textNeed.length * 100 + 500); // Добавляем небольшой запас времени

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [router, search, taskAnswered, textNeed]);
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
      className="fixed top-0 bottom-0 left-0 flex items-center justify-center right-0 bg-[rgba(255,255,255,0.62)]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="flex flex-col items-center gap-5">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.75, ease: "circIn" }}>
          <Image src={success} alt="success" />
        </motion.div>
        <h1 className="font-bold text-[50px]">{text}</h1>
      </motion.div>
    </motion.div>,
    document.body
  );
}
