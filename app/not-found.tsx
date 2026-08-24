import Link from "next/link";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] bg-paper">
      <section
        aria-labelledby="not-found-heading"
        className="flex min-h-[70vh] items-center border-b border-line"
      >
        <div className="mx-auto w-full max-w-295 px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <div className="max-w-180">
            {/* Error number */}
            <span
              aria-hidden="true"
              className="
                mb-5
                block
                font-display
                text-[13px]
                font-bold
                italic
                tracking-wide
                text-copper-text
              "
            >
              404
            </span>

            {/* Decorative line */}
            <div
              aria-hidden="true"
              className="mb-6 h-0.75 w-12 bg-copper"
            />

            {/* Heading */}
            <h1
              id="not-found-heading"
              className="
                mb-5
                font-display
                text-[clamp(2.25rem,7vw,4.5rem)]
                font-bold
                leading-[1.05]
                tracking-tight
                text-navy-deep
              "
            >
              This page doesn&apos;t exist.
            </h1>

            {/* Description */}
            <p
              className="
                mb-8
                max-w-145
                text-[15px]
                leading-7
                text-ink-soft
                sm:text-[16px]
                sm:leading-7
              "
            >
              The page you&apos;re looking for may have moved, been removed,
              or the address may be incorrect. You can return to Svetsedset
              Ventures and explore our services instead.
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
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
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-navy-deep
                  hover:shadow-md
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-navy
                  focus-visible:ring-offset-2
                "
              >
                Back to Homepage
              </Link>

              <Link
                href="/#divisions"
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
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-navy
                  focus-visible:ring-offset-2
                "
              >
                Explore Our Divisions
              </Link>
            </div>

            {/* Contact fallback */}
            <div className="mt-12 border-t border-line pt-6">
              <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.15em] text-copper-text">
                Looking for something specific?
              </p>

              <div className="flex flex-col gap-2 text-[13px] text-ink-soft sm:flex-row sm:items-center sm:gap-5">
                <a
                  href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
                  className="
                    transition-colors
                    hover:text-copper-text
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-copper-text
                    focus-visible:ring-offset-2
                  "
                >
                  {siteConfig.phoneDisplay}
                </a>

                <span
                  aria-hidden="true"
                  className="hidden text-line sm:inline"
                >
                  /
                </span>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="
                    transition-colors
                    hover:text-copper-text
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-copper-text
                    focus-visible:ring-offset-2
                  "
                >
                  {siteConfig.email}
                </a>

                <span
                  aria-hidden="true"
                  className="hidden text-line sm:inline"
                >
                  /
                </span>

                <a
                  href={whatsappLink(
                    `Hello ${siteConfig.name}, I need help finding something on your website.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    font-semibold
                    text-navy
                    transition-colors
                    hover:text-copper-text
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-copper-text
                    focus-visible:ring-offset-2
                  "
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}