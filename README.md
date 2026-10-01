# NavyaCode — Website

A production-ready marketing website for NavyaCode, a web development studio. Built with React, Vite, Tailwind CSS and React Router.

## 1. What this project does

A multi-page website (Home, Services, Work, About, Contact, Privacy Policy, Terms, custom 404) with a working contact form, SEO metadata on every page, a sitemap and robots.txt, structured data, and a centralised data file so you can update company details without touching component code.

## 2. Technology stack

- **React 18 + Vite** — fast dev server, small production build
- **React Router 6** — client-side routing across pages
- **Tailwind CSS** — utility-first styling
- **lucide-react** — icon set

No backend, database or CMS is included — this is a frontend-only site, per the brief.

## 3. Install dependencies

```bash
npm install
```

## 4. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 5. Build for production

```bash
npm run build
```

Outputs static files to `/dist`. Preview the production build locally with:

```bash
npm run preview
```

## 6. Deploy

`/dist` is a static folder — deploy it to any static host:

- **Vercel / Netlify**: connect the repo, build command `npm run build`, output directory `dist`. Both handle SPA routing (redirecting all paths to `index.html`) automatically for Vite projects, but if you see 404s on direct page loads, add a rewrite rule sending all paths to `/index.html`.
- **Any static host** (GitHub Pages, S3 + CloudFront, etc.): upload the contents of `/dist` and configure a fallback to `index.html` for unknown paths (required for client-side routing).

Before deploying, set `VITE_SITE_URL` in your environment to your real domain — see section 10.

## 7. Where to change company information

Almost everything lives in **`src/data/siteConfig.js`**: company name, tagline, email, phone, WhatsApp number, location, social links, and brand asset paths. Lines marked `// PLACEHOLDER` need your real details before launch (email, phone, WhatsApp number, social links, full address).

## 8. Where to add portfolio projects

Edit **`src/data/portfolio.js`**. Each project is one object:

```js
{
  slug: 'your-project-slug',
  name: 'Project Name',
  category: 'Business', // must match one of the `categories` array values
  status: 'live', // use 'concept' for demo/concept work — it gets labelled automatically
  description: '...',
  tech: ['React', 'Tailwind CSS'],
  image: '/images/work/your-screenshot.jpg', // add the file to public/images/work/
}
```

Only mark a project `status: 'live'` once it's a real, completed client project — the UI does not distinguish otherwise, so this flag is what keeps the site honest.

Services work the same way in **`src/data/services.js`**.

## 9. Where to change SEO metadata

Each page component (`src/pages/*.jsx`) renders a `<SEO title="..." description="..." />` component at the top — edit the `title` and `description` props directly on the page. The `SEO` component (`src/components/SEO.jsx`) handles the rest automatically: canonical URL, Open Graph tags, Twitter card tags, and JSON-LD structured data if you pass a `structuredData` prop.

## 10. How to configure environment variables

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

- `VITE_SITE_URL` — your real domain (e.g. `https://www.navyacode.com`). Used to build canonical URLs and structured data.
- `VITE_GA_MEASUREMENT_ID` — optional, only needed if you add Google Analytics (see section 13).
- `VITE_CONTACT_FORM_ENDPOINT` — optional. The contact form's primary path needs no backend at all: on submit, it validates the fields, formats them into a message, and opens `wa.me/<your number>` with that message pre-filled, so the enquiry lands straight in your WhatsApp. Setting this variable additionally POSTs a JSON copy to your own endpoint (as a backup record in case the visitor doesn't send the WhatsApp message) — it's optional and the WhatsApp handoff still happens even if this fails. Any backend you point this at **must** validate the incoming data server-side too; never trust client-side validation alone.

`.env` is git-ignored — never commit real secrets. `.env.example` is the template that should be committed.

## 11. How to connect Google Search Console

1. Deploy the site to your real domain.
2. Go to [Google Search Console](https://search.google.com/search-console) and add a property for your domain.
3. Verify ownership — the simplest method for most hosts is a DNS TXT record, or uploading an HTML verification file to `/public` (Google gives you the exact file to add).
4. Once verified, go to **Sitemaps** in the left menu and submit `sitemap.xml` (i.e. `https://yourdomain.com/sitemap.xml`).
5. Use **URL Inspection** to check how Google sees any specific page.
6. Use **Request Indexing** on individual pages after major content changes — don't do this for every minor edit.
7. Check the **Pages** report periodically for indexing errors or excluded pages.

Google decides what to index and how to rank it — nothing here can guarantee inclusion or ranking.

## 12. How to submit sitemap.xml

`public/sitemap.xml` is a static file listing the seven public pages. If you add a new top-level page, add a matching `<url>` entry here **and** update `robots.txt`'s sitemap reference if your domain changes. Re-submit the sitemap URL in Search Console any time you make a structural change (new/removed pages).

## 13. How to add Google Analytics later

1. Create a GA4 property and get your Measurement ID (`G-XXXXXXX`).
2. Set `VITE_GA_MEASUREMENT_ID` in `.env`.
3. Add the GA4 script loader — the simplest approach is a small `useEffect` in `src/main.jsx` or a dedicated `Analytics.jsx` component that injects the `gtag.js` script tag only when `VITE_GA_MEASUREMENT_ID` is set, so nothing loads until you configure it. This isn't wired in by default so the site doesn't ship with invasive tracking out of the box.

## 14. How to add new pages

1. Create a new file in `src/pages/`, e.g. `Blog.jsx`, following the pattern of an existing page (import `SEO`, `Section`, set a unique title/description).
2. Add a `<Route path="/blog" element={<Blog />} />` in `src/App.jsx`.
3. Add a link to it in `src/components/Navbar.jsx` (`links` array) and/or `src/components/Footer.jsx`.
4. Add a matching `<url>` entry to `public/sitemap.xml`.

The `/blog` route is not built yet — this project intentionally ships without one, per the brief, but the structure above is how you'd add it later without restructuring anything.

## 15. How to update contact information

Edit `email`, `phone`, `whatsapp`, and `location` in `src/data/siteConfig.js`. The WhatsApp number should be the full number with country code and no symbols (e.g. `919876543210`) since it's used to build `wa.me` links.

---

## Known placeholders to replace before launch

Search the codebase for `PLACEHOLDER` to find every spot that needs real information. As of this build, that includes:

- Email, phone and WhatsApp number in `src/data/siteConfig.js`
- Social media links in `src/data/siteConfig.js` (leave blank to hide that icon)
- Full street address, if you want one displayed
- Founder name/bio on the About page (`src/pages/About.jsx`)
- Portfolio project screenshots — add real images to `public/images/work/` and reference them in `src/data/portfolio.js`; mark each project `'live'` only once it's an actual completed project
- Legal review of Privacy Policy and Terms & Conditions — the included text is a reasonable starting template, not legal advice
- `VITE_SITE_URL`, and the hard-coded domain in `public/sitemap.xml` / `public/robots.txt`, once you have a real domain

## What was intentionally left out

Per the brief: no authentication, no database, no admin dashboard, no payment system, no CMS, no invasive analytics by default, and no fabricated stats, testimonials, client logos or awards. Add any of these deliberately later if the business actually needs them.
#   N a v y a - C o d e  
 