"use client";

import Dashboard from "@/components/my-plan/Dashboard";
import SavedPlans from "@/components/my-plan/SavedPlans";
import TabSegment from "@/components/my-plan/TabSegment";
import TodaysPlans from "@/components/my-plan/TodaysPlans";
import SelectDropdown from "@/components/SelectDropdown";
import { useState } from "react";

export type TabType = "Today’s Plan" | "Saved";
export type SortType = "duration" | "rating" | "calories";

export default function MyPlanPage() {
  const [tab, setTab] = useState<TabType>("Today’s Plan");
  const [sort, setSort] = useState<SortType>("duration");

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

      {/* Dashboard */}
      <Dashboard />

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
            value="rating"
            onSelect={(value) => setSort(value as SortType)}
          />
        </div>
      </div>

      {tab === "Today’s Plan" ? <TodaysPlans /> : <SavedPlans />}
    </section>
  );
}
