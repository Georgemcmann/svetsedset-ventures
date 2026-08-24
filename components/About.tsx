const pillars = [
  {
    title: "Innovate",
    text: "Modern methods and equipment applied to traditional trades.",
    stripe: "bg-copper",
  },
  {
    title: "Empower",
    text: "Local teams, trained to deliver to a consistent standard.",
    stripe: "bg-silver",
  },
  {
    title: "Excel",
    text: "Every job judged by the same bar, regardless of division.",
    stripe: "bg-navy",
  },
  {
    title: "One Contact",
    text: "One company to call for multiple needs across a project.",
    stripe: "bg-copper",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        isolate
        overflow-hidden
        border-y
        border-line
        bg-[linear-gradient(135deg,#ffffff_0%,#f8f6f1_48%,#eef0f2_100%)]
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =========================
          PREMIUM BACKGROUND
      ========================== */}

      {/* Navy atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-48
          -top-40
          -z-10
          h-130
          w-130
          rounded-full
          bg-[radial-gradient(circle,rgba(13,28,58,0.09),transparent_68%)]
          blur-3xl
        "
      />

      {/* Copper atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          -bottom-48
          -z-10
          h-120
          w-120
          rounded-full
          bg-[radial-gradient(circle,rgba(180,116,65,0.10),transparent_68%)]
          blur-3xl
        "
      />

      {/* Soft glossy light */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(115deg,transparent_15%,rgba(255,255,255,0.65)_45%,transparent_72%)]
        "
      />

      <div
        className="
          mx-auto
          grid
          max-w-295
          items-start
          gap-10
          px-4
          sm:px-6
          md:grid-cols-[0.9fr_1.1fr]
          md:gap-12
          lg:gap-16
          lg:px-8
        "
      >
        {/* Section Heading */}
        <div className="md:sticky md:top-28">
          <span
            className="
              mb-3
              block
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-copper-text
              sm:text-[12px]
            "
          >
            About Svetsedset
          </span>

          <h2
            className="
              max-w-125
              font-display
              text-[clamp(1.75rem,5vw,2.4rem)]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-navy-deep
            "
          >
            A single standard, applied across every trade we practice.
          </h2>

          {/* Small decorative line */}
          <div
            aria-hidden="true"
            className="
              mt-6
              h-0.75
              w-10
              rounded-sm
              bg-linear-to-r
              from-copper
              to-copper/30
            "
          />
        </div>

        {/* About Content */}
        <div className="max-w-162.5">
          <p
            className="
              mb-4
              text-[16px]
              font-semibold
              leading-7
              text-ink
              sm:text-[17px]
              sm:leading-7
            "
          >
            Svetsedset Ventures was incorporated in 2023 in Lagos, Nigeria,
            out of a simple observation: businesses were tired of managing a
            different contractor for every need — one company for security,
            another for supply, another for finishing.
          </p>

          <p
            className="
              mb-4
              text-[15px]
              leading-7
              text-ink-soft
              sm:text-[15.5px]
            "
          >
            We built Svetsedset to close that gap. Today, we operate as a group
            of specialist teams under one name, covering security and
            surveillance, wholesale food distribution, transport and logistics,
            branding and marketing, interior decoration, tiling and furnishing,
            and ground contracting — each run by people who treat their trade
            as a craft, not a side job.
          </p>

          <p
            className="
              text-[15px]
              leading-7
              text-ink-soft
              sm:text-[15.5px]
            "
          >
            Whatever the job, our approach doesn&apos;t change: understand what
            the client actually needs, quote it honestly, and deliver it
            properly the first time. That discipline is what
            &ldquo;Innovate, Empower, Excel&rdquo; means to us in practice, not
            just on the letterhead.
          </p>

          {/* Pillars */}
          <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="
                  group
                  relative
                  isolate
                  overflow-hidden
                  rounded-lg
                  border
                  border-white/70
                  bg-white/45
                  p-5
                  shadow-[0_10px_35px_-22px_rgba(13,28,58,0.35)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white/60
                  hover:shadow-[0_20px_45px_-20px_rgba(13,28,58,0.28)]
                "
              >
                {/* Glossy diagonal reflection */}
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -left-24
                    top-[-60%]
                    h-[220%]
                    w-24
                    rotate-25
                    bg-white/30
                    blur-xl
                    transition-all
                    duration-700
                    group-hover:left-[120%]
                  "
                />

                {/* Soft card glow */}
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
                    bg-copper/5
                    blur-2xl
                    transition-opacity
                    duration-300
                    group-hover:bg-copper/10
                  "
                />

                {/* Content */}
                <div className="relative z-10">
                  <div
                    aria-hidden="true"
                    className={`
                      mb-3
                      h-0.75
                      w-9
                      rounded-sm
                      transition-all
                      duration-300
                      group-hover:w-12
                      ${pillar.stripe}
                    `}
                  />

                  <b
                    className="
                      mb-1.5
                      block
                      font-display
                      text-[17px]
                      font-bold
                      text-navy
                    "
                  >
                    {pillar.title}
                  </b>

                  <span
                    className="
                      block
                      text-[13px]
                      leading-5.5
                      text-ink-soft
                    "
                  >
                    {pillar.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}