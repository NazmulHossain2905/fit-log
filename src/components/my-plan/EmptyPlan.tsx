import Link from "next/link";

export default function EmptyPlan() {
  return (
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
  );
}
