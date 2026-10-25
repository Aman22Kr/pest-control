# Pest Control - Enterprise Multi-Page Web Application

[![Deploy to GitHub Pages](https://github.com/Aman22kr/pest-control/actions/workflows/deploy.yml/badge.svg)](https://github.com/Aman22kr/pest-control/actions/workflows/deploy.yml)

A multi-page static web application and commercial pest management platform recreated from the reference website [https://pests-stop.com/](https://pests-stop.com/) under the new brand identity **Pest Control**, developed for GitHub user **Aman22kr**.

Built with **Vite**, **React 19**, **Tailwind CSS v4**, **React Router (HashRouter)**, **Lucide Icons**, and **Framer Motion**.

---

## 1. Project Overview & Brand Identity

- **Reference Website**: [https://pests-stop.com/](https://pests-stop.com/)
- **New Brand Identity**: **Pest Control**
- **GitHub Username**: [Aman22kr](https://github.com/Aman22kr)
- **Deployment Platform**: GitHub Pages via automated GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
- **Routing Engine**: `HashRouter` (`/#/`) ensuring deep links and browser refreshes work without server-side rewrite rules.

**Pest Control** delivers an integrated digital platform covering residential extermination, food-grade commercial Integrated Pest Management (IPM), thermal bed bug heat remediation, subterranean termite barriers, and an e-commerce DIY hardware store.

---

## 2. Key Pages & Features

1. **Home (`/`)**:
   - High-impact hero section with generated commercial photography.
   - 24/7 rapid extermination dispatch notice & clickable hotline `1-800-PEST-NOW`.
   - Dynamic service category tabs (Residential, Specialized, Commercial).
   - Interactive pest quick identifier.
   - 4-Step scientific Integrated Pest Management (IPM) methodology.
   - Blank YouTube Video placeholder (16:9 aspect ratio) with interactive simulation.
   - Quantified case studies and zero-recurrence client reviews.
   - Compact reusable advertisement banner placeholder.

2. **Services Catalog (`/services`) & Detail Pages (`/services/:id`)**:
   - Termite Inspection & Barrier Defense (Sentricon® in-ground grid).
   - Rodent Control & Chew-Proof Exclusion Carpentry.
   - Bed Bug Thermal Remediation (122°F–135°F lethal heat soak).
   - Commercial Facility Audits (HACCP, USDA, SQF audit compliance).
   - Quarterly Home Shield (30+ common crawling insects).
   - Emergency Stinging Insect & Yellow Jacket Extraction.
   - Multi-tier pricing packages with one-click booking triggers.

3. **Pest Identification Library (`/pests`) & Field Guides (`/pests/:id`)**:
   - Detailed biological records: Subterranean Termites, Bed Bugs, Norway Rats, German Cockroaches, Carpenter Ants, Yellow Jackets, Black Widow Spiders, and Mosquitoes.
   - Signs of infestation checklist, structural and health hazard breakdowns.
   - DIY Feasibility vs Professional Exterminator Verdict.
   - Cross-linked to matching service plans and DIY hardware tools.

4. **DIY Hardware Shop (`/shop`) & Product Details (`/shop/:id`)**:
   - Commercial locked rodent bait stations, pure copper exclusion mesh, ultrasonic deterrents, botanical perimeter concentrates, and termite detection stakes.
   - Category filtering, price/rating sorting, and real-time live search.
   - Detailed specifications, placement instructions, and handling precautions.

5. **Shopping Cart & Checkout (`/cart`)**:
   - Dynamic item quantity adjustment, subtotal, and free shipping logic (orders $49+).
   - Promo code validation (e.g., `PESTFREE10` for 10% discount).
   - Full shipping address form with instant order creation and persistent storage in `localStorage`.

6. **Instant Quote & Dispatch Calculator (`/quote`)**:
   - 4-step interactive estimator (Target Pest, Property Size & Foundation, Infestation Severity, Contact & Date Selection).
   - Dynamic cost modeling that recalculates in real-time as parameters change.
   - Automated generation of dispatch booking confirmation reference IDs.

7. **About Us (`/about`)**:
   - Mission statement, GreenPro IPM environmental commitment, EPA reduced-risk compliance, and bios for board-certified entomologists.

8. **Pest Advisory Blog (`/blog`) & Article View (`/blog/:id`)**:
   - Seasonal advisories (e.g., Autumn Rodent Proofing, Termite Swarms, Hotel Bed Bug Travel Protocols) with reading times, key takeaways, and an interactive discussion comment section.

9. **Contact & Dispatch (`/contact`)**:
   - Validated inquiry form, 24/7 hotline with direct call link, and headquarters information.
   - Interactive 5-digit ZIP code coverage verification tool (`ZipChecker`).

10. **Frequently Asked Questions (`/faq`)**:
    - Categorized accordion covering pet safety, chemical odors, warranties, and pre-visit preparation.

11. **Client Portal (`/saved`)**:
    - Centralized view of user bookmarks, saved quotes, and past hardware order logs stored in `localStorage`.

12. **Custom 404 Page (`*`)**:
    - Graceful error screen with links returning to the homepage and services directory.

---

## 3. Technology Stack

- **Runtime & Bundler**: Vite 8 with ES2022
- **UI Framework**: React 19 (JSX)
- **Styling**: Tailwind CSS v4 with custom font tokens and dark slate / emerald brand palette
- **Icons**: Lucide React
- **Animations**: Motion (`motion/react`) with full `prefers-reduced-motion` compliance
- **Routing**: `react-router-dom` with `HashRouter`
- **Client Persistence**: Browser `localStorage`

---

## 4. Project Directory Structure

```text
pest-control/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment for GitHub Pages
├── public/
├── src/
│   ├── assets/
│   │   └── images/             # Generated high-resolution commercial images
│   ├── components/
│   │   ├── AdBanner.tsx        # Compact reusable advertisement placeholder
│   │   ├── Footer.tsx          # Comprehensive brand footer
│   │   ├── Navbar.tsx          # Top Bar contract navigation
│   │   ├── VideoPlaceholder.tsx# Blank 16:9 YouTube video simulation
│   │   └── ZipChecker.tsx      # Postal code coverage lookup widget
│   ├── context/
│   │   └── AppContext.tsx      # Central state & localStorage persistence
│   ├── data/
│   │   ├── blogData.ts         # Articles and seasonal advisories
│   │   ├── pestsData.ts        # Entomological library & hazard profiles
│   │   ├── productsData.ts     # DIY store hardware products & specs
│   │   └── servicesData.ts     # Extermination services, steps, and pricing
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── BlogDetailPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── CartPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FaqPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PestDetailPage.tsx
│   │   ├── PestLibraryPage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   ├── QuotePage.tsx
│   │   ├── SavedPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   └── ServicesPage.tsx
│   ├── App.tsx                 # Route tree with HashRouter and ScrollToTop
│   ├── index.css               # Tailwind CSS v4 imports and theme configuration
│   └── main.tsx                # React root mount
├── .gitignore
├── index.html                  # Metadata, OpenGraph cards, Google Fonts
├── metadata.json               # AI Studio project configuration
├── package.json                # Dependencies and build scripts
├── package-lock.json           # Committed npm lockfile for npm ci
├── tsconfig.json
└── vite.config.ts              # Configured with base: './' for GitHub Pages
```

---

## 5. Local Development & Build Commands

### Prerequisites
- **Node.js**: Version 20.x or 22.x LTS
- **npm**: Version 10.x or higher

### Installation
Clone the repository and install dependencies using the committed lockfile:
```bash
git clone https://github.com/Aman22kr/pest-control.git
cd pest-control
npm ci
```

### Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### Generate Production Build
```bash
npm run build
```
This generates the optimized static assets in the `dist/` directory with relative asset paths (`base: './'`).

### Preview Production Build
```bash
npm run preview
```

---

## 6. LocalStorage Persistence & Limitations

The application uses browser `localStorage` for responsive client-side persistence under the following stable keys:
- `pest_control_cart`: Persists shopping cart items and quantities.
- `pest_control_bookmarks`: Stores bookmarked pests and service programs.
- `pest_control_quotes`: Stores submitted quote calculations and appointment requests.
- `pest_control_orders`: Stores completed DIY store orders and recipient details.
- `pest_control_recent_pests`: Tracks recently viewed pest profiles.

### Limitations:
- **Device-Specific**: Data stored in `localStorage` exists solely within the user's local browser instance and does not synchronize across separate devices.
- **Client-Side Simulation**: Checkout orders, quote bookings, and contact forms simulate real-world workflows and store demo records locally without charging real payment methods or emailing live servers.

---

## 7. GitHub Pages Deployment via GitHub Actions

The repository is pre-configured with an automated GitHub Pages deployment workflow at `.github/workflows/deploy.yml`.

### Step-by-Step Setup:
1. Push the codebase to your GitHub repository under user **`Aman22kr`**:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Pest Control web application"
   git branch -M main
   git remote add origin https://github.com/Aman22kr/pest-control.git
   git push -u origin main
   ```
2. In GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to the `main` branch will automatically trigger the workflow, running `npm ci`, `npm run build`, and publishing the `dist/` folder to GitHub Pages at:
   `https://aman22kr.github.io/pest-control/`

### Why `base: './'` and `HashRouter` are Essential:
- `base: './'` in `vite.config.ts` ensures that script and CSS bundle links are relative, resolving cleanly whether hosted at `username.github.io/` or under a subfolder `username.github.io/pest-control/`.
- `HashRouter` (`/#/...`) allows users to refresh any deep link (such as `/#/services/termite-defense`) without encountering GitHub Pages 404 errors.

---

## 8. Customization & Reusing the Project

- **Brand Name**: Update the brand wordmark in `metadata.json`, `index.html`, and `src/components/Navbar.tsx`.
- **Phone Number**: Change the 24/7 hotline across `src/components/Footer.tsx`, `src/pages/HomePage.tsx`, and `src/pages/ContactPage.tsx`.
- **Theme Colors**: Tailwind CSS v4 uses CSS theme tokens in `src/index.css` (`--font-sans`, `--font-display`, and standard emerald/slate Tailwind palette).
- **Ad Banner**: Modify `src/components/AdBanner.tsx` to alter the dimensions, copy, or styling of the compact sponsored slot.
