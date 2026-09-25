"use client";

import ExercisesStats from "@/components/my-plan/ExercisesStats";
import SavedPlans from "@/components/my-plan/SavedPlans";
import TabSegment from "@/components/my-plan/TabSegment";
import TodaysPlans from "@/components/my-plan/TodaysPlans";
import SelectDropdown from "@/components/SelectDropdown";
import { useExercise } from "@/hooks/useExercise";
import { useState } from "react";

export type SortType = "duration" | "rating" | "calories";

export default function MyPlanClient() {
  const [sort, setSort] = useState<SortType>("duration");

  const { todaysPlans, savedPlans, tab, setTab } = useExercise();

  const plan = tab === "Today’s Plan" ? todaysPlans : savedPlans;
  return (
    <section className="mx-auto max-w-7xl space-y-6 px-6 py-7 md:pt-10">
      <div className="space-y-2">
        <h2 className="font-oswald text-3xl font-bold tracking-[-0.75px]">
          MY PLAN
        </h2>
        <p className="text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* ExercisesStats */}
      <ExercisesStats plans={plan} />

      <div className="flex flex-col items-center justify-between gap-2 pt-2 md:flex-row">
        <TabSegment
          tabs={["Today’s Plan", "Saved"]}
          selectedTab={tab}
          onSelectTab={setTab}
        />

        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-[#8A92A0] md:block">
            Sort By
          </span>

          <SelectDropdown
            options={[
              { value: "duration", label: "Duration" },
              { value: "rating", label: "Rating" },
              { value: "calories", label: "Calories" },
            ]}
            value={sort}
            onSelect={(value) => setSort(value as SortType)}
          />
        </div>
      </div>

      {tab === "Today’s Plan" ? (
        <TodaysPlans sort={sort} />
      ) : (
        <SavedPlans sort={sort} />
      )}
    </section>
  );
}
