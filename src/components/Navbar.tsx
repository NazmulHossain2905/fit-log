"use client";

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

  return (
    <nav className="bg-background/20 sticky top-0 border-b border-b-[#1C1F26] backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href={"/"} className="flex items-center gap-2.5">
          <Image src={"/assets/logo.png"} width={28} height={28} alt="Logo" />
          <span className="font-oswald text-lg font-black">FITLOG</span>
        </Link>

        <ul className="flex gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`rounded-full ${pathname === link.href ? "bg-[#1A2312] font-semibold text-[#C2F800]" : "font-medium text-[#9CA3AF]"} px-4 py-1.5 text-xs`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#D1D5DB]">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1.25 text-xs font-bold text-black">
              0
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#9CA3AF]">Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#2D313B] px-1.25 text-xs font-medium text-[#D1D5DB]">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
