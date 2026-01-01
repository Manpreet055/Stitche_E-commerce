# Stitche — Handcrafted Slow-Fashion E‑commerce (React + Vite)

A modern, responsive e‑commerce storefront focused on slow fashion and craftsmanship. Built with React, Vite, Tailwind CSS and Flowbite UI primitives. The project includes product discovery, search, product detail pages, cart & purchase UI, user authentication pages, user profile management, and a simple orders interface. Routes are lazy‑loaded, animations use Framer Motion, and the UI is accessible and mobile‑first.

---

Table of contents

- Project overview
- Key features (with explanations)
- Project structure & important files
- Tech stack & dependencies
- Local setup (install, run, build)
- Environment variables
- How to extend / backend integration notes
- Contributing & support
- License

---

Project overview
Stitche is a client‑side React application scaffolded with Vite. It provides the visual and UX building blocks for a small e‑commerce store emphasizing handcrafted garments and sustainability. The repository contains pages, UI components, layout elements, hooks, animations, and utilities needed for browsing products, searching, viewing product details, managing a cart, and basic account screens.

---

Key features (what the project can do and where)

- Home / Hero
  - src/layout/home/HeroContent.jsx
    - Animated hero copy and link into the product listing. Uses Framer Motion for entrance animations.

- Categories preview
  - src/layout/home/CategoryCards.jsx
    - Horizontal category cards for quick navigation to category pages. Uses images in assets/categories.

- Product listing and pagination
  - src/hooks/useProducts.jsx
    - Encapsulates fetching product lists with pagination, sorting and filtering options.
  - Services (referenced)
    - src/services/fetchProductsData.js
      - Centralized place to call backend APIs to retrieve product lists (limit, page, filters).
  - src/pages/Products.jsx (lazy loaded in main.jsx)
    - Products grid and product card layout (uses animation helpers from src/Animations/ListStagger.js).

- Product search
  - src/pages/SearchPage.jsx
    - Displays search results, handles loading / empty states and renders ProductCard for each result.
    - Optimized search functionality using debouncing to minimize API calls while providing real-time suggestion feedback.

- Product detail pages
  - src/pages/ProductDetailsPage.jsx (lazy loaded)
  - Key components:
    - src/layout/productDetails/ProductBasicDetails.jsx
      - Shows title, brand, price, rating, description, stock and basic actions.
    - src/layout/productDetails/ProductRating.jsx
      - Displays rating visuals.
    - src/layout/productDetails/CustomerReview.jsx
      - Reviews section shell with "Write Review" CTA (no external review service required).

- Cart action components:
  - src/layout/cart/AddToCartButton.jsx
    - Add-to-cart functionality with synchronized frontend state and real-time backend persistence..
  - src/ui/BuyButton.jsx
    - Buy and checkout flow with real-time order creation, cart validation, and user-specific order mapping..

- Cart & checkout UI
  - src/pages/Cart.jsx (lazy loaded)
    - Cart listing, quantity controls and checkout actions.
  - src/ui/Counter.jsx
    - Quantity increment/decrement UI used across cart and product pages.

- Authentication & protected routes
  - src/pages/LoginPage.jsx, src/pages/SignupPage.jsx (lazy loaded)
    - Secure authentication system using JWT with role-based access control and protected routes.
  - src/utils/ProtectedRoute.jsx
    - Guards routes that require authentication (client‑side session expected).

- User profile & avatar preview
  - src/pages/UserProfileForm.jsx (lazy loaded)
    - User profile management with editable personal details, address data, and profile image upload.
  - src/layout/user/UserProfilePreview.jsx
    - Avatar preview and form fields, built with react-hook-form integration and Flowbite components.

- Orders
  - src/layout/orders/Orders.jsx (lazy loaded)
    - Order management system with user-specific order creation, detailed order history, and real-time status updates.
    - Supports viewing order details including items, quantities, pricing, discounts, and delivery charges.
    - Order cancellation flow with backend status updates reflected instantly in the UI.

- About & static content
  - src/pages/About.jsx
    - Brand story, mission, core values and CEO profile with visual layout.

- Animations
  - src/Animations/ListStagger.js
    - Reusable Framer Motion container/item variants used across lists and cards.

- Theme & UI
  - Flowbite-react initialization: .flowbite-react/init.tsx
  - Tailwind + Flowbite plugin configured in Vite
  - index.css for project styling utilities

