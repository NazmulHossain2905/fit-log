import ExerciseCard from "./ExerciseCard";

export default function ExerciseGrid() {
  return (
    <section className="container mx-auto mt-16 space-y-8 px-6">
      <div className="space-y-1">
        <h2 className="font-oswald text-3xl font-bold tracking-[-0.75px]">
          THE LIBRARY
        </h2>
        <p className="text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 12 })
          .fill(null)
          .map((_, i) => (
            <ExerciseCard key={i} />
          ))}
      </div>
    </section>
  );
}
