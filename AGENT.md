# AGENT.md — Portfolio Maintenance Guide

This document is intended for AI agents and developers maintaining or extending this project. Read it before making any changes.

---

## Project goal

This is **Bernardo Braga's personal portfolio** — a single-page application designed to sell his profile as a **Back-End Developer** specializing in Java, Spring Boot, PostgreSQL, Docker, Azure, Linux VPS, and OpenAI API integrations.

The primary goal is professional credibility. Every design and content decision must reinforce this goal.

---

## Stack

| Concern       | Choice                                              |
|---------------|-----------------------------------------------------|
| Framework     | Angular 21 (standalone components)                  |
| Language      | TypeScript (strict)                                 |
| Styling       | SCSS — custom, hand-written                         |
| i18n          | Custom signal-based service (`LanguageService`)     |
| Build         | Angular CLI / `@angular/build`                      |
| SSR           | Angular SSR (included but optional)                 |

### Hard rules

- **Never use Tailwind CSS.** All styles are written in SCSS.
- **Never use external i18n libraries** (ngx-translate, Angular i18n, etc.). The translation system is a plain TypeScript object + Angular signal service.
- **No NgModules.** All components are standalone.
- **No unnecessary abstractions.** Keep components simple and direct.

---

## Visual identity

Theme: **Matrix / terminal / backend** — professional, not gamer.

### Color palette (defined in `src/styles/_variables.scss`)

| Variable        | Value     | Role                              |
|-----------------|-----------|-----------------------------------|
| `$green-neon`   | `#00ff41` | Primary accent, glows, highlights |
| `$green-medium` | `#00cc33` | Secondary green                   |
| `$green-dim`    | `#009922` | Muted green                       |
| `$dark-bg`      | `#0d0d0d` | Section backgrounds               |
| `$darker-bg`    | `#0a0a0a` | Body / footer                     |
| `$card-bg`      | `#101410` | Terminal card backgrounds         |
| `$text-primary` | `#d4f5d4` | Main readable text                |
| `$text-secondary`| `#8ab08a`| Secondary / paragraph text        |
| `$text-muted`   | `#4a6a4a` | Line numbers, labels, decorations |

### Typography

- **Monospace** (`JetBrains Mono` → `Fira Code` → `Courier New`): headings, code, labels, buttons, terminal elements
- **Sans-serif** (`Inter` → system-ui): body text, paragraphs

### Design patterns

- Terminal card: dark background + top color bar + macOS-style dots
- Glow effects: subtle `box-shadow` / `text-shadow` with rgba green — never garish
- Grid background: `body::before` using `linear-gradient` — always visible but subtle
- Section titles use `// ` prefix (via `::before`) to resemble code comments
- All interactive elements have `:focus-visible` outlines (accessibility)

### What to avoid

- Bright backgrounds or white/light themes
- Neon pink, blue, or purple accents (this is not a generic cyberpunk theme)
- Large animations or particle effects
- Heavy JavaScript animations that hurt performance
- Any visual element that looks "gamer" instead of "professional developer"

---

## Internationalisation (i18n)

### How it works

1. All strings live in `src/app/i18n/translations.ts` as a plain TypeScript object keyed by language code (`'en' | 'pt' | 'ru'`).
2. `LanguageService` (`src/app/services/language.service.ts`) holds the active language as an Angular `signal`.
3. Components inject `LanguageService` and access translations via `this.langService.t` (a `computed` signal).
4. Language changes propagate reactively — no manual change detection needed.

### Supported languages

| Code | Language   | Flag | Country        |
|------|------------|------|----------------|
| `en` | English    | 🇬🇧  | United Kingdom |
| `pt` | Português  | 🇧🇷  | Brasil         |
| `ru` | Русский    | 🇷🇺  | Россия         |

### Adding a new language

1. Add a new key to the `Language` union type in `translations.ts`.
2. Add a new entry to the `translations` object with all required keys.
3. Add the new option to the `options` array in `language-selector.component.ts`.

### Updating text content

