import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  security: (
    <>
      {/* Camera / CCTV */}
      <path d="M3 8h11l3-3v14l-3-3H3z" />
      <circle cx="19" cy="12" r="2" />
    </>
  ),

  food: (
    <>
      {/* Box / supply */}
      <path d="M4 7.5L12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5l8 4.5 8-4.5" />
      <path d="M12 12v9" />
    </>
  ),

  logistics: (
    <>
      {/* Truck */}
      <path d="M1.5 6.5h12v10h-12z" />
      <path d="M13.5 10h4l4 4v2.5h-8z" />
      <circle cx="5.5" cy="18.5" r="1.8" />
      <circle cx="17.5" cy="18.5" r="1.8" />
    </>
  ),

  branding: (
    <>
      {/* Megaphone */}
      <path d="M3 11v2a1 1 0 001 1h2l4 4V6L6 10H4a1 1 0 00-1 1z" />
      <path d="M17 8a5 5 0 010 8" />
      <path d="M20 5a9 9 0 010 14" />
    </>
  ),

  interior: (
    <>
      {/* Interior / home */}
      <path d="M3 20V10l9-6 9 6v10" />
      <path d="M8 20v-6h8v6" />
      <path d="M9.5 10.5h5" />
    </>
  ),

  contracting: (
    <>
      {/* Building / construction */}
      <path d="M2 21h20" />
      <path d="M4 21V10l7-6 7 6v11" />
      <path d="M9 21v-6h4v6" />
      <path d="M8 10h1M12 10h1M15 10h1" />
    </>
  ),

  furnishing: (
    <>
      {/* Furniture / chair */}
      <path d="M5 11V8a3 3 0 013-3h8a3 3 0 013 3v3" />
      <path d="M4 11h16v5H4z" />
      <path d="M6 16v3M18 16v3" />
      <path d="M6 11V9M18 11V9" />
    </>
  ),
};

export default function DivisionIcon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  const icon = paths[name];

  // Fallback if an icon key is missing or incorrect.
  if (!icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 shrink-0 ${className}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon}
    </svg>
  );
}