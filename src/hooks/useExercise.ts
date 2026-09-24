import { ExerciseContext } from "@/contexts/ExerciseContext";
import { useContext } from "react";

export function useExercise() {
  const context = useContext(ExerciseContext);

  if (!context) {
    throw new Error("useExercise must be used inside ExerciseProvider");
  }

  return context;
}
