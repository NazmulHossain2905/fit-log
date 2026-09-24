import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background mt-10 border-t border-t-[#1a1d24] md:mt-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 md:flex-row md:py-10">
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
