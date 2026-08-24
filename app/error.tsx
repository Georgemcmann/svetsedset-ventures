"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for debugging/monitoring.
    console.error(error);
  }, [error]);

  return (
    <main
      className="
        relative
        flex
        min-h-[70vh]
        items-center
        justify-center
        overflow-hidden
        bg-paper
        px-4
        py-20
      "
    >
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(180,116,65,0.10),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(13,28,58,0.08),transparent_35%)]
        "
      />

      <div className="relative z-10 w-full max-w-2xl text-center">
        <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.18em] text-copper-text sm:text-[12px]">
          Something went wrong
        </span>

        <div
          aria-hidden="true"
          className="mx-auto mb-7 h-0.75 w-10 rounded-sm bg-copper"
        />

        <h1
          className="
            font-display
            text-[clamp(2rem,6vw,3.5rem)]
            font-bold
            leading-tight
            tracking-tight
            text-navy-deep
          "
        >
          We couldn&apos;t load this page.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-7 text-ink-soft">
          Something unexpected happened while loading the page. Please try
          again, or return to the homepage.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="
              inline-flex
              min-h-12
              items-center
              justify-center
              rounded-sm
              bg-navy
              px-6
              py-3
              text-[14px]
              font-bold
              text-white
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-navy-deep
              hover:shadow-md
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-navy
              focus-visible:ring-offset-2
            "
          >
            Try Again
          </button>

          <Link
  href="/"
  className="
    inline-flex
    min-h-12
    items-center
    justify-center
    rounded-sm
    border
    border-navy
    px-6
    py-3
    text-[14px]
    font-bold
    text-navy
    transition-all
    duration-200
    hover:bg-navy
    hover:text-white
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-navy
    focus-visible:ring-offset-2
  "
>
  Back to Homepage
</Link>
        </div>
      </div>
    </main>
  );
}