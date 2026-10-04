# Paul & Kate

Website for Paul & Kate (happy no guilty), a bakery making meringues, cookies, brownie crisps and Almond Mosaic for cafés, hotels and gifting.

Built with [Astro](https://astro.build), with English at `/` and Thai at `/th/`.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Add or edit a product

Each product is one file in `src/content/products/`. To add one:

1. Put the photo in `src/assets/products/`.
2. Copy an existing `.md` file in `src/content/products/` and change the name, description (English and Thai), photo path and `order` (lower shows first).

The product appears in the "Our creations" carousel on both language pages.

## Edit page text

All interface text, in English and Thai, is in `src/i18n/ui.ts`.

## Enquiry form

The form sends enquiries through [Formspree](https://formspree.io):

1. Create a free form on Formspree and copy its ID (the part after `https://formspree.io/f/`).
2. Locally: copy `.env.example` to `.env` and set `PUBLIC_FORMSPREE_ID`.
3. On Vercel: add the same `PUBLIC_FORMSPREE_ID` under Project → Settings → Environment Variables.

Until it's set, the form shows a thank-you message but doesn't send anything.

## Deploy

Import this repo on [Vercel](https://vercel.com/new). It detects Astro automatically, so no settings are needed. Every push to `main` then updates the live site. Turn on Web Analytics in the Vercel project to see visitor stats.

## Project structure

```
src/
  assets/products/    product photos (optimised automatically at build)
  components/         page sections (Header, Hero, Creations, …)
  content/products/   one Markdown file per product
  i18n/ui.ts          English and Thai interface text
  layouts/Base.astro  <head>, fonts, analytics, scripts
  pages/              index.astro (English), th/index.astro (Thai)
  scripts/            main.ts (carousel, enquiry list, form), motion.ts (GSAP + Lenis scroll motion)
  styles/global.css
```
