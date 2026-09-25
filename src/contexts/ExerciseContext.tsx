"use client";

import { IExercise } from "@/interfaces/IExercise";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
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
  loading: boolean;
}

const TODAY_PLAN_KEY = "todaysPlan";
const SAVED_PLAN_KEY = "savedPlan";

function getPlans(key: string): IExercise[] {
  try {
    const value = localStorage.getItem(key);

    if (!value) return [];

    const parsedData = JSON.parse(value);

    return Array.isArray(parsedData) ? parsedData : [];
  } catch {
    return [];
  }
}

export const ExerciseContext = createContext<ExerciseContextState | null>(null);

interface ExerciseProviderProps {
  children: ReactNode;
}

export default function ExerciseProvider({ children }: ExerciseProviderProps) {
  const [todaysPlans, setTodaysPlans] = useState<IExercise[]>([]);
  const [savedPlans, setSavedPlans] = useState<IExercise[]>([]);
  const [tab, setTab] = useState<TabType>("Today’s Plan");
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const todaysPlans = getPlans(TODAY_PLAN_KEY);
    const savedPlans = getPlans(SAVED_PLAN_KEY);

    setTodaysPlans(todaysPlans);
    setSavedPlans(savedPlans);

    setHydrated(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(TODAY_PLAN_KEY, JSON.stringify(todaysPlans));
    localStorage.setItem(SAVED_PLAN_KEY, JSON.stringify(savedPlans));
  }, [todaysPlans, savedPlans, hydrated]);

  return (
    <ExerciseContext.Provider
      value={{
        todaysPlans,
        savedPlans,
        tab,
        setTodaysPlans,
        setSavedPlans,
        setTab,
        loading,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
}
