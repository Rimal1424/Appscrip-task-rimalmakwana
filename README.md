# 🛍️ mettä muse — Appscrip Frontend Task

A responsive e-commerce product listing page built with **Next.js 16**, **React 19**, and **TypeScript** as part of the Appscrip frontend developer assessment.

---

## 🚀 Live Demo

> Run locally with `npm run dev` → [http://localhost:3000](http://localhost:3000)

---

## ✨ Features

- **Product Listing** — Displays products fetched from [Fake Store API](https://fakestoreapi.com/products) with graceful fallback to mock data
- **Sidebar Filter** — Filter products by category on desktop; collapsible on mobile
- **Wishlist Toggle** — Heart icon on each product card to mark favourites
- **Responsive Design** — Mobile-first layout with a hamburger menu and slide-in navigation drawer
- **Accessible** — Semantic HTML, `aria-label` on all icon buttons, descriptive `alt` text on all images
- **SEO Ready** — Next.js `Metadata` API with proper `<title>` and `<meta description>` tags
- **CSS Modules** — Scoped component styles with no third-party CSS framework dependency

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.2 | React framework (App Router, SSR) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| TypeScript | ^5 | Static typing |
| [Lucide React](https://lucide.dev/) | ^1.7.0 | Icon library |
| CSS Modules | — | Component-scoped styling |
| ESLint | ^9 | Code linting |

---

## 📁 Project Structure

```
appscrip-task-rimal/
├── app/
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Home page — fetches products server-side
│   └── globals.css         # Global styles & design tokens
│
├── components/
│   ├── Header.tsx              # Top banner, logo, nav, mobile drawer
│   ├── Footer.tsx              # Newsletter, links, social & payment icons
│   ├── ProductListing.tsx      # Grid layout + filter toggle logic
│   ├── ProductCard.tsx         # Individual product card with wishlist
│   ├── SidebarFilter.tsx       # Category filter sidebar
│   ├── *.module.css            # Component-scoped CSS files
│
├── lib/
│   ├── api.ts              # Fetches from Fake Store API, falls back to mock
│   └── mockProducts.ts     # Offline/fallback product data
│
├── public/
│   ├── instagram-icon.svg
│   ├── linkedin-icon.svg
│   ├── google-pay-logo.svg
│   ├── paypal-logo.svg
│   └── apple-pay-logo.svg
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Rimal1424/Appscrip-task-rimalmakwana.git
cd appscrip-task-rimal

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (with hot reload) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🌐 API & Data

Products are fetched **server-side** from the [Fake Store API](https://fakestoreapi.com/products).

If the API is **unavailable or returns an error**, the app automatically falls back to local **mock product data** (`lib/mockProducts.ts`) — no crash, no blank page.

```
API Request → ✅ Success  → Render live products
           → ❌ Failure  → Render mock products (fallback)
```

---

## ♿ Accessibility

| Feature | Implementation |
|---|---|
| Image alt text | All `<Image>` components have descriptive `alt` props |
| Icon buttons | All icon-only buttons have `aria-label` attributes |
| Semantic HTML | `<header>`, `<nav>`, `<footer>`, `<main>`, `<h1>`–`<h4>` |
| Email input | `aria-label="Email address"` on newsletter input |
| Body scroll lock | Disabled when mobile drawer is open |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 768px` (Mobile) | Single-column grid, hamburger nav, hidden sidebar |
| `768px – 1024px` (Tablet) | Two-column grid, collapsible filters |
| `> 1024px` (Desktop) | Multi-column grid, visible sidebar filter |

---

## 👤 Author

**Rimal Makwana**  
Frontend Developer Assessment — Appscrip

---

## 📄 License

This project is created for assessment purposes only.
