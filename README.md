# 🎨 Culinary Canvas

> **Elevating the Art of Dining.** A high-end, production-ready React application showcasing the pinnacle of modern web design, seamless animations, and editorial-grade user experiences.

![Project Banner](https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070)

---

## ✨ Features at a Glance

### 💎 Design & Aesthetics
- **Premium Glassmorphism**: Leveraging backdrop blurs and subtle reflections for a high-end feel.
- **"No-Line" Philosophy**: A clean, borderless design that prioritizes content and flow.
- **Editorial Typography**: Using a curated hierarchy of fonts for a sophisticated layout.

### 🎭 Animation Engine
- **GSAP + ScrollTrigger**: Powering all scroll-driven layout reveals and staggered cards.
- **Lenis Smooth Scroll**: Synchronized with the GSAP ticker for frame-perfect scrolling.
- **Framer Motion**: Handling complex UI state transitions, including the Auth Modal and Page Transitions.

### ⚡ Performance
- **Vite Powered**: Sub-second HMR and optimized production bundles.
- **FastImage Component**: Custom lazy-loading engine with skeleton placeholders.
- **Strategic Code Splitting**: Optimized for maximum Lighthouse scores.

### 🔐 Functionality
- **Auth Simulation**: Full JWT-based authentication flow with session persistence.
- **Multi-Screen Ecosystem**: 
  - 🏠 **Homepage**: Immersive category exploration.
  - 🔍 **Advanced Search**: Filter by cuisine, price, and rating.
  - 🍴 **Restaurant Suite**: In-depth menus and interactive carts.
  - 📦 **Order Tracking**: Visual status updates.
  - 🎁 **Promotions**: Dynamic deal discovery.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) + [TailwindCSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Google Material Symbols](https://fonts.google.com/icons)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the project**
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 📸 Core Components

### `DevDock`
A high-end floating navigation bar for rapid page switching during development and preview.

### `FastImage`
A performance-first image wrapper that prevents layout shifts and handles loading states gracefully.

### `AuthContext`
The global state manager for user security and session integrity.

---

> Built with ❤️ by Antigravity
