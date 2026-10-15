![Nument](/public/og.png)

# Nument website

The website of **Nument**, an AI and software studio in Gurugram, India. We design, build and launch websites, apps, AI assistants and automation for founders and growing businesses.

- Website: [nument.in](https://nument.in)
- Email: [contact@nument.in](mailto:contact@nument.in)

---

## Tech stack

- **Framework:** [Next.js](https://nextjs.org/) 14 (pages router, every page statically generated)
- **Styling:** design tokens and kit components (`src/styles/tokens.css`, `src/styles/kit.css`) plus SCSS modules
- **Fonts:** Newsreader, Figtree and DM Mono, self-hosted with `next/font`
- **Scroll:** Lenis (desktop only, touch devices keep native scrolling)
- **Booking:** Cal.com (`@calcom/embed-react`), loaded only when someone clicks a booking button
- **Analytics:** Vercel Analytics. Clicks on elements with `data-event` are tracked as events
- **Sound:** a small Web Audio engine (`src/sound/`), off by default

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also generates the sitemap)
npm start
```

## Pages

| Route | File |
| --- | --- |
| `/` | `src/pages/index.page.jsx` (sections in `src/sections/home/` and `src/ui/Sections.jsx`) |
| `/work`, `/work/[slug]` | `src/pages/work/` |
| `/for/[slug]` (clinics, D2C brands, coaching) | `src/pages/for/[slug].page.jsx` |
| `/about`, `/contact`, `/privacy`, 404 | `src/pages/` |

## Where the content lives

| What | File |
| --- | --- |
| Email, Cal.com link, WhatsApp number, LinkedIn | `src/constants/contact.js` |
| Navigation, services and prices, work, concepts, process, FAQ | `src/constants/site.js` |
| Case stories | `src/constants/work.js` |
| Industry pages | `src/constants/industries.js` |
| Page titles and SEO | each page's `CustomHead`, `src/components/dom/CustomHead.jsx` |
| Images | `public/img/`, `public/brand/`, `public/work/` |

WhatsApp buttons appear automatically once `whatsapp` is set in `src/constants/contact.js`.

Copy rules: plain words, no em or en dashes, and never invented clients or numbers.

## License

Copyright (c) 2026 Nument. All rights reserved. See `LICENSE`. Third-party notices are in `THIRD_PARTY_NOTICES.md`.
