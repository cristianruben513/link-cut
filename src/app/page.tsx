import { buttonVariants } from "@/ui/button";
import { TypographyH1, TypographyP } from "@/ui/typography";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="relative h-[calc(100vh-4rem)]">

      <section
        id="hero"
        className="flex flex-col items-center px-8 pt-16 text-center md:pt-24 lg:pt-32"
      >
        <TypographyH1 className="max-w-[75ch] duration-500 animate-in fade-in-5 slide-in-from-bottom-2 mb-4">
          Share everything effortlessly
        </TypographyH1>

        <TypographyP className="max-w-[60ch] duration-700 animate-in fade-in-5 slide-in-from-top-2 text-lg md:text-xl">
          The fast, simple, and effective URL shortener that lets you share anything on the internet with ease.
        </TypographyP>

        <div className="mt-12 items-center justify-center gap-x-3 space-y-3 duration-700 animate-in fade-in-30 sm:flex sm:space-y-0">
          <Link
            href="/dashboard"
            className="group relative"
          >
            <div className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md  bg-neutral-800 text-neutral-50 dark:text-neutral-100 px-6 font-medium transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">
              <LinkIcon
                size={18}
                className="duration-300 group-hover:rotate-[14deg] mr-2"
              />
              Create a Link
            </div>
            <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div>
          </Link>
        </div>
      </section>

    </main>
  );
}
