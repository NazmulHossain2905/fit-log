import PlanCard from "./PlanCard";
import EmptyPlan from "./EmptyPlan";

export default function SavedPlans() {
  return true ? (
    <EmptyPlan />
  ) : (
    <div className="space-y-4">
      <PlanCard forSaved />
      <PlanCard forSaved />
      <PlanCard forSaved />
    </div>
  );
}
