import Image from "next/image";
import logo from "../../../public/Kegel Power v5.png";

export default function HeaderQuiz() {
  return (
    <header className="h-[80px] flex justify-center items-center">
      <div className="w-[500px] flex gap-4">
        {" "}
        <Image width={50} alt="logo" src={logo} />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[12px]">Kegel Power</p>
          <p className="font-bold text-[12px] text-gray-400">
            For Men`s Health
          </p>
        </div>
      </div>
    </header>
  );
}