Edit **only** `src/app/i18n/translations.ts`. Never hardcode strings in component templates or TypeScript files.

---

## Sections

| Section    | Component           | Anchor ID   | Purpose                          |
|------------|---------------------|-------------|----------------------------------|
| Hero       | `HeroComponent`     | `#hero`     | Name, role, subtitle, CTAs       |
| About      | `AboutComponent`    | `#about`    | Bio paragraphs + stats sidebar   |
| Skills     | `SkillsComponent`   | `#skills`   | Categorized tech tag cards       |
| Projects   | `ProjectsComponent` | `#projects` | 3 featured project cards         |
| Contact    | `ContactComponent`  | `#contact`  | Email, GitHub, LinkedIn links    |
| Footer     | `FooterComponent`   | —           | Copyright + build info           |

Navigation uses smooth scroll to `#anchor` IDs — no Angular Router navigation involved.

---

## SCSS architecture

```
src/styles/
├── _variables.scss   ← colors, fonts, spacing, breakpoints
├── _mixins.scss      ← reusable mixins (responsive, glow, terminal-card, buttons…)
├── _animations.scss  ← keyframes + utility animation classes
└── _global.scss      ← reset, body, scrollbar, typography base, utility classes
```

`src/styles.scss` imports all four partials via `@use`.

Each component has its own `.scss` file. Component files `@use` variables and mixins via relative paths:

```scss
@use '../../../styles/variables' as *;
@use '../../../styles/mixins' as *;
```

### Adding new styles

- New shared patterns → add a mixin to `_mixins.scss`
- New color → add a variable to `_variables.scss`
- New animation → add a keyframe to `_animations.scss`
- Component-specific styles → stay in the component's own `.scss`

---

## Code conventions

- Angular standalone components with `inject()` (no constructor injection)
- Angular signals for reactive state (`signal`, `computed`, `effect`)
- `@for` and `@if` control flow (not `*ngFor` / `*ngIf`)
- No `NgModule`, no `RouterModule` in component imports
- Accessibility: `aria-label`, `aria-expanded`, `role`, `:focus-visible` on all interactive elements
- No inline styles in templates

---

## Adding a new project

1. Open `src/app/i18n/translations.ts`.
2. Add a new item to `projects.items` in **all three language objects** (`en`, `pt`, `ru`).
3. Each item needs: `title`, `description`, `stack` (string array), `link`.
4. Add a matching emoji to `projectIcons` in `projects.component.ts` (index-based).

---

## Maintenance rules

1. **Content changes** → edit `translations.ts` only.
2. **Visual changes** → edit SCSS variables/mixins first; override in components only if truly component-specific.
3. **New section** → create a new standalone component under `src/app/components/`, register it in `app.ts`, add its anchor ID and nav label to translations.
4. **Never break multilingual consistency** — if you update text in one language, update all three.
5. **Keep it a portfolio** — do not add blog, CMS, authentication, or backend calls. This is a static presentation site.
6. **Performance** — keep animations subtle and GPU-friendly (`transform`, `opacity`). Avoid `filter: blur()` on large areas.
7. **Test responsiveness** — always check mobile (375px), tablet (768px), and desktop (1280px) after visual changes.

---

## Personal information

| Field     | Value                                  |
|-----------|----------------------------------------|
| Name      | Bernardo Braga                         |
| Role      | Back-End Developer                     |
| Location  | Salvador, Brazil                       |
| Email     | bebraga12@gmail.com                    |
| GitHub    | https://github.com/Bebraga12           |
| LinkedIn  | https://www.linkedin.com/in/be-braga   |
| Primary   | Java / Spring Boot / PostgreSQL        |
| Open to   | Remote or on-site in Salvador          |

---

## What this portfolio must never become

- A generic "full-stack" or "front-end" portfolio — the focus is **back-end Java/Spring**
- A design showcase — design serves professional credibility, not creativity for its own sake
- A feature-bloated SPA — it is a single-page static presentation
- A project that requires back-end infrastructure to run
