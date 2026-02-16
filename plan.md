# Plan - Zenith Tech Works

## Project Overview

Zenith Tech Works is a corporate website for a complete IT solutions company providing managed services, cloud solutions, cybersecurity, consulting, automation, web/mobile development, and efficiency optimization.

**Repository**: `pixelperfect88/zenithworks`
**Type**: Static multi-page marketing website
**Tech Stack**: HTML5, CSS3 (custom properties), vanilla JavaScript

## Project Structure

```
zenithworks/
├── plan.md              # Project plan & guide (this file)
├── index.html           # Home — hero, solutions grid, about split, stats, industries, testimonial, partners, CTA
├── solutions.html       # Solutions — overview grid + 8 detailed split-content sections with anchors
├── why-us.html          # Why Us — company story, approach cards, values, stats, partnerships
├── industries.html      # Industries — 6 industry detail sections (Healthcare, Manufacturing, Education, Finance, Consulting, Nonprofits)
├── contact.html         # Contact — info panel, form, map placeholder
├── css/
│   └── styles.css       # Global stylesheet — design tokens, components, responsive breakpoints
├── js/
│   └── main.js          # Interactivity — mobile nav, scroll animations, counter animation, form handling, anchor scrolling
└── images/              # Image assets (placeholder — no images committed yet)
```

## Pages & Navigation

| Page | File | Nav Label |
|------|------|-----------|
| Home | `index.html` | Home |
| Solutions | `solutions.html` | Solutions (dropdown) |
| Industries | `industries.html` | Industries |
| Why Us | `why-us.html` | Why Us |
| Contact | `contact.html` | Contact |

### Solutions Dropdown Anchors

The Solutions nav dropdown links to anchored sections within `solutions.html`:
- `#consulting` — IT Consulting & Advisory
- `#managed` — Managed Services
- `#cloud` — Cloud Services
- `#security` — Cyber Security
- `#automation` — Automation
- `#web` — Web Development
- `#mobile` — Mobile Development
- `#efficiency` — Gaining Efficiency

## Design System

### Colors (CSS custom properties in `:root`)
- **Primary**: `#0f4c81` (blue) with light (`#1a6fb5`) / dark (`#0a2e4e`) variants
- **Secondary**: `#00c9a7` (teal/green) with light/dark variants
- **Dark**: `#0d1b2a` (near-black for headers, footer, dark sections)
- **Neutrals**: white, off-white (`#f4f7fa`), light-gray (`#e2e8f0`), mid-gray, dark-gray

### Typography
- **Headings**: Poppins (sans-serif) — loaded via Google Fonts
- **Body**: Inter (sans-serif) — loaded via Google Fonts

### Responsive Breakpoints
- `1024px` — tablet: single-column grids, hero visual hidden
- `768px` — mobile: hamburger menu, stacked grids, reduced padding
- `480px` — small mobile: tighter spacing, smaller type

## Key Components

| Component | CSS Class | Description |
|-----------|-----------|-------------|
| Solution card | `.solution-card` | Service card with icon, title, description, link |
| Feature card | `.feature-card` | Centered card with icon, used in Why Us and overviews |
| Split content | `.split-content` | Two-column layout (text + visual), `.reverse` flips order |
| Industry card | `.industry-card` | Small card with icon and title |
| Stats bar | `.stats-bar` | 4-column stats with animated counters |
| CTA section | `.cta-section` | Dark gradient call-to-action with buttons |
| Nav dropdown | `.nav-dropdown` | Hover-activated dropdown menu |

## Serving Locally

```bash
python3 -m http.server 8000
# Open http://localhost:8000
```

## Coding Conventions

### HTML
- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- Accessibility attributes on interactive elements (`aria-label`)
- Consistent indentation (2 spaces)
- Shared header/footer markup duplicated across all 5 pages

### CSS
- Design tokens as CSS custom properties in `:root`
- BEM-inspired naming (`.solution-card`, `.split-content`, `.hero-badge`)
- Responsive via `max-width` media queries
- Animations via `transition`, `@keyframes`, and IntersectionObserver classes
- No frameworks or preprocessors

### JavaScript
- Vanilla JS, no dependencies
- `DOMContentLoaded` entry point
- IntersectionObserver for `.fade-in`, `.fade-in-left`, `.fade-in-right`
- Animated stat counters with `data-target` and `data-suffix` attributes
- Anchor scroll offset accounting for fixed header
- Contact form simulation (no backend)

## Dependencies

- **Google Fonts** — Poppins, Inter (loaded via `<link>` in HTML)
- **No npm/node** — pure static site
- **No build tools** — no bundler, preprocessor, or task runner

## Notes for AI Assistants

- Changes to nav or footer must be applied to all 5 HTML files
- CSS custom properties are the single source of truth for colors, fonts, and spacing
- Solutions page uses anchor IDs — do not rename without updating nav dropdown links in all pages
- The contact form simulates submission — update `js/main.js` when a real endpoint is available
- Image placeholders use inline SVG icons and CSS gradients — replace with actual images when available
- The header uses class `solid` on inner pages (always dark) and scroll-based transparency on home page only
