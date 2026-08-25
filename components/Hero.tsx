import { divisions, siteConfig, whatsappLink } from "@/lib/siteConfig";

export default function Hero() {
  return (
    <section
      id="top"
      className="
        relative
        isolate
        overflow-hidden
        bg-[linear-gradient(120deg,#f8f6f1_0%,#f5f2ec_42%,#ebe9e4_100%)]
        py-12
        sm:py-14
        md:py-18
        lg:py-22
        xl:py-24
      "
    >
      {/* =========================
          PREMIUM BACKGROUND
      ========================== */}

      {/* Main navy atmospheric gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          -z-10
          w-[75%]
          bg-[radial-gradient(circle_at_80%_45%,rgba(13,28,58,0.13),transparent_58%)]
        "
      />

      {/* Copper atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          -z-10
          h-120
          w-120
          rounded-full
          bg-[radial-gradient(circle,rgba(180,116,65,0.16),transparent_68%)]
          blur-2xl
        "
      />

      {/* Soft navy glow behind content */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-48
          -bottom-48
          -z-10
          h-130
          w-130
          rounded-full
          bg-[radial-gradient(circle,rgba(13,28,58,0.10),transparent_68%)]
          blur-3xl
        "
      />

      {/* Fine diagonal light gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.45)_42%,transparent_70%)]
        "
      />

      {/* Subtle premium glow around the card */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-1/2
          -z-10
          h-100
          w-100
          -translate-y-1/2
          rounded-full
          bg-copper/5
          blur-3xl
        "
      />

      <div
        className="
          mx-auto
          grid
          w-full
          max-w-295
          grid-cols-1
          items-center
          gap-10
          px-4
          sm:px-6
          md:gap-12
          lg:grid-cols-[1.08fr_.92fr]
          lg:gap-14
          lg:px-8
          xl:gap-16
        "
      >
        {/* =========================
            HERO CONTENT
        ========================== */}
        <div className="relative w-full max-w-2xl">
          {/* Small decorative line */}
          <div
            aria-hidden="true"
            className="
              mb-5
              h-px
              w-14
              bg-linear-to-r
              from-copper
              to-transparent
              sm:w-16
            "
          />

          {/* Eyebrow */}
          <span
            className="
              mb-3
              block
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-copper-text
              sm:text-[11px]
              sm:tracking-[0.18em]
              md:text-[12px]
            "
          >
            {siteConfig.location}, Nigeria · Est. {siteConfig.founded}
          </span>

          {/* Heading */}
          <h1
            className="
              mb-5
              max-w-180
              font-display
              text-[clamp(2.15rem,9vw,3.25rem)]
              font-bold
              leading-[1.06]
              tracking-tight
              text-navy-deep
              sm:text-[clamp(2.5rem,7vw,3.5rem)]
              md:text-[clamp(2.7rem,5vw,3.7rem)]
              lg:text-[clamp(2.8rem,4.2vw,3.9rem)]
              xl:text-[4rem]
            "
          >
            Seven industries.
            <br />
            One name you can{" "}
            <em
              className="
                font-display
                not-italic
                text-copper-text
                drop-shadow-[0_3px_12px_rgba(180,116,65,0.16)]
              "
            >
              trust.
            </em>
          </h1>

          {/* Description */}
          <p
            className="
              mb-7
              max-w-142.5
              text-[15px]
              leading-6.5
              text-ink-soft
              sm:text-[15.5px]
              sm:leading-7
              md:text-[16px]
              lg:text-[17px]
            "
          >
            {siteConfig.name} delivers security systems, food supply,
            logistics, branding, interior finishing and contracting solutions
            to businesses across Nigeria — built on one standard of quality
            across every division.
          </p>

          {/* CTA Buttons */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href={whatsappLink(
                "Hello Svetsedset Ventures, I'd like a free quote."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-sm
                bg-navy
                px-5
                py-3
                text-center
                text-[13.5px]
                font-bold
                text-white
                shadow-[0_10px_30px_-12px_rgba(13,28,58,0.55)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-navy-deep
                hover:shadow-[0_15px_35px_-12px_rgba(13,28,58,0.65)]
                active:translate-y-0
                active:scale-[0.99]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-navy
                focus-visible:ring-offset-2
                sm:w-auto
                sm:px-5
                md:px-6
                md:text-[14px]
              "
            >
              Get a Free Quote on WhatsApp
            </a>

            <a
              href="#divisions"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-sm
                border
                border-navy/80
                bg-white/30
                px-5
                py-3
                text-center
                text-[13.5px]
                font-bold
                text-navy
                backdrop-blur-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-navy
                hover:text-white
                active:translate-y-0
                active:scale-[0.99]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-navy
                focus-visible:ring-offset-2
                sm:w-auto
                md:px-6
                md:text-[14px]
              "
            >
              Explore Our Divisions
            </a>
          </div>
        </div>

        {/* =========================
            WHAT WE DO CARD
        ========================== */}
        <div
          className="
            relative
            w-full
            overflow-hidden
            rounded-lg
            border
            border-white/10
            bg-[linear-gradient(145deg,#152b54_0%,#0d1c3a_55%,#09152d_100%)]
            p-5
            text-white
            shadow-[0_30px_80px_-25px_rgba(13,28,58,0.55)]
            sm:p-6
            md:p-7
            lg:p-8
            xl:p-9
          "
        >
          {/* Card glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-[radial-gradient(circle,rgba(180,116,65,0.20),transparent_68%)]
              blur-2xl
            "
          />

          {/* Decorative accent */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-6
              -top-6
              h-24
              w-24
              rounded-bl-full
              bg-copper/10
              sm:h-28
              sm:w-28
            "
          />

          {/* Card heading */}
          <span
            className="
              relative
              mb-4
              block
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-copper-light
              sm:text-[11px]
            "
          >
            What We Do
          </span>

          {/* Divisions */}
          <div className="relative flex flex-col">
            {divisions.map((division, index) => (
              <div
                key={division.title}
                className={`
                  flex
                  min-h-9.5
                  items-center
                  gap-2.5
                  py-2
                  text-[12.5px]
                  leading-5
                  text-white/90
                  sm:text-[13px]
                  md:text-[13.5px]
                  ${
                    index !== divisions.length - 1
                      ? "border-b border-dashed border-white/10"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-copper
                    shadow-[0_0_10px_rgba(180,116,65,0.65)]
                  "
                />

                <span className="min-w-0">{division.title}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div
            className="
              mt-5
              grid
              grid-cols-3
              border-t
              border-white/15
            "
          >
            {/* Divisions */}
            <div className="min-w-0 py-4 pr-2 sm:pr-3">
              <b
                className="
                  block
                  font-display
                  text-[21px]
                  leading-none
                  sm:text-[24px]
                  md:text-[26px]
                "
              >
                7
              </b>

              <small
                className="
                  mt-1.5
                  block
                  text-[8px]
                  uppercase
                  leading-4
                  tracking-[0.06em]
                  text-white/60
                  min-[375px]:text-[9px]
                  sm:text-[10px]
                  sm:tracking-wide
                "
              >
                Divisions
              </small>
            </div>

        
            {/* Location */}
            <div
              className="
                min-w-0
                border-l
                border-white/15
                py-4
                pl-2
                sm:pl-3
              "
            >
              <b
                className="
                  block
                  truncate
                  font-display
                  text-[18px]
                  leading-none
                  min-[375px]:text-[20px]
                  sm:text-[24px]
                  md:text-[26px]
                "
              >
                {siteConfig.location}
              </b>

              <small
                className="
                  mt-1.5
                  block
                  text-[8px]
                  uppercase
                  leading-4
                  tracking-[0.06em]
                  text-white/60
                  min-[375px]:text-[9px]
                  sm:text-[10px]
                  sm:tracking-wide
                "
              >
                Head Office
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-16
          bg-linear-to-t
          from-paper/35
          to-transparent
        "
      />
    </section>
  );
}