import Image from "next/image";
import { FaFire, FaRegStar } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

export default function GymCard() {
  return (
    <div className="group hover:border-primary/40 w-fit cursor-pointer overflow-hidden rounded-2xl border border-[#222630] bg-[#15171D] transition-colors">
      <div className="h-48 overflow-hidden">
        <Image
          className="h-full object-cover object-center transition-transform group-hover:scale-105"
          src={"/assets/Overhead-Press.png"}
          width={392}
          height={192}
          alt="Barbell Bench Press"
        />
      </div>

      <div className="p-6">
        <div className="space-x-2">
          <span className="bg-primary rounded-full px-2.5 py-0.5 text-xs font-bold tracking-[0.55px] text-black">
            CHEST
          </span>
          <span className="bg-primary rounded-full px-2.5 py-0.5 text-xs font-bold tracking-[0.55px] text-black">
            ARMS
          </span>
        </div>

        <div className="mt-3 mb-4 space-y-1">
          <h3 className="font-oswald text-lg font-bold tracking-[0.45px]">
            BARBELL BENCH PRESS
          </h3>
          <span className="text-xs text-[#9CA3AF]">Barbell, Bench</span>
        </div>

        <div className="flex gap-4 border-t border-t-[#20242E] pt-3">
          <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <MdOutlineAccessTime className="text-sm" /> 25 min
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <FaFire className="text-sm" /> 180 kcal
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
            <FaRegStar className="text-sm" /> 4.8
          </span>
        </div>
      </div>
    </div>
  );
}
