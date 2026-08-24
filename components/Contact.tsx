import { siteConfig, whatsappLink } from "@/lib/siteConfig";

export default function Contact() {
  return (
    <section
      id="contact"
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
      {/* Background Glow */}
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
          bg-navy/6
          blur-3xl
        "
      />

      <div className="mx-auto max-w-295 px-4 sm:px-6 lg:px-8">
        {/* Main Contact Card */}
        <div
          className="
            relative
            isolate
            grid
            overflow-hidden
            rounded-lg
            border
            border-white/10
            bg-linear-to-br
            from-navy-deep
            via-navy
            to-[#6f472d]
            shadow-[0_30px_80px_-30px_rgba(13,28,58,0.55)]
            md:grid-cols-2
          "
        >
          {/* Global glass highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-32
              -z-10
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          {/* Copper glow */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-25
              left-[25%]
              -z-10
              h-72
              w-72
              rounded-full
              bg-copper/15
              blur-3xl
            "
          />

          {/* =========================
              Contact Information
          ========================== */}
          <div
            className="
              relative
              p-6
              text-white
              sm:p-8
              md:p-10
              lg:p-12
            "
          >
            {/* Glass sheen */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-px
                bg-white/25
              "
            />

            <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-copper-light sm:text-[12px]">
              Get In Touch
            </span>

            <h2
              className="
                mb-3.5
                max-w-120
                font-display
                text-[clamp(1.75rem,5vw,1.9rem)]
                font-bold
                leading-[1.12]
                tracking-[-0.02em]
                text-white
              "
            >
              Let&apos;s talk about your project.
            </h2>

            <p className="mb-8 max-w-110 text-[14.5px] leading-6.5 text-white/70 sm:text-[15px]">
              Reach us directly on WhatsApp for the fastest response, or use
              the contact details below.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {/* Address */}
              <div className="group flex items-start gap-3.5">
                <div
                  className="
                    flex
                    h-9.5
                    w-9.5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:border-copper-light/40
                    group-hover:bg-copper/15
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.25 w-4.25 stroke-copper-light"
                    fill="none"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.1-7-11a7 7 0 0114 0c0 4.9-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <b className="mb-0.5 block text-[13px] font-bold text-white">
                    Address
                  </b>

                  <span className="block text-[13.5px] leading-5.5 text-white/65">
                    {siteConfig.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="group flex items-start gap-3.5">
                <div
                  className="
                    flex
                    h-9.5
                    w-9.5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:border-copper-light/40
                    group-hover:bg-copper/15
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.25 w-4.25 stroke-copper-light"
                    fill="none"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <b className="mb-0.5 block text-[13px] font-bold text-white">
                    Phone / WhatsApp
                  </b>

                  <a
                    href={`tel:${siteConfig.whatsappNumber}`}
                    className="
                      block
                      w-fit
                      text-[13.5px]
                      leading-5.5
                      text-white/65
                      transition-colors
                      hover:text-copper-light
                      focus-visible:text-copper-light
                      focus-visible:outline-none
                    "
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-3.5">
                <div
                  className="
                    flex
                    h-9.5
                    w-9.5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    group-hover:border-copper-light/40
                    group-hover:bg-copper/15
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4.25 w-4.25 stroke-copper-light"
                    fill="none"
                    strokeWidth={1.7}
                    aria-hidden="true"
                  >
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 6l8 7 8-7" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <b className="mb-0.5 block text-[13px] font-bold text-white">
                    Email
                  </b>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="
                      block
                      max-w-full
                      wrap-break-word
                      text-[13.5px]
                      leading-5.5
                      text-white/65
                      transition-colors
                      hover:text-copper-light
                      focus-visible:text-copper-light
                      focus-visible:outline-none
                    "
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink(
                "Hello Svetsedset Ventures, I'd like to get in touch."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-8
                inline-flex
                min-h-12.5
                w-full
                items-center
                justify-center
                gap-2.5
                rounded-sm
                bg-[#25D366]
                px-6
                py-3.5
                text-[14px]
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_12px_30px_-10px_rgba(37,211,102,0.5)]
                active:scale-[0.99]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#25D366]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-navy
                sm:w-fit
              "
            >
              <svg
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="#fff"
                aria-hidden="true"
              >
                <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.5.7 4.8 1.9 6.8L3 29l6.9-2.1c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.6 12.7-12.5S23 3 16 3zm7.4 17.6c-.3.9-1.7 1.7-2.8 1.9-.7.1-1.6.2-4.7-1-4-1.6-6.5-5.6-6.7-5.9-.2-.3-1.6-2.1-1.6-4s1-2.9 1.4-3.3c.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .9.7.3.8 1.1 2.8 1.2 3 .1.2.2.4 0 .7-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.1.9-.1l1.3-1.5c.3-.4.6-.3 1-.2s2.6 1.2 3 1.5c.4.2.7.3.8.5.1.2.1 1-.2 1.9z" />
              </svg>

              Chat on WhatsApp
            </a>
          </div>

          {/* =========================
              MAP
          ========================== */}
          <div
            className="
              relative
              min-h-75
              overflow-hidden
              border-t
              border-white/10
              md:min-h-full
              md:border-l
              md:border-t-0
            "
          >
            {/* Map overlay */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-linear-to-br
                from-navy-deep/20
                via-transparent
                to-copper/20
                mix-blend-multiply
              "
            />

            <iframe
              src={siteConfig.mapsEmbedUrl}
              loading="lazy"
              className="
                absolute
                inset-0
                h-full
                w-full
                min-h-75
                border-0
                grayscale-20
                contrast-[1.05]
                saturate-[0.8]
              "
              title="Svetsedset Ventures location map"
              allowFullScreen
            />

            {/* Map glass label */}
            <div
              className="
                absolute
                bottom-5
                left-5
                z-20
                rounded-md
                border
                border-white/20
                bg-navy-deep/75
                px-4
                py-3
                shadow-lg
                backdrop-blur-md
                sm:bottom-6
                sm:left-6
              "
            >
              <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-copper-light">
                Head Office
              </span>

              <span className="mt-1 block text-[12px] font-medium text-white">
                {siteConfig.location}, Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}