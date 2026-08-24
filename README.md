# Svetsedset Ventures — Website

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Running it locally

You need Node.js (18 or newer) installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Editing business details (phone, address, email, WhatsApp)

Everything editable lives in one file:

```
lib/siteConfig.ts
```

Change the phone number, address, email, or the list of divisions there and it updates across the whole site automatically.

## Editing text

- Hero headline / intro text: components/Hero.tsx
- About Us paragraphs: components/About.tsx
- Division descriptions: lib/siteConfig.ts
- Why Us points: components/WhyUs.tsx
- How We Work steps: components/Process.tsx

## Adding real photos later

Drop image files into the public/ folder, then use them in a component like:

```tsx
<Image src="/your-photo.jpg" alt="..." width={800} height={600} />
```

## Deploying

The easiest option is Vercel (vercel.com, made by the creators of Next.js):

1. Push this folder to a GitHub repository
2. Go to vercel.com -> New Project -> import the repo
3. Click Deploy — no configuration needed

Alternatively run `npm run build` then `npm run start` on any Node hosting provider.
