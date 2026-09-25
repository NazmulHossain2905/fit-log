import { getExerciseById } from "@/apis/exercise";
import AddAndSaveButtons from "@/components/exercise/[id]/AddAndSaveButtons";

import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ExerciseDetailsPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Exercise Details | FitLog",
};

export default async function ExerciseDetailsPage({
  params,
}: ExerciseDetailsPageProps) {
  const { id } = await params;

  const exercise = await getExerciseById(id);

  if (!exercise) {
    notFound();
  }

  const {
    name,
    image,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = exercise;

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-7 md:gap-14 md:py-12 lg:flex-row">
      <div className="group h-100 w-full overflow-hidden rounded-2xl border border-[#232834] bg-[#171A21] md:h-120 lg:h-183.75 lg:w-147">
        <Image
          className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
          src={image}
          width={588}
          height={735}
          alt={name}
        />
      </div>

      <div className="mb-4">
        <h1 className="font-oswald mb-3 text-4xl font-bold tracking-[-0.9px] uppercase">
          {name}
        </h1>
        <span className="text-[#9CA3AF]">{description}</span>

        <div className="mt-5 space-x-2.5">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-primary rounded-full px-3.5 py-1 text-xs font-semibold text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-[#232834] bg-[#151922]">
          <Row label="EQUIPMENT" value={equipment} borderTop={false} />
          <Row label="DIFFICULTY" value={difficulty} />
          <Row label="SETS" value={sets} />
          <Row label="REPS" value={reps} />
          <Row label="DURATION" value={`${duration} min`} />
          <Row label="CALORIES" value={`${caloriesBurned} kcal`} />
          <Row label="RATING" value={rating} />
        </div>

        <div className="mt-8 space-y-4">
          <h4 className="font-extrabold tracking-[0.8px]">INSTRUCTIONS</h4>

          <ol className="list-inside list-decimal space-y-3 text-sm text-[#D1D5DB]">
            {instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>

        <AddAndSaveButtons exercise={exercise} />
      </div>
    </section>
  );
}

interface RowProps {
  label: string;
  value: number | string;
  borderTop?: boolean;
}

function Row({ label, value, borderTop = true }: RowProps) {
  return (
    <div
      className={`flex items-center justify-between ${borderTop ? "border-t border-t-[#1E2330]" : ""} px-6 py-3.5`}
    >
      <span className="text-xs font-bold tracking-[0.6px] text-[#9CA3AF] uppercase">
        {label}
      </span>
      <span className="text-sm font-medium text-[#E5E7EB]">{value}</span>
    </div>
  );
}
