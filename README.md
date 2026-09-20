# DialPulse Marketing Website

> **Master Technical Architecture, Product Context, and AI Agent Operating Guide**  
> **Repository:** Public Marketing & Product Website  
> **Target CRM Application:** [DialPulse CRM Repository](https://github.com/AtharvaNavlekar/CRM.git) (`app.dialpulse.com`)  
> **Framework:** React 19 • Vite • TypeScript • Tailwind CSS v4 • React Router 7  
> **Design Archetype:** Material Design 3 (M3) • Editorial High-Contrast Light  
> **Last Codebase Audit:** 2026-09-20  

---

## 1. Project Overview

### 1.1 What This Project Is
This repository contains the standalone, public-facing marketing and product website for **DialPulse**. It serves as the primary digital home, product documentation hub, solutions explorer, security briefing, and commercial catalog for the DialPulse platform.

Its primary operational objectives are:
1. **Educate Buyers & Teams:** Clearly articulate DialPulse’s unified approach to customer operations—combining lead management, softphone calling, omnichannel messaging, team governance, compliance, and AI workflows.
2. **Establish Architectural Trust:** Provide technical transparency into tenant isolation, role-based access control (RBAC), Do-Not-Call (DNC) compliance rules, and data privacy boundaries.
3. **Drive Qualified Conversions:** Guide prospects to book technical consultations ("Talk to DialPulse"), request demos, or initiate self-serve tenant onboarding ("Get Started Free").

### 1.2 What DialPulse Is
DialPulse is a **communication-first operational CRM**. Traditional CRMs act as passive databases—"contact graveyards" where sales reps manually log notes after switching across third-party softphones, personal messaging apps, and external spreadsheets. 

DialPulse reverses this paradigm by embedding active, compliant communication directly into the customer lifecycle:
- **In-Browser WebRTC Calling:** Instant softphone calling with automatic attribution, audio recording, and live dispositions.
- **Omnichannel Messaging:** SMS and WhatsApp communication with pre-approved templates, queued dispatches, and delivery status logs.
- **Deterministic Lead Operations:** Custom pipeline stages, deduplication, automatic distribution, and strict ownership rules.
- **Zero-Bypass Compliance Engine:** Pre-call and pre-message evaluation against DNC lists, local-time quiet hours, and frequency limits.
- **Tenant-Isolated AI:** In-pipeline transcription, contextual summarization, and disposition suggestions powered by isolated LLM instances that never mix tenant data.

---

## 2. Relationship with the DialPulse CRM Application

The DialPulse ecosystem operates across two fundamentally distinct software boundaries:

```
┌────────────────────────────────────────────────────────┐
│               DIALPULSE ECOSYSTEM                      │
├───────────────────────────┬────────────────────────────┤
│   Marketing Website       │   CRM Application          │
│   (This Repository)       │   (AtharvaNavlekar/CRM)    │
├───────────────────────────┼────────────────────────────┤
│ • Public / Unauthenticated│ • Private / Authenticated  │
│ • Static + Client-Side SPA│ • Full-Stack Operational   │
│ • Route: dialpulse.com    │ • Route: app.dialpulse.com │
│ • React 19 + Vite         │ • Node.js / DB / WebRTC    │
│ • Informs & Converts      │ • Executes Workflows       │
└───────────────────────────┴────────────────────────────┘
```

### Architectural & Security Invariants:
1. **Strict Decoupling:** The marketing website does **NOT** connect directly to the production CRM database, execute administrative mutations, or store private CRM API tokens.
2. **Redirect Boundary:** Links to CRM actions (such as "Sign In" or "Get Started Free") are external hyper-links directing users to `https://app.dialpulse.com/login` and `https://app.dialpulse.com/signup`.
3. **CRM as the Technical Source of Truth:** Every capability, data model, role hierarchy, and compliance behavior described on this marketing site must reflect the real-world operational logic of the CRM repository. Fictional features or unsupported APIs must never be documented here.

---

## 3. Technology Stack

| Layer | Tool / Library | Version | Role in Codebase |
| :--- | :--- | :--- | :--- |
| **Framework** | React | `^19.0.1` | Core UI rendering engine with Concurrent Mode |
| **Runtime** | Vite | `^6.2.3` | Ultra-fast development server and production bundler |
| **Language** | TypeScript | `~5.8.2` | Strict end-to-end type safety across configs and components |
| **Routing** | React Router | `^7.18.4` | Client-side routing (`BrowserRouter`, `Routes`, `Route`, `useParams`) |
| **Styling** | Tailwind CSS | `^4.1.14` | CSS-first configuration via `@tailwindcss/vite` and `@theme` |
| **UI Primitives** | Base UI / Shadcn | `^1.8.0` | Accessible primitives (`@base-ui/react`, `cva`, `clsx`, `tailwind-merge`) |
| **Motion** | Motion | `^12.23.24` | Fluid animations, transitions, and dropdown easing (`motion/react`) |
| **Icons** | Lucide React | `^0.546.0` | Unified vector icon set for communication, telephony, and data |
| **Typography** | Fontsource & Google | Dynamic | Plus Jakarta Sans, Roboto, JetBrains Mono, Geist Variable |

---

## 4. Repository Structure

```
/
├── index.html                      # Primary HTML entry point with preconnected fonts & default meta
├── package.json                    # Dependencies, scripts (dev, build, preview, lint), engines
├── tsconfig.json                   # TypeScript compiler configuration with @/* path aliases
├── vite.config.ts                  # Vite config with React plugin and Tailwind v4 plugin
├── components.json                 # Shadcn UI configuration file
├── metadata.json                   # AI Studio applet metadata & major capabilities
│
├── public/                         # Static assets, favicons, logos, and illustrations
│
├── src/
│   ├── main.tsx                    # Application bootstrap mounting App to root DOM
│   ├── App.tsx                     # Top-level route declarations & global Layout wrapper
│   ├── index.css                   # Global Tailwind v4 stylesheet with @theme custom variables
│   │
│   ├── config/                     # Central data configurations
│   │   ├── navigation.ts           # Header, Footer, and Mega-Menu navigational hierarchy
│   │   └── pricing.ts              # Commercial plans, tiers, feature comparisons, and add-ons
│   │
│   ├── content/                    # Content models and definitions
│   │   └── features.ts             # Core feature registry (leads, calls, messaging, teams, etc.)
│   │
│   ├── data/                       # Structured mock and domain datasets
│   │   ├── faqData.ts              # Categorized questions and answers for FAQ
│   │   ├── featuresData.ts         # Deep matrix specifications for features hub
│   │   └── resourcesData.ts        # Guides, articles, case studies, and resources catalog
│   │
│   ├── lib/                        # Reusable helpers and utility functions
│   │   ├── utils.ts                # cn() classnames merger (clsx + tailwind-merge)
│   │   ├── currency.ts             # Currency formatting utilities
│   │   ├── analytics/              # Analytics tracking stubs (trackEvent)
│   │   │   └── index.ts
│   │   └── seo/                    # Dynamic SEO hooks
│   │       └── useSEO.ts           # Client-side document.title and meta tags updater
│   │
│   ├── components/                 # Modular React components
│   │   ├── common/                 # Shared brand elements (Logo, badges)
│   │   ├── ui/                     # Primitives (Button, FloatingNav, etc.)
│   │   │   └── floating-navbar.tsx # Aceternity-derived floating capsule container
│   │   ├── layout/                 # Global layout architecture
│   │   │   ├── Layout.tsx          # Main page shell (Navbar + Outlet + Footer)
│   │   │   ├── Navbar.tsx          # Master navigation controller & trigger bar
│   │   │   ├── DesktopDropdown.tsx # Modular floating mega-menu dropdown panels
│   │   │   ├── MobileDrawer.tsx    # Mobile slide-out accordion navigation drawer
│   │   │   ├── Footer.tsx          # 3-layer global footer with directory & status
│   │   │   ├── FooterCTA.tsx       # Pre-footer conversion panel
│   │   │   └── ScrollToTop.tsx     # Route change scroll reset handler
│   │   │
│   │   ├── marketing/              # Homepage visual components (mockups, feature indexes)
│   │   ├── features/               # Features hub and lead management deep-dive components
│   │   ├── solutions/              # Problem-first explorer and workflow visualizers
│   │   ├── product/                # Product architecture diagrams and lifecycle models
│   │   ├── pricing/                # Pricing cards, toggle, decision helper, comparison table
│   │   ├── security/               # 15 technical security and compliance panels
│   │   ├── about/                  # Company story, philosophy, and architectural beliefs
│   │   ├── faq/                    # Searchable accordion list and category filters
│   │   ├── resources/              # Resource directory and filter tabs
│   │   ├── privacy/                # Privacy policy sections and sticky TOC
│   │   ├── terms/                  # Terms of service sections and sticky TOC
│   │   └── notfound/               # 404 error experience with contextual recovery links
│   │
│   └── pages/                      # Top-level route pages (App.tsx targets)
│       ├── Home.tsx                # Homepage ("Every customer conversation. One workspace.")
│       ├── Product.tsx             # Technical product overview & architecture matrix
│       ├── Features.tsx            # Features Hub matrix
│       ├── LeadManagementFeature.tsx# Dedicated deep dive for /features/leads
│       ├── FeatureDetail.tsx       # Dynamic template for /features/:id
│       ├── Solutions.tsx           # Problem-first solutions explorer (supports :slug)
│       ├── Resources.tsx           # Resources directory
│       ├── Security.tsx            # Technical security briefing & tenant isolation
│       ├── Pricing.tsx             # Commercial tiers & comparison
│       ├── About.tsx               # Philosophy, journey & operating principles
│       ├── Contact.tsx             # Solutions architecture contact inquiry form
│       ├── Privacy.tsx             # Comprehensive Privacy Policy
│       ├── Terms.tsx               # Terms of Service
│       ├── FAQ.tsx                 # Searchable FAQ page
│       ├── ComingSoonPage.tsx      # Reusable roadmap view for /blog, /guides, etc.
│       └── NotFound.tsx            # 404 error page
│
└── BRAIN/                          # Domain knowledge base and system context
    ├── BRAND-RULES.md              # Anti-slop constraints and copywriting guidelines
    ├── DESIGN-DNA.md               # Material 3 color tokens, typography scales, geometry
    ├── INVARIANTS.md               # Strict architectural boundaries and rules
    ├── KNOWN-ISSUES.md             # Active technical debt and integration checklists
    └── PROJECT-CONTEXT.md          # DialPulse CRM domain model and workflow taxonomy
```

---

## 5. Design System & Visual Architecture

DialPulse adopts a refined **Material Design 3 (M3)** structural philosophy paired with an **Editorial High-Contrast Light** aesthetic. 

### 5.1 Color Palette Tokens (`src/index.css`)
```css
/* Primary Communication Teal */
--color-primary: #00695C;              /* Deep Pine Teal: Actionable triggers & primary accents */
--color-on-primary: #FFFFFF;           /* High-contrast pure white text */
--color-primary-container: #CCE8E1;    /* Soft mint surface tint */
--color-on-primary-container: #00201B; /* Deep dark teal for container text */

/* Surface & Editorial Canvas */
--color-background: #FFFFFF;           /* Crisp clean canvas */
--color-surface: #F8FAF9;              /* Neutral tinted surface */
--color-surface-variant: #F1F5F4;      /* Elevated component container */
--color-on-surface: #0F172A;           /* High-contrast slate text */
--color-on-surface-variant: #475569;   /* Secondary descriptive text */

/* Outlines & Boundaries */
--color-outline: #94A3B8;              /* Focused borders */
--color-outline-variant: #E2E8F0;      /* Subtle dividers and card outlines */

/* Editorial Contrast (Code, Security & Technical Sections) */
--color-navy: #1E293B;                 /* Deep slate navy for terminal & architecture blocks */
--color-success: #10B981;              /* Verified compliance & online telemetry */
```

### 5.2 Typography System
- **Display & Headings:** `Plus Jakarta Sans`, sans-serif. Modern, clean, geometric sans with high legibility across dense dashboard mockups and editorial headlines.
- **Body & Controls:** `Roboto`, sans-serif. Balanced readability for body paragraphs, button labels, and metadata.
- **Technical & Code:** `JetBrains Mono`, monospace. Used for status indicators, timestamps, payload schemas, and compliance tags (`TENANT_ID`, `RBAC_ROLE`).

### 5.3 Geometric & Corner Radius Hierarchy
- **Buttons & Small Controls:** `rounded-xl` (12px) to `rounded-2xl` (16px).
- **Cards & Data Modules:** `rounded-2xl` (16px) to `rounded-3xl` (24px).
- **Capsules & Status Badges:** `rounded-full` (9999px pill).
- **Floating Navbar:** `rounded-[22px]` capsule with subtle 1px border and 24px backdrop blur.

---

## 6. Global Navigation Architecture

The global Header is built on a **floating, decoupled capsule architecture**:

```
Viewport Top (fixed top-3 sm:top-4 z-50)
┌──────────────────────────────────────────────────────────────────────────┐
│ [Logo] DialPulse   Product ▾   Solutions ▾   Resources ▾   Pricing       │
│                                                [Sign In] [Talk to Sales] │
└──────────────────────────────────────────────────────────────────────────┘
                           │ (on hover/click)
┌──────────────────────────────────────────────────────────────────────────┐
│  Floating DesktopDropdown / MobileDrawer                                 │
│  [Overview Link]  |  [Categorized Grid Matrix]  |  [Bottom Action Link]   │
└──────────────────────────────────────────────────────────────────────────┘
```

### 6.1 Strict Architectural Constraints
1. **No Hide-on-Scroll:** The navbar remains anchored in view as the user scrolls, providing immediate access to navigation and contact CTAs.
2. **Decoupled Dropdown Container:** The top navigation capsule (`FloatingNav`) and the dropdown menu (`DesktopDropdown`) are structurally decoupled. The dropdown renders in an independent floating panel with high-contrast shadows and clean borders, preventing claustrophobic overflow clipping.
3. **Exact Top-Level Items:**
   - **Brand Logo:** DialPulse vector emblem with "COMMUNICATION CRM" pill.
   - **Product ▾:** Opens Product mega-menu.
   - **Solutions ▾:** Opens Solutions mega-menu.
   - **Resources ▾:** Opens Resources mega-menu.
   - **Pricing:** Direct link to `/pricing`.
   - **Sign In:** Direct link to `https://app.dialpulse.com/login`.
   - **Talk to DialPulse:** Primary action button leading to `/contact`.
4. **Forbidden Top-Level Items:** Never place *About, Contact, Security, FAQ, Privacy, Terms, Careers*, or individual feature/solution links directly on the top-level bar. These must reside within their respective dropdown menus or the footer.

---

## 7. Global Footer Architecture

The footer (`src/components/layout/Footer.tsx`) provides a comprehensive operational directory organized into three distinct layers:

### Layer 1: Conversion Panel (`FooterCTA`)
- Headline: *"Have a workflow worth talking about?"*
- Supporting Copy: *"Explore DialPulse or start a conversation about the way your team works."*
- Actions: Dual buttons routing to `/product` and `/contact`.

### Layer 2: Five-Column Directory
- **Column 1 — Brand & Status:** Company mission, direct action buttons, and a live telemetry beacon:
  `SYSTEMS OPERATIONAL • 99.98% UPTIME`
- **Column 2 — Product:** Links to Overview, Features Hub, Leads, Calls, Messaging, Tickets, Teams, Reports, Imports/Exports, Compliance, AI, and Administration.
- **Column 3 — Solutions:** Problem-first playbooks (Lead Operations, Follow-up Control, Customer Communication, Sales Operations, Visibility, Compliance, AI Workflows).
- **Column 4 — Resources:** Directory, FAQ, and roadmap preview badges (Blog, Guides, Case Studies, Compare).
- **Column 5 — Company & Trust:** About, Contact, Careers, Security, Privacy Policy, and Terms of Service.
- **Mobile Responsive Accordion:** Automatically collapses into smooth interactive accordions on screens smaller than `1024px` (`lg`).

### Layer 3: Legal & Copyright Bar
- Copyright notice, direct links to `/privacy` and `/terms`.

---

## 8. Page & Route Architecture

The site uses React Router 7 (`src/App.tsx`). Below is the complete routing table:

| Route Path | Component | Current Status | Page Purpose & Key Sections |
| :--- | :--- | :--- | :--- |
| `/` | `Home.tsx` | **Implemented** | Primary landing page: Interactive Hero mockup, metric highlights, editorial context story, feature index, brand banner, role grid, compliance engine mockup, contact form. |
| `/product` | `Product.tsx` | **Implemented** | Deep platform architectural overview: 4 core pillars, data model diagram, interactive module explorer, lifecycle progression, personas, architecture matrix. |
| `/features` | `Features.tsx` | **Implemented** | Complete capabilities catalog: Features hero, directory, workflow journey, 10 feature spotlights, role matrix, philosophy CTA. |
| `/features/leads` | `LeadManagementFeature.tsx` | **Implemented** | Dedicated lead management deep-dive: Hero, at-a-glance cards, customer story, information details, pipeline stages, ownership roles, compliance safeguards, interactive lifecycle. |
| `/features/:id` | `FeatureDetail.tsx` | **Implemented** | Dynamic detail page for registered capabilities (`calls`, `messaging`, `tickets`, `teams`, `reports`, `compliance`, `ai`, `administration`). |
| `/solutions` | `Solutions.tsx` | **Implemented** | Problem-first solutions explorer: Workflow visualizer, 8 operational problem categories, situational playbooks, role-based workflows, before/after comparison. |
| `/solutions/:slug` | `Solutions.tsx` | **Implemented** | Deep-links directly to a specific solution category in `SolutionExplorer`. |
| `/resources` | `Resources.tsx` | **Implemented** | Resources directory: Category filters, featured guides, resource directory, roadmap preview state, newsletter signup. |
| `/security` | `Security.tsx` | **Implemented** | Comprehensive technical security briefing: 15 modules covering tenant isolation, RBAC, session auth, audit logs, communication safeguards, and AI privacy. |
| `/pricing` | `Pricing.tsx` | **Implemented** | Commercial architecture: Monthly/annual toggle, 4 plans (Core, Pro, Business, Enterprise), decision helper, feature comparison table, add-ons, buyer trust FAQ. |
| `/about` | `About.tsx` | **Implemented** | Mission, beliefs, and architectural history: Problem breakdown, 10 core beliefs, product journey, architectural reasoning, audience profiles. |
| `/contact` | `Contact.tsx` | **Implemented** | "Talk to DialPulse" page: Workflow inquiry form, technical demo requests, and security audit inquiry cards. |
| `/privacy` | `Privacy.tsx` | **Implemented** | Formal Privacy Policy: Sticky table of contents, 9 comprehensive legal and data handling sections. |
| `/terms` | `Terms.tsx` | **Implemented** | Formal Terms of Service: Sticky table of contents, 11 platform usage and commercial sections. |
| `/faq` | `FAQ.tsx` | **Implemented** | Searchable FAQ: Filterable category navigation, instant search filter, expandable accordion answers. |
| `/blog` | `ComingSoonPage.tsx` | **Planned / In Roadmap** | Editorial and perspective blog placeholder with roadmap description. |
| `/guides` | `ComingSoonPage.tsx` | **Planned / In Roadmap** | Telecalling and CRM operational playbooks placeholder. |
| `/case-studies` | `ComingSoonPage.tsx` | **Planned / In Roadmap** | Customer case studies and scale benchmarks placeholder. |
| `/compare` | `ComingSoonPage.tsx` | **Planned / In Roadmap** | Architectural comparison vs fragmented tools placeholder. |
| `/careers` | `ComingSoonPage.tsx` | **Planned / In Roadmap** | Engineering and operations careers opening placeholder. |
| `*` | `NotFound.tsx` | **Implemented** | High-utility 404 page with contextual recovery links and navigation search suggestions. |

---

## 9. Content Rules & Anti-Slop Principles

To maintain absolute credibility with enterprise buyers and developers, all site content must adhere to strict guidelines:

### 9.1 Banned "AI-Slop" Patterns
- **No Fictional Testimonials:** Never create fake client quotes, fabricated personas (e.g., *"John D., VP of Sales at TechCorp"*), or arbitrary 5-star ratings.
- **No Fabricated Metrics:** Never state unsubstantiated numbers (e.g., *"Used by 10,000+ businesses"* or *"Boosted revenue by 430%"*). Use concrete architectural truths (e.g., *"100% Tenant Database Isolation"*, *"Zero-Bypass DNC Validation"*).
- **No Generic SaaS Buzzwords:** Avoid empty marketing fluff like *"supercharge"*, *"unleash"*, *"empower"*, or *"paradigm shift"*. Write with the precision of a systems architect explaining operational software.
- **No Visual Clichés:** Never use rainbow gradients, glowing neon borders in light mode, arbitrary card-in-card nesting, or low-contrast gray text on tinted backgrounds.

### 9.2 Truthfulness in Technical & Security Claims
1. **Public Pricing:** Public commercial pricing is parameterized in `src/config/pricing.ts`. As public packaging undergoes operational finalization, plans display `"TBD"` or `"Contact Sales"`. AI agents must **never** hardcode fake subscription prices (e.g., "$29/mo") without explicit human instruction.
2. **Contact Form Submissions:** The form on `/contact` currently utilizes client-side simulated state (`setTimeout`). Future integrations must connect to an authenticated backend webhook or API endpoint before claiming persistent delivery.
3. **Certifications vs. Architectural Safeguards:** Architectural safeguards (tenant isolation, AES-256 encryption at rest, TLS 1.3 in transit, role-based authorization) are fully operational. Formal compliance audits (such as SOC 2 Type II or ISO 27001) must be framed as enterprise roadmap benchmarks or audit-ready capabilities, never as falsely certified credentials.

---

## 10. Development Workflow & Commands

### 10.1 Local Development
```bash
# Start the local Vite development server (Port 3000, Host 0.0.0.0)
npm run dev

# Run full TypeScript validation without emitting code
npm run lint

# Compile production bundles to dist/
npm run build

# Preview the production build locally
npm run preview

# Clean build artifacts
npm run clean
```

### 10.2 Networking Constraints
- **Port 3000 Only:** The platform reverse proxy routes external traffic exclusively through port `3000`. Dev servers must bind to `--port=3000 --host=0.0.0.0`. Do not attempt to rebind to other ports.

---

## 11. Instructions for Future AI Coding Agents

When tasked with modifying, fixing, or extending this codebase, adhere strictly to the following execution sequence:

### 11.1 Before Modifying Any Code
1. **Inspect Existing Files:** Never guess paths or file contents. Use `view_file` on `src/App.tsx`, `src/config/navigation.ts`, and target components.
2. **Check for Reusable Components:** DialPulse contains an extensive library of verified components in `src/components/`. Check existing modules before inventing new ones.
3. **Respect Established Architecture:** Do not alter the floating navbar capsule structure, change route paths, or remove existing page layouts without explicit user instruction.

### 11.2 While Editing Code
1. **Maintain M3 & Editorial Tokens:** Use Tailwind classes corresponding to the established color tokens (`text-slate-900`, `text-[#00695C]`, `bg-[#F8FAF8]`, `border-slate-200/80`).
2. **Preserve SEO Meta Synchronization:** When adding or updating a page, always call `useSEO()` with descriptive titles, meta descriptions, and canonical URLs.
3. **Enforce Accessibility:** Ensure buttons have clear focus rings (`focus-visible:ring-2 focus-visible:ring-[#00695C]`), interactive elements include `aria-*` attributes, and color contrast passes WCAG AA standards.
4. **Desktop-First Precision, Mobile-First Code:** Verify all layouts scale down gracefully across responsive breakpoints (`sm:`, `md:`, `lg:`).

### 11.3 Adding a New Page
1. Create the page component in `src/pages/YourPage.tsx`.
2. Implement `useSEO()` with accurate title, description, and canonical path.
3. Register the route in `src/App.tsx` under `<Route path="/" element={<Layout />}>`.
4. If the page belongs to the global hierarchy, register its label, route, and description in `src/config/navigation.ts`.
5. Run `compile_applet` to verify that there are zero TypeScript compilation or bundling errors.

---

## 12. Implementation Status & Roadmap

| Module / Page | Status | Notes & Operational State |
| :--- | :--- | :--- |
| **Global Floating Header** | ✅ Complete | Fixed capsule with Aceternity foundation, mega-menus, and mobile drawer. |
| **Global 3-Layer Footer** | ✅ Complete | Pre-footer CTA, 5-column directory with mobile accordion, and legal bar. |
| **Homepage (`/`)** | ✅ Complete | Hero, interactive mockups, metrics, role grid, and compliance section. |
| **Product Overview (`/product`)**| ✅ Complete | 4 core pillars, interactive architecture matrix, and lifecycle journey. |
| **Features Hub (`/features`)** | ✅ Complete | Comprehensive matrix with 10 feature spotlights and role matrix. |
| **Lead Management (`/features/leads`)** | ✅ Complete | Deep-dive feature showcase with pipeline stages and compliance rules. |
| **Feature Details (`/features/:id`)** | ✅ Complete | Dynamic detail template rendering core feature specifications. |
| **Solutions (`/solutions`, `/:slug`)** | ✅ Complete | Problem-first explorer with interactive slug routing and comparison. |
| **Security Briefing (`/security`)** | ✅ Complete | 15 technical modules detailing tenant isolation and data boundaries. |
| **Commercial Pricing (`/pricing`)** | ✅ Complete | Plan cards, monthly/annual toggle, comparison matrix, and FAQ. |
| **Company & Beliefs (`/about`)** | ✅ Complete | 10 beliefs, product philosophy, and architectural journey. |
| **Contact Sales (`/contact`)** | ✅ Complete (Simulated Form) | Client-side simulation active; ready for backend webhook endpoint. |
| **Legal (`/privacy`, `/terms`)** | ✅ Complete | Comprehensive policies with sticky tables of contents. |
| **Searchable FAQ (`/faq`)** | ✅ Complete | Real-time search query filtering and category navigation. |
| **Resources Hub (`/resources`)** | ✅ Complete | Categorized directory, featured guide, and roadmap preview states. |
| **Blog (`/blog`)** | 🔵 In Roadmap | Clean coming-soon status page with roadmap context. |
| **Guides (`/guides`)** | 🔵 In Roadmap | Clean coming-soon status page with roadmap context. |
| **Case Studies (`/case-studies`)**| 🔵 In Roadmap | Clean coming-soon status page with roadmap context. |
| **Comparison Matrix (`/compare`)** | 🔵 In Roadmap | Clean coming-soon status page with roadmap context. |
| **Careers (`/careers`)** | 🔵 In Roadmap | Clean coming-soon status page with roadmap context. |
| **Backend Form Webhook** | 🟡 Planned | Future integration to persist `/contact` inquiries into CRM intake queue. |

---

*This document serves as the permanent operating manual and architectural standard for the DialPulse Marketing Website.*
