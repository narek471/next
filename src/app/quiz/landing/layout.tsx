"use client";
import FooterLanding from "@/app/ui/Landing/FooterLanding";
import HeaderLanding from "@/app/ui/Landing/HeaderLanding";

export default function AnimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center bg-white flex-col gap-[20px] absolute top-0 bottom-0 left-0 right-0 w-1/1 h-screen">
      <HeaderLanding />
      {children}
      <FooterLanding />
    </div>
  );
}
