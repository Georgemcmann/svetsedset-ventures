"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/siteConfig";

const links = [
  { href: "#about", label: "About" },
  { href: "#divisions", label: "Our Divisions" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const quoteMessage =
  "Hello Svetsedset Ventures, I'd like to request a quote.";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /*
   * Lock page scrolling while the mobile menu is open.
   */
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /*
   * Close the mobile menu when:
   * - Escape is pressed
   * - viewport reaches desktop size
   */
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-line/80
        bg-paper/85
        backdrop-blur-xl
        supports-backdrop-filter:bg-paper/75
      "
    >
      <div className="mx-auto max-w-295 px-4 sm:px-6 lg:px-8">
        <div
          className="
            relative
            flex
            min-h-19
            items-center
            justify-between
            gap-4
            py-2.5
            sm:min-h-20.5
          "
        >
          {/* =========================================================
              LOGO
          ========================================================== */}

          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Svetsedset Ventures home"
            className="
              group
              flex
              shrink-0
              items-center
              gap-2.5
              rounded-sm
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-copper-text
              focus-visible:ring-offset-4
            "
          >
            {/* S Logo */}
            <div className="relative flex shrink-0 items-center justify-center">
              <Image
                src="/logo-icon.png"
                alt=""
                width={240}
                height={235}
                priority
                className="
                  h-8
                  w-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-[1.03]
                  sm:h-9
                  md:h-10
                "
              />
            </div>

            {/* Divider */}
            <span
              aria-hidden="true"
              className="
                h-6
                w-px
                bg-line
                transition-colors
                duration-300
                group-hover:bg-copper-text/40
                sm:h-7
              "
            />

            {/* Wordmark */}
            <span className="flex flex-col justify-center leading-none">
              <span
                className="
                  font-display
                  text-[18px]
                  font-bold
                  tracking-[-0.02em]
                  text-navy
                  transition-colors
                  duration-200
                  group-hover:text-navy-deep
                  sm:text-[18px]
                  md:text-[20px]
                "
              >
                Svetsedset
              </span>

              {/* Ventures */}
              <span className="mt-1 flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-2.5
                    bg-copper-text/50
                    transition-all
                    duration-300
                    group-hover:w-3.5
                    group-hover:bg-copper-text
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-[.2em]
                    text-copper-text
                    sm:text-[10px]
                  "
                >
                  VENTURES
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-px
                    w-2.5
                    bg-copper-text/50
                    transition-all
                    duration-300
                    group-hover:w-3.5
                    group-hover:bg-copper-text
                  "
                />
              </span>

              {/* Tagline */}
              <span
                className="
                  mt-1
                  text-[7px]
                  font-semibold
                  tracking-[.12em]
                  text-ink-soft
                  sm:text-[7.5px]
                "
              >
                INNOVATE &nbsp;·&nbsp; EMPOWER &nbsp;·&nbsp; EXCEL
              </span>
            </span>
          </a>

          {/* =========================================================
              DESKTOP NAVIGATION
          ========================================================== */}

          <nav
            aria-label="Main navigation"
            className="hidden md:flex md:items-center"
          >
            <ul className="flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      group
                      relative
                      whitespace-nowrap
                      py-2
                      text-[14px]
                      font-semibold
                      text-navy
                      transition-colors
                      duration-200
                      hover:text-copper-text
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-copper-text
                      focus-visible:ring-offset-4
                    "
                  >
                    {link.label}

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-px
                        w-0
                        bg-copper-text
                        transition-all
                        duration-300
                        ease-out
                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* =========================================================
              DESKTOP CTA
          ========================================================== */}

          <a
            href={whatsappLink(quoteMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              hidden
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-sm
              bg-navy
              px-5
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_4px_14px_rgba(13,28,58,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-navy-deep
              hover:shadow-[0_8px_22px_rgba(13,28,58,0.18)]
              active:translate-y-0
              active:scale-[0.98]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-navy
              focus-visible:ring-offset-2
              md:inline-flex
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
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            <span className="relative">Request a Quote</span>
          </a>

          {/* =========================================================
              MOBILE MENU BUTTON
          ========================================================== */}

          <button
            type="button"
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="
              relative
              z-60
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-sm
              border
              border-transparent
              transition-all
              duration-200
              hover:border-line
              hover:bg-navy/3
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-navy
              focus-visible:ring-offset-2
              md:hidden
            "
          >
            {/* Top line */}
            <span
              aria-hidden="true"
              className={`
                absolute
                h-[1.5px]
                w-6
                rounded-full
                bg-navy
                transition-all
                duration-300
                ease-out
                ${
                  open
                    ? "rotate-45"
                    : "-translate-y-2"
                }
              `}
            />

            {/* Middle line */}
            <span
              aria-hidden="true"
              className={`
                absolute
                h-[1.5px]
                w-6
                rounded-full
                bg-navy
                transition-all
                duration-200
                ${
                  open
                    ? "scale-0 opacity-0"
                    : "scale-100 opacity-100"
                }
              `}
            />

            {/* Bottom line */}
            <span
              aria-hidden="true"
              className={`
                absolute
                h-[1.5px]
                w-6
                rounded-full
                bg-navy
                transition-all
                duration-300
                ease-out
                ${
                  open
                    ? "-rotate-45"
                    : "translate-y-2"
                }
              `}
            />
          </button>

          {/* =========================================================
              MOBILE MENU
          ========================================================== */}

          <div
            id="mobile-menu"
            aria-hidden={!open}
            className={`
              absolute
              left-0
              right-0
              top-full
              overflow-hidden
              border-b
              border-line
              bg-paper/90
              shadow-[0_20px_50px_rgba(13,28,58,0.12)]
              backdrop-blur-2xl
              transition-all
              duration-300
              ease-out
              md:hidden
              ${
                open
                  ? "visible max-h-125 translate-y-0 opacity-100"
                  : "invisible max-h-0 -translate-y-3 opacity-0"
              }
            `}
          >
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
                via-copper/40
                to-transparent
              "
            />

            <nav
              aria-label="Mobile navigation"
              className="px-4 pb-5 sm:px-6"
            >
              <ul className="flex flex-col">
                {links.map((link) => (
                  <li
                    key={link.href}
                    className="border-t border-line first:border-t-0"
                  >
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      tabIndex={open ? 0 : -1}
                      className="
                        group
                        flex
                        min-h-13
                        items-center
                        justify-between
                        py-3
                        text-[15px]
                        font-semibold
                        text-navy
                        transition-colors
                        duration-200
                        hover:text-copper-text
                        focus-visible:outline-none
                        focus-visible:text-copper-text
                      "
                    >
                      <span>{link.label}</span>

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
                          text-sm
                          font-normal
                          text-copper-text
                          transition-all
                          duration-200
                          group-hover:translate-x-1
                          group-hover:border-copper-text/40
                          group-hover:bg-copper/5
                        "
                      >
                        →
                      </span>
                    </a>
                  </li>
                ))}

                {/* Mobile CTA */}
                <li className="border-t border-line pt-5">
                  <a
                    href={whatsappLink(quoteMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    tabIndex={open ? 0 : -1}
                    className="
                      group
                      relative
                      flex
                      min-h-12
                      w-full
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-sm
                      bg-navy
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_6px_18px_rgba(13,28,58,0.15)]
                      transition-all
                      duration-300
                      hover:bg-navy-deep
                      hover:shadow-[0_10px_24px_rgba(13,28,58,0.20)]
                      active:scale-[0.99]
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-navy
                      focus-visible:ring-offset-2
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
                        via-white/10
                        to-transparent
                        transition-transform
                        duration-700
                        group-hover:translate-x-full
                      "
                    />

                    <span className="relative">Request a Quote</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Brand accent */}
      <div className="brand-stripe" />
    </header>
  );
}