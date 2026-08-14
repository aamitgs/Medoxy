Medoxy Healthcare Pvt Ltd

Premium, inquiry-led healthcare and pharmaceutical trading website built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Features

- Enterprise healthcare homepage with blueprint-inspired brand background
- Division-led product catalog with search, category filters, sorting, and sticky navigation
- Dynamic division and product detail pages
- Inquiry-first forms with client/server validation, a spam honeypot, basic rate limiting, and configurable CRM or email delivery
- About, Trade & Quality, Portfolio Development, Compliance, Careers, Gallery, FAQ, Blog, and Contact pages
- SEO metadata, Open Graph, schema markup, sitemap, robots, canonical URL setup, and security headers
- No ecommerce: no pricing, cart, checkout, online payments, or accounts

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Notes

- Copy `.env.example` to `.env.local` for development and configure the same values in the deployment environment.
- Set `INQUIRY_WEBHOOK_URL` for CRM/automation delivery. If no webhook is set, configure `RESEND_API_KEY`, `INQUIRY_FROM_EMAIL`, and `INQUIRY_TO_EMAIL` for email delivery.
- The inquiry API returns an unavailable response when neither delivery method is configured; it never reports a successful delivery that did not happen.
- Set `NEXT_PUBLIC_GA_ID` only when Google Analytics should load.
- Keep `site.url` in `data/site.ts` aligned with the preferred production hostname.
- Deploy on Vercel for Next.js image optimization, CDN delivery, HTTPS, and incremental static behavior.
