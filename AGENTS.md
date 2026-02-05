# Be Balanced - Development Notes

## Project Overview
Website for Katie d'Autremont's therapy practice "Be Balanced Counseling". The site has four main pathways:
1. **One-on-One Therapy** - Individual therapy services
2. **Read & Reflect** - Writing/Substack essays ("Between Sessions")
3. **Self-Guided Tools** - Courses and guides (coming soon)
4. **Ask a Question** - Advice column ("might answer in a future post")

## Tech Stack
- **Astro** (v5.x) - Static site generator
- **Tailwind CSS v4** - Styling (via @tailwindcss/vite plugin)
- **TypeScript** - Strict mode

## Important: Tailwind v4 Gotchas

### DO NOT define custom spacing that conflicts with built-in utilities
In Tailwind v4, defining `--spacing-xl`, `--spacing-3xl`, etc. in `@theme` will **override built-in utilities** like `max-w-3xl`. This causes layout breakage.

**Bad:**
```css
@theme {
  --spacing-3xl: 6rem; /* This breaks max-w-3xl! */
}
```

**Good:** Use standard Tailwind spacing values (`p-4`, `p-8`, `p-12`, `p-24`, etc.) instead of custom named spacing.

### Custom colors work fine
Colors defined in `@theme` work as expected:
```css
@theme {
  --color-sage: #7D9A8C;
  --color-cream: #FAF8F5;
}
```
These create `bg-sage`, `text-cream`, etc.

### Font imports go in HTML, not CSS
Google Fonts `@import` in CSS causes ordering issues after Tailwind processes. Put font links in the `<head>` instead.

## Design System

### Colors
- `cream` (#FAF8F5) - Background
- `cream-dark` (#F2EDE6) - Secondary background, borders
- `charcoal` (#2D2D2D) - Primary text
- `charcoal-light` (#4A4A4A) - Secondary text
- `sage` (#7D9A8C) - Primary accent (buttons, links)
- `sage-light` (#A8C4B8) - Hover states
- `sage-dark` (#5C7A6C) - Active states
- `warm-gray` (#9A9590) - Muted text

### Typography
- **Headings:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Spacing (use standard Tailwind)
- Small: `2`, `4` (0.5rem, 1rem)
- Medium: `6`, `8` (1.5rem, 2rem)
- Large: `12`, `16`, `24` (3rem, 4rem, 6rem)

## File Structure
```
src/
├── components/
│   └── PathwayCard.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro (homepage)
│   ├── about.astro
│   ├── therapy.astro
│   ├── writing.astro
│   ├── courses.astro
│   ├── ask.astro
│   ├── contact.astro
│   ├── privacy.astro
│   └── terms.astro
└── styles/
    └── global.css
```

## Key Decisions
- **Therapy isn't the growth focus** - Katie wants to expand into writing/courses/advice, not get more therapy clients
- **"Well-resourced client" messaging** - Copy filters for people with stability who want growth, not crisis support
- **Crisis disclaimers** - Required in footer and therapy page
- **Substack handle:** @katiebetweensessions

## Running Locally
```bash
npm run dev
# Runs at http://localhost:4321
```

## Future Features (not yet built)
- [ ] Goose/kids content series about feelings
- [ ] Actual course content and purchase flow
- [ ] Form submission handling
- [ ] Mobile menu functionality
