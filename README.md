# Kavya G R — Portfolio

A premium, recruiter-focused personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Designed to target roles in QA Engineering, Software Testing, Python Development, and Cybersecurity.

---

## ✦ Tech Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 14 (App Router, Static Export) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v11 |
| Icons | Lucide React |
| Fonts | Syne · DM Sans · JetBrains Mono |
| Deployment | Vercel |

---

## ✦ Project Structure

```
kavya-portfolio/
├── public/
│   └── Kavya_GR_Resume.pdf        ← Add your resume PDF here
├── src/
│   ├── app/
│   │   ├── globals.css            ← Global styles & design tokens
│   │   ├── layout.tsx             ← Root layout, fonts, SEO metadata
│   │   └── page.tsx               ← Main page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx             ← Sticky nav, active section, mobile menu
│   │   ├── Hero.tsx               ← Full-viewport intro with stagger animation
│   │   ├── About.tsx              ← Bio + terminal card
│   │   ├── Experience.tsx         ← Tabbed company switcher
│   │   ├── Skills.tsx             ← Categorised skill grid
│   │   ├── Projects.tsx           ← Featured project cards
│   │   ├── Certifications.tsx     ← Cert cards
│   │   ├── Achievements.tsx       ← Achievement tiles
│   │   ├── Contact.tsx            ← CTA + social links
│   │   ├── Footer.tsx             ← Footer bar
│   │   └── SectionHeading.tsx     ← Shared numbered heading component
│   └── lib/
│       └── data.ts                ← All portfolio content in one place
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## ✦ Getting Started

### Prerequisites
- Node.js **18.17+**
- npm, yarn, or pnpm

### 1 — Install dependencies

```bash
cd kavya-portfolio
npm install
```

### 2 — Add your resume PDF

Place your resume in the `public/` folder and name it exactly:

```
public/Kavya_GR_Resume.pdf
```

The download button in the Navbar and Hero will point to this file automatically.

### 3 — Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Customisation

All portfolio content lives in one file — **`src/lib/data.ts`**. You never need to touch the component files to update your content.

| Section | What to edit in `data.ts` |
|---------|--------------------------|
| Hero | `hero` object — name, roles, bio, links |
| About | `about` object — paragraphs, highlights, education |
| Experience | `experiences` array — add/remove companies |
| Skills | `skills` array — add/remove categories and items |
| Projects | `projects` array — title, description, tech, links |
| Certifications | `certifications` array |
| Achievements | `achievements` array |

### Updating the accent colour

Open `src/app/globals.css` and find the custom properties section. The entire colour scheme can be changed by updating:

```css
/* In tailwind.config.ts */
accent: '#3ecf8e',   ← Change this hex value
```

---

## ✦ Production Build

```bash
npm run build
```

This generates a static export in the `/out` directory (configured in `next.config.mjs`).

---

## ✦ Deploy to Vercel (Recommended)

### Option A — One-click via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project root
vercel

# Follow the prompts — Vercel auto-detects Next.js
# For production deployment:
vercel --prod
```

### Option B — GitHub integration (zero-config)

1. Push this project to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### Custom Domain (optional)

In the Vercel dashboard → **Domains** → add your custom domain and follow the DNS configuration steps.

---

## ✦ SEO

Metadata is configured in `src/app/layout.tsx`:
- Page title, description, and keywords
- OpenGraph tags for social sharing
- Twitter card metadata
- Robots directives

Update `metadataBase` in `layout.tsx` with your actual Vercel URL or custom domain once deployed.

---

## ✦ Performance Notes

- Fonts loaded via `next/font/google` — zero layout shift, no external requests at runtime
- All images use `unoptimized: true` (compatible with static export)
- Framer Motion animations use `once: true` — triggers once, no re-animation on scroll back
- IntersectionObserver used for active nav detection — no scroll event listeners

---

## ✦ Licence

This portfolio is personal work and not open-source licensed. Feel free to use the architecture as reference for your own portfolio.
