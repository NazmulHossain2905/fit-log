"use client";

import { useExercise } from "@/hooks/useExercise";
import PlanCard from "./PlanCard";
import EmptyPlan from "./EmptyPlan";
import { SortType } from "@/app/my-plan/page";

interface TodaysPlansProps {
  sort: SortType;
}

export default function TodaysPlans({ sort }: TodaysPlansProps) {
  const { todaysPlans } = useExercise();

  const sortedPlans = [...todaysPlans];

  switch (sort) {
    case "duration": {
      sortedPlans.sort((a, b) => b.duration - a.duration);
      break;
    }
    case "calories": {
      sortedPlans.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
      break;
    }
    case "rating": {
      sortedPlans.sort((a, b) => b.rating - a.rating);
      break;
    }
  }

  return todaysPlans.length > 0 ? (
    <div className="space-y-4">
      {sortedPlans.map((plan) => (
        <PlanCard key={plan.id} exercise={plan} />
      ))}
    </div>
  ) : (
    <EmptyPlan />
  );
}
