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


