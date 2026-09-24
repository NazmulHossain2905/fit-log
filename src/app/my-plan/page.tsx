import PlanCard from "@/components/my-plan/PlanCard";
import Link from "next/link";

export default function MyPlanPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-6 py-7 md:py-10">
      <div className="space-y-2">
        <h2 className="font-oswald text-3xl font-bold tracking-[-0.75px]">
          MY PLAN
        </h2>
        <p className="text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161D] p-5 pt-6 md:p-6 md:pt-8">
        <div className="space-y-1.5 text-center md:text-left">
          <p className="text-xs text-[#8A92A0]">Exercises</p>
          <h2 className="font-oswald text-primary text-4xl font-bold">2</h2>
        </div>

        <div className="space-y-1.5 border-l border-l-[#232732]/60 px-0 text-center md:px-8 md:text-left">
          <p className="text-xs text-[#8A92A0]">Minutes</p>
          <h2 className="font-oswald text-4xl font-bold text-white">23</h2>
        </div>

        <div className="space-y-1.5 border-l border-l-[#232732]/60 pl-0 text-center md:pl-8 md:text-left">
          <p className="text-xs text-[#8A92A0]">Calories</p>
          <h2 className="font-oswald text-4xl font-bold text-white">190</h2>
        </div>
      </div>

      <div className="pt-2">
        <div className="mx-auto flex w-fit items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1 md:mx-0">
          <button className="cursor-pointer px-4 py-1.5 text-xs text-[#8A92A0]">
            Today&apos;s Plan
          </button>
          <button className="h-7.5 min-w-27 cursor-pointer rounded-lg border border-[#2B303D] bg-[#1F242D] text-xs font-bold">
            Saved
          </button>
        </div>
      </div>

      {false ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-[#111317]/50 px-4 py-24">
          <h3 className="font-oswald text-xl font-bold tracking-[0.7px]">
            NOTHING HERE YET
          </h3>
          <p className="mt-2 pb-6 text-xs text-[#a1a1a1]">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href={"/"}
            className="bg-primary cursor-pointer rounded-full px-6 py-2.5 text-xs font-semibold tracking-[-0.3px] text-black transition-transform hover:scale-105"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      )}
    </section>
  );
}
