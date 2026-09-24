"use client";

import { IExercise } from "@/interfaces/IExercise";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ExerciseContextState {
  todaysPlans: IExercise[];
  savedPlans: IExercise[];
  setSavedPlans: Dispatch<SetStateAction<IExercise[]>>;
  setTodaysPlans: Dispatch<SetStateAction<IExercise[]>>;
}

export const ExerciseContext = createContext<ExerciseContextState | null>(null);

interface ExerciseProviderProps {
  children: ReactNode;
}

export default function ExerciseProvider({ children }: ExerciseProviderProps) {
  const [savedPlans, setSavedPlans] = useState<IExercise[]>([]);
  const [todaysPlans, setTodaysPlans] = useState<IExercise[]>([]);

  return (
    <ExerciseContext.Provider
      value={{
        todaysPlans,
        savedPlans,
        setTodaysPlans,
        setSavedPlans,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}
