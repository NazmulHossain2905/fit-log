export default function LoadingExercise() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <ExerciseCardSkeleton key={index} />
      ))}
    </div>
  );
}

function ExerciseCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D]">
      <div className="h-50 animate-pulse bg-[#20242E]" />

      <div className="p-6">
        <div className="flex gap-2">
          <div className="h-5 w-16 animate-pulse rounded-full bg-[#252A34]" />
          <div className="h-5 w-20 animate-pulse rounded-full bg-[#252A34]" />
        </div>

        <div className="mt-3 mb-4 space-y-2">
          <div className="h-6 w-3/4 animate-pulse rounded bg-[#252A34]" />
          <div className="h-3 w-24 animate-pulse rounded bg-[#252A34]" />
        </div>

        <div className="flex gap-4 border-t border-t-[#20242E] pt-3">
          <div className="h-4 w-16 animate-pulse rounded bg-[#252A34]" />
          <div className="h-4 w-20 animate-pulse rounded bg-[#252A34]" />
          <div className="h-4 w-12 animate-pulse rounded bg-[#252A34]" />
        </div>
      </div>
    </div>
  );
}
