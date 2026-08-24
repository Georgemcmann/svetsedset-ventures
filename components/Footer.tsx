import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const links = [
  { href: "#about", label: "About" },
  { href: "#divisions", label: "Divisions" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        bg-linear-to-br
        from-[#07152f]
        via-navy-deep
        to-[#3b281f]
        text-white/60
      "
    >
      {/* =========================
          Background Glow
      ========================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          -z-10
          h-96
          w-96
          rounded-full
          bg-copper/12
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          -left-40
          -z-10
          h-96
          w-96
          rounded-full
          bg-navy/40
          blur-3xl
        "
      />

      {/* Subtle top glow */}
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
          via-copper/60
          to-transparent
        "
      />

      <div className="relative mx-auto max-w-295 px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div
          className="
            relative
            flex
            flex-col
            gap-7
            border-b
            border-white/10
            py-9
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
            sm:py-10
          "
        >
          {/* Glass highlight */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-white/10
            "
          />

          {/* Brand */}
          <a
            href="#top"
            className="
              group
              flex
              w-fit
              items-center
              gap-2.5
              font-display
              text-[17px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-copper-light
              focus-visible:ring-offset-2
              focus-visible:ring-offset-navy-deep
            "
          >
            {/* Logo Glow */}
            <span
              className="
                relative
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/10
                shadow-[0_0_25px_-8px_rgba(180,116,65,0.8)]
                backdrop-blur-sm
              "
            >
              <Image
                src="/logo-icon.png"
                alt=""
                width={30}
                height={30}
                className="
                  relative
                  z-10
                  h-7.5
                  w-7.5
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </span>

            <span className="transition-colors duration-300 group-hover:text-copper-light">
              {siteConfig.name}
            </span>
          </a>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2.5 sm:justify-end sm:gap-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      group
                      inline-flex
                      items-center
                      py-1
                      text-[13px]
                      font-medium
                      text-white/65
                      transition-colors
                      duration-200
                      hover:text-copper-light
                      focus-visible:outline-none
                      focus-visible:text-copper-light
                    "
                  >
                    <span>{link.label}</span>

                    <span
                      aria-hidden="true"
                      className="
                        ml-1.5
                        h-px
                        w-0
                        bg-copper-light
                        transition-all
                        duration-300
                        group-hover:w-3
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div
          className="
            flex
            flex-col
            gap-2
            py-5
            text-[11.5px]
            leading-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-6
          "
        >
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Incorporated{" "}
            {siteConfig.founded} · {siteConfig.location}, Nigeria.
          </span>

          <span
            className="
              text-white/45
              transition-colors
              duration-200
              hover:text-copper-light/70
              sm:text-right
            "
          >
            {siteConfig.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}