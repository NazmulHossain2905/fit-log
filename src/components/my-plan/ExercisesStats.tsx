import { IExercise } from "@/interfaces/IExercise";

interface ExercisesStatsProps {
  plans: IExercise[];
}

export default function ExercisesStats({ plans }: ExercisesStatsProps) {
  const totalCaloriesBurned = plans.reduce(
    (total, plan) => total + plan.caloriesBurned,
    0,
  );
  const totalMinutes = plans.reduce((total, plan) => total + plan.duration, 0);

  return (
    <div className="grid grid-cols-3 rounded-2xl border border-[#232732] bg-[#13161D] p-5 pt-6 md:p-6 md:pt-8">
      <div className="space-y-1.5 text-center md:text-left">
        <p className="text-xs text-[#8A92A0]">Exercises</p>
        <h2 className="font-oswald text-primary text-4xl font-bold">
          {plans.length}
        </h2>
      </div>

      <div className="space-y-1.5 border-l border-l-[#232732]/60 px-0 text-center md:px-8 md:text-left">
        <p className="text-xs text-[#8A92A0]">Minutes</p>
        <h2 className="font-oswald text-4xl font-bold text-white">
          {totalMinutes}
        </h2>
      </div>

      <div className="space-y-1.5 border-l border-l-[#232732]/60 pl-0 text-center md:pl-8 md:text-left">
        <p className="text-xs text-[#8A92A0]">Calories</p>
        <h2 className="font-oswald text-4xl font-bold text-white">
          {totalCaloriesBurned}
        </h2>
      </div>
    </div>
  );
}
