const items = [
  {
    title: "One Point of Contact",
    text: "A single company handling multiple parts of your project, so nothing falls through the gaps between vendors.",
    border: "border-navy",
  },
  {
    title: "Fair, Upfront Quotes",
    text: "We assess the job and quote honestly before work begins — no inflated pricing, no surprise charges.",
    border: "border-silver",
  },
  {
    title: "Lagos-Based, Nationwide Reach",
    text: "Headquartered in Festac Town, with logistics capability that extends across Nigeria.",
    border: "border-copper",
  },
  {
    title: "Accountable Delivery",
    text: "Every division is expected to meet the same standard — we stand behind the work we hand over.",
    border: "border-navy",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="
        relative
        overflow-hidden
        border-y
        border-line
        bg-white
        py-14
        sm:py-16
        md:py-20
        lg:py-24
      "
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-copper/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-navy/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-295 px-4 sm:px-6 lg:px-8">
        {/* =========================
            SECTION HEADING
        ========================== */}

        <div className="mb-10 max-w-175 sm:mb-12 md:mb-14">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-copper-text sm:text-[12px]">
            Why Svetsedset
          </span>

          <h2
            id="why-heading"
            className="
              max-w-170
              font-display
              text-[clamp(1.75rem,5vw,2.4rem)]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-navy-deep
            "
          >
            Built for clients who don&apos;t want to manage five contractors.
          </h2>

          <div
            aria-hidden="true"
            className="
              mt-6
              h-0.75
              w-10
              rounded-sm
              bg-copper
            "
          />
        </div>

        {/* =========================
            REASONS
        ========================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-5
          "
        >
          {items.map((item) => (
            <article
              key={item.title}
              className={`
                group
                relative
                overflow-hidden
                rounded-md
                border
                border-line
                border-t-2
                bg-linear-to-br
                from-white
                via-white
                to-paper
                p-5
                pt-5
                shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-navy/15
                hover:shadow-[0_22px_45px_-28px_rgba(13,28,58,0.45)]

                sm:p-6
                sm:pt-6

                ${item.border}
              `}
            >
              {/* Glossy highlight */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-white/80
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Copper ambient glow */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-12
                  h-32
                  w-32
                  rounded-full
                  bg-copper/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Glossy top edge */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white
                  to-transparent
                  opacity-80
                "
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Number */}
                <span
                  aria-hidden="true"
                  className="
                    mb-5
                    block
                    font-display
                    text-[12px]
                    font-bold
                    tracking-[0.12em]
                    text-copper-text
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  {String(items.indexOf(item) + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    mb-2.5
                    font-display
                    text-[17px]
                    font-bold
                    leading-snug
                    text-navy-deep
                    transition-colors
                    duration-300
                    group-hover:text-navy
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[13.5px]
                    leading-6
                    text-ink-soft
                    transition-colors
                    duration-300
                    group-hover:text-ink
                  "
                >
                  {item.text}
                </p>
              </div>

              {/* Bottom accent */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.75
                  w-0
                  bg-copper
                  shadow-[0_0_12px_rgba(180,116,65,0.45)]
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
  );
}