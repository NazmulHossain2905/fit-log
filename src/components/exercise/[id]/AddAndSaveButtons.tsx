"use client";

import { useExercise } from "@/hooks/useExercise";
import { IExercise } from "@/interfaces/IExercise";
import { FaRegBookmark } from "react-icons/fa";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

interface AddAndSaveButtonsProps {
  exercise: IExercise;
}

export default function AddAndSaveButtons({
  exercise,
}: AddAndSaveButtonsProps) {
  const { todaysPlans, savedPlans, setTodaysPlans, setSavedPlans } =
    useExercise();

  const isInTodaysPlans = todaysPlans.some((plan) => plan.id === exercise.id);
  const isInSavedPlans = savedPlans.some((plan) => plan.id === exercise.id);

  const handleTodaysPlan = () => {
    if (isInTodaysPlans) {
      toast.error("Already in your plan");
      return;
    }
    setTodaysPlans((prevPlans) => [...prevPlans, exercise]);
    toast.success("Add to today's plan");
  };

  const handleSavedPlan = () => {
    if (isInSavedPlans) {
      toast.error("Already in your saved list");
      return;
    }
    setSavedPlans((prevPlans) => [...prevPlans, exercise]);
    toast.success("Saved for later");
  };

  return (
    <div className="mt-9 space-y-4 space-x-4">
      <button
        type="button"
        onClick={handleTodaysPlan}
        disabled={isInTodaysPlans || todaysPlans.length >= 5}
        className="bg-primary inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-black shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-40 md:w-auto"
      >
        <LuCalendarPlus2 />
        <span>
          {isInTodaysPlans ? "In today's plan" : "Add to today's plan"}
        </span>
      </button>
      <button
        type="button"
        onClick={handleSavedPlan}
        disabled={isInSavedPlans}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#374151] px-6 py-3 text-sm font-semibold text-[#E5E7EB] transition-transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed disabled:opacity-40 md:w-auto"
      >
        <FaRegBookmark />
        <span>{isInSavedPlans ? "Saved" : "Save for later"}</span>
      </button>
    </div>
  );
}
