import { getExercises } from "@/apis/exercise";
import ExerciseCard from "./ExerciseCard";

export default async function ExerciseGrid() {
  const exercises = await getExercises();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
