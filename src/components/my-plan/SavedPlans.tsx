import PlanCard from "./PlanCard";
import EmptyPlan from "./EmptyPlan";
import { useExercise } from "@/hooks/useExercise";
import { SortType } from "@/app/my-plan/page";

interface TodaysPlansProps {
  sort: SortType;
}

export default function SavedPlans({ sort }: TodaysPlansProps) {
  const { savedPlans } = useExercise();

  const sortedPlans = [...savedPlans];

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

  return savedPlans.length > 0 ? (
    <div className="space-y-4">
      {sortedPlans.map((plan) => (
        <PlanCard key={plan.id} forSaved exercise={plan} />
      ))}
    </div>
  ) : (
    <EmptyPlan />
  );
}
