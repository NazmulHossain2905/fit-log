import type { Metadata } from "next";
import MyPlanClient from "./_components/MyPlanClient";

export const metadata: Metadata = {
  title: "My Plan | FitLog",
  description:
    "Manage your workout plans, track today's exercises, and keep your saved workouts in one place.",
};

export default function MyPlanPage() {
  return <MyPlanClient />;
}
