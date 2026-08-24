const steps = [
  {
    n: "i.",
    title: "Tell us the need",
    text: "Reach out via WhatsApp or the contact form with what you're looking for.",
  },
  {
    n: "ii.",
    title: "Site visit / assessment",
    text: "Where needed, our team assesses the job in person before quoting.",
  },
  {
    n: "iii.",
    title: "Quote & agreement",
    text: "You receive a clear quote and timeline before any work begins.",
  },
  {
    n: "iv.",
    title: "Delivery",
    text: "The relevant division carries out the work to completion.",
  },
  {
    n: "v.",
    title: "Sign-off",
    text: "We walk the job with you before we consider it closed.",
  },
];

export default function Process() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-paper
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          -z-10
          h-80
          w-80
          rounded-full
          bg-copper/8
          blur-3xl
          sm:-right-32
          sm:h-96
          sm:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          -z-10
          h-80
          w-80
          rounded-full
          bg-navy/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-295 px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 max-w-170 sm:mb-12 md:mb-14">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-copper-text sm:text-[12px]">
            How We Work
          </span>

          <h2
            className="
              font-display
              text-[clamp(1.75rem,5vw,2.4rem)]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-navy-deep
            "
          >
            From first message to finished job.
          </h2>

          <div
            aria-hidden="true"
            className="mt-6 h-0.75 w-10 rounded-sm bg-copper"
          />
        </div>

        {/* Process Container */}
        <div
          className="
            overflow-hidden
            rounded-lg
            border
            border-white/70
            bg-white/55
            shadow-[0_25px_70px_-35px_rgba(13,28,58,0.35)]
            backdrop-blur-md
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => (
              <article
                key={step.n}
                className={`
                  group
                  relative
                  isolate
                  overflow-hidden
                  p-6
                  transition-all
                  duration-300
                  sm:p-7
                  lg:p-6
                  xl:p-7

                  ${
                    index !== steps.length - 1
                      ? "border-b border-line sm:border-r lg:border-b-0"
                      : ""
                  }

                  ${
                    index === 1
                      ? "sm:border-r-0 lg:border-r lg:border-line"
                      : ""
                  }

                  hover:-translate-y-0.5
                  hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]
                `}
              >
                {/* Premium hover gradient */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-10
                    bg-linear-to-br
                    from-navy-deep
                    via-navy
                    to-[#8f5b36]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                {/* Gloss highlight */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-20
                    -z-10
                    h-40
                    w-40
                    rounded-full
                    bg-white/15
                    blur-2xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Step Number */}
                <span
                  className="
                    relative
                    block
                    font-display
                    text-[25px]
                    italic
                    leading-none
                    text-copper-text
                    transition-colors
                    duration-300
                    group-hover:text-copper-light
                  "
                >
                  {step.n}
                </span>

                {/* Content */}
                <h3
                  className="
                    relative
                    mb-2
                    mt-4
                    font-display
                    text-[15px]
                    font-semibold
                    leading-snug
                    text-navy-deep
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    relative
                    text-[13px]
                    leading-5.5
                    text-ink-soft
                    transition-colors
                    duration-300
                    group-hover:text-white/75
                  "
                >
                  {step.text}
                </p>

                {/* Bottom hover accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-0.75
                    w-0
                    bg-copper
                    transition-all
                    duration-300
                    group-hover:w-full
                    lg:right-0
                  "
                />

                {/* Desktop divider */}
                {index !== steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      hidden
                      h-full
                      w-px
                      bg-line
                      lg:block
                      group-hover:bg-white/10
                    "
                  />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}