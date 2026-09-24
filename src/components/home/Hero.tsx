import Image from "next/image";

export default function Hero() {
  return (
    <header className="container mx-auto px-6">
      <div className="mt-12 flex items-center justify-between rounded-2xl border border-[#222630] bg-[#15171D] p-14">
        <div className="max-w-140 space-y-5">
          <span className="text-primary inline-block text-xs font-bold tracking-[1.1px]">
            WORKOUT LIBRARY
          </span>
          <h1 className="font-oswald text-6xl font-extrabold tracking-[-1.5px]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="max-w-lg text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <button className="bg-primary mt-2 cursor-pointer rounded-md px-6 py-3 text-xs font-bold tracking-[0.3px] text-black shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-transform hover:scale-105">
            BROWSE WORKOUTS
          </button>
        </div>

        <div>
          <Image
            src={"/assets/banner.png"}
            width={334}
            height={334}
            alt="Banner Image"
          />
        </div>
      </div>
    </header>
  );
}
