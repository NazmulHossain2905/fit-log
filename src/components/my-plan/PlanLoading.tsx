export default function PlanLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <ExercisePlanSkeleton key={index} />
      ))}
    </div>
  );
}

function ExercisePlanSkeleton() {
  return (
    <div className="flex animate-pulse flex-col items-start gap-4 rounded-2xl border border-[#232732] bg-[#14171E] p-2 md:flex-row md:items-center md:p-4">
      {/* Image */}
      <div className="h-36 w-full rounded-xl bg-[#252A34] md:h-20 md:w-36" />

      {/* Content */}
      <div className="flex-1 px-2 md:px-0">
        {/* Name */}
        <div className="h-5 w-48 rounded bg-[#252A34]" />

        {/* Equipment */}
        <div className="mt-2 h-3 w-24 rounded bg-[#252A34]" />

        {/* Stats */}
        <div className="flex gap-3 pt-3">
          <div className="h-3 w-14 rounded bg-[#252A34]" />
          <div className="h-3 w-20 rounded bg-[#252A34]" />
          <div className="h-3 w-12 rounded bg-[#252A34]" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 px-2 pb-2 md:px-0 md:pb-0">
        <div className="h-8 w-24 rounded-full bg-[#252A34]" />
        <div className="h-8 w-28 rounded-full bg-[#252A34]" />
        <div className="h-8 w-8 rounded-full bg-[#252A34]" />
      </div>
    </div>
  );
}
