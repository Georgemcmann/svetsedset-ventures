import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  divisions,
  siteConfig,
  whatsappLink,
} from "@/lib/siteConfig";
import DivisionIcon from "@/components/DivisionIcon";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/*
|--------------------------------------------------------------------------
| Static pages
|--------------------------------------------------------------------------
*/

export function generateStaticParams() {
  return divisions.map((division) => ({
    slug: division.slug,
  }));
}

/*
|--------------------------------------------------------------------------
| Find division
|--------------------------------------------------------------------------
*/

function getDivision(slug: string) {
  return divisions.find((division) => division.slug === slug);
}

/*
|--------------------------------------------------------------------------
| Metadata
|--------------------------------------------------------------------------
*/

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const division = getDivision(slug);

  if (!division) {
    return {
      title: "Division Not Found | Svetsedset Ventures",
      description:
        "The requested division could not be found.",
    };
  }

  return {
    title: `${division.title} | ${siteConfig.name}`,
    description: division.description,
    alternates: {
      canonical: `/divisions/${division.slug}`,
    },
    openGraph: {
      title: `${division.title} | ${siteConfig.name}`,
      description: division.description,
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

/*
|--------------------------------------------------------------------------
| Division Page
|--------------------------------------------------------------------------
*/

export default async function DivisionPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const division = getDivision(slug);

  if (!division) {
    notFound();
  }

  return (
    <main className="overflow-hidden bg-paper">
      {/* =========================
    HERO
========================== */}
<section
  aria-labelledby="division-heading"
  className="
    relative
    overflow-hidden
    border-b
    border-line
    bg-paper
  "
>
  {/* Glossy background */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-32
      -top-40
      h-105
      w-105
      rounded-full
      bg-[radial-gradient(circle,rgba(180,116,65,0.12)_0%,rgba(180,116,65,0.045)_38%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -left-40
      -bottom-48
      h-105
      w-105
      rounded-full
      bg-[radial-gradient(circle,rgba(13,28,58,0.08)_0%,rgba(13,28,58,0.025)_40%,transparent_72%)]
      blur-3xl
    "
  />

  {/* Subtle glass highlight */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      h-px
      bg-linear-to-r
      from-transparent
      via-white
      to-transparent
      opacity-80
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-295
      px-4
      py-14
      sm:px-6
      sm:py-16
      md:py-20
      lg:px-8
      lg:py-24
    "
  >
    {/* Back link */}
    <Link
      href="/#divisions"
      className="
        mb-8
        inline-flex
        items-center
        gap-2
        rounded-sm
        px-1
        py-1
        text-[13px]
        font-semibold
        text-ink-soft
        transition-all
        duration-200
        hover:-translate-x-0.5
        hover:text-copper-text
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-copper-text
        focus-visible:ring-offset-4
      "
    >
      <span aria-hidden="true">←</span>
      All Divisions
    </Link>

    <div className="max-w-180">
      {/* Division label */}
      <div className="mb-5 flex items-center gap-4">
        <span className="font-display text-[14px] italic text-copper-text">
          {division.number}
        </span>

        <span
          aria-hidden="true"
          className="
            h-px
            w-10
            bg-copper
            shadow-[0_0_10px_rgba(180,116,65,0.25)]
          "
        />

        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-copper-text">
          {division.title}
        </span>
      </div>

      {/* Glass Icon */}
      <div
        aria-hidden="true"
        className="
          group
          relative
          mb-7
          flex
          h-16
          w-16
          items-center
          justify-center
          overflow-hidden
          rounded-xl
          border
          border-white/70
          bg-white/65
          shadow-[0_12px_35px_-18px_rgba(13,28,58,0.35)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-copper/30
          hover:shadow-[0_18px_40px_-18px_rgba(180,116,65,0.35)]
        "
      >
        {/* Glass shine */}
        <span
          className="
            absolute
            inset-0
            bg-linear-to-br
            from-white/70
            via-transparent
            to-transparent
          "
        />

        <span
          className="
            absolute
            -right-3
            -top-3
            h-8
            w-8
            rounded-full
            bg-copper/10
            blur-md
          "
        />

        <DivisionIcon
          name={division.icon}
          className="
            relative
            h-7
            w-7
            text-navy
            transition-all
            duration-300
            group-hover:text-copper-text
            group-hover:scale-105
          "
        />
      </div>

      {/* Heading */}
      <h1
        id="division-heading"
        className="
          mb-5
          max-w-175
          font-display
          text-[clamp(2.25rem,6vw,4rem)]
          font-bold
          leading-[1.06]
          tracking-tight
          text-navy-deep
        "
      >
        {division.title}
      </h1>

      {/* Intro */}
      <p
        className="
          max-w-165
          text-[16px]
          leading-7
          text-ink-soft
          sm:text-[17px]
        "
      >
        {division.intro}
      </p>

      {/* CTA */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={whatsappLink(
            `Hello ${siteConfig.name}, I'd like to enquire about your ${division.title} services.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Request a quote for ${division.title}`}
          className="
            group
            relative
            inline-flex
            min-h-12
            items-center
            justify-center
            overflow-hidden
            rounded-sm
            bg-navy
            px-6
            py-3
            text-[14px]
            font-bold
            text-white
            shadow-[0_8px_20px_-10px_rgba(13,28,58,0.5)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-navy-deep
            hover:shadow-[0_14px_28px_-12px_rgba(13,28,58,0.55)]
            active:translate-y-0
            active:scale-[0.98]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-navy
            focus-visible:ring-offset-2
          "
        >
          {/* Button shine */}
          <span
            aria-hidden="true"
            className="
              absolute
              inset-0
              -translate-x-full
              bg-linear-to-r
              from-transparent
              via-white/10
              to-transparent
              transition-transform
              duration-700
              group-hover:translate-x-full
            "
          />

          <span className="relative">
            Request a Quote
          </span>
        </a>

        <Link
          href="/#contact"
          className="
            inline-flex
            min-h-12
            items-center
            justify-center
            rounded-sm
            border
            border-navy/20
            bg-white/45
            px-6
            py-3
            text-[14px]
            font-bold
            text-navy
            shadow-[0_8px_24px_-20px_rgba(13,28,58,0.35)]
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-navy
            hover:bg-white/75
            hover:shadow-[0_12px_28px_-18px_rgba(13,28,58,0.35)]
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-navy
            focus-visible:ring-offset-2
          "
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* =========================
    SERVICES
========================== */}
<section
  aria-labelledby="services-heading"
  className="
    relative
    overflow-hidden
    border-b
    border-line
    bg-white
  "
>
  {/* Glossy background */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -left-40
      -top-40
      h-105
      w-105
      rounded-full
      bg-[radial-gradient(circle,rgba(180,116,65,0.09)_0%,rgba(180,116,65,0.03)_38%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-40
      -bottom-48
      h-105
      w-105
      rounded-full
      bg-[radial-gradient(circle,rgba(13,28,58,0.07)_0%,rgba(13,28,58,0.025)_40%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-295
      px-4
      py-14
      sm:px-6
      sm:py-16
      md:py-20
      lg:px-8
      lg:py-24
    "
  >
    <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      {/* Section heading */}
      <div className="md:sticky md:top-28 md:self-start">
        <span
          className="
            mb-3
            block
            text-[11px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-copper-text
          "
        >
          What We Offer
        </span>

        <h2
          id="services-heading"
          className="
            max-w-120
            font-display
            text-[28px]
            font-bold
            leading-tight
            tracking-[-0.02em]
            text-navy-deep
            sm:text-[34px]
          "
        >
          Services designed around the job.
        </h2>

        <div
          aria-hidden="true"
          className="
            mt-6
            h-0.75
            w-10
            rounded-sm
            bg-copper
            shadow-[0_0_12px_rgba(180,116,65,0.25)]
          "
        />
      </div>

      {/* Services */}
      <div className="grid gap-3 sm:grid-cols-2">
        {division.services.map((service, index) => (
          <article
            key={service}
            className="
              group
              relative
              overflow-hidden
              rounded-md
              border
              border-line
              bg-paper/70
              p-5
              shadow-[0_8px_30px_-25px_rgba(13,28,58,0.35)]
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-copper/25
              hover:bg-white/80
              hover:shadow-[0_18px_35px_-20px_rgba(13,28,58,0.25)]
              sm:p-6
            "
          >
            {/* Glass highlight */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white
                to-transparent
                opacity-80
              "
            />

            {/* Copper glow */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-copper/8
                blur-2xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Number */}
            <span
              aria-hidden="true"
              className="
                relative
                mb-5
                block
                font-display
                text-[13px]
                italic
                text-copper-text
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Accent */}
            <span
              aria-hidden="true"
              className="
                mb-4
                block
                h-0.75
                w-7
                rounded-sm
                bg-copper
                transition-all
                duration-300
                group-hover:w-11
              "
            />

            <h3
              className="
                relative
                text-[15px]
                font-semibold
                leading-snug
                text-navy-deep
                transition-colors
                duration-300
                group-hover:text-navy
              "
            >
              {service}
            </h3>

            {/* Bottom hover line */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0
                h-0.5
                w-0
                bg-copper
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* =========================
    IDEAL FOR
========================== */}
<section
  aria-labelledby="ideal-for-heading"
  className="
    relative
    overflow-hidden
    border-b
    border-line
    bg-paper
  "
>
  {/* Glossy background */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-48
      -top-40
      h-105
      w-105
      rounded-full
      bg-[radial-gradient(circle,rgba(180,116,65,0.10)_0%,rgba(180,116,65,0.035)_40%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -bottom-56
      -left-40
      h-105
      w-105
      rounded-full
      bg-[radial-gradient(circle,rgba(13,28,58,0.07)_0%,rgba(13,28,58,0.025)_40%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-295
      px-4
      py-14
      sm:px-6
      sm:py-16
      md:py-20
      lg:px-8
      lg:py-24
    "
  >
    <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      {/* Heading */}
      <div className="md:sticky md:top-28 md:self-start">
        <span
          className="
            mb-3
            block
            text-[11px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-copper-text
          "
        >
          Who We Serve
        </span>

        <h2
          id="ideal-for-heading"
          className="
            max-w-120
            font-display
            text-[28px]
            font-bold
            leading-tight
            tracking-[-0.02em]
            text-navy-deep
            sm:text-[34px]
          "
        >
          Built for businesses and projects like yours.
        </h2>

        <div
          aria-hidden="true"
          className="
            mt-6
            h-0.75
            w-10
            rounded-sm
            bg-copper
            shadow-[0_0_12px_rgba(180,116,65,0.25)]
          "
        />
      </div>

      {/* Ideal clients */}
      <div className="grid gap-3 sm:grid-cols-2">
        {division.idealFor.map((client, index) => (
          <article
            key={client}
            className="
              group
              relative
              overflow-hidden
              rounded-md
              border
              border-line
              bg-white/55
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-navy/15
              hover:bg-white/80
              hover:shadow-[0_18px_35px_-22px_rgba(13,28,58,0.3)]
              sm:p-6
            "
          >
            {/* Glass highlight */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            {/* Number */}
            <div className="mb-6 flex items-center justify-between">
              <span
                aria-hidden="true"
                className="
                  font-display
                  text-[13px]
                  italic
                  text-copper-text
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Small arrow */}
              <span
                aria-hidden="true"
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-line
                  text-[13px]
                  text-copper-text
                  transition-all
                  duration-300
                  group-hover:border-copper/30
                  group-hover:bg-copper/5
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </div>

            <h3
              className="
                font-display
                text-[16px]
                font-semibold
                leading-snug
                text-navy-deep
                transition-colors
                duration-300
                group-hover:text-navy
              "
            >
              {client}
            </h3>

            {/* Bottom accent */}
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0
                h-0.5
                w-0
                bg-copper
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* =========================
    WHY WORK WITH US
========================== */}
<section
  aria-labelledby="why-heading"
  className="
    relative
    overflow-hidden
    border-b
    border-line
    bg-white
  "
>
  {/* Glossy background */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      left-1/2
      -top-56
      h-105
      w-105
      -translate-x-1/2
      rounded-full
      bg-[radial-gradient(circle,rgba(180,116,65,0.10)_0%,rgba(180,116,65,0.035)_40%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -bottom-48
      -right-40
      h-100
      w-100
      rounded-full
      bg-[radial-gradient(circle,rgba(13,28,58,0.07)_0%,rgba(13,28,58,0.025)_40%,transparent_72%)]
      blur-3xl
    "
  />

  <div
    className="
      relative
      mx-auto
      max-w-295
      px-4
      py-14
      sm:px-6
      sm:py-16
      md:py-20
      lg:px-8
      lg:py-24
    "
  >
    {/* Heading */}
    <div className="mb-10 max-w-165 sm:mb-12 md:mb-14">
      <span
        className="
          mb-3
          block
          text-[11px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-copper-text
        "
      >
        Why Work With Us
      </span>

      <h2
        id="why-heading"
        className="
          mb-6
          max-w-150
          font-display
          text-[28px]
          font-bold
          leading-tight
          tracking-[-0.02em]
          text-navy-deep
          sm:text-[34px]
        "
      >
        One standard across every division.
      </h2>

      <div
        aria-hidden="true"
        className="
          h-0.75
          w-10
          rounded-sm
          bg-copper
          shadow-[0_0_12px_rgba(180,116,65,0.25)]
        "
      />
    </div>

    {/* Trust points */}
    <div className="grid gap-4 sm:grid-cols-3">
      {[
        "Solutions selected around the actual requirements of your project.",
        "Clear communication from initial enquiry through completion.",
        "The ability to coordinate multiple services through one company.",
      ].map((item, index) => (
        <article
          key={item}
          className="
            group
            relative
            overflow-hidden
            rounded-lg
            border
            border-line
            bg-paper/70
            p-6
            shadow-[0_10px_35px_-28px_rgba(13,28,58,0.4)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-copper/25
            hover:bg-white/80
            hover:shadow-[0_20px_40px_-22px_rgba(13,28,58,0.28)]
            sm:p-7
          "
        >
          {/* Glass highlight */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-linear-to-r
              from-transparent
              via-white
              to-transparent
            "
          />

          {/* Glow */}
          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-10
              -top-10
              h-24
              w-24
              rounded-full
              bg-copper/8
              blur-2xl
              transition-transform
              duration-500
              group-hover:scale-125
            "
          />

          {/* Number */}
          <div
            className="
              relative
              mb-7
              flex
              items-center
              justify-between
            "
          >
            <span
              aria-hidden="true"
              className="
                font-display
                text-[14px]
                italic
                text-copper-text
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              aria-hidden="true"
              className="
                h-8
                w-8
                rounded-full
                border
                border-line
                bg-white/50
                transition-all
                duration-300
                group-hover:border-copper/30
                group-hover:bg-copper/5
              "
            />
          </div>

          {/* Accent */}
          <span
            aria-hidden="true"
            className="
              mb-5
              block
              h-0.75
              w-8
              rounded-sm
              bg-copper
              transition-all
              duration-300
              group-hover:w-12
            "
          />

          <p
            className="
              relative
              text-[14px]
              leading-6.5
              text-ink-soft
              transition-colors
              duration-300
              group-hover:text-ink
            "
          >
            {item}
          </p>

          {/* Bottom accent */}
          <span
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-0
              h-0.5
              w-0
              bg-copper
              transition-all
              duration-300
              group-hover:w-full
            "
          />
        </article>
      ))}
    </div>
  </div>
</section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}
      <section
        aria-labelledby="project-heading"
        className="
          relative
          isolate
          overflow-hidden
          bg-linear-to-br
          from-navy-deep
          via-navy
          to-[#182f59]
        "
      >
        {/* Ambient copper glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-copper/15
            blur-3xl
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-24
            h-64
            w-64
            rounded-full
            bg-white/5
            blur-3xl
          "
        />

        <div className="relative mx-auto max-w-295 px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between md:gap-10">
            <div>
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-copper-light">
                Start a Project
              </span>

              <h2
                id="project-heading"
                className="
                  max-w-150
                  font-display
                  text-[clamp(1.7rem,5vw,2.25rem)]
                  font-bold
                  leading-tight
                  tracking-[-0.02em]
                  text-white
                "
              >
                Need {division.title.toLowerCase()} services?
              </h2>

              <p className="mt-3 max-w-130 text-[14px] leading-6 text-white/60">
                Tell us what you need and let&apos;s discuss how we can help.
              </p>
            </div>

            <a
              href={whatsappLink(
                `Hello ${siteConfig.name}, I'd like to discuss a ${division.title.toLowerCase()} project.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Talk to Svetsedset Ventures about ${division.title}`}
              className="
                group
                relative
                inline-flex
                min-h-12
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-sm
                bg-copper
                px-6
                py-3
                text-[14px]
                font-bold
                text-white
                shadow-[0_15px_35px_-15px_rgba(180,116,65,0.6)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-copper-text
                hover:shadow-[0_20px_40px_-15px_rgba(180,116,65,0.7)]
                active:scale-[0.98]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-copper-light
                focus-visible:ring-offset-2
                focus-visible:ring-offset-navy-deep
              "
            >
              <span
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-linear-to-r
                  from-transparent
                  via-white/15
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Talk to Us
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}