- App bootstrap & routing
  - src/main.jsx
    - Router and lazy route definitions (Products, Search, Contact, About, ProductDetails, Cart, Login, Signup, Orders, UserProfileForm).
  - src/App.jsx
    - App shell, header, footer and route outlet

- Tooling & config
  - vite.config.js — Vite config with Flowbite & Tailwind plugins.
  - eslint.config.js — ESLint rules & plugin configuration.

---

Project structure (high level)

- src/
  - assets/ — images & static media (category thumbnails, product-related images, brand imagery).
  - pages/ — route pages (Homepage.jsx, Products.jsx, SearchPage.jsx, ProductDetailsPage.jsx, Cart.jsx, LoginPage.jsx, SignupPage.jsx, About.jsx, UserProfileForm.jsx, ContactPage.jsx, ErrorPage.jsx)
  - layout/ — reusable layout sections (home, productDetails, cart, user, orders)
  - ui/ — small UI primitives (Counter, BuyButton, etc.)
  - hooks/ — custom hooks (useProducts.jsx)
  - services/ — API call utilities (fetchProductsData and other network helpers)
  - Animations/ — Framer Motion variants and helpers
  - utils/ — small helpers (capitalizeLetter, ProtectedRoute, etc.)
- index.html — HTML entry
- .flowbite-react/ — flowbite-react theming init
- vite.config.js, package.json, eslint.config.js

Note: If any filenames differ slightly, use the repo file explorer to locate exact paths. The README above references the main components and utilities currently in the repository.

---

Tech stack & major dependencies

- React (functional components + hooks)
- Vite (fast dev server + build)
- Tailwind CSS (utility-first styling)
- Flowbite-React (component primitives)
- Framer Motion (animations)
- react-router-dom (routing)
- react-hook-form (forms)
- lucide-react (icons)
- ESLint (code linting)

Check package.json for the exact dependency versions used.

---

Local setup

1. Clone
   git clone https://github.com/Manpreet055/Stitche_E-commerce.git
   cd Stitche_E-commerce

2. Install dependencies
   npm install
   or
   pnpm install
   or
   yarn

3. Start dev server
   npm run dev
   - The app runs on the Vite dev server (by default http://localhost:5173). Vite server options in vite.config.js allow LAN access and tunnels.

4. Build for production
   npm run build
   npm run preview

5. Lint (if configured)
   npm run lint

---

Environment variables / Backend integration
This repository contains frontend UI and client logic for an e‑commerce site. To fully enable product data, user accounts, cart persistence and orders, connect the frontend to a backend API. Typical environment variables to add in a .env file (create at repo root):

- VITE_BASE_URI=https://api.example.com

The repository references a services/fetchProductsData utility. Ensure it is configured to call the backend API URL (VITE_BASE_URI) or adjust service implementations to match the backend endpoints. Where "Buy" or checkout UI is present, wire the Buy button to your checkout flow and payment provider (Stripe, PayPal, etc.).

---

Deployment

- Build the app (npm run build) and serve the dist folder via any static hosting provider (Netlify, Vercel, GitHub Pages, Surge).
- If using server-side features (auth, payments, orders), deploy API services separately and set environment variables accordingly.

---

Troubleshooting

- If Vite fails with Flowbite/Tailwind plugin errors, confirm plugin versions and that tailwind.config.js includes Flowbite paths.
- Lint errors: run npm run lint to see rule violations. The ESLint config enforces some conventions and may require adjusting unused variable rule exceptions.

---

Contributing

- Fork the repository, create a feature branch, make changes, and open a pull request with a clear description.
- Keep components small, add unit tests where applicable, and follow existing styling patterns (Tailwind classes + Flowbite components).

---

Contact

- For questions about usage or further README adjustments, open an issue in the repository or send PRs with improvements.

---

License

- MIT License

Copyright (c) 2026 Manpreet055

---

Status & TODO (suggested)

- ✅ Core UI for products, search, product details, cart, and user profile
- ✅ Backend APIs for products, authentication, orders, and cart fully integrated
- ⬜ Add unit, integration, and end-to-end tests with CI/CD pipeline
- ⬜ Enhance README with badges, screenshots, and live demo link
- ⬜ Real-time chat system using WebSockets with user-specific message persistence and instant UI updates.

Thank you ..
