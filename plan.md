# Plan - ZenithWorks Hospitality

## Project Overview

ZenithWorks Hospitality is a corporate website for a hospitality management company that provides restaurant consulting, operations management, and a full suite of hospitality services to branded and independent properties.

**Repository**: `pixelperfect88/zenithworks`
**Type**: Static multi-page marketing website
**Tech Stack**: HTML5, CSS3 (custom properties), vanilla JavaScript

## Project Structure

```
zenithworks/
├── plan.md              # Project plan & guide (this file)
├── index.html           # Home page — hero, services overview, about preview, stats, testimonial, CTA
├── about.html           # About Us — company story, mission/vision/values, differentiators, leadership
├── services.html        # Services — overview grid + 12 detailed service sections
├── contact.html         # Contact Us — info panel, form, map placeholder
├── css/
│   └── styles.css       # Global stylesheet — design tokens, components, responsive breakpoints
├── js/
│   └── main.js          # Interactivity — mobile nav, scroll animations, counter animation, form handling
└── images/              # Image assets (placeholder — no images committed yet)
```

## Key Files

| File | Purpose |
|------|---------|
| `css/styles.css` | Design system with CSS custom properties, all component styles, and responsive breakpoints (1024px, 768px, 480px) |
| `js/main.js` | Mobile menu toggle, header scroll effect, IntersectionObserver animations, stat counter animation, contact form simulation, smooth anchor scrolling |
| `index.html` | Home page with hero section, 6 service cards, about preview, stats bar, testimonial, and CTA |
| `about.html` | Company story, mission/vision/values cards, differentiators, stats, leadership team |
| `services.html` | Quick-overview grid (12 cards) + detailed alternating-layout sections for all 12 services |
| `contact.html` | Contact info sidebar, form with validation, social links, map placeholder |

## Design System

### Colors (CSS custom properties in `:root`)
- **Primary**: `#1a3c5e` (navy) with light/dark variants
- **Accent**: `#c8a45a` (gold) with light/dark variants
- **Neutrals**: white, off-white (`#f8f6f2`), light-gray, mid-gray, dark-gray

### Typography
- **Headings**: Playfair Display (serif) — loaded via Google Fonts
- **Body**: Inter (sans-serif) — loaded via Google Fonts

### Responsive Breakpoints
- `1024px` — tablet: single-column grids, simplified layouts
- `768px` — mobile: hamburger menu, stacked grids, reduced padding
- `480px` — small mobile: tighter spacing, smaller type

## Development Workflow

### Branch Conventions

- Default branch: `main`
- Feature branches: descriptive names (e.g., `feature/add-auth`, `fix/login-bug`)
- AI-generated branches: `claude/` prefix

### Commit Messages

- Conventional format: `type: short description`
  - Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `build`, `ci`
- Subject line under 72 characters
- Body for additional context when needed

### Pull Requests

- Include a summary of changes and motivation
- Reference related issues when applicable

## Serving Locally

This is a static site with no build step. To preview locally:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Coding Conventions

### HTML
- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Accessibility attributes on interactive elements (`aria-label` on buttons)
- Consistent indentation (2 spaces)
- Each page includes shared header/footer markup (no templating engine)

### CSS
- All design tokens defined as CSS custom properties in `:root`
- BEM-inspired class naming (`.service-card`, `.service-icon`, `.hero-content`)
- Mobile-first responsive approach with `max-width` media queries
- CSS-only animations with `transition` and `@keyframes`
- No CSS frameworks or preprocessors

### JavaScript
- Vanilla JS — no frameworks or libraries
- `DOMContentLoaded` entry point
- IntersectionObserver for scroll-triggered animations
- Graceful fallbacks for browsers without IntersectionObserver

## Services Documented on the Site

1. Pre-Opening Management Services
2. General Operations
3. Asset Acquisitions & Investments
4. Accounting & Financial Management
5. Revenue Management Services
6. Human Resources
7. Sales & Marketing
8. Digital Marketing Services
9. Food & Beverage Management
10. Information Technology
11. IT Technical Services
12. Procurement

## Dependencies & Tools

- **Google Fonts** — Playfair Display, Inter (loaded via `<link>` in HTML)
- **No npm/node dependencies** — pure static site
- **No build tools** — no bundler, preprocessor, or task runner

## CI/CD

_Not yet configured. Update this section when CI/CD pipelines are set up._

## Notes for AI Assistants

- Always read existing code before proposing modifications
- The site uses shared header/footer markup duplicated across pages — changes to nav or footer must be applied to all 4 HTML files
- CSS custom properties are the single source of truth for colors, fonts, and spacing
- Scroll animations use `.fade-in`, `.fade-in-left`, `.fade-in-right` classes activated by IntersectionObserver in `main.js`
- The contact form currently simulates submission (no backend) — update `js/main.js` when a real endpoint is available
- Image placeholders use inline SVG icons and CSS gradients — replace with actual images when available
- Do not add unnecessary complexity or over-engineer solutions
- Keep this plan.md file up to date as the project evolves
