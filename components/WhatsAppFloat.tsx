import { whatsappLink } from "@/lib/siteConfig";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Hello Svetsedset Ventures, I'd like to get in touch."
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Svetsedset Ventures on WhatsApp"
      className="
        group
        fixed
        bottom-4
        right-4
        z-200
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_24px_rgba(0,0,0,0.22)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)]
        active:scale-95
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#25D366]
        focus-visible:ring-offset-2
        sm:bottom-5
        sm:right-5
        md:h-14.5
        md:w-14.5
        lg:bottom-6
        lg:right-6
      "
    >
      {/* Subtle pulse */}
      <span
        aria-hidden="true"
        className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          opacity-20
          transition-transform
          duration-500
          group-hover:scale-125
          group-hover:opacity-0
        "
      />

      <svg
        viewBox="0 0 32 32"
        width="24"
        height="24"
        className="relative h-6 w-6 md:h-7 md:w-7"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M16 3C9 3 3.3 8.6 3.3 15.5c0 2.5.7 4.8 1.9 6.8L3 29l6.9-2.1c1.9 1 4 1.6 6.1 1.6 7 0 12.7-5.6 12.7-12.5S23 3 16 3zm7.4 17.6c-.3.9-1.7 1.7-2.8 1.9-.7.1-1.6.2-4.7-1-4-1.6-6.5-5.6-6.7-5.9-.2-.3-1.6-2.1-1.6-4s1-2.9 1.4-3.3c.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .9.7.3.8 1.1 2.8 1.2 3 .1.2.2.4 0 .7-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.1.9-.1l1.3-1.5c.3-.4.6-.3 1-.2s2.6 1.2 3 1.5c.4.2.7.3.8.5.1.2.1 1-.2 1.9z" />
      </svg>
    </a>
  );
}