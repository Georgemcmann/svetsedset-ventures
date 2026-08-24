# Svetsedset Ventures Website

Official website for **Svetsedset Ventures**, a Lagos-based company providing services across security systems, food supply, logistics and transportation, sales and branding, interior finishing, ground contracting, and furnishing.

The website was designed to provide the company with a professional digital presence while making it easy for potential clients to understand the company's services, explore individual divisions, and contact the business directly.

---

## 🌐 Overview

Svetsedset Ventures operates across multiple service divisions, allowing clients to work with one company for different business, property, construction, supply, and logistics needs.

The website presents each division independently while maintaining a consistent brand identity across the entire platform.

Visitors can:

- Learn about Svetsedset Ventures
- Explore the company's seven divisions
- View services offered by each division
- Understand who each division serves
- Request a quote through WhatsApp
- Contact the company by phone or email
- View the company's location through Google Maps
- Navigate the website easily on mobile, tablet, and desktop devices

---

## ✨ Features

- Fully responsive design
- Mobile-first navigation
- Desktop and mobile navigation menus
- Dedicated pages for each business division
- WhatsApp quote/request integration
- Click-to-call phone functionality
- Click-to-email functionality
- Google Maps integration
- Centralized business configuration
- SEO-friendly page metadata
- Open Graph metadata
- LocalBusiness structured data
- Custom 404/error handling
- Accessible navigation and focus states
- Keyboard-friendly interactive elements
- Reusable React components
- Static page generation
- Optimized production builds
- Custom typography using Next.js font optimization
- Responsive hover and interaction states
- Branded visual system using navy, copper, white, and paper tones

---

## 🏢 Business Divisions

### 01 — Security Systems

Security and surveillance solutions for residential and commercial properties.

Services include:

- CCTV installation
- CCTV system upgrades
- Surveillance system setup
- Access control solutions
- Security system assessment
- Maintenance and support

Ideal for:

- Homes
- Offices
- Retail businesses
- Warehouses
- Schools
- Commercial properties

---

### 02 — Food Supply

Wholesale and food supply services for businesses, retailers, and organisations.

Services include:

- Wholesale food supply
- Bulk procurement
- Business-to-business supply
- Food item sourcing
- Order coordination
- Delivery coordination

Ideal for:

- Retailers
- Restaurants
- Food businesses
- Organisations
- Distributors

---

### 03 — Logistics & Transportation

Transportation and logistics support for moving goods across Lagos and other parts of Nigeria.

Services include:

- Goods transportation
- Business logistics
- Interstate transportation
- Delivery coordination
- Bulk movement
- Logistics planning

Ideal for:

- Businesses
- Suppliers
- Wholesalers
- Distributors
- Retailers

---

### 04 — Sales & Branding

Branding, promotional, and sales support designed to help businesses present themselves professionally.

Services include:

- Business branding
- Promotional materials
- Signage
- Marketing materials
- Product presentation
- Sales support

Ideal for:

- Startups
- SMEs
- Retail businesses
- Corporate organisations
- Product businesses

---

### 05 — Interior Finishing

Interior finishing, tiling, and furnishing solutions for residential and commercial spaces.

Services include:

- Tiling
- Interior finishing
- Furnishing
- Space finishing
- Material sourcing
- Installation coordination

Ideal for:

- Homes
- Offices
- Shops
- Apartments
- Commercial spaces

---

### 06 — Ground Contracting

Groundwork and contracting support for construction and development projects.

Services include:

- Groundwork
- Site preparation
- Excavation support
- Material coordination
- Construction support
- General contracting

Ideal for:

- Property developers
- Builders
- Contractors
- Property owners
- Construction projects

---

### 07 — Furnishing

Furniture and furnishing solutions for residential, office, and commercial environments.

Services include:

- Furniture sourcing
- Furniture supply
- Office furnishing
- Residential furnishing
- Commercial furnishing
- Installation coordination

Ideal for:

- Homes
- Offices
- Hotels
- Shops
- Commercial spaces

---

## 🛠️ Tech Stack

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Next.js App Router**
- **Next.js Font Optimization**
- **Google Maps**
- **WhatsApp Integration**
- **ESLint**

---

## 📁 Project Structure

```text
svetsedset-next/
│
├── app/
│   ├── divisions/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── DivisionIcon.tsx
│   ├── Navbar.tsx
│   ├── WhatsAppFloat.tsx
│   └── ...
│
├── lib/
│   └── siteConfig.ts
│
├── public/
│   ├── favicon.png
│   ├── logo-icon.png
│   └── ...
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md