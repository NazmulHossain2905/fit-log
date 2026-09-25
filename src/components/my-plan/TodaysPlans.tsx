"use client";

import { useExercise } from "@/hooks/useExercise";
import PlanCard from "./PlanCard";
import EmptyPlan from "./EmptyPlan";
import PlanLoading from "./PlanLoading";
import { SortType } from "@/app/my-plan/_components/MyPlanClient";

interface TodaysPlansProps {
  sort: SortType;
}

export default function TodaysPlans({ sort }: TodaysPlansProps) {
  const { todaysPlans, loading } = useExercise();

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

  if (loading) {
    return <PlanLoading />;
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
