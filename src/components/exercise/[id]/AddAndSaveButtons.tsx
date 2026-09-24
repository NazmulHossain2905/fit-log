"ues client";

import { IExercise } from "@/interfaces/IExercise";
import { FaRegBookmark } from "react-icons/fa";
import { LuCalendarPlus2 } from "react-icons/lu";

interface AddAndSaveButtonsProps {
  exercise: IExercise;
}

export default function AddAndSaveButtons({
  exercise,
}: AddAndSaveButtonsProps) {
  return (
    <div className="mt-9 space-y-4 space-x-4">
      <button className="bg-primary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-transform hover:scale-105 md:w-auto">
        <LuCalendarPlus2 /> <span>Add to today&apos;s plan</span>
      </button>
      <button className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-semibold text-[#E5E7EB] transition-transform hover:scale-105 md:w-auto">
        <FaRegBookmark /> <span>Save for later</span>
      </button>
    </div>
  );
}
