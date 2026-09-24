import Image from "next/image";
import Link from "next/link";
import { FaFire, FaRegStar, FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";

export default function PlanCard() {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-[#232732] bg-[#14171E] p-2 md:flex-row md:items-center md:p-4">
      <div className="h-36 w-full overflow-hidden rounded-xl md:h-20 md:w-36">
        <Image
          className="h-full w-full object-cover object-center"
          src={"/assets/Overhead-Press.png"}
          width={144}
          height={80}
          alt="Barbell Bench Press"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-oswald font-bold tracking-[0.4px]">
          RUSSIAN TWIST
        </h3>
        <p className="mt-0.5 text-xs font-semibold text-[#8A92A0]">
          Medicine Ball
        </p>
        <div className="flex gap-3 pt-2">
          <span className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
            <MdOutlineAccessTime className="text-primary text-sm" /> 25 min
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
            <FaFire className="text-primary text-sm" /> 180 kcal
          </span>
          <span className="flex items-center gap-1.5 text-xs text-[#D1D5DB]">
            <FaRegStar className="text-primary text-sm" /> 4.8
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/exercise/${100}`}
          className="inline-flex cursor-pointer rounded-full border border-[#374151] px-4.5 py-2 text-xs transition-transform hover:scale-105"
        >
          View Details
        </Link>
        <button className="bg-primary inline-flex cursor-pointer items-center gap-1.5 rounded-full px-4.5 py-2 text-xs font-semibold text-black transition-transform hover:scale-105">
          <FaCheck /> <span>Mark as Done</span>
        </button>

        <button className="cursor-pointer rounded-full border border-transparent px-1.5 py-1.5 text-xl text-[#6B7280] transition-transform duration-300 hover:rotate-90 hover:border-[#374151] hover:text-red-500">
          <IoClose />
        </button>
      </div>
    </div>
  );
}
