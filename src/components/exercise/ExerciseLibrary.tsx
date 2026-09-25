import { Suspense } from "react";
import ExerciseGrid from "./ExerciseGrid";
import LoadingExercise from "./ExerciseLoading";

export default async function ExerciseLibrary() {
  return (
    <section id="workouts" className="mx-auto mt-16 max-w-7xl space-y-8 px-6">
      <div className="space-y-1">
        <h2 className="font-oswald text-3xl font-bold tracking-[-0.75px]">
          THE LIBRARY
        </h2>
        <p className="text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <Suspense fallback={<LoadingExercise />}>
        <ExerciseGrid />
      </Suspense>
    </section>
  );
}
