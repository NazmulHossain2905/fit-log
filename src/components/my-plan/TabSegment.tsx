"use client";

import { TabType } from "@/contexts/ExerciseContext";
import { Dispatch, SetStateAction } from "react";

interface TabSegmentProps {
  tabs: TabType[];
  selectedTab: TabType;
  onSelectTab?: Dispatch<SetStateAction<TabType>>;
}

export default function TabSegment({
  tabs,
  selectedTab,
  onSelectTab,
}: TabSegmentProps) {
  return (
    <div className="mx-auto flex w-fit items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1 md:mx-0">
      {tabs.map((tab) => {
        const isActive = tab === selectedTab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onSelectTab?.(tab)}
            className={`min-w-27 rounded-lg px-4 py-1.5 text-xs font-semibold transition-colors ${
              isActive
                ? "border border-[#2B303D] bg-[#1F242D] text-white"
                : "border border-transparent text-[#8A92A0] hover:text-white"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
