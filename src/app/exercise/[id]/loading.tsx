export default function Loading() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-7 md:gap-14 md:py-12 lg:flex-row">
      {/* Image skeleton */}
      <div className="h-100 w-full shrink-0 animate-pulse rounded-2xl border border-[#232834] bg-[#171A21] md:h-120 lg:h-183.75 lg:w-134" />

      {/* Details skeleton */}
      <div className="mb-4 w-full">
        {/* Title */}
        <div className="mb-4 h-10 w-3/4 animate-pulse rounded-lg bg-[#232834]" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-[#232834]" />
          <div className="h-4 w-11/12 animate-pulse rounded bg-[#232834]" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-[#232834]" />
        </div>

        {/* Muscle groups */}
        <div className="mt-5 flex gap-2.5">
          <div className="h-6 w-20 animate-pulse rounded-full bg-[#232834]" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-[#232834]" />
          <div className="h-6 w-16 animate-pulse rounded-full bg-[#232834]" />
        </div>

        {/* Exercise information */}
        <div className="mt-7 overflow-hidden rounded-2xl border border-[#232834] bg-[#151922]">
          {Array.from({ length: 7 }).map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-6 py-3.5 ${
                index !== 0 ? "border-t border-t-[#1E2330]" : ""
              }`}
            >
              <div className="h-3 w-20 animate-pulse rounded bg-[#232834]" />
              <div className="h-4 w-24 animate-pulse rounded bg-[#232834]" />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 space-y-4">
          <div className="h-5 w-28 animate-pulse rounded bg-[#232834]" />

          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded bg-[#232834]" />
            <div className="h-4 w-11/12 animate-pulse rounded bg-[#232834]" />
            <div className="h-4 w-10/12 animate-pulse rounded bg-[#232834]" />
            <div className="h-4 w-9/12 animate-pulse rounded bg-[#232834]" />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-9 flex flex-col gap-4 md:flex-row">
          <div className="h-11 w-full animate-pulse rounded-xl bg-[#232834] md:w-48" />
          <div className="h-11 w-full animate-pulse rounded-xl bg-[#232834] md:w-40" />
        </div>
      </div>
    </section>
  );
}
