export default function QualityErect() {
  return (
    <section className="flex items-center max-lg:w-[300px] w-[500px] mt-[40px] flex-col gap-10">
      <h2 className="font-bold  text-center text-[20px] text-white">
        <span className="underline">Quality of Erection</span> depends on the
        strength of the{" "}
        <span className="text-[#53cc58]">Pelvic Floor (PF) muscles</span>{" "}
      </h2>
      <video height="720" autoPlay loop>
        <source src="https://quiz.kegel-plan.me/video/video_ED_s1.mp4"></source>
      </video>
      <p className="text-[15px] text-center text-white">
        Stronger PF muscles help to fill & retain more blood in the male organ
        leading to harder and more lasting erection.
      </p>
    </section>
  );
}
