"use client";

import { IExercise } from "@/interfaces/IExercise";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type TabType = "Today’s Plan" | "Saved";

export interface ExerciseContextState {
  todaysPlans: IExercise[];
  savedPlans: IExercise[];
  setSavedPlans: Dispatch<SetStateAction<IExercise[]>>;
  setTodaysPlans: Dispatch<SetStateAction<IExercise[]>>;
  tab: TabType;
  setTab: Dispatch<SetStateAction<TabType>>;
}

export const ExerciseContext = createContext<ExerciseContextState | null>(null);

interface ExerciseProviderProps {
  children: ReactNode;
}

export default function ExerciseProvider({ children }: ExerciseProviderProps) {
  const [savedPlans, setSavedPlans] = useState<IExercise[]>([]);
  const [todaysPlans, setTodaysPlans] = useState<IExercise[]>([]);
  const [tab, setTab] = useState<TabType>("Today’s Plan");

  return (
    <ExerciseContext.Provider
      value={{
        todaysPlans,
        savedPlans,
        tab,
        setTodaysPlans,
        setSavedPlans,
        setTab,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}
