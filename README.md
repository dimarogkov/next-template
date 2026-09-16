<div align="center">

# ▲ Next Template

**A component library that doubles as a playground.**
Every primitive gets its own doc page with a live preview and byte-accurate source — and every core pattern
(forms, data fetching, state) ships in **two competing flavors** side by side, so you can actually compare them
instead of taking someone's word for it.

[**🚀 Live Demo**](https://next-template-blue.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

</div>

## ✨ Why this exists

Most templates ship one opinion per problem. This one ships two, on purpose:

| Pattern          | Flavor A                    | vs. | Flavor B                    |
| ---------------- | --------------------------- | :-: | --------------------------- |
| Form validation  | `react-hook-form` + **Yup** | 🆚  | `react-hook-form` + **Zod** |
| Data fetching    | **TanStack Query**          | 🆚  | **RTK Query**               |
| State management | **Redux Toolkit**           | 🆚  | **Zustand**                 |

Same UI, same data, two implementations — pick whichever page reads closer to how you'd actually write it.

## 🧩 30 components, fully documented

Every atom in `src/components/atoms` has a matching page (under `app/documentation`) with a live preview plus
**Code / Demo / Usage** tabs, highlighted with `shiki` and sourced straight from `src/constants/code` — kept
byte-accurate to the real component, not hand-copied and left to rot.

> Accordion · Alert · Avatar · Badge · Blockquote · Breadcrumb · Button · Card · Carousel · Checkbox · Dropdown ·
> Input / InputPassword · Label · Loader · Modal · Pagination · PinInput · Progress · Radio · Select · Separator ·
> SimpleLink · Switch · Tabs · Text · Textarea · Title · Toast · Tooltip · Reorder (drag-and-drop, via `framer-motion`)

## 🛠️ Built with

| Concern              | Library                                                         |
| -------------------- | --------------------------------------------------------------- |
| Framework            | Next.js 15 (App Router) + React 19 + TypeScript                 |
| Styling              | Tailwind CSS v4 — CSS-first config, no `tailwind.config.js`     |
| Forms                | react-hook-form + `yup` / `zod` resolvers                       |
| Data fetching        | TanStack Query, Axios, RTK Query                                |
| State management     | Redux Toolkit, Zustand                                          |
| Animation            | Framer Motion, Embla Carousel, `ogl` (WebGL background)         |
| Icons                | lucide-react                                                    |
| Code highlighting    | shiki                                                           |
| Linting / formatting | `next lint` (ESLint) + Prettier + `prettier-plugin-tailwindcss` |

## 🚀 Quick start

```bash
git clone https://github.com/dimarogkov/next-template.git
cd next-template
npm install
npm run dev
```

Requires Node.js 18.20.2+ (a recent LTS is recommended). No secrets, no `.env` to fill in — it just runs.

## 📜 Scripts

| Command          | What it does                              |
| ---------------- | ----------------------------------------- |
| `npm run dev`    | Start the dev server                      |
| `npm run build`  | Type-check and produce a production build |
| `npm run start`  | Serve the production build                |
| `npm run lint`   | Run `next lint` over the project          |
| `npm run format` | Format the whole repo with Prettier       |

## 🗂️ Project structure

```bash
├── app
│   └── documentation
└── src
    ├── components
    │   ├── atoms
    │   ├── molecules
    │   └── organisms
    ├── constants
    │   └── code
    ├── form-validation
    │   ├── yup
    │   └── zod
    ├── hooks
    ├── providers
    ├── root
    ├── services
    │   └── todo
    ├── store
    │   ├── redux-toolkit
    │   └── zustand
    ├── types
    │   └── interfaces
    └── utils
```

`app/documentation` mirrors the sidebar: components pages, data-fetching pages (TanStack Query / RTK Query),
form-validation pages (Yup / Zod), and store pages (Redux Toolkit / Zustand) each live under their own route group.

## 🧭 Path aliases

Configured in `tsconfig.json`.

| Alias                | Resolves to              |  Sub-paths  |
| -------------------- | ------------------------ | :---------: |
| `@components/*`      | `src/components/*`       |     ✅      |
| `@form-validation/*` | `src/form-validation/*`  |     ✅      |
| `@services/*`        | `src/services/*`         |     ✅      |
| `@store/*`           | `src/store/*`            |     ✅      |
| `@interfaces/*`      | `src/types/interfaces/*` |     ✅      |
| `@constants`         | `src/constants`          | folder only |
| `@code`              | `src/constants/code`     | folder only |
| `@hooks`             | `src/hooks`              | folder only |
| `@providers`         | `src/providers`          | folder only |
| `@root`              | `src/root`               | folder only |
| `@utils`             | `src/utils`              | folder only |

---

<div align="center">

Built as a personal sandbox for trying out the Next.js ecosystem — fork it, gut it, or just steal a component.

</div>
