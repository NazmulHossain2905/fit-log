import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { LuCalendarPlus2 } from "react-icons/lu";

export default function ExerciseDetailsPage() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-7 md:gap-14 md:py-12 lg:flex-row">
      <div className="group h-100 w-full overflow-hidden rounded-2xl border border-[#232834] bg-[#171A21] md:h-120 lg:h-183.75 lg:w-147">
        <Image
          className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
          src={"/assets/Overhead-Press.png"}
          width={588}
          height={735}
          alt="Barbell Bench Press"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-oswald mb-3 text-4xl font-bold tracking-[-0.9px]">
          BARBELL BENCH PRESS
        </h3>
        <span className="text-[#9CA3AF]">
          A compound press that builds chest thickness, triceps, and pressing
          power from a stable bench.
        </span>

        <div className="mt-5 space-x-2.5">
          <span className="bg-primary rounded-full px-3.5 py-1 text-xs font-semibold text-black">
            CHEST
          </span>
          <span className="bg-primary rounded-full px-3.5 py-1 text-xs font-semibold text-black">
            ARMS
          </span>
        </div>

        <div className="mt-7 rounded-2xl border border-[#232834] bg-[#151922]">
          <div className="flex items-center justify-between px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              EQUIPMENT
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">
              Barbell, Bench
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-t-[#1E2330] px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              DIFFICULTY
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">
              Intermediate
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-t-[#1E2330] px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              SETS
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">4</span>
          </div>

          <div className="flex items-center justify-between border-t border-t-[#1E2330] px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              REPS
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">6-8</span>
          </div>

          <div className="flex items-center justify-between border-t border-t-[#1E2330] px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              DURATION
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">25 min</span>
          </div>

          <div className="flex items-center justify-between border-t border-t-[#1E2330] px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              CALORIES
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">180 kcal</span>
          </div>

          <div className="flex items-center justify-between border-t border-t-[#1E2330] px-6 py-3.5">
            <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF]">
              RATING
            </span>
            <span className="text-sm font-medium text-[#E5E7EB]">4.8</span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="font-extrabold tracking-[0.8px]">INSTRUCTIONS</h4>

          <ol className="list-inside list-decimal space-y-3 text-sm text-[#D1D5DB]">
            <li>Lie on the bench with eyes under the bar and feet planted.</li>
            <li>Untrack with locked elbows and lower the bar to mid-chest.</li>
            <li>
              Press up in a slight arc until elbows lock without bouncing.
            </li>
            <li>
              Keep shoulder blades pinched and a natural arch in the back.
            </li>
          </ol>
        </div>

        <div className="mt-9 space-y-4 space-x-4">
          <button className="bg-primary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-transform hover:scale-105 md:w-auto">
            <LuCalendarPlus2 /> <span>Add to today&apos;s plan</span>
          </button>
          <button className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-semibold text-[#E5E7EB] transition-transform hover:scale-105 md:w-auto">
            <FaRegBookmark /> <span>Save for later</span>
          </button>
        </div>
      </div>
    </section>
  );
}
