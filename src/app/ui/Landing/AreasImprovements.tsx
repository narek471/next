"use client";
import Image from "next/image";
import up from "../../../../public/up.svg";
import { motion } from "framer-motion";
import { arrHelps } from "@/app/lib/helps";

function HelpItem({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex gap-5">
      <Image src={image} alt="Image" />
      <p className="text-[16px] font-bold flex items-center">
        {title}
        <Image src={up} alt="up" />
      </p>
    </div>
  );
}

export default function AreasImprovements() {
  return (
    <section className="flex flex-col gap-5 it">
      <h1 className="text-[24px] font-bold text-center">
        Areas of Improvements
      </h1>
      <ul className="flex flex-col gap-5">
        {arrHelps.map((val, i) => (
          <HelpItem key={i} title={val.title} image={val.image} />
        ))}
      </ul>
    </section>
  );
}
