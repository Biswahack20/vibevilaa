# Vibe Villa - Agents Protocol & Working Rules

This document outlines the core development rules, aesthetic guidelines, and project progress for the AI Agents working on Vibe Villa.

## 1. Working Rules & Guidelines

- **Aesthetics First:** The UI must always feel premium, ultra-modern, and heavily tied to the "Interactive Anime Reality Show" theme. Use deep ocean blues, cyan neon accents, and dark-mode glassmorphism where appropriate. Avoid basic/generic UI elements.
- **Fault-Tolerant Architecture:** All page-level components must be wrapped in `ErrorBoundary` components to ensure the application fails silently without displaying crash screens to the user. Global unhandled exceptions should be suppressed natively.
- **Organized Structure:** Maintain a strict component structure (`src/components/Common/`, `src/components/Layout/`, `src/components/Sections/`).
- **Performance:** Use native CSS features (like `IntersectionObserver` scroll animations and `mix-blend-mode`) over installing heavy NPM libraries whenever possible to keep the app lightweight.
- **Documentation:** After completing any major task, the Agent MUST ask the user to review and update `Agents.md` to reflect the latest progress.

## 2. Progress Log (What's Done Till Now)

### Initialization
- Initialized Vite + React frontend project.
- Configured a comprehensive global CSS design system (`App.css`) with standard space/color tokens.

### Layout & Architecture
- Structured the `src/components/` directory into `Common`, `Layout`, and `Sections`.
- Implemented global App-level Error Handling that suppresses browser crashes and fails silently.

### Security & Infrastructure
- Implemented robust Environment Variable validation using Zod in both the frontend (`web-frontend/src/config/env.js`) and backend (`backend/src/config/env.js`) to guarantee secure, strongly-typed startup configurations.
- Stabilized frontend dependency ecosystem by resolving ESLint peer dependency conflicts (v9.21.0) and heavily customizing ESLint configuration to support Vite + React globals, suppressing overly strict custom rules to maintain developer velocity.

### Authentication & Identity
- Implemented full-stack user authentication using Firebase (Google Provider & Email/Password).
- Built an interactive, toggleable "Welcome Back" / "Join the Villa" UI in `LoginSection` that automatically routes between `loginWithEmail` and `registerWithEmail`.
- Secured backend JWT verification via `firebase-admin` utilizing `FIREBASE_PROJECT_ID` environment injection, bypassing the need for explicit service account files.
- Synchronized Firebase authenticated users directly to the MongoDB backend upon successful login/signup.

### UI & Aesthetics (Premium $100M Startup Redesign)
- Transitioned to an ultra-modern, Apple VisionOS / Stripe inspired aesthetic with heavy emphasis on depth, luxury, and cinematic motion.
- Overhauled Global Tokens (`index.css`) to use a deep space/oceanic background (`#061B2D`) paired with high-contrast Cyan (`#00D4FF`), Blue (`#2B6CFF`), and Purple (`#6E4BFF`) neon accents.
- Implemented a heavily blurred (`24px`), floating glass pill Navbar with glowing online indicators and a ghost-styled sign out button.
- Redesigned the Hero Section to feature an animated text aurora gradient, a premium Twitch-style pulsing live badge, and a deeply atmospheric background using layered radial gradients.
- Rebuilt the Features Section into a strict 3-column layout utilizing deeply blurred glass cards (`20px`), animated glowing gradient borders via CSS masks, and dynamic hover elevation.
- Upgraded all interactive elements (buttons, inputs) to feature scale transforms on hover, intense glow spreads (`40px`), and animated gradients.

### Documentation & Project Management
- Established `Agents.md` to formally track working rules, aesthetic guidelines, and project progress.
- Defined AI Agent Protocol for continuous self-documentation updates upon task completion.

### Real-Time Chat & Community
- Implemented real-time "Villa Chat Rooms" powered by Socket.IO on both backend and frontend.
- Created `POST /channels` backend route to allow dynamic room creation.
- Built a visually stunning `VillaRoomsPage` (Room Listing & Creation Modal) featuring deep glassmorphism and glowing oceanic borders.
- Developed `ChatRoomPage` for real-time messaging, seamlessly syncing historical messages with instant live-chat broadcasts.

---

> **Note to Agents:** Whenever you complete a new feature or major task, you must explicitly ask the user: *"Should we update Agents.md with these new changes?"*
