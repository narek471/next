import Image, { StaticImageData } from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import applePay from "../../../../public/i.webp";
import { CreditCardIcon, Factory } from "lucide-react";
import visa from "../../../../public/visa-3-svgrepo-com.svg";
import amexpress from "../../../../public/american-express-svgrepo-com.svg";
import mastercard from "../../../../public/mastercard-svgrepo-com.svg";
import cardFormatting from "@/app/lib/cardFormatting";
import MMYYFormatting from "@/app/lib/MMYYFormatting";

export default function CreditCardBlue() {
  const { selectedPlan } = useSelector(
    (state: { userData: { selectedPlan: number } }) => state.userData
  );
  const [inputs, setInputs] = useState({
    card: "",
    my: "",
    cvv: "",
    nameCard: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [amount, setAmount] = useState([
    ["1-month Kegel Plan", "31.00 USD"],
    ["51% introductory price discount", "-15.81 USD"],
    ["15.19 USD"],
    ["per 1 month", "You just saved 15.81 USD (51% off)"],
  ]);
  const [currImage, setCurImage] = useState<StaticImageData | null>(null);

  const handlerCard = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !Number.isNaN(Number(e.target.value[e.target.value.length - 1])) ||
      e.target.value[e.target.value.length - 1] == " "
    ) {
      setInputs({ ...inputs, card: cardFormatting(e.target.value) });
    } else if (e.target.value.length == 0) {
      setInputs({ ...inputs, card: "" });
    }
  };

  const handlerMY = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !Number.isNaN(Number(e.target.value[e.target.value.length - 1])) ||
      e.target.value[e.target.value.length - 1] == " " ||
      e.target.value[e.target.value.length - 1] == "/"
    ) {
      setInputs({ ...inputs, my: MMYYFormatting(e.target.value) });
    } else if (e.target.value.length == 0) {
      setInputs({ ...inputs, my: "" });
    }
  };
  const handlerCVV = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number.isInteger(+e.target.value)) {
      setInputs({ ...inputs, cvv: e.target.value });
    }
  };
  useEffect(() => {
    if (inputs.card[0] === "5") {
      setCurImage(mastercard);
    } else if (inputs.card[0] === "4") {
      setCurImage(visa);
    } else if (inputs.card[0] === "3") {
      setCurImage(amexpress);
    } else {
      setCurImage(null);
    }
    console.log(
      inputs.card.length,
      inputs.my.length,
      inputs.cvv.length,
      inputs.nameCard.length
    );
    if (
      inputs.card.length < 19 ||
      inputs.my.length < 7 ||
      inputs.cvv.length < 3 ||
      inputs.nameCard.length < 3
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [inputs]);

  useEffect(() => {
    if (selectedPlan == 0) {
      setAmount([
        ["1-weel Kegel Plan", "10.59 USD"],
        ["34% introductory price discount", "-3.60 USD"],
        ["6.99 USD"],
        ["per 1 week", "You just saved 3.60 USD (34% off)"],
      ]);
    } else if (selectedPlan == 1) {
      setAmount([
        ["1-month Kegel Plan", "31.00 USD"],
        ["51% introductory price discount", "-15.81 USD"],
        ["15.19 USD"],
        ["per 1 month", "You just saved 15.81 USD (51% off)"],
      ]);
    } else if (selectedPlan == 2) {
      setAmount([
        ["3-months Kegel Plan", "53.04 USD"],
        ["51% introductory price discount", "-27.05 USD"],
        ["25.99 USD"],
        ["per 3 months", "You just saved 25.99 USD (51% off)"],
      ]);
    }
  }, [selectedPlan]);

  return (
    <div className="mt-[40px]">
      <div className="border-t-1 flex flex-col gap-2 pt-[10px] pb-[10px] border-b-1 border-[#f1f3f9]">
        <p className="text-[#11111380] text-[14px] flex justify-between items-center">
          <span>{amount[0][0]}</span>
          <span>{amount[0][1]}</span>
        </p>
        <p className="text-[#11111380] text-[14px] flex justify-between items-center">
          <span className="max-sm:w-[186px]">{amount[1][0]}</span>
          <span className="text-[#5773d6] font-bold">{amount[1][1]}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 pt-[10px] pb-[10px] ">
        <p className="flex justify-between text-[18px] font-bold">
          <span>Total</span>
          <span>{amount[2][0]}</span>
        </p>
        <p className="flex justify-between text-[12px] font-bold">
          <span className="text-[#11111380] ">{amount[3][0]}</span>
          <span className="text-[#5773d6] font-bold">{amount[3][1]}</span>
        </p>
      </div>
      <button className="bg-black gap-2 w-1/1 flex items-center justify-center text-white h-[57px] rounded-[9px] mt-[20px]">
        <p className="text-[30px]">Pay with</p>{" "}
        <Image width={80} src={applePay} alt="apple pay" />
      </button>
      <div className=" mt-[20px] grid grid-cols-3  items-center gap-5">
        <div className="bg-[#f1f3f9]  h-[2px]"></div>
        <span className="text-center text-[#1111137f] text-[14px]">
          or pay with card
        </span>
      </div>
      <div className="mt-[20px] flex flex-col gap-2">
        <label htmlFor="" className="relative flex items-center justify-end ">
          <input
            value={inputs.card}
            onChange={handlerCard}
            className="bg-[#f1f3f9] rounded-[9px] text-[16px] shadow-[inset_0_4px_4px_#0000000a] outline-none p-[16px] border-2 border-transparent h-[60px] w-1/1"
            type="text"
            placeholder="Card number"
            maxLength={19}
          />
          {currImage ? (
            <Image
              width={30}
              src={currImage}
              className="absolute right-4"
              alt="credit card"
            />
          ) : (
            <CreditCardIcon size={30} className="absolute right-4" />
          )}
        </label>
        <label className="flex justify-between gap-2" htmlFor="">
          {" "}
          <input
            className="bg-[#f1f3f9] rounded-[9px] text-[16px] shadow-[inset_0_4px_4px_#0000000a] outline-none p-[16px] border-2 border-transparent h-[60px] w-1/1"
            type="text"
            onChange={handlerMY}
            value={inputs.my}
            maxLength={7}
            placeholder="MM / YY"
          />{" "}
          <input
            className="bg-[#f1f3f9] rounded-[9px] text-[16px] shadow-[inset_0_4px_4px_#0000000a] outline-none p-[16px] border-2 border-transparent h-[60px] w-1/1"
            type="text"
            value={inputs.cvv}
            onChange={handlerCVV}
            placeholder="CVV"
            maxLength={3}
          />
        </label>
        <label htmlFor="" className="relative flex items-center justify-end ">
          <input
            className="bg-[#f1f3f9] rounded-[9px] text-[16px] shadow-[inset_0_4px_4px_#0000000a] outline-none p-[16px] border-2 border-transparent h-[60px] w-1/1"
            type="text"
            value={inputs.nameCard}
            onChange={(e) => setInputs({ ...inputs, nameCard: e.target.value })}
            placeholder="Name on Card"
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={disabled}
        className={`mt-[30px] h-[55px] w-1/1 rounded-[100px] font-bold  cursor-pointer  ${
          disabled
            ? "bg-[#cacaca]"
            : "bg-[#5773d6] shadow-[0px_10px_40px_#5773d6]"
        } text-white flex items-center justify-center gap-2`}>
        Continue
      </button>
    </div>
  );
}
