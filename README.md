# The Grand Apex — Cinematic Mall Sales Deck

A premium, fully interactive cinematic sales deck for one of the world's largest shopping malls. Built with React, Vite, Framer Motion, and Tailwind CSS — designed to impress global retail investors and brand executives.

---

## Live Demo

> Deployed on Replit · [View Live App](https://grand-apex-mall-deck.replit.app)

---

## Screenshots

| Hero Section | Milestones Timeline | Events & Booking |
|---|---|---|
| Full-screen cinematic intro | Animated horizontal timeline | Partner CTA cards |

---

## Features

### Cinematic Experience
- **Animated intro loader** — letter-by-letter stagger reveal with gold progress line
- **Video background hero** — autoplay looping video with parallax scroll effect
- **Scroll-triggered animations** — every section reveals on scroll using Framer Motion
- **Parallax image layers** — depth-of-field effect on section backgrounds

### Interactive Navigation
- **Fixed translucent navbar** — becomes opaque on scroll, smooth anchor links
- **Dot section navigator** — right-edge dots highlight active section via IntersectionObserver
- **Gold scroll progress bar** — thin indicator at top of page tracking scroll depth
- **Luxury custom cursor** — desktop-only trailing ring + dot that reacts to interactive elements
- **Full-screen mobile menu** — animated overlay with Framer Motion exit transitions

### Content Sections (8 total)
1. **Hero** — Video background, headline, stat counters (5.2M sq ft · 1,200 stores · 180M visitors), dual CTAs
2. **Property** — Location stats, catchment area, $8.4B annual sales, parallax city image
3. **Milestones** — Horizontal timeline of 7 key moments from 2015–2026
4. **Retail** — Dual-row scroll-animated brand marquee, occupancy & growth progress bars
5. **Luxury** — Editorial dark section, 8 luxury maisons in gold-accented grid
6. **Dining** — 6 restaurant cards with hover reveal, 120+ dining stats
7. **Entertainment** — 6 attraction cards (ski slope, aquarium, IMAX, VR, theme park, arena)
8. **Events & Booking** — 3 partner CTA paths (Leasing · Sponsorship · Events) + contact modal

### UI Polish
- Animated stat counters (easeOutExpo, scroll-triggered)
- Contact inquiry modal with form validation and success state
- Reusable `SectionHeader` with animated gold underline
- Lazy loading on all images
- `data-testid` attributes on all interactive elements

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | React | 18 |
| **Build Tool** | Vite | 7 |
| **Language** | TypeScript | 5.9 |
| **Styling** | Tailwind CSS | v4 |
| **Animations** | Framer Motion | latest |
| **Routing** | Wouter | 3.x |
| **Component Library** | shadcn/ui (Radix UI) | latest |
| **Icons** | Lucide React | latest |
| **Typography** | Google Fonts (Playfair Display + Inter) | — |
| **State / Server Cache** | TanStack React Query | 5.x |
| **Package Manager** | pnpm (monorepo) | 9 |
| **Backend** | Express | 5 |
| **Database** | PostgreSQL + Drizzle ORM | — |
| **Validation** | Zod | v4 |

---

## Project Structure

```
grand-apex-mall-deck/
├── artifacts/
│   ├── mall-deck/                  # Main frontend app
│   │   ├── src/
│   │   │   ├── App.tsx             # Root — PageLoader, ScrollProgress, CustomCursor, SectionNav
│   │   │   ├── index.css           # Dark luxury theme (gold accent, Playfair + Inter fonts)
│   │   │   ├── pages/
│   │   │   │   └── home.tsx        # Page assembly (all sections in order)
│   │   │   ├── components/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Navbar.tsx  # Scroll-aware sticky nav with mobile overlay
│   │   │   │   │   └── Footer.tsx  # Links, contact, copyright
│   │   │   │   ├── sections/
│   │   │   │   │   ├── Hero.tsx
│   │   │   │   │   ├── Property.tsx
│   │   │   │   │   ├── Retail.tsx
│   │   │   │   │   ├── Luxury.tsx
│   │   │   │   │   ├── Dining.tsx
│   │   │   │   │   ├── Entertainment.tsx
│   │   │   │   │   ├── Events.tsx
│   │   │   │   │   └── Timeline.tsx
│   │   │   │   └── ui/
│   │   │   │       ├── AnimatedCounter.tsx   # Scroll-triggered number counter
│   │   │   │       ├── SectionHeader.tsx     # Animated gold-underline heading
│   │   │   │       ├── ContactModal.tsx      # Inquiry form modal
│   │   │   │       ├── PageLoader.tsx        # Animated intro splash screen
│   │   │   │       ├── ScrollProgress.tsx    # Gold progress bar (top of page)
│   │   │   │       ├── SectionNav.tsx        # Right-edge dot navigation
│   │   │   │       ├── CustomCursor.tsx      # Luxury trailing cursor (desktop)
│   │   │   │       └── [shadcn components]
│   │   │   └── hooks/
│   │   ├── vite.config.ts
│   │   └── package.json
│   └── api-server/                 # Express 5 backend
│       └── src/
│           ├── app.ts
│           ├── index.ts
│           └── routes/
├── lib/
│   ├── api-spec/                   # OpenAPI specification
│   ├── api-client-react/           # Generated React Query hooks
│   ├── api-zod/                    # Generated Zod validators
│   └── db/                        # Drizzle ORM schema + client
├── scripts/                        # Utility scripts
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v24+
- [pnpm](https://pnpm.io/) v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Soura-2002/grand-apex-mall-deck.git
cd grand-apex-mall-deck

# Install all workspace dependencies
pnpm install
```

### Development

```bash
# Start the frontend (mall sales deck)
pnpm --filter @workspace/mall-deck run dev

# Start the API server
pnpm --filter @workspace/api-server run dev

# Run both (from root)
pnpm run dev
```

The app will be available at `http://localhost:[PORT]` (port is assigned automatically).

### Build for Production

```bash
# Build the frontend
pnpm --filter @workspace/mall-deck run build

# Type-check all packages
pnpm run typecheck
```

---

## Deployment

### Vercel

1. Import the repository into [Vercel](https://vercel.com)
2. Set the **Root Directory** to `artifacts/mall-deck`
3. Set the **Build Command** to `pnpm run build`
4. Set the **Output Directory** to `dist/public`
5. Deploy

### Netlify

1. Import the repository into [Netlify](https://netlify.com)
2. Set **Base directory** to `artifacts/mall-deck`
3. Set **Build command** to `pnpm run build`
4. Set **Publish directory** to `artifacts/mall-deck/dist/public`
5. Deploy

### Replit

The project is configured to run natively on Replit. Click **Run** and the workflows start automatically.

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--background` | `#0a0a0a` | Page background |
| `--foreground` | `#f5f5f5` | Body text |
| `--primary` | `#c9a96e` | Gold accent — CTAs, highlights |
| `--card` | `#141414` | Card backgrounds |
| `--muted-foreground` | `#a3a3a3` | Secondary text |
| `--border` | `#292929` | Subtle dividers |

### Typography

- **Headlines** — Playfair Display (serif) — 4xl to 8xl, tracking-wider
- **Body / UI** — Inter (sans-serif) — 300–600 weight, generous line-height
- **Labels / Tags** — Inter uppercase, tracking-widest, text-xs

### Animation Principles

- All entrances: `opacity: 0 → 1`, `y: 20–30 → 0`, `duration: 0.7–0.8s`
- Stagger children: `0.05–0.15s` delay increments
- Parallax: `useScroll` + `useTransform` on background layers
- Page transitions: `AnimatePresence` with scale + opacity exit

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `PORT` | Yes | Server port (auto-assigned by Replit) |
| `BASE_PATH` | Yes | URL base path prefix |
| `DATABASE_URL` | Optional | PostgreSQL connection string |
| `SESSION_SECRET` | Optional | Express session secret |

---

## License

MIT © 2026 The Grand Apex. Built with Replit Agent.
