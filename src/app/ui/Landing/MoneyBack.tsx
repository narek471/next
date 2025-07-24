import Image from "next/image";
import moneyBack from "../../../../public/EN_img_moneyback.webp";
import Link from "next/link";

export default function MoneyBack() {
  return (
    <section className="w-[536px] bg-linear-[180deg,#f1f3f900,#f1f3f9_23.44%] p-[32px] max-lg:w-[300px] flex flex-col items-center">
      <div className="flex flex-col gap-4 items-center">
        <Image src={moneyBack} alt="money back" className="w-1/1" />
        <h2 className="text-[26px] font-bold text-center">30-Day Money-Back</h2>
        <p className="text-[16px] font-bold text-center">
          Guarantee Without Questions
        </p>
      </div>
      <p className="text-[14px] opactiy-80">
        We`re confident that our Kegel Plan will work for you and that you can
        achieve noticeable improvements in a few weeks! We`re so confident that
        we`re even ready to return your money without any questions if you don`t
        see noticeable improvements. All you need is to send an email to{" "}
        <span className="text-black opacity-100 font-bold">
          contact@kegel-plan.com
        </span>{" "}
        within 30 days and ask for a refund. But we`re sure that the Kegel Plan
        will show it`s efficacy and there will be no need for a refund. You can
        find more about the refund process in our{" "}
        <Link
          href="https://quiz.kegel-plan.me/refund.html"
          className="text-[#5773d6] font-bold text-center  underline">
          refund policy.
        </Link>
      </p>
    </section>
  );
}
