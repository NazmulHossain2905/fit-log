import ExerciseCard from "./ExerciseCard";

export default function ExerciseGrid() {
  return (
    <section className="mx-auto mt-16 max-w-7xl space-y-8 px-6">
      <div className="space-y-1">
        <h2 className="font-oswald text-3xl font-bold tracking-[-0.75px]">
          THE LIBRARY
        </h2>
        <p className="text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 })
          .fill(null)
          .map((_, i) => (
            <ExerciseCard key={i} />
          ))}
      </div>
    </section>
  );
}
