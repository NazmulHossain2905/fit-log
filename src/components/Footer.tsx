import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background mt-16 border-t border-t-[#1a1d24]">
      <div className="container mx-auto flex items-center justify-between px-6 py-10">
        <Link href={"/"} className="flex items-center gap-2.5">
          <Image
            src={"/assets/logo-footer.svg"}
            width={20}
            height={20}
            alt="Logo"
          />
          <span className="font-oswald text-sm font-bold">FITLOG</span>
        </Link>

        <p className="text-xs text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
