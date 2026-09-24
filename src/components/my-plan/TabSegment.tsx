"use client";

import { TabType } from "@/app/my-plan/page";
import { Dispatch, SetStateAction } from "react";

interface TabSegmentProps {
  tabs: TabType[];
  selectedTab: TabType;
  onSelectTab?: Dispatch<SetStateAction<"Today’s Plan" | "Saved">>;
}

export default function TabSegment({
  tabs = [],
  selectedTab,
  onSelectTab,
}: TabSegmentProps) {
  return (
    <div className="mx-auto flex w-fit items-center gap-1 rounded-xl border border-[#232732] bg-[#151921] p-1 md:mx-0">
      {tabs.map((tab) => (
        <button
          type="button"
          onClick={() => onSelectTab?.(tab)}
          key={tab}
          className={
            tab === selectedTab
              ? "h-7.5 min-w-27 cursor-pointer rounded-lg border border-[#2B303D] bg-[#1F242D] text-xs font-bold"
              : "cursor-pointer px-4 py-1.5 text-xs text-[#8A92A0]"
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
