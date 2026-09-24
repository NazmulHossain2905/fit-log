import { IExercise } from "@/interfaces/IExercise";
import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

interface ExerciseCardProps {
  exercise: IExercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;
  return (
    <Link
      href={`/exercise/${id}`}
      className="group hover:border-primary/40 cursor-pointer overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] transition-colors"
    >
      <div className="h-50 overflow-hidden bg-gray-500/10">
        <Image
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
          src={image}
          width={392}
          height={200}
          loading="eager"
          alt={name}
        />
      </div>

      <div className="p-6">
        <div className="space-x-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-primary rounded-full px-2.5 py-0.5 text-xs font-bold tracking-[0.55px] text-black uppercase"
            >
              {muscle}
            </span>
          ))}
        </div>

        <div className="mt-3 mb-4 space-y-1">
          <h3 className="font-oswald text-lg font-bold tracking-[0.45px] uppercase">
            {name}
          </h3>
          <span className="text-xs text-[#9CA3AF]">{equipment}</span>
        </div>

        <div className="flex gap-4 border-t border-t-[#20242E] pt-3">
          <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <MdOutlineAccessTime className="text-sm" /> {duration} min
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <FaFire className="text-sm" /> {caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <FaRegStar className="text-sm" /> {rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
