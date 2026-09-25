import PlanCard from "./PlanCard";
import EmptyPlan from "./EmptyPlan";
import { useExercise } from "@/hooks/useExercise";
import PlanLoading from "./PlanLoading";
import { SortType } from "@/app/my-plan/_components/MyPlanClient";

interface TodaysPlansProps {
  sort: SortType;
}

export default function SavedPlans({ sort }: TodaysPlansProps) {
  const { savedPlans, loading } = useExercise();

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

  if (loading) {
    return <PlanLoading />;
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
