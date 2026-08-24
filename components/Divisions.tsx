import { divisions, whatsappLink } from "@/lib/siteConfig";
import DivisionIcon from "./DivisionIcon";

export default function Divisions() {
  return (
    <section
      id="divisions"
      aria-labelledby="divisions-heading"
      className="relative overflow-hidden bg-paper py-14 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Subtle section glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
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
          bottom-10
          h-80
          w-80
          rounded-full
          bg-navy/5
          blur-3xl
        "
      />

      {/* Section Intro */}
      <div className="relative mx-auto max-w-295 px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-170 sm:mb-12 md:mb-14">
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-copper-text sm:text-[12px]">
            Our Divisions
          </span>

          <h2
            id="divisions-heading"
            className="
              mb-3.5
              font-display
              text-[clamp(1.75rem,5vw,2.4rem)]
              font-bold
              leading-[1.12]
              tracking-[-0.02em]
              text-navy-deep
            "
          >
            Seven trades. Handled the same way, every time.
          </h2>

          <p className="max-w-150 text-[15px] leading-7 text-ink-soft sm:text-[15.5px]">
            Each division is run by its own team and can be engaged
            independently — you don&apos;t need to use all seven to work with
            us.
          </p>
        </div>

        {/* Divisions Grid */}
        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-md
            border
            border-line
            bg-line
            shadow-[0_20px_60px_-35px_rgba(13,28,58,0.25)]
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {divisions.map((division) => (
            <a
              key={division.number}
              href={`/divisions/${division.slug}`}
              aria-label={`Learn more about ${division.title}`}
              className="
                group
                relative
                flex
                min-h-61.25
                flex-col
                overflow-hidden
                border-transparent
                bg-white
                p-6
                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:bg-linear-to-br
                hover:from-white
                hover:via-white
                hover:to-copper/10
                hover:shadow-[0_22px_45px_-25px_rgba(13,28,58,0.5)]

                focus-visible:z-10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-copper

                sm:p-7
                lg:min-h-65
                lg:p-8
              "
            >
              {/* Glossy highlight */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-24
                  h-48
                  w-48
                  rounded-full
                  bg-white/70
                  opacity-0
                  blur-2xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Subtle copper glow */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -bottom-16
                  -right-16
                  h-36
                  w-36
                  rounded-full
                  bg-copper/10
                  opacity-0
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Division Number */}
              <span
                aria-hidden="true"
                className="
                  relative
                  z-10
                  mb-4
                  block
                  font-display
                  text-[13px]
                  italic
                  text-copper-text
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:text-copper-text
                "
              >
                {division.number}
              </span>

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  mb-5
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-line
                  bg-paper/80
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  group-hover:scale-105
                  group-hover:border-copper/50
                  group-hover:bg-copper
                  group-hover:shadow-[0_10px_25px_-10px_rgba(180,116,65,0.7)]
                "
              >
                <DivisionIcon
                  name={division.icon}
                  className="
                    h-5.25
                    w-5.25
                    text-navy
                    transition-all
                    duration-300
                    group-hover:scale-105
                    group-hover:text-white
                  "
                />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3
                  className="
                    mb-2
                    font-display
                    text-[17px]
                    font-semibold
                    leading-snug
                    text-navy-deep
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:text-navy-deep
                  "
                >
                  {division.title}
                </h3>

                <p
                  className="
                    text-[13px]
                    leading-5.5
                    text-ink-soft
                    transition-colors
                    duration-300
                    group-hover:text-ink
                  "
                >
                  {division.description}
                </p>
              </div>

              {/* Learn More */}
              <span
                className="
                  relative
                  z-10
                  mt-4
                  inline-flex
                  items-center
                  gap-1.5
                  text-[12px]
                  font-bold
                  text-copper-text
                  transition-all
                  duration-300
                  group-hover:gap-2.5
                  group-hover:text-copper-text
                "
              >
                Learn more

                <span
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  →
                </span>
              </span>

              {/* Glossy top border */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-linear-to-r
                  from-transparent
                  via-white
                  to-transparent
                  opacity-70
                "
              />

              {/* Hover Accent */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-0.75
                  w-0
                  bg-copper
                  shadow-[0_0_12px_rgba(180,116,65,0.5)]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

          {/* CTA Card */}
          <div
            className="
              group
              relative
              flex
              min-h-61.25
              flex-col
              justify-center
              overflow-hidden
              bg-linear-to-br
              from-white
              via-white
              to-paper
              p-6
              shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]
              sm:p-7
              lg:col-span-1
              lg:min-h-65
              lg:p-8
            "
          >
            {/* CTA glossy glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-48
                w-48
                rounded-full
                bg-copper/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <span
                aria-hidden="true"
                className="
                  mb-3
                  block
                  h-0.75
                  w-9
                  rounded-sm
                  bg-copper
                  transition-all
                  duration-300
                  group-hover:w-12
                "
              />

              <h3 className="mb-3 font-display text-[18px] font-semibold leading-snug text-navy-deep">
                Need more than one division?
              </h3>

              <p className="mb-5 max-w-62.5 text-[13px] leading-5.5 text-ink-soft">
                Tell us the project — we&apos;ll bring in the right teams.
              </p>

              <a
                href={whatsappLink(
                  "Hello Svetsedset Ventures, I need help with more than one service."
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Svetsedset Ventures about multiple services"
                className="
                  inline-flex
                  min-h-11.5
                  w-fit
                  items-center
                  justify-center
                  rounded-sm
                  bg-navy
                  px-5
                  py-3
                  text-[14px]
                  font-bold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:bg-navy-deep
                  hover:shadow-lg
                  active:scale-[0.98]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-navy
                  focus-visible:ring-offset-2
                "
              >
                Talk to Us
              </a>
            </div>

            {/* CTA glossy top line */}
            <span
              aria-hidden="true"
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-linear-to-r
                from-transparent
                via-white
                to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}