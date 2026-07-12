Medoxy Healthcare Pvt Ltd

Premium, inquiry-led healthcare and pharmaceutical trading website built with Next.js 15, React, TypeScript, and Tailwind CSS.

## Features

- Enterprise healthcare homepage with blueprint-inspired brand background
- Division-led product catalog with search, category filters, sorting, and sticky navigation
- Dynamic division and product detail pages
- Inquiry-first forms with client validation, server validation, basic rate limiting, and reCAPTCHA hook
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

- Set `RECAPTCHA_SECRET_KEY` before enforcing real reCAPTCHA verification.
- Connect `app/api/inquiries/route.ts` to an email service such as Resend, SendGrid, SMTP, or a CRM webhook for notifications and admin alerts.
- Update `site.url` in `data/site.ts` to the final production domain.
- Deploy on Vercel for Next.js image optimization, CDN delivery, HTTPS, and incremental static behavior.
#Medoxy
