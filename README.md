# kishan.github.io

Modern glass UI portfolio for Kishan Dharajiya, built with React, Vite, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

The build output is written to `dist/`. Static assets such as images, the resume PDF, and legacy project detail pages are copied into `dist/` automatically.

## Deployment

### GitHub Pages (recommended)

1. In repo **Settings → Pages**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
2. Push to `main` — the workflow builds `dist/` and publishes automatically.

Live URL: **https://kishan7785.github.io/kishan.github.io/**

To use `https://kishan7785.github.io/` instead, rename the repository to `kishan7785.github.io`.

### Vercel
