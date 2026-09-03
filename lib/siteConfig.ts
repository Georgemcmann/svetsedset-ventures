// Central place to edit business details — update here and it updates everywhere on the site.

export const siteConfig = {
  name: "Svetsedset Ventures",
  tagline: "Innovate · Empower · Excel",
  founded: "2023",
  location: "Lagos",
  phoneDisplay: "+234 803 654 8211",
  whatsappNumber: "2348036548211", // no + or spaces, used in wa.me links
  email: "info@svetsedsetventures.com",
  address: "24 Road, Opposite 24 Carat Hotel, Festac Town, Lagos, Nigeria",
  mapsEmbedUrl: "https://www.google.com/maps?q=Festac+Town,+Lagos,+Nigeria&output=embed",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export type Division = {
  number: string;
  title: string;
  description: string;
  icon: string; // key used to pick the icon in DivisionIcon.tsx
};

export const divisions = [
  {
    number: "01",
    slug: "security-systems",
    icon: "security",
    title: "Security Systems",
    image: "/img6.png",
    shortTitle: "Security",
    description:
      "CCTV, surveillance and access-control solutions for homes, offices, shops, warehouses and commercial properties.",
    intro:
      "We provide practical security and surveillance solutions designed around the needs of residential and commercial properties.",
    services: [
      "CCTV installation",
      "CCTV system upgrades",
      "Surveillance system setup",
      "Access control solutions",
      "Security system assessment",
      "Maintenance and support",
    ],
    idealFor: [
      "Homes",
      "Offices",
      "Retail businesses",
      "Warehouses",
      "Schools",
      "Commercial properties",
    ],
  },

  {
    number: "02",
    slug: "food-supply",
    icon: "food",
    image: "/img.png",
    title: "Food Supply",
    shortTitle: "Food Supply",
    description:
      "Wholesale and supply of food items for businesses, retailers and organisations requiring dependable sourcing.",
    intro:
      "We source and supply food items for businesses and organisations that need dependable procurement and delivery.",
    services: [
      "Wholesale food supply",
      "Bulk procurement",
      "Business-to-business supply",
      "Food item sourcing",
      "Order coordination",
      "Delivery coordination",
    ],
    idealFor: [
      "Retailers",
      "Restaurants",
      "Food businesses",
      "Organisations",
      "Distributors",
    ],
  },

  {
    number: "03",
    slug: "logistics",
    icon: "logistics",
    image: "/img7.png",
    title: "Logistics & Transportation",
    shortTitle: "Logistics",
    description:
      "Transportation and logistics support for moving goods efficiently across Lagos and other parts of Nigeria.",
    intro:
      "Our logistics division supports businesses that need dependable transportation and movement of goods across Nigeria.",
    services: [
      "Goods transportation",
      "Business logistics",
      "Interstate transportation",
      "Delivery coordination",
      "Bulk movement",
      "Logistics planning",
    ],
    idealFor: [
      "Businesses",
      "Suppliers",
      "Wholesalers",
      "Distributors",
      "Retailers",
    ],
  },

  {
    number: "04",
    slug: "branding",
    icon: "branding",
    title: "Sales & Branding",
    shortTitle: "Branding",
    description:
      "Branding, promotional and sales support designed to help businesses present themselves professionally.",
    intro:
      "We help businesses strengthen their visual presence through practical branding and promotional solutions.",
    services: [
      "Business branding",
      "Promotional materials",
      "Signage",
      "Marketing materials",
      "Product presentation",
      "Sales support",
    ],
    idealFor: [
      "Startups",
      "SMEs",
      "Retail businesses",
      "Corporate organisations",
      "Product businesses",
    ],
  },

  {
    number: "05",
    slug: "interior-finishing",
    icon: "interior",
    image: "/img8.png",
    title: "Interior Finishing",
    shortTitle: "Interior",
    description:
      "Interior finishing, tiling and furnishing solutions for residential and commercial spaces.",
    intro:
      "We handle interior finishing work that helps transform unfinished spaces into functional and professionally finished environments.",
    services: [
      "Tiling",
      "Interior finishing",
      "Furnishing",
      "Space finishing",
      "Material sourcing",
      "Installation coordination",
    ],
    idealFor: [
      "Homes",
      "Offices",
      "Shops",
      "Apartments",
      "Commercial spaces",
    ],
  },

  {
    number: "06",
    slug: "ground-contracting",
    icon: "contracting",
    image: "/img9.png",
    title: "Ground Contracting",
    shortTitle: "Contracting",
    description:
      "Groundwork and contracting support for construction and development projects.",
    intro:
      "We provide groundwork and contracting support for projects that require dependable site preparation and execution.",
    services: [
      "Groundwork",
      "Site preparation",
      "Excavation support",
      "Material coordination",
      "Construction support",
      "General contracting",
    ],
    idealFor: [
      "Property developers",
      "Builders",
      "Contractors",
      "Property owners",
      "Construction projects",
    ],
  },

  {
    number: "07",
    slug: "furnishing",
    icon: "furnishing",
    image: "/img5.png",
    title: "Furnishing",
    shortTitle: "Furnishing",
    description:
      "Furniture and furnishing solutions for homes, offices and commercial environments.",
    intro:
      "We provide furnishing solutions that combine functionality with a clean, practical finish for residential and commercial spaces.",
    services: [
      "Furniture sourcing",
      "Furniture supply",
      "Office furnishing",
      "Residential furnishing",
      "Commercial furnishing",
      "Installation coordination",
    ],
    idealFor: [
      "Homes",
      "Offices",
      "Hotels",
      "Shops",
      "Commercial spaces",
    ],
  },
];