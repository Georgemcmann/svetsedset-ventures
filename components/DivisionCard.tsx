import Link from "next/link";
import DivisionIcon from "./DivisionIcon";

type DivisionCardProps = {
  division: {
    number: string;
    slug: string;
    icon: string;
    title: string;
    description: string;
  };
};

export default function DivisionCard({
  division,
}: DivisionCardProps) {
  return (
    <Link
      href={`/divisions/${division.slug}`}
      className="
        group
        relative
        block
        bg-white
        p-7
        md:p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-navy-deep
        hover:shadow-[0_18px_40px_rgba(13,28,58,0.16)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-copper-text
        focus-visible:ring-offset-2
      "
    >
      {/* Number */}
      <span
        className="
          mb-4
          block
          font-display
          text-[13px]
          italic
          text-copper-text
          transition-colors
          duration-300
          group-hover:text-copper-light
        "
      >
        {division.number}
      </span>

      {/* Icon */}
      <div
        className="
          mb-4
          flex
          h-11.5
          w-11.5
          items-center
          justify-center
          rounded-full
          border
          border-line
          bg-paper
          transition-all
          duration-300
          group-hover:border-copper
          group-hover:bg-copper
        "
      >
        <DivisionIcon
          name={division.icon}
          className="
            h-5.5
            w-5.5
            text-navy
            transition-colors
            duration-300
            group-hover:text-white
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          mb-2
          text-[18px]
          font-semibold
          text-navy-deep
          transition-colors
          duration-300
          group-hover:text-white
        "
      >
        {division.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-[13.8px]
          leading-6
          text-ink-soft
          transition-colors
          duration-300
          group-hover:text-white/75
        "
      >
        {division.description}
      </p>

      {/* Explore */}
      <span
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          text-[13px]
          font-bold
          text-copper-text
          transition-all
          duration-300
          group-hover:gap-3
          group-hover:text-copper-light
        "
      >
        Explore division
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}