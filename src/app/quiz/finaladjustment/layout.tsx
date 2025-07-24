"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function AnimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 20,
          duration: 1.2,
        }}
        className="flex items-center flex-col gap-[20px]">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
