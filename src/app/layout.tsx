import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExerciseProvider from "@/contexts/ExerciseContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "Fit Log is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <ExerciseProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastContainer
            theme="dark"
            hideProgressBar
            closeButton={false}
            newestOnTop
            toastClassName="!bg-[#17191F] !text-white !rounded-2xl !px-5 !w-fit !font-medium !rounded-2xl !border !border-[#2A2E38]"
          />
        </ExerciseProvider>
      </body>
    </html>
  );
}
