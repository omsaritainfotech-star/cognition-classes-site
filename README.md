# Cognition Classes — Next.js 14 + Tailwind + Markdown

**Quick start**

```bash
pnpm i   # or npm i / yarn
pnpm dev
```

**Build & deploy**

- Netlify: this repo includes `netlify.toml` and uses `@netlify/plugin-nextjs`.
- Forms: contact form is wired for Netlify Forms (`data-netlify="true"`).

**Content**

- Edit courses/events in `/content/*` (Markdown with frontmatter).
- Images are loaded from Unsplash remote domains (see `next.config.mjs`).

**SEO**

- App Router `metadata` + sitemap/robots. JSON‑LD on layout, course, event.


## Analytics (GA4)
Set your GA4 Measurement ID in an environment variable:
- Locally: create `.env.local` with `NEXT_PUBLIC_GA_ID=G-XXXXXXX`
- Netlify: Site settings → Build & deploy → Environment → add `NEXT_PUBLIC_GA_ID`

The script is injected automatically when the var is present.


## Decap CMS (edit content online)
- Deploy to Netlify
- Enable **Identity** and **Git Gateway**
- Visit `/admin` to add/edit: Courses, Events, **Testimonials**, **Results**
- Upload images to `/uploads` (already configured)

## Analytics (recommended: Plausible)
- Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com` (e.g., cognitionclasses.in)
- Script loads automatically and tracks pageviews
- For GA4 instead, you can manually add gtag later if required

## Results page
- Add items in `content/results` via CMS → auto-listed on `/results` and previewed on the home page.
