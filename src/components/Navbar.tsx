"use client";

import { useExercise } from "@/hooks/useExercise";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { savedPlans, todaysPlans } = useExercise();

  return (
    <nav className="bg-background/70 sticky top-0 z-10 border-b border-b-[#1C1F26] backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href={"/"} className="flex items-center gap-2.5">
          <Image src={"/assets/logo.png"} width={28} height={28} alt="Logo" />
          <span className="font-oswald text-lg font-black">FITLOG</span>
        </Link>

        <ul className="hidden gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full ${pathname === link.href ? "text-primary bg-[#1A2312] font-semibold" : "font-medium text-[#9CA3AF]"} hover:text-primary px-4 py-1.5 text-xs transition-colors`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-6">
          <Link href={"/my-plan"} className="group flex items-center gap-2">
            <span className="group-hover:text-primary text-xs font-medium text-[#D1D5DB] transition-colors">
              Plan
            </span>
            <span className="bg-primary flex h-5 min-w-5 items-center justify-center rounded-full px-1.25 text-xs font-bold text-black">
              {todaysPlans.length}
            </span>
          </Link>

          <Link href={"/my-plan"} className="group flex items-center gap-2">
            <span className="group-hover:text-primary text-xs font-medium text-[#9CA3AF] transition-colors">
              Saved
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#2D313B] px-1.25 text-xs font-medium text-[#D1D5DB]">
              {savedPlans.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
