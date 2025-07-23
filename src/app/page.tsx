"use client";
import { AnimatePresence, motion } from "framer-motion";
import AgeQuiz from "./ui/AgeQuiz/AgeQuiz";
import { useSelector } from "react-redux";
import Router from "next/router";
import { useState, useEffect } from "react";

export default function Home() {
  const { age, globalAnim } = useSelector(
    (state: { userData: { age: string; globalAnim: boolean } }) =>
      state.userData
  );
  const [loading, setLoading] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}>
        <AgeQuiz />
      </motion.div>
    </AnimatePresence>
  );
}
