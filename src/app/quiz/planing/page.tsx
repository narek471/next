"use client";
import CreatingPlan from "@/app/ui/EndQuiz/CreatingPlan";
import ModalPrivacyPolicy from "@/app/ui/EndQuiz/ModalPrivacyPolicy";
import { useEffect, useState } from "react";

export default function Planing() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFlag(true);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <main className="mt-[50px]">
      <CreatingPlan />
      {flag && <ModalPrivacyPolicy />}
    </main>
  );
}
