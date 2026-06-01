# Bernardo Braga — Personal Portfolio

Personal portfolio built with **Angular 21**, **TypeScript**, and **SCSS**. Single-page application with a Matrix/terminal-inspired dark theme and trilingual support (English, Portuguese, Russian).

## Stack

| Layer   | Tech                                      |
|---------|-------------------------------------------|
| Framework | Angular 21 (standalone components)      |
| Language  | TypeScript                              |
| Styling   | SCSS (custom, no Tailwind)              |
| i18n      | Custom signal-based service             |

## Getting started

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
```

### Run in development mode

```bash
npm start
# or
ng serve
```

Open [http://localhost:4200](http://localhost:4200).

### Production build

```bash
npm run build
```

Output goes to `dist/portfolio/`.

### Serve production build locally

```bash
npm run serve:ssr:portfolio
```

## Project structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/              # Fixed top navigation + mobile menu
│   │   ├── hero/                # Landing section with typing animation
│   │   ├── about/               # Bio with terminal card UI
│   │   ├── skills/              # Categorized tech skill cards
│   │   ├── projects/            # Project cards with GitHub links
│   │   ├── contact/             # Contact links section
│   │   ├── footer/              # Footer with copyright
│   │   └── language-selector/   # Dropdown to switch EN / PT / RU
│   ├── i18n/
│   │   └── translations.ts      # All UI strings in 3 languages
│   ├── services/
│   │   └── language.service.ts  # Angular signal-based lang state
│   ├── app.ts                   # Root component
│   ├── app.html                 # Root template
│   └── app.config.ts            # App-level providers
├── styles/
│   ├── _variables.scss          # Color palette, typography, spacing
│   ├── _mixins.scss             # Reusable SCSS mixins
│   ├── _animations.scss         # Keyframes and animation utilities
│   └── _global.scss             # Global reset and base styles
└── styles.scss                  # SCSS entry point
```

## Languages

Supported: 🇬🇧 English (default) · 🇧🇷 Português · 🇷🇺 Русский

The language selector appears in the top navigation bar. All text content — navigation labels, section headings, bio paragraphs, project descriptions, and footer text — switches immediately on selection.

## Customizing content

- **Personal info**: edit `src/app/i18n/translations.ts`
- **Skills list**: edit the `categories` array in `src/app/components/skills/skills.component.ts`
- **Visual theme**: edit `src/styles/_variables.scss`

## Deploy

The project uses Angular SSR. For a static deploy (e.g. Netlify, Vercel, GitHub Pages), build and serve the `browser/` subfolder inside `dist/portfolio/`.

For static export without SSR, you can remove the `server` and `ssr` entries from `angular.json` and use `ng build` with `outputMode: "static"`.
