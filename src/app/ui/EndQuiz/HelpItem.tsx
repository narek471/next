"use client";
import Image from "next/image";
import up from "../../../../public/up.svg";
import { motion } from "framer-motion";

export default function HelpItem({
  title,
  image,
  delay,
}: {
  title: string;
  image: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="flex gap-5"
      initial={{ transform: "translateX(-10px)", opacity: 0 }}
      animate={{ transform: "translateX(10px)", opacity: 1 }}
      transition={{ duration: 0.25, delay: delay! / 2, ease: "easeInOut" }}>
      <Image src={image} alt="Image" />
      <p className="text-[16px] font-bold flex items-center">
        {title}
        <Image src={up} alt="up" />
      </p>
    </motion.div>
  );
}
