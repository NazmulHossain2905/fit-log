import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Not Found | FitLog",
  description:
    "The page you're looking for couldn't be found. Head back to FitLog and continue exploring.",
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-4">
      <div className="max-w-md space-y-6 text-center">
        <Image
          className="mx-auto animate-bounce"
          src="/assets/logo-footer.svg"
          width={150}
          height={150}
          alt="Fit Log logo"
        />

        <h1 className="font-oswald text-4xl font-semibold text-white/90 uppercase">
          404 — Missed that lift
        </h1>

        <p className="text-gray-500">
          The page you wanted is not in the library. Head back to the floor and
          pick a workout that exists.
        </p>

        <Link
          href="/"
          className="bg-primary inline-block rounded-full px-6 py-2.5 text-xs font-semibold tracking-[-0.3px] text-black transition-transform duration-200 hover:scale-105"
        >
          Back to workouts
        </Link>
      </div>
    </section>
  );
}